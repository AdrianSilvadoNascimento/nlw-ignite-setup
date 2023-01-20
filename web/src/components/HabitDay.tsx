import * as Popover from '@radix-ui/react-popover'
import { Progressbar } from './Progressbar'
import clsx from 'clsx'

interface HabitDayProps {
  completed: number
  amount: number
}

export function HabitDay({ completed, amount }: HabitDayProps) {
  const completePercent = Math.round((completed / amount) * 100 )
  
  return (
    <Popover.Root>
      <Popover.Trigger 
        className={clsx('w-10 h-10 border-2 rounded-lg', {
          'bg-zinc-900 border-zinc-800': completePercent === 0,
          'bg-violet-900 border-violet-700': completePercent > 0 && completePercent < 20,
          'bg-violet-800 border-violet-600': completePercent >= 20 && completePercent < 40,
          'bg-violet-700 border-violet-500': completePercent >= 40 && completePercent < 60,
          'bg-violet-600 border-violet-500': completePercent >= 60 && completePercent < 80,
          'bg-violet-500 border-violet-400': completePercent >= 80,
        })} />

      <Popover.Portal>
        <Popover.Content className='min-w-[320px] p-6 rounded-2xl bg-zinc-900 flex flex-col'>          
          <span className='font-semibold text-zinc-400'>segunda-feira</span>
          <span className='mt-1 font-extrabold leading-light text-3xl'>20/01</span>

          <Progressbar progress={completePercent} />
          
          <Popover.Arrow height={8} width={16} className='fill-zinc-900' />
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  )
}