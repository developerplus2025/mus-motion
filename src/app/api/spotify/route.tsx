import { NextRequest, NextResponse } from "next/server";

const client_id = process.env.SPOTIFY_CLIENT_ID!;
const client_secret = process.env.SPOTIFY_CLIENT_SECRET!;
const refresh_token = process.env.SPOTIFY_REFRESH_TOKEN!;

const basic = Buffer.from(`${client_id}:${client_secret}`).toString("base64");
const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`;
const TRACK_ENDPOINT = `https://api.spotify.com/v1/tracks/`;

// Lấy access token từ Spotify API
const getAccessToken = async () => {
  const response = await fetch(TOKEN_ENDPOINT, {
    method: "POST",
    headers: {
      Authorization: `Basic ${basic}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      grant_type: "refresh_token",
      refresh_token,
    }),
  });

  return response.json();
};

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const id = searchParams.get("id");

  if (!id) {
    return NextResponse.json(
      { error: "Track ID is required" },
      { status: 400 },
    );
  }

  const { access_token } = await getAccessToken();

  const trackInfo = await fetch(`${TRACK_ENDPOINT}${id}`, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });

  if (!trackInfo.ok) {
    return NextResponse.json(
      { error: "Failed to fetch track data" },
      { status: trackInfo.status },
    );
  }

  const data = await trackInfo.json();

  return NextResponse.json({
    trackName: data.name,
    album: {
      name: data.album.name,
      release_date: data.album.release_date,
      total_tracks: data.album.total_tracks,
      album_type: data.album.album_type,
      images: data.album.images.map(
        (images: { height: number; width: number; url: string }) => ({
          url: images.url,
          height: images.height,
          width: images.width,
        }),
      ), // Danh sách các hình ảnh của album
    },
    artist: data.artists.map(
      (artist: { name: string; id: string; href: string }) => ({
        name: artist.name,
        id: artist.id, // Thuộc tính id của nghệ sĩ
        href: artist.href, // Liên kết tới trang Spotify của nghệ sĩ
      }),
    ),
    popularity: data.popularity, // Độ phổ biến của bài hát (0 - 100)
    duration_ms: data.duration_ms, // Thời lượng bài hát tính theo milliseconds
    explicit: data.explicit, // Có explicit content hay không
    external_urls: data.external_urls.spotify, // URL Spotify của bài hát
    preview_url: data.preview_url, // Link preview bài hát (nếu có)
    is_playable: data.is_playable, // Có thể phát bài hát không
    track_number: data.track_number, // Số thứ tự của bài hát trong album
  });
}
