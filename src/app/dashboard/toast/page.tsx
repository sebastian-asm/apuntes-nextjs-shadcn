'use client'
import { Button } from '@/components/ui/button'
import { ToastAction } from '@/components/ui/toast'
import { useToast } from '@/hooks/use-toast'

export default function HomePage() {
  const { toast } = useToast()
  return (
    <Button
      onClick={() => {
        toast({
          title: 'Scheduled: Catch up',
          description: 'Friday, February 10, 2023 at 5:57 PM',
          action: (
            <ToastAction onClick={() => console.log('try again')} altText="Try again">
              Try again
            </ToastAction>
          )
        })
      }}
    >
      Show Toast
    </Button>
  )
}
