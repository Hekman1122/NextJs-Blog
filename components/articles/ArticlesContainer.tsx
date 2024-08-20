import { prisma } from "@/lib/prisma";
import Article from "./Article";
type ArticleContainerProps = {
  currentPage: number;
  articlePerPage: number;
};
export default async function ArticlesContainers({
  currentPage,
  articlePerPage,
}: ArticleContainerProps) {
  const articles = await prisma.post.findMany({
    skip: (currentPage - 1) * articlePerPage,
    take: articlePerPage,
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
