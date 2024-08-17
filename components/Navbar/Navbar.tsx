import Image from "next/image";
import logo from "@/public/images/icon-1.svg";
import { BsFacebook, BsInstagram, BsLine, BsTwitter } from "react-icons/bs";
import { Button } from "@/components/ui/button";
import MenuBar from "./MenuBar";
import Link from "next/link";
export default function Navbar() {
  return (
    <header>
      <nav className="py-3 items-center gap-8 px-6 md:px-12 hidden lg:flex border-b-2">
        {/* icon */}
        <Image src={logo} alt="logo" width={36} height={36} />
        {/* Link */}
        <ul className="flex justify-end items-center gap-12 flex-1">
          <li className="text-priText font-semibold hover:text-neutral-800 duration-100 transition-all hover:scale-105">
            <Link href="/">首頁</Link>
          </li>
          <li className="text-priText font-semibold hover:text-neutral-800 duration-100 transition-all hover:scale-105">
            <Link href="/articles">文章列表</Link>
          </li>
          <li className="text-priText font-semibold hover:text-neutral-800 duration-100 transition-all hover:scale-105">
            <Link href="/">關於作者</Link>
          </li>
        </ul>
        <ul className="flex justify-center items-center gap-8">
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
      </nav>
      {/* mobile */}
      <nav className="flex justify-between px-8 pt-4 pb-3 items-center lg:hidden">
        {/* icon */}
        <Button variant="ghost" size="icon">
          <Image src={logo} alt="logo" width={48} height={48} priority />
        </Button>
        <MenuBar />
      </nav>
    </header>
  );
}
