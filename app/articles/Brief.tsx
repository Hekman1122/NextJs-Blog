import Link from "next/link";

interface BriefProps {
  title: string;
  dateString: string;
  id: string;
}
export default function Brief({ title, dateString, id }: BriefProps) {
  return (
    <div className="w-full flex items-center gap-4 text-priText hover:bg-priBg duration-200 transition-all p-5 rounded-md">
      <p className="w-36 font-bold tracking-wider text-sm">{dateString}</p>
      <h2 className="font-bold text-lg tracking-widest">
        <Link href={`/articles/${id}`}>{title}</Link>
      </h2>
    </div>
  );
}
