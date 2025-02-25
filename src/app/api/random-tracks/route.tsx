import { NextResponse } from "next/server";

const client_id = process.env.SPOTIFY_CLIENT_ID!;
const client_secret = process.env.SPOTIFY_CLIENT_SECRET!;

const basic = Buffer.from(`${client_id}:${client_secret}`).toString("base64");
const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`;
const PLAYLIST_ENDPOINT = `https://api.spotify.com/v1/playlists/37i9dQZF1DXcBWIGoYBM5M/tracks`;

const getAccessToken = async () => {
  const response = await fetch(TOKEN_ENDPOINT, {
    method: "POST",
    headers: {
      Authorization: `Basic ${basic}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      grant_type: "refresh_token",
      refresh_token: process.env.SPOTIFY_REFRESH_TOKEN!,
    }),
  });

  return response.json();
};

export async function GET(req: Request) {
  const url = new URL(req.url);
  const page = parseInt(url.searchParams.get("page") || "1", 10);

  const { access_token } = await getAccessToken();

  const res = await fetch(PLAYLIST_ENDPOINT, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
    cache: "no-store",
  });

  if (!res.ok) {
    return NextResponse.json(
      { error: "Failed to fetch playlist data" },
      { status: res.status }
    );
  }

  const data = await res.json();

  // Tính toán slice dựa trên trang hiện tại
  const itemsPerPage = 50; // Số bài hát trên mỗi trang
  const startIndex = (page - 1) * itemsPerPage + 3; // Trang 1: slice từ 0 đến 52, Trang 2: slice từ 53 đến 103
  const endIndex = startIndex + itemsPerPage;

  // Lấy bài hát trong khoảng startIndex đến endIndex
  const tracks = data.items.slice(startIndex, endIndex).map((item: any) => item.track);

  return NextResponse.json(tracks);
}