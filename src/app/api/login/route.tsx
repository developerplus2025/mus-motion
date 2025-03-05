import { NextResponse } from "next/server";

export async function GET() {
  const client_id = process.env.SPOTIFY_CLIENT_ID;
  const redirect_uri = process.env.SPOTIFY_REDIRECT_URI || "";

  const scopes = "user-read-private user-read-email";

  // URL chuyển hướng đến trang cấp quyền của Spotify
  const authUrl = `https://accounts.spotify.com/authorize?response_type=code&client_id=${client_id}&scope=${encodeURIComponent(
    scopes,
  )}&redirect_uri=${encodeURIComponent(redirect_uri)}`;

  return NextResponse.redirect(authUrl);
}
