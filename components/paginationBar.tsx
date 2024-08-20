import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
type PaginationProps = {
  currentPage: number;
  totalArticles: number;
  maxPage: number;
};
export default function PaginationBar({
  currentPage,
  totalArticles,
  maxPage,
}: PaginationProps) {
  return (
    <Pagination className="py-6">
      <PaginationContent>
        {currentPage > 1 && (
          <PaginationItem>
            <PaginationPrevious href={`/?page=${currentPage - 1}`} />
          </PaginationItem>
        )}
        {currentPage - 2 >= 1 && (
          <PaginationItem>
            <PaginationLink href={`/?page=${currentPage - 2}`}>
              {currentPage - 2}
            </PaginationLink>
          </PaginationItem>
        )}
        {currentPage - 1 >= 1 && (
          <PaginationItem>
            <PaginationLink href={`/?page=${currentPage - 1}`}>
              {currentPage - 1}
            </PaginationLink>
          </PaginationItem>
        )}
        <PaginationItem>
          <PaginationLink href={`/?page=${currentPage}`} isActive>
            {currentPage}
          </PaginationLink>
        </PaginationItem>
        {currentPage <= maxPage - 1 && (
          <PaginationItem>
            <PaginationLink href={`/?page=${currentPage + 1}`}>
              {currentPage + 1}
            </PaginationLink>
          </PaginationItem>
        )}
        {currentPage <= maxPage - 2 && (
          <PaginationItem>
            <PaginationLink href={`/?page=${currentPage + 2}`}>
              {currentPage + 2}
            </PaginationLink>
          </PaginationItem>
        )}
        {currentPage < maxPage && (
          <PaginationItem>
            <PaginationNext href={`/?page=${currentPage + 1}`} />
          </PaginationItem>
        )}
      </PaginationContent>
    </Pagination>
  );
}
