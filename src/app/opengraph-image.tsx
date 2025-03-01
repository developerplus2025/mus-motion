import { ImageResponse } from "next/og";
import { headers } from "next/headers";

// Route segment config
export const runtime = "edge";

// Image metadata
export const alt = "The next generation of audio collaboration.";
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

// Image generation
export default async function Image() {
  // Font
  const headersList = headers();
  const host = headersList.get("host");
  const protocol = headersList.get("x-forwarded-proto") || "http";
  const path = headersList.get("x-invoke-path") || ""; // nếu bạn muốn đường dẫn, nếu không x-invoke-path có thể không có

  const currentUrl = `${protocol}://${host}`;
  let imagePreview = "";
  if (currentUrl === "https://phamviettuan.vercel.app/") {
    imagePreview = "Viết Tuấn";
  } else if (currentUrl === "https://nguyendangbinh.vercel.app/") {
    imagePreview = "Đăng Bình";
  } else if (currentUrl === "https://localhost:3000/") {
    imagePreview = "Đăng Bình";
  } else {
    imagePreview = "Anh Yêu Em Như Vòi Xịt Đít";
  }

  const geistLight = fetch(
    new URL("./font/Geist-Bold.woff", import.meta.url),
  ).then((res) => res.arrayBuffer());

  return new ImageResponse(
    (
      // ImageResponse JSX element
      <div
        style={{
          textAlign: "center",
          fontSize: 98,
          background: "black",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          gap: "2rem",
        }}
      >
        {imagePreview}
      </div>
    ),
    // ImageResponse options
    {
      // For convenience, we can re-use the exported opengraph-image
      // size config to also set the ImageResponse's width and height.
      ...size,
      fonts: [
        {
          name: "Geist",
          data: await geistLight,
          style: "normal",
          weight: 600,
        },
      ],
    },
  );
}
