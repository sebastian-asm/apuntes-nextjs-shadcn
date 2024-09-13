import { Badge } from '@/components/ui/badge'

export default function Page() {
  return (
    <div className="flex gap-4">
      <Badge>badge</Badge>
      <Badge variant="destructive">badge</Badge>
      <Badge variant="secondary">badge</Badge>
      <Badge variant="outline">badge</Badge>
      {/* capitalize es un atributo personalizado */}
      <Badge variant="success" capitalize>
        badge
      </Badge>
    </div>
  )
}
