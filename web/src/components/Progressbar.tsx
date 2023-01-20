interface ProgressbarProps {
  progress: number
}

export function Progressbar(props: ProgressbarProps) {
  return (
    <div 
      role="progressbar"
      aria-label="Progresso de hábitos completados neste dia"
      aria-valuenow={props.progress}
      className='h-3 rounded-xl bg-zinc-700 w-full mt-4'>
      <div 
        className='h-3 rounded-xl bg-violet-600'
        style={{ width: `${props.progress}%` }}
      >
        </div>
    </div>
  )
}