import ReactPaginateLib from 'react-paginate';

// CJS/ESM interop: same issue as react-select — Node.js SSR gets the module object
const ReactPaginate = ((ReactPaginateLib as unknown as { default: unknown }).default ?? ReactPaginateLib) as typeof ReactPaginateLib;

export interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export function Pagination({ currentPage, totalPages, onPageChange }: PaginationProps) {
  if (totalPages <= 1) return null;

  return (
    <div className="flex justify-end mt-6">
      <ReactPaginate
        pageCount={totalPages}
        forcePage={currentPage - 1}
        onPageChange={({ selected }) => onPageChange(selected + 1)}
        previousLabel="← Prev"
        nextLabel="Next →"
        pageRangeDisplayed={3}
        marginPagesDisplayed={1}
        containerClassName="flex items-center gap-1 text-sm"
        pageClassName="hidden"
        pageLinkClassName=""
        previousClassName=""
        previousLinkClassName="px-3 py-1.5 border border-gray-300 rounded hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed"
        nextClassName=""
        nextLinkClassName="px-3 py-1.5 border border-gray-300 rounded hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed"
        breakLabel=""
        breakClassName="hidden"
        activeClassName=""
        disabledClassName="opacity-40 pointer-events-none"
        renderOnZeroPageCount={null}
      />
      <span className="ml-3 flex items-center text-sm text-gray-500">
        Page {currentPage} of {totalPages}
      </span>
    </div>
  );
}
