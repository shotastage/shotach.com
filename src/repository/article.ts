import { Article } from "@/entities/article";

export async function getArticles(): Promise<Article> {
  const res = await fetch("https://shota-folio.microcms.io/api/v1/blogs", {
    method: "GET",
    headers: {
      "X-MICROCMS-API-KEY": `${process.env.API_KEY}`,
    },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}