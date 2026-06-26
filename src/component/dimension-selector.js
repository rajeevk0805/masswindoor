
"use client"

import { Slider } from "@/components/ui/slider"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { useState, useEffect, useMemo, useRef, useCallback } from "react"

const standardSizes = [
  { width: 1000, height: 1200 },
  { width: 900, height: 1100 },
  { width: 800, height: 1000 },
  { width: 700, height: 900 },
]

export default function DimensionsSelector({ dimensions, onChange }) {
  const [width, setWidth] = useState(dimensions.width)
  const [height, setHeight] = useState(dimensions.height)

  const minWidth = 400
  const maxWidth = 1200
  const minHeight = 600
  const maxHeight = 1500

  const onChangeRef = useRef(onChange)
  useEffect(() => {
    onChangeRef.current = onChange
  }, [onChange])

  useEffect(() => {
    onChangeRef.current({ width, height })
  }, [width, height])

  const handleStandardSizeClick = (size) => {
    setWidth(size.width)
    setHeight(size.height)
  }

  const widthValue = useMemo(() => [width], [width])
  const heightValue = useMemo(() => [height], [height])

  return (
    <div className="space-y-6">
      {/* Width */}
      <div className="space-y-2">
        <Label htmlFor="width">Width (mm)</Label>
        <div className="flex  justify-between gap-2 items-center">
          <Input
            type="number"
            min={minWidth}
            max={maxWidth}
            value={width}
            onChange={(e) => setWidth(Number(e.target.value))}
            className="w-[50%]"
            placeholder="Enter Width"
          />
          <Slider
            id="width"
            min={minWidth}
            max={maxWidth}
            step={5}
            value={widthValue}
            onValueChange={(value) => setWidth(value[0])}
            className="flex-1"
          />
        </div>
        <div className="flex justify-between text-xs text-gray-500">
          <span>{minWidth}mm</span>
          <span>{maxWidth}mm</span>
        </div>
      </div>

      {/* Height */}
      <div className="space-y-2">
        <Label htmlFor="height">Height (mm)</Label>
        <div className="flex justify-between gap-2 items-center">
          <Input
            type="number"
            min={minHeight}
            max={maxHeight}
            value={height}
            onChange={(e) => setHeight(Number(e.target.value))}
            className="w-[50%]"
            placeholder="Enter Height"
          />
          <Slider
            id="height"
            min={minHeight}
            max={maxHeight}
            step={5}
            value={heightValue}
            onValueChange={(value) => setHeight(value[0])}
            className="flex-1"
          />
        </div>
        <div className="flex justify-between text-xs text-gray-500">
          <span>{minHeight}mm</span>
          <span>{maxHeight}mm</span>
        </div>
      </div>

      {/* Standard Sizes */}
      <div className="space-y-2">
        <Label>Standard Sizes</Label>
        <div className="flex flex-wrap gap-2">
          {standardSizes.map((size, idx) => (
            <button
              key={idx}
              onClick={() => handleStandardSizeClick(size)}
              className="px-4 py-2 border rounded-md text-sm hover:bg-gray-100"
            >
              {size.width} × {size.height}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
