import { prisma } from "@/lib/prisma";
import Brief from "./Brief";
export default async function Articles() {
  const allArticles = await prisma.post.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
  return (
    <div className="min-h-[90vh]">
      <h1 className="text-2xl font-bold tracking-wider my-4 py-4 border-b-2 text-priText">
        文章列表
      </h1>
      {allArticles.map((article) => {
        const { id, title, createdAt } = article;
        return (
          <div key={id}>
            <Brief
              title={title}
              dateString={createdAt.toLocaleDateString()}
              id={id}
            />
          </div>
        );
      })}
    </div>
  );
}
