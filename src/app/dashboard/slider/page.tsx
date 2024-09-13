'use client'
import { useState } from 'react'

import { Slider } from '@/components/ui/slider'

export default function HomePage() {
  const [sliderValue, setSliderValue] = useState(10)
  const [rangeValue, setRangeValue] = useState([10, 20])

  return (
    <>
      <p className="mb-4">Value: {sliderValue}</p>
      <Slider onValueChange={([value]) => setSliderValue(value)} defaultValue={[sliderValue]} max={100} step={1} />
      <p className="mt-10 mb-4">Range: {rangeValue.join(',')}</p>
      <Slider onValueChange={setRangeValue} defaultValue={rangeValue} max={100} step={1} />
    </>
  )
}
