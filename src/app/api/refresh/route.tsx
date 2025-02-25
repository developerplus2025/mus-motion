import { NextResponse } from "next/server";

export async function GET() {
  const client_id = process.env.SPOTIFY_CLIENT_ID;
  const client_secret = process.env.SPOTIFY_CLIENT_SECRET;
  const refresh_token = process.env.SPOTIFY_REFRESH_TOKEN;

  const params = new URLSearchParams();
  params.append("grant_type", "refresh_token");
  params.append("refresh_token", refresh_token || "");
  params.append("client_id", client_id || "");
  params.append("client_secret", client_secret || "");

  // Yêu cầu Spotify cấp lại Access Token
  const response = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: params.toString(),
  });

  const data = await response.json();

  if (data.access_token) {
    // Trả về access token mới
    console.log("Refresh Token:", data.refresh_token);
    return NextResponse.json({
      access_token: data.access_token,
    });
  }

  return NextResponse.json({ error: "Failed to refresh token" });
}
