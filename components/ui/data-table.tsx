"use client";
import { Button } from "@/components/ui/button";
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  useReactTable,
} from "@tanstack/react-table";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import previous from "@/assets/svgs/previous.svg";
import next from "@/assets/svgs/next.svg";
import Image from "next/image";
import { useState } from "react";

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
}

export function DataTable<TData, TValue>({
  columns,
  data,
}: DataTableProps<TData, TValue>) {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    // initialState: {
    //   pagination: {
    //     pageSize: 2,
    //   },
    // },
  });

  const [isHoveringPages, setIsHoveringPages] = useState(false);

  return (
    <div>
      <div className="overflow-hidden rounded-3xl border border-border-subheader">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext(),
                          )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell
                      key={cell.id}
                      className="h-20 max-w-[20rem] px-4 font-medium text-secondary"
                    >
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext(),
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      {/* Pagination controls */}
      {table.getPageCount() > 1 && (
        <div className="mt-2 flex w-full items-center justify-between space-x-2 rounded-2xl border border-border-subheader bg-subheader-lightblue px-2 py-3">
          <Button
            variant="ghost"
            size="sm"
            className="flex gap-1"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            <Image src={previous} alt="previous" />
            Previous
          </Button>

          {/* Page numbers that expand on hover */}
          <div
            className="relative flex w-full items-center justify-center"
            onMouseEnter={() => setIsHoveringPages(true)}
            onMouseLeave={() => setIsHoveringPages(false)}
          >
            <Button variant="ghost" size="sm" className="text-secondary">
              1 ... {table.getPageCount()}
            </Button>

            {/* Expandable page numbers on hover */}
            {isHoveringPages && (
              <div className="absolute z-20 flex max-w-[70vw] gap-1 overflow-x-auto rounded-lg bg-white px-3 py-2 shadow-lg">
                {Array.from({ length: table.getPageCount() }).map(
                  (_, index) => (
                    <Button
                      key={index}
                      variant="ghost"
                      size="sm"
                      className={`px-3 ${
                        index === table.getState().pagination.pageIndex
                          ? "bg-subheader-lightblue font-bold text-black"
                          : "text-tertiary"
                      } `}
                      onClick={() => table.setPageIndex(index)}
                    >
                      {index + 1}
                    </Button>
                  ),
                )}
              </div>
            )}
          </div>

          <Button
            variant="ghost"
            size="sm"
            className="flex gap-1"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            Next
            <Image src={next} alt="next" />
          </Button>
        </div>
      )}
    </div>
  );
}
