// app/api/refresh_token/route.ts

import { NextResponse } from "next/server";

const client_id = process.env.SPOTIFY_CLIENT_ID; // Đảm bảo bạn có client_id trong biến môi trường
const client_secret = process.env.SPOTIFY_CLIENT_SECRET;

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const refresh_token = searchParams.get("refresh_token");

  if (!refresh_token) {
    return NextResponse.json(
      { error: "Refresh token is missing" },
      { status: 400 },
    );
  }

  const authOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization:
        "Basic " +
        Buffer.from(client_id + ":" + client_secret).toString("base64"),
    },
    body: new URLSearchParams({
      grant_type: "refresh_token",
      refresh_token: refresh_token,
    }),
  };

  try {
    const response = await fetch(
      "https://accounts.spotify.com/api/token",
      authOptions,
    );

    if (!response.ok) {
      throw new Error("Failed to refresh token");
    }

    const data = await response.json();
    const { access_token, refresh_token: new_refresh_token } = data;

    return NextResponse.json({
      access_token,
      refresh_token: new_refresh_token || refresh_token, // Giữ refresh token nếu không có refresh mới
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Error refreshing token" },
      { status: 500 },
    );
  }
}
