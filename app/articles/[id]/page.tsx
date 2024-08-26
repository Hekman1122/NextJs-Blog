import SideContainer from "@/components/SideSection/SideContainer";
import { Badge } from "@/components/ui/badge";
import { prisma } from "@/lib/prisma";
import Image from "next/image";

interface ArticlePageProps {
  params: {
    id: string;
  };
}
export default async function ArticlePage({ params }: ArticlePageProps) {
  const { id } = params;
  const article = await prisma.post.findUnique({
    where: {
      id,
    },
  });

  return (
    <div className="grid grid-cols-1 xl:grid-cols-6 gap-4 lg:gap-8 my-8 py-4">
      {/* Articles */}
      {article && (
        <div className="w-full xl:col-span-4 flex flex-col gap-6">
          <h2 className="font-semibold text-priText text-3xl tracking-wider">
            {article.title}
          </h2>
          <div className="flex justify-between items-center py-3 border-priBg border-b-4 pb-4">
            <ul className="flex gap-4 items-center">
              {article.categories.map((cate) => {
                return (
                  <li key={cate}>
                    <Badge className="bg-priBg px-3 py-1 text-priText">
                      # {cate}
                    </Badge>
                  </li>
                );
              })}
            </ul>
            <p className="font-semibold text-sm text-priText">
              {article.createdAt.toLocaleDateString()}
            </p>
          </div>
          {/* image */}
          <Image
            src={article.cover}
            alt={article.title}
            width={450}
            height={300}
            className="w-full rounded-lg h-[420px] object-cover my-6"
          />
          <p className="text-base md:text-lg font-semibold text-priText leading-7 tracking-wider indent-4">
            {article.summary}
          </p>
        </div>
      )}
      <SideContainer />
    </div>
  );
}
