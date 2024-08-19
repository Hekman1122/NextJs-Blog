import { prisma } from "@/lib/prisma";
import Article from "./Article";
import { Post } from "@prisma/client";
export default async function ArticlesContainers() {
  let articles = await prisma.post.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
  return (
    <article className="xl:col-span-4 ">
      {articles
        ? articles.map((article) => {
            return (
              <div className="w-full" key={article.id}>
                <Article article={article} />
              </div>
            );
          })
        : ""}
    </article>
  );
}
