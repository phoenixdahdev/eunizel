'use client'

import { useState, useEffect } from 'react'
import { Input } from '~/components/ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '~/components/ui/select'

interface Appliance {
  id: string
  name: string
  defaultPower: number
  quantity: number
  power: number
}

const initialAppliances: Appliance[] = [
  { id: '1', name: 'Normal Bulb', defaultPower: 60, quantity: 0, power: 60 },
  { id: '2', name: 'Tube Light', defaultPower: 40, quantity: 0, power: 40 },
  { id: '3', name: 'LED Lamp', defaultPower: 10, quantity: 0, power: 10 },
  { id: '4', name: 'Fan', defaultPower: 75, quantity: 0, power: 75 },
  { id: '5', name: 'Music System', defaultPower: 100, quantity: 0, power: 100 },
  {
    id: '6',
    name: 'LCD/LED TV (< 42")',
    defaultPower: 120,
    quantity: 0,
    power: 120,
  },
  {
    id: '7',
    name: 'LCD/LED TV (< 42")',
    defaultPower: 120,
    quantity: 0,
    power: 120,
  },
  {
    id: '8',
    name: 'Desktop Computer',
    defaultPower: 200,
    quantity: 0,
    power: 200,
  },
  { id: '9', name: 'Laptop', defaultPower: 60, quantity: 0, power: 60 },
  {
    id: '10',
    name: 'Refrigerator (165-250Ltr)',
    defaultPower: 150,
    quantity: 0,
    power: 150,
  },
  {
    id: '11',
    name: 'Refrigerator (250-350Ltr)',
    defaultPower: 200,
    quantity: 0,
    power: 200,
  },
  {
    id: '12',
    name: 'Refrigerator (350-450Ltr)',
    defaultPower: 250,
    quantity: 0,
    power: 250,
  },
  {
    id: '13',
    name: 'Refrigerator (> 450Ltr)',
    defaultPower: 300,
    quantity: 0,
    power: 300,
  },
  { id: '14', name: 'AC - 1HP', defaultPower: 1000, quantity: 0, power: 1000 },
  {
    id: '15',
    name: 'AC - 1.5HP',
    defaultPower: 1500,
    quantity: 0,
    power: 1500,
  },
  { id: '16', name: 'AC - 2HP', defaultPower: 2000, quantity: 0, power: 2000 },
  { id: '17', name: 'Toaster', defaultPower: 800, quantity: 0, power: 800 },
  {
    id: '18',
    name: 'Washing Machine',
    defaultPower: 500,
    quantity: 0,
    power: 500,
  },
  {
    id: '19',
    name: 'Gaming Console',
    defaultPower: 150,
    quantity: 0,
    power: 150,
  },
  {
    id: '20',
    name: 'Microwave Oven',
    defaultPower: 1200,
    quantity: 0,
    power: 1200,
  },
]

