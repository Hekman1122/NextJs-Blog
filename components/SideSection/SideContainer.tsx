import Image from "next/image";
import cat from "@/public/images/cat.png";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

export default function SideContainer() {
  return (
    <aside className="xl:col-span-2 flex items-center flex-col gap-4 mx-auto max-w-2xl">
      {/* 個人資訊 */}
      <div className="w-full flex flex-col gap-4 items-center">
        <Image
          src={cat}
          alt="avatar"
          priority
          width={200}
          height={200}
          className="rounded-full shadow-lg w-56 h-56 lg:w-52 lg:h-52"
        />
        <h2 className="rounded-2xl bg-priBg text-priText text-center w-5/6 m-auto text-lg font-semibold py-2 shadow-sm">
          喵克的旅遊手札
        </h2>
        <p className="w-5/6 text-base sm:text-sm font-semibold tracking-widest lg:tracking-wider text-priText leading-8 indent-6 my-4">
          對城市風格和鄉村文化同樣著迷，喜歡在繁華的城市中漫遊，探索現代建築、當地美食和多元文化，同時熱愛沉浸在寧靜的鄉村景致中，體驗悠閒的生活方式，探訪農田、村莊和傳統手工藝品工坊。
          <br />
          這個部落格是我的旅行紀錄和分享，希望能啟發他人一同探索城市和鄉村之美，並體驗不同文化的奇妙之處。
        </p>
      </div>
      {/* 搜尋列表 */}
      <div className="w-5/6 flex flex-col gap-4 items-center mt-6 bg-priBg py-6 px-4 rounded-lg shadow-md">
        <h2 className="rounded-2xl text-priText text-center py-1 w-3/4 m-auto text-lg font-semibold">
          搜尋文章
        </h2>
        <div className="flex justify-center items-center w-full gap-4">
          <Input type="text" placeholder="搜尋..." />
          <Button variant="outline" className="basis-24">
            送出
          </Button>
        </div>
      </div>

      {/* 熱門文章 */}
      <div className="w-full flex flex-col gap-4 items-center mt-12">
        <h2 className="rounded-2xl text-priText text-center w-3/4 m-auto text-lg font-semibold">
          熱門文章
        </h2>
        <ul className="w-5/6 flex flex-col gap-8 items-start mx-auto">
          <li className="flex justify-center items-center gap-6 lg:gap-3">
            <Badge>No.1</Badge>
            <p className="text-sm tracking-wide text-priText font-semibold">
              迷失在日本貓島：一個與貓咪共處的夢幻之旅
            </p>
          </li>
          <li className="flex justify-center items-center gap-6 lg:gap-3">
            <Badge>No.2</Badge>
            <p className="text-sm tracking-wide text-priText font-semibold">
              享譽國際，台北美食之旅
            </p>
          </li>
          <li className="flex justify-center items-center gap-6 lg:gap-3">
            <Badge>No.3</Badge>
            <p className="text-sm tracking-wide text-priText font-semibold">
              探索峇里島:島嶼和熱帶風情
            </p>
          </li>
        </ul>
      </div>
    </aside>
  );
}
