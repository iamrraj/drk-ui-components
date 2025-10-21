import React from "react";
import { BiSortAlt2, BiSortUp, BiSortDown } from "react-icons/bi";

/**
 * Table Column Definition
 */
export interface TableColumn<T = any> {
  /**
   * Unique identifier
   */
  key: string;

  /**
   * Column header label
   */
  label: string;

  /**
   * Custom render function
   */
  render?: (row: T, rowIndex: number) => React.ReactNode;

  /**
   * Whether column is sortable
   */
  sortable?: boolean;

  /**
   * Column width (CSS value)
   */
  width?: string;

  /**
   * Text alignment
   */
  align?: "left" | "center" | "right";
}

/**
 * Table Component Props
 */
export interface TableProps<T = any> {
  /**
   * Array of column definitions
   */
  columns: TableColumn<T>[];

  /**
   * Array of data rows
   */
  data: T[];

  /**
   * Row key extractor
   */
  rowKey?: (row: T, index: number) => string | number;

  /**
   * Sort configuration
   */
  sort?: {
    key: string;
    direction: "asc" | "desc";
  };

  /**
   * Sort handler
   */
  onSort?: (key: string) => void;

  /**
   * Row click handler
   */
  onRowClick?: (row: T, index: number) => void;

  /**
   * Additional CSS classes for container
   */
  className?: string;

  /**
   * Whether to show striped rows
   * @default false
   */
  striped?: boolean;

  /**
   * Whether to highlight rows on hover
   * @default true
   */
  hoverable?: boolean;
}

/**
 * Table Component
 *
 * @component
 * @description
 * A flexible data table component with sorting and custom rendering.
 *
 * @example
 * ```tsx
 * import { Table } from 'drk-ui-components';
 *
 * const columns = [
 *   { key: 'name', label: 'Name', sortable: true },
 *   { key: 'email', label: 'Email' },
 *   {
 *     key: 'actions',
 *     label: 'Actions',
 *     render: (row) => <button>Edit</button>
 *   }
 * ];
 *
 * const data = [
 *   { id: 1, name: 'John', email: 'john@example.com' },
 *   { id: 2, name: 'Jane', email: 'jane@example.com' }
 * ];
 *
 * <Table columns={columns} data={data} rowKey={(row) => row.id} />
 * ```
 */
const Table = <T extends Record<string, any>>({
  columns,
  data,
  rowKey = (_, index) => index,
  sort,
  onSort,
  onRowClick,
  className = "",
  striped = false,
  hoverable = true,
}: TableProps<T>) => {
  const handleSort = (columnKey: string) => {
    if (onSort) {
      onSort(columnKey);
    }
  };

  return (
    <div className={`overflow-x-auto ${className}`}>
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            {columns.map((column) => (
              <th
                key={column.key}
                scope="col"
                className={`px-6 py-3 text-${
                  column.align || "left"
                } text-xs font-medium text-gray-500 uppercase tracking-wider ${
                  column.sortable ? "cursor-pointer select-none" : ""
                }`}
                style={{ width: column.width }}
                onClick={() => column.sortable && handleSort(column.key)}
              >
                <div className="flex items-center gap-1">
                  <span>{column.label}</span>
                  {column.sortable && (
                    <span className="text-gray-400">
                      {sort?.key === column.key ? (
                        sort.direction === "asc" ? (
                          <BiSortUp />
                        ) : (
                          <BiSortDown />
                        )
                      ) : (
                        <BiSortAlt2 />
                      )}
                    </span>
                  )}
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {data.length === 0 ? (
            <tr>
              <td
                colSpan={columns.length}
                className="px-6 py-4 text-center text-gray-500"
              >
                No data available
              </td>
            </tr>
          ) : (
            data.map((row, rowIndex) => (
              <tr
                key={rowKey(row, rowIndex)}
                onClick={() => onRowClick?.(row, rowIndex)}
                className={`${striped && rowIndex % 2 === 1 ? "bg-gray-50" : ""} ${
                  hoverable ? "hover:bg-gray-100" : ""
                } ${onRowClick ? "cursor-pointer" : ""} transition-colors`}
              >
                {columns.map((column) => (
                  <td
                    key={column.key}
                    className={`px-6 py-4 whitespace-nowrap text-sm text-gray-900 text-${
                      column.align || "left"
                    }`}
                  >
                    {column.render
                      ? column.render(row, rowIndex)
                      : row[column.key]}
                  </td>
                ))}
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
