// Cài đặt OpenAI SDK trước: `npm install openai`
import OpenAI from "openai";

const openai = new OpenAI({
  baseURL: "https://api.deepseek.com",
  apiKey: process.env.NEXT_PUBLIC_DEEPSEEK_API_KEY || "", // Sử dụng biến môi trường
});

async function fetchDeepSeekResponse() {
  try {
    const completion = await openai.chat.completions.create({
      messages: [{ role: "system", content: "You are a helpful assistant." }],
      model: "deepseek-chat",
    });

    return completion.choices[0]?.message?.content || "No response";
  } catch (error) {
    console.error("Error fetching response:", error);
    return "Error occurred";
  }
}

// export default function ChatComponent() {
//   const handleClick = async () => {
//     const response = await fetchDeepSeekResponse();
//     console.log(response);
//   };

//   return <button onClick={handleClick}>Gửi</button>;
// }
