'use client'
import { toast } from 'sonner'

import { Button } from '@/components/ui/button'

export default function HomePage() {
  return (
    <>
      <Button
        variant="outline"
        onClick={() =>
          toast('Event has been created', {
            description: 'Sunday, December 03, 2023 at 9:00 AM',
            action: {
              label: 'Undo',
              onClick: () => console.log('Undo')
            }
          })
        }
      >
        Show Toast
      </Button>
      <Button
        variant="outline"
        onClick={() =>
          toast.success('Event has been created', {
            position: 'top-center',
            description: 'Sunday, December 03, 2023 at 9:00 AM',
            action: {
              label: 'Undo',
              onClick: () => console.log('Undo')
            }
          })
        }
      >
        Show Toast
      </Button>
    </>
  )
}
