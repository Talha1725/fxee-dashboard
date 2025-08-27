"use client";
import { Table, TableHeader, TableBody, TableRow, TableCell, TableHead } from "./table";
import { useState } from "react";
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  SortingState,
  useReactTable,
} from "@tanstack/react-table";
import { ChevronUpIcon, ChevronDownIcon } from "lucide-react";
import { useTheme } from "@/lib/contexts/ThemeContext";

// Custom sort icon component
const SortIcon = ({ isSorted, isSortedDesc }: { isSorted: boolean; isSortedDesc: boolean }) => {
  return (
    <div className="flex flex-col -space-y-1">
      <ChevronUpIcon 
        className={`w-3 h-3 ${isSorted && !isSortedDesc ? 'fill-current stroke-current' : 'fill-current/30 stroke-current/30 dark:fill-white/80 dark:stroke-white/80'}`} 
      />
      <ChevronDownIcon 
        className={`w-3 h-3 ${isSorted && isSortedDesc ? 'fill-current stroke-current' : 'fill-current/30 stroke-current/30 dark:fill-white/80 dark:stroke-white/80'}`} 
      />
    </div>
  );
};

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  emptyMessage?: string;
}

export function DataTable<TData, TValue>({
  columns,
  data,
  emptyMessage = "No data found."
}: DataTableProps<TData, TValue>) {
  const { theme } = useTheme();
  const [sorting, setSorting] = useState<SortingState>([]);

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    onSortingChange: setSorting,
    state: {
      sorting,
    },
  });

  return (
    <Table>
      <TableHeader className="bg-gradient-to-b from-white/2 to-primary/5">
        {table.getHeaderGroups().map((headerGroup) => (
          <TableRow key={headerGroup.id}>
            {headerGroup.headers.map((header) => (
              <TableHead key={header.id}>
                {header.isPlaceholder
                  ? null
                  : flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
              </TableHead>
            ))}
          </TableRow>
        ))}
      </TableHeader>
      <TableBody>
        {table.getRowModel().rows?.length ? (
          table.getRowModel().rows.map((row, index) => (
            <TableRow 
              key={row.id} 
              className="h-[48px]"
              style={{
                background: index % 2 === 1 
                  ? theme === "dark"
                    ? "linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.025) 50%, rgba(255, 255, 255, 0) 100%)"
                    : "linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.025) 50%, rgba(0, 0, 0, 0) 100%)"
                  : "transparent"
              }}
            >
              {row.getVisibleCells().map((cell) => (
                <TableCell key={cell.id} className="font-satoshi dark:text-white/80">
                  {flexRender(
                    cell.column.columnDef.cell,
                    cell.getContext()
                  )}
                </TableCell>
              ))}
            </TableRow>
          ))
        ) : (
          <TableRow>
            <TableCell
              colSpan={columns.length}
              className="h-24 text-center font-satoshi"
            >
              {emptyMessage}
            </TableCell>
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
}

// Helper function to create sortable column headers
export function createSortableHeader<TData>(
  title: string,
  accessorKey: string
) {
  return {
    accessorKey,
    header: ({ column }: { column: any }) => {
      return (
        <button
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="flex items-center gap-1 transition-colors p-1 rounded font-satoshi dark:text-white/80 cursor-pointer"
        >
          {title}
          <SortIcon 
            isSorted={column.getIsSorted() === "asc"} 
            isSortedDesc={column.getIsSorted() === "desc"} 
          />
        </button>
      );
    },
  };
}