export function LoadCalculator() {
  const [appliances, setAppliances] = useState<Appliance[]>(initialAppliances)
  const [batteryCapacity, setBatteryCapacity] = useState<string>('')
  const [totalLoad, setTotalLoad] = useState(0)
  const [inverterRating, setInverterRating] = useState(0)
  const [backupTime, setBackupTime] = useState(0)

  useEffect(() => {
    const total = appliances.reduce((sum, appliance) => {
      return sum + appliance.quantity * appliance.power
    }, 0)
    setTotalLoad(total)
    const rating = Math.ceil(total / 0.7)
    setInverterRating(rating)

    if (batteryCapacity && total > 0) {
      const capacity = Number.parseFloat(batteryCapacity)
      const backupHours = (capacity * 12) / total
      setBackupTime(Math.round(backupHours * 10) / 10)
    } else {
      setBackupTime(0)
    }
  }, [appliances, batteryCapacity])

  const updateAppliance = (
    id: string,
    field: 'quantity' | 'power',
    value: number
  ) => {
    setAppliances((prev) =>
      prev.map((app) => (app.id === id ? { ...app, [field]: value } : app))
    )
  }

  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
      {/* Left side - Appliances list */}
      <div className="rounded-lg border border-[#eaecf0] bg-white p-6 lg:col-span-2">
        <div className="mb-4 grid grid-cols-3 gap-4 border-b border-[#eaecf0] pb-4">
          <div className="font-semibold text-[#141b34]">Appliance</div>
          <div className="text-center font-semibold text-[#141b34]">
            Quantity
          </div>
          <div className="text-center font-semibold text-[#141b34]">Load</div>
        </div>

        <div className="space-y-3">
          {appliances.map((appliance, index) => (
            <div
              key={appliance.id}
              className="grid grid-cols-3 items-center gap-4"
            >
              <div
                className={`rounded-lg px-4 py-3 ${index === 0 ? 'bg-[#eaaa08] font-medium text-white' : 'bg-[#f9fafb] text-[#344054]'}`}
              >
                {appliance.name}
              </div>

              <div className="flex items-center justify-center">
                <Input
                  type="number"
                  min="0"
                  value={appliance.quantity || ''}
                  onChange={(e) =>
                    updateAppliance(
                      appliance.id,
                      'quantity',
                      Number.parseInt(e.target.value) || 0
                    )
                  }
                  placeholder="How many?"
                  className="text-center"
                />
              </div>

              <div className="flex items-center justify-center">
                <Input
                  type="number"
                  min="0"
                  value={appliance.power || ''}
                  onChange={(e) =>
                    updateAppliance(
                      appliance.id,
                      'power',
                      Number.parseInt(e.target.value) || 0
                    )
                  }
                  placeholder="Power(W)"
                  className="text-center"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right side - Results */}
      <div className="space-y-6">
        {/* Total Load */}
        <div className="rounded-lg border border-[#eaecf0] bg-white p-6 text-center">
          <h3 className="mb-2 text-sm font-medium text-[#667085]">
            Your Total Load
          </h3>
          <div className="mb-2 text-5xl font-bold text-[#f04438]">
            {totalLoad}
          </div>
          <div className="text-sm text-[#667085]">Watts</div>
        </div>

        {/* Recommended Inverter Rating */}
        <div className="rounded-lg border border-[#eaecf0] bg-white p-6 text-center">
          <h3 className="mb-2 text-sm font-medium text-[#667085]">
            Recommended Inverter Rating
          </h3>
          <div className="mb-2 text-5xl font-bold text-[#f04438]">
            {inverterRating}
          </div>
          <div className="text-sm text-[#667085]">VA</div>
        </div>

        {/* Battery Backup Time */}
        <div className="rounded-lg border border-[#eaecf0] bg-white p-6">
          <h3 className="mb-4 text-center text-sm font-medium text-[#667085]">
            Estimate Your Battery Back Up Time
          </h3>

          <div className="mb-4">
            <label className="mb-2 block text-xs text-[#667085]">
              Choose Battery Capacity
            </label>
            <Select value={batteryCapacity} onValueChange={setBatteryCapacity}>
              <SelectTrigger>
                <SelectValue placeholder="Select An Option" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="100">100 Ah</SelectItem>
                <SelectItem value="150">150 Ah</SelectItem>
                <SelectItem value="200">200 Ah</SelectItem>
                <SelectItem value="250">250 Ah</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="mb-4 text-center">
            <div className="mb-2 text-xs text-[#667085]">(Ampere Hours)</div>
          </div>

          <div className="mb-4 text-center">
            <h4 className="mb-2 text-sm font-medium text-[#667085]">
              Your Available Battery Back Up Time
            </h4>
            <div className="mb-2 text-5xl font-bold text-[#f04438]">
              {backupTime}
            </div>
            <div className="text-sm text-[#667085]">Hours</div>
          </div>

          <div className="rounded-lg border border-[#eaecf0] bg-[#fcfcfd] p-4">
            <p className="text-xs leading-relaxed text-[#f04438]">
              <span className="font-semibold">Disclaimer:</span> Backup time
              shown here is approximate. The Battery should be in fully charged
              condition to attain this backup time.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
