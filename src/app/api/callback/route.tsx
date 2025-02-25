import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";

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
    console.log("Refresh Token:", data.refresh_token);

    // Đường dẫn đến tệp .env.local
    const envPath = path.join(process.cwd(), ".env.local");

    // Đọc nội dung tệp hiện tại
    let envContent = fs.readFileSync(envPath, "utf-8");

    // Tìm và thay thế giá trị của SPOTIFY_REFRESH_TOKEN nếu đã tồn tại
    if (envContent.includes("SPOTIFY_REFRESH_TOKEN")) {
      envContent = envContent.replace(
        /SPOTIFY_REFRESH_TOKEN=.*/g,
        `SPOTIFY_REFRESH_TOKEN=${data.refresh_token}`,
      );
    } else {
      // Nếu biến SPOTIFY_REFRESH_TOKEN chưa tồn tại, thêm mới vào cuối file
      envContent += `\nSPOTIFY_REFRESH_TOKEN=${data.refresh_token}`;
    }

    // Ghi lại nội dung mới vào tệp .env.local
    fs.writeFileSync(envPath, envContent);

    return NextResponse.json({
      message: "Refresh Token saved successfully!",
      access_token: data.access_token,
      refresh_token: data.refresh_token,
    });
  }

  return NextResponse.json({ error: "Failed to get refresh token" });
}
