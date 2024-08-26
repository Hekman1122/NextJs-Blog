import ArticlesContainers from "@/components/articles/ArticlesContainer";
import HeroContainer from "@/components/Hero/HeroContainer";
import SideContainer from "@/components/SideSection/SideContainer";
import PaginationBar from "@/components/paginationBar";
import { getArticleByPage } from "@/lib/paginationHelper";

type SearchParams = {
  page?: string;
};
type PageProps = {
  searchParams: SearchParams;
};

export default async function Home({ searchParams }: PageProps) {
  const { page } = searchParams;
  let { currentPage, articlePerPage, totalArticles, maxPage } =
    await getArticleByPage(page);
  return (
    <main>
      <HeroContainer />
      <div className="grid grid-cols-1 xl:grid-cols-6 gap-4 lg:gap-8 mt-8">
        <ArticlesContainers
          currentPage={currentPage}
          articlePerPage={articlePerPage}
        />
        <SideContainer />
      </div>
      <PaginationBar
        currentPage={currentPage}
        totalArticles={totalArticles}
        maxPage={maxPage}
      />
    </main>
  );
}
