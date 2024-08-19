import { Post } from "@prisma/client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
type ArticleProps = {
  article: Post;
};

export default async function Article({ article }: ArticleProps) {
  const { id, title, summary, categories, content, cover, createdAt } = article;
  function truncate(str: string) {
    if (str.length > 140) {
      return str.slice(0, 140) + " ......";
    }
    return str;
  }
  return (
    <section className="flex flex-col items-center lg:items-start lg:flex-row gap-8 border-2 px-4 py-6 mb-12 lg:mb-8 rounded-sm">
      <Image
        src={cover}
        alt={title}
        width={430}
        height={430}
        className="rounded-md shadow-md md:w-10/12 md:h-96 lg:w-[430px] lg:h-72"
      />
      <div className="flex flex-col gap-5 w-full px-4 sm:px-10 lg:px-2">
        <h2 className="font-semibold text-priText text-xl">{title}</h2>
        <div className="flex justify-between items-center py-3 border-priBg border-b-4">
          <ul className="flex gap-4 items-center">
            {categories.map((cate) => {
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
            {createdAt.toLocaleDateString()}
          </p>
        </div>
        <p className="text-base sm:text-sm font-semibold text-priText leading-7 tracking-wider indent-4">
          {truncate(summary)}
        </p>
        <Button className="bg-priBg text-sm font-bold tracking-wider">
          閱讀更多 ...
        </Button>
      </div>
    </section>
  );
}
