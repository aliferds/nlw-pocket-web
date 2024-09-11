import { Plus } from 'lucide-react'
import logo from '../assets/in-orbit-logo.svg'
import letsStart from '../assets/rocket-launch-illustration.svg'
import { Button } from './ui/button'
import { DialogTrigger } from './ui/dialog'

export function EmptyGoals() {
  return (
    <div className="h-screen flex flex-col items-center justify-center gap-8">
      <img src={logo} alt="logo in orbit" />
      <img src={letsStart} alt="lets start" />
      <p className="text-zinc-300 leading-relaxed max-w-80 text-center">
        Você ainda não cadastrou nenhuma meta, que tal cadastrar um agora mesmo?
      </p>

      <DialogTrigger asChild>
        <Button>
          <Plus className="size-4" />
          Cadastrar Meta
        </Button>
      </DialogTrigger>
      {/* <button
      type="button"
      className="px-4 
                py-2.5 
                rounded-lg 
                bg-violet-500 
                text-violet-50 
                flex 
                items-center 
                gap-2 
                text-sm 
                font-medium 
                tracking-tight 
                hover:bg-violet-600"
    >
      <Plus className="size-4" />
      Cadastrar meta
    </button> */}
    </div>
  )
}
