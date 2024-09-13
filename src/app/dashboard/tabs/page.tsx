import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import Tab1 from './ui/tab1'
import Tab2 from './ui/tab2'

export default function HomePage() {
  return (
    <Tabs defaultValue="account" className="w-[400px]">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="account">Account</TabsTrigger>
        <TabsTrigger value="password">Password</TabsTrigger>
      </TabsList>
      <TabsContent value="account">
        <Tab1 />
      </TabsContent>
      <TabsContent value="password">
        <Tab2 />
      </TabsContent>
    </Tabs>
  )
}
