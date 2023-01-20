import { HabitDay } from "./HabitDay"
import { generateDatesFromYearBeggining } from "../utils/generate-range-day"

const weekDays = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S']

const summaryDates = generateDatesFromYearBeggining()

const minimumSummaryDatesSize = 18 * 7
const amoutOfDaysToFill = minimumSummaryDatesSize - summaryDates.length

export function SummaryTable() {
  return (
    <div className="w-full flex">
      <div className="grid grid-rows-7 grid-flow-row gap-3">
        {weekDays.map((day, index) => {
          return (
          <div 
            key={`${day}-${index}`} 
            className="text-zinc-400 text-xl font-bold h-10 w-10 flex items-center justify-center">
            {day}
          </div>
          )
        })}
      </div>

      <div className="grid grid-rows-7 grid-flow-col gap-3">
        {summaryDates.map((date, index) => {
          return (
            <HabitDay 
              key={date.toString()}
              amount={5} 
              completed={Math.round(Math.random() * 5)} />
          )
        })}

        {amoutOfDaysToFill && Array.from({ length: amoutOfDaysToFill }).map((_, index) => {
          return (
            <div 
              key={index} 
              className="w-10 h-10 bg-zinc-900 border-2 border-zinc-800 rounded-lg opacity-40 cursor-not-allowed"
            />
          )
        })}
      </div>
    </div>
  )
}