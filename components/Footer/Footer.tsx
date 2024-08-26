import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaTwitterSquare,
  FaGithubSquare,
} from "react-icons/fa";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <div className="mt-6 mx-auto bg-priBg py-4 md:py-8 text-priText w-full px-10">
      <div className=" flex flex-wrap items-center justify-between gap-4 md:flex-nowrap">
        <div>
          <h2 className="mb-2 text-xl font-semibold tracking-wide">
            喵克部落格
          </h2>
          <p className="text-sm">© 2023 喵克 Powered by Next.js</p>
        </div>

        <div className="flex items-center justify-start gap-4 md:gap-8">
          <Button variant="ghost">
            <FaFacebookSquare size={18} />
          </Button>

          <Button variant="ghost">
            <FaInstagramSquare size={18} />
          </Button>
          <Button variant="ghost">
            <FaTwitterSquare size={18} />
          </Button>
          <Button variant="ghost">
            <FaGithubSquare size={18} />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
