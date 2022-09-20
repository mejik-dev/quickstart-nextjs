import { MicrogenClient } from "microgen-v3-sdk";

export const microgen = new MicrogenClient({
  apiKey: process.env.NEXT_PUBLIC_MICROGEN_API_KEY,
  url: "https://api.stagingv3.microgen.id",
});
