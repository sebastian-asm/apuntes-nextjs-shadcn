import { Loader2 } from 'lucide-react'

import { Button } from '@/components/ui/button'

export default function Page() {
  return (
    <div className="grid grid-cols-5 gap-2">
      <Button>button</Button>
      <Button variant="destructive">destructive</Button>
      <Button variant="ghost">ghost</Button>
      <Button variant="link">link</Button>
      <Button variant="outline">outline</Button>
      <Button variant="secondary">secondary</Button>
      <Button disabled>disabled</Button>
      <Button disabled>
        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
        Please wait
      </Button>
    </div>
  )
}
