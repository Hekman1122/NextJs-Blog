import ArticlesContainers from "@/components/articles/ArticlesContainer";
import HeroContainer from "@/components/Hero/HeroContainer";
import SideContainer from "@/components/SideSection/SideContainer";
export default function Home() {
  return (
    <main>
      <HeroContainer />
      <div className="grid grid-cols-1 xl:grid-cols-6 gap-4 lg:gap-8 my-8">
        <ArticlesContainers />
        <SideContainer />
      </div>
    </main>
  );
}
