import React from "react";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";

/**
 * Pagination Component Props
 */
export interface PaginationProps {
  /**
   * Current page (1-indexed)
   */
  currentPage: number;

  /**
   * Total number of pages
   */
  totalPages: number;

  /**
   * Page change handler
   */
  onPageChange: (page: number) => void;

  /**
   * Number of page buttons to show
   * @default 5
   */
  siblingCount?: number;

  /**
   * Whether to show first/last buttons
   * @default true
   */
  showFirstLast?: boolean;

  /**
   * Additional CSS classes
   */
  className?: string;
}

/**
 * Pagination Component
 *
 * @component
 * @description
 * A pagination component for navigating through pages of content.
 *
 * @example
 * ```tsx
 * import { Pagination } from 'drk-ui-components';
 *
 * <Pagination
 *   currentPage={5}
 *   totalPages={20}
 *   onPageChange={(page) => console.log(page)}
 * />
 * ```
 */
const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
  siblingCount = 1,
  showFirstLast = true,
  className = "",
}) => {
  const generatePageNumbers = () => {
    const pages: (number | string)[] = [];
    const leftSibling = Math.max(currentPage - siblingCount, 1);
    const rightSibling = Math.min(currentPage + siblingCount, totalPages);

    if (showFirstLast && leftSibling > 2) {
      pages.push(1);
      if (leftSibling > 3) pages.push("...");
    } else {
      for (let i = 1; i < leftSibling; i++) {
        pages.push(i);
      }
    }

    for (let i = leftSibling; i <= rightSibling; i++) {
      pages.push(i);
    }

    if (showFirstLast && rightSibling < totalPages - 1) {
      if (rightSibling < totalPages - 2) pages.push("...");
      pages.push(totalPages);
    } else {
      for (let i = rightSibling + 1; i <= totalPages; i++) {
        pages.push(i);
      }
    }

    return pages;
  };

  const pages = generatePageNumbers();

  return (
    <nav className={`flex items-center gap-1 ${className}`} aria-label="Pagination">
      {/* Previous Button */}
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="px-3 py-2 rounded-lg border border-gray-300 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        aria-label="Previous page"
      >
        <BiChevronLeft />
      </button>

      {/* Page Numbers */}
      {pages.map((page, index) => {
        if (page === "...") {
          return (
            <span key={`ellipsis-${index}`} className="px-3 py-2">
              ...
            </span>
          );
        }

        const pageNum = page as number;
        const isActive = pageNum === currentPage;

        return (
          <button
            key={pageNum}
            onClick={() => onPageChange(pageNum)}
            className={`px-3 py-2 rounded-lg border transition-colors ${
              isActive
                ? "bg-primary-500 text-white border-primary-500"
                : "border-gray-300 hover:bg-gray-50"
            }`}
            aria-label={`Page ${pageNum}`}
            aria-current={isActive ? "page" : undefined}
          >
            {pageNum}
          </button>
        );
      })}

      {/* Next Button */}
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="px-3 py-2 rounded-lg border border-gray-300 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        aria-label="Next page"
      >
        <BiChevronRight />
      </button>
    </nav>
  );
};

export default Pagination;
