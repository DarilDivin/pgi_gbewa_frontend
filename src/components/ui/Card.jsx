// import { UsersRound } from "lucide-react"

// eslint-disable-next-line react/prop-types
const Card = ({title, number, active, link, children}) => {
  return (
      <a 
        href={link} 
        className={
          active ? 
          'lg:w-72 h-28 group bg-green-700 hover:bg-green-800 rounded-lg grid grid-cols-[100px_1fr] justify-between items-center p-4 shadow-xl xl:justify-self-center 2xl:first:justify-self-start 2xl:last:justify-self-end' : 
          `lg:w-72 h-28 group bg-slate-100 hover:bg-green-700 rounded-lg grid grid-cols-[100px_1fr] justify-between items-center p-4 shadow-lg xl:justify-self-center 2xl:first:justify-self-start 2xl:last:justify-self-end`
        }
      >
        <div className="size-[80px] border-[2px] border-slate-100 rounded-full flex justify-center items-center">
            {/* <UsersRound size={30} strokeWidth={3} className={active? "stroke-slate-50" :" stroke-green-500 group-hover:stroke-slate-50"}/> */}
            {children}
        </div>
        <div className="flex flex-col justify-evenly items-start gap-2">
            <p className={active? 'text-white font-semibold text-lg' :'text-green-700 group-hover:text-white font-semibold text-lg text-nowrap'}>{title}</p>
            <p className="font-bold text-3xl">{number}</p>
        </div>
      </a>
  )
}

export default Card