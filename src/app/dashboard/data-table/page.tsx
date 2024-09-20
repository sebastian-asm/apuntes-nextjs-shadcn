import { payments } from '@/data/payments'
import { DataTable } from './data-table'
import { columns } from './columns'

async function fetchData() {
  return payments
}

export default async function HomePage() {
  const data = await fetchData()
  return <DataTable columns={columns} data={data} />
}
