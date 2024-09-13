'use client'

import { useState } from 'react'
import { Calendar } from '@/components/ui/calendar'

export default function Page() {
  const [date, setDate] = useState<Date | undefined>(new Date())
  const [multipleDate, setMultipleDate] = useState<Date[] | undefined>([])
  const dateText = date?.toLocaleDateString('es-ES', {
    weekday: 'long',
    day: 'numeric',
    month: 'long'
  })

  return (
    <div>
      <div className="flex gap-4">
        <Calendar
          // deshabilitar los findes
          disabled={(date) => date.getDay() === 0 || date.getDay() === 6}
          mode="single"
          selected={date}
          onSelect={setDate}
          className="rounded-md border"
        />

        <Calendar
          // no permite seleccionar una fecha superior al día actual
          disabled={(date) => date > new Date()}
          mode="single"
          selected={date}
          onSelect={setDate}
          className="rounded-md border"
        />

        <Calendar mode="multiple" selected={multipleDate} onSelect={setMultipleDate} className="rounded-md border" />
      </div>
      <div className="mt-8">
        <h1 className="text-2xl">Información</h1>
        <p>{dateText}</p>
        <p>{multipleDate?.map((day) => day.getDate()).join(', ')}</p>
      </div>
    </div>
  )
}
