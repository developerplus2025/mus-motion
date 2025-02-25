import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const code = request.nextUrl.searchParams.get("code");
  const client_id = process.env.SPOTIFY_CLIENT_ID;
  const client_secret = process.env.SPOTIFY_CLIENT_SECRET;
  const redirect_uri = process.env.SPOTIFY_REDIRECT_URI;

  const params = new URLSearchParams();
  params.append("grant_type", "authorization_code");
  params.append("code", code || "");
  params.append("redirect_uri", redirect_uri || "");
  params.append("client_id", client_id || "");
  params.append("client_secret", client_secret || "");

  // Trao đổi Authorization Code để lấy Access Token và Refresh Token
  const response = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: params.toString(),
  });

  const data = await response.json();

  if (data.refresh_token) {
    // In refresh token ra để lưu lại
    console.log("Refresh Token:", data.refresh_token);

    // Lưu refresh token hoặc xử lý theo yêu cầu của bạn
    return NextResponse.json({
      message: "Tokens received!",
      access_token: data.access_token,
      refresh_token: data.refresh_token,
    });
  }

  return NextResponse.json({ error: "Failed to get refresh token" });
}
