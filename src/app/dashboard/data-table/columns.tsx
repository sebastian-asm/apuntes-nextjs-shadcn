'use client'
import { ColumnDef, FilterFn, Row, SortDirection } from '@tanstack/react-table'
import { toast } from 'sonner'
import { DotsHorizontalIcon } from '@radix-ui/react-icons'
import { ChevronDownIcon, ChevronUpIcon } from 'lucide-react'

import { Payment } from '@/data/payments'
import { Badge } from '@/components/ui/badge'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'

// buscar en múltiples columnas
const myCustomFilterFn: FilterFn<Payment> = (
  row: Row<Payment>,
  columnId: string,
  filterValue: string,
  addMeta: (meta: any) => void
) => {
  filterValue = filterValue.toLowerCase()
  const filtersParts = filterValue.split(' ')
  const rowValues = `${row.original.clientName} ${row.original.email} ${row.original.status}`.toLowerCase()
  return filtersParts.every((value) => rowValues.includes(value))
  // if (row.original.clientName.includes(filterValue)) return true
  // if (row.original.email.includes(filterValue)) return true
  // if (row.original.status.includes(filterValue)) return true
  // return false
}

const SortedIcon = ({ isSorted }: { isSorted: SortDirection | false }) => {
  if (isSorted === 'asc') return <ChevronUpIcon className="ml-1.5 h-4 w-4" />
  if (isSorted === 'desc') return <ChevronDownIcon className="ml-1.5 h-4 w-4" />
}

export const columns: ColumnDef<Payment>[] = [
  {
    id: 'select',
    header: ({ table }) => (
      <Checkbox
        checked={table.getIsAllPageRowsSelected() || (table.getIsSomePageRowsSelected() && 'indeterminate')}
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false
  },
  { accessorKey: 'clientName', header: 'Client Name', filterFn: myCustomFilterFn },
  {
    accessorKey: 'email',
    filterFn: myCustomFilterFn,
    header: ({ column }) => {
      return (
        <Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}>
          Email
          <SortedIcon isSorted={column.getIsSorted()} />
        </Button>
      )
    }
  },
  {
    accessorKey: 'amount',
    header: 'Amount',
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue('amount'))
      const formatted = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
      }).format(amount)
      return formatted
    }
  },
  {
    accessorKey: 'status',
    filterFn: myCustomFilterFn,
    header: 'Status',
    cell: ({ row }) => {
      const status = row.getValue('status') as string
      const variant =
        {
          pending: 'warning',
          processing: 'info',
          success: 'success',
          failed: 'destructive'
        }[status] ?? ('default' as any)
      return <Badge variant={variant}>{status}</Badge>
    }
  },
  {
    id: 'actions',
    cell: ({ row }) => {
      const payment = row.original
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <DotsHorizontalIcon className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => {
                navigator.clipboard.writeText(payment.id)
                toast('Copiado en clipboard')
              }}
            >
              Copy payment ID
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>View customer</DropdownMenuItem>
            <DropdownMenuItem>View payment details</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    },
    enableSorting: false,
    enableHiding: false
  }
]
