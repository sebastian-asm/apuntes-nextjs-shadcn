import Image from 'next/image'

import { Button } from '@/components/ui/button'
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'

const getData = async () => {
  await new Promise((resolve) => setTimeout(resolve, 3000))
  return '123456789'.split('')
}

export default async function HomePage() {
  const data = await getData()
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
      {data.map((item) => (
        <Card key={item}>
          <CardHeader>
            <Image
              src="https://github.com/shadcn.png"
              alt="shadcn"
              width={40}
              height={40}
              className="rounded-full mr-2 w-10 h-10"
            />
            <div>
              <CardTitle>Card title</CardTitle>
              <CardDescription>Card description</CardDescription>
            </div>
          </CardHeader>
          <CardFooter className="flex justify-center">
            <Button>Más</Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}
