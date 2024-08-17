import { Button } from "@/components/ui/button";
import { AiOutlineMenu } from "react-icons/ai";
import { BsFacebook, BsInstagram, BsLine, BsTwitter } from "react-icons/bs";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Link from "next/link";

export default function MenuBar() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">
          <AiOutlineMenu size={18} />
        </Button>
      </SheetTrigger>
      <SheetContent side="left">
        <SheetHeader>
          <SheetTitle>
            <h2 className="text-2xl pt-2 text-pr">喵克部落格</h2>
          </SheetTitle>
          <SheetDescription>
            <p className="text-sm font-semibold text-priText py-2 text-start">
              這個部落格是我的旅行紀錄和分享，希望能啟發他人一同探索城市和鄉村之美，並體驗不同文化的奇妙之處。
            </p>
          </SheetDescription>
        </SheetHeader>
        <ul className="flex flex-col justify-center items-center text-lg gap-8 w-full my-8 px-4 h-96">
          <li className="text-priText font-semibold ">
            <Link href="/">首頁</Link>
          </li>
          <li className="text-priText font-semibold ">
            <Link href="/articles">文章列表</Link>
          </li>
          <li className="text-priText font-semibold ">
            <Link href="/">關於作者</Link>
          </li>
        </ul>
        <SheetFooter>
          <ul className="flex justify-center items-center gap-8 py-4">
            <Button variant="outline" size="icon">
              <BsFacebook size={20} className="text-priText" />
            </Button>
            <Button variant="outline" size="icon">
              <BsInstagram size={20} className="text-priText" />
            </Button>
            <Button variant="outline" size="icon">
              <BsLine size={20} className="text-priText" />
            </Button>
            <Button variant="outline" size="icon">
              <BsTwitter size={20} className="text-priText" />
            </Button>
          </ul>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
