import { ChevronLeft, ChevronRight, LogOut, PanelsTopLeft } from "lucide-react"
import { useState } from "react"
// import SidebarLink from "../ui/SidebarLink"


// eslint-disable-next-line react/prop-types
const SideBar = ({ open }) => {
    const [isSemiClosed, setIsSemiClosed] = useState(false)
    // const [isOpen, setIsOpen] = useState(open)

    const isOpen = open

    // console.log(isOpen);

    const SemiCloseSidebar = () => {
        setIsSemiClosed(!isSemiClosed)
    }
    // hover:w-[300px] hover:px-6
    return (
        <>
            {open && <div className='w-full h-full bg-black/20 z-[5] absolute lg:hidden'></div>}
            <div className={`${isSemiClosed ? "lg:w-[50px]" : "w-[300px]"} ${isOpen ? '' : '-translate-x-80 absolute transition-transform'} transition-all h-screen p-[5px] border-r-[1px] border-slate-100 group flex flex-col justify-between absolute z-10 lg:relative bg-white`}>
                <div>
                    <div className="w-full h-[100px] mb-8">
                        <img className="object-contain w-full h-full" src="/logo_green.png" alt="Logo" />
                    </div>
                    <div className="h-auto flex flex-col gap-6">
                        <a href="#" className={` ${isSemiClosed ? "justify-center" : "justify-start px-5"} w-full h-10 flex  gap-4 items-center bg-green-600 text-white font-semibold text-lg rounded-lg `}>
                            <PanelsTopLeft size={25} />
                            <p className={`${isSemiClosed ? 'hidden' : 'block line-clamp-1'} `}>Programmes</p>
                        </a>
                        {/* <SidebarLink>
                            <PanelsTopLeft />
                            <p className=" line-clamp-1">Programmes</p>
                        </SidebarLink> */}
                        <a href="#" className={`${isSemiClosed ? "justify-center" : "justify-start px-5"} w-full h-10 flex gap-4 items-center bg-slate-200 text-black/70 font-semibold hover:text-white hover:bg-green-600 text-lg rounded-lg active:bg-green-500 active:text-white`}>
                            <PanelsTopLeft size={25} />
                            <p className={`${isSemiClosed ? 'hidden' : 'block line-clamp-1'} `}>Projets</p>
                        </a>
                        <a href="#" className={`${isSemiClosed ? "justify-center" : "justify-start px-5"} w-full h-10 flex gap-4 items-center bg-slate-200 text-black/70 font-semibold hover:text-white hover:bg-green-600 text-lg rounded-lg active:bg-green-500 active:text-white`}>
                            <PanelsTopLeft />
                            <p className={`${isSemiClosed ? 'hidden' : 'block line-clamp-1'} `}>Suivi & Evaluation</p>
                        </a>
                        <a href="#" className={`${isSemiClosed ? "justify-center" : "justify-start px-5"} w-full h-10 flex gap-4 items-center bg-slate-200 text-black/70 font-semibold hover:text-white hover:bg-green-600 text-lg rounded-lg active:bg-green-500 active:text-white`}>
                            <PanelsTopLeft />
                            <p className={`${isSemiClosed ? 'hidden' : 'block line-clamp-1'} `}>Plainte & Sugestions</p>
                        </a>
                        <a href="#" className={`${isSemiClosed ? "justify-center" : "justify-start px-5"} w-full h-10 flex gap-4 items-center bg-slate-200 text-black/70 font-semibold hover:text-white hover:bg-green-600 text-lg rounded-lg active:bg-green-500 active:text-white`}>
                            <PanelsTopLeft />
                            <p className={`${isSemiClosed ? 'hidden' : 'block line-clamp-1'} `}>Performances</p>
                        </a>
                        <a href="#" className={`${isSemiClosed ? "justify-center" : "justify-start px-5"} w-full h-10 flex gap-4 items-center bg-slate-200 text-black/70 font-semibold hover:text-white hover:bg-green-600 text-lg rounded-lg active:bg-green-500 active:text-white`}>
                            <PanelsTopLeft />
                            <p className={`${isSemiClosed ? 'hidden' : 'block line-clamp-1'} `}>Statistiques</p>
                        </a>
                        <a href="#" className={`${isSemiClosed ? "justify-center" : "justify-start px-5"} w-full h-10 flex gap-4 items-center bg-slate-200 text-black/70 font-semibold hover:text-white hover:bg-green-600 text-lg rounded-lg active:bg-green-500 active:text-white`}>
                            <PanelsTopLeft />
                            <p className={`${isSemiClosed ? 'hidden' : 'block line-clamp-1'} `}>Paramètres</p>
                        </a>
                    </div>
                </div>
                <div>
                    <a href="#" className={` ${isSemiClosed ? "justify-center" : "justify-start px-5"} w-full h-10 flex  gap-4 items-center bg-green-700 text-white font-semibold text-lg rounded-lg `}>
                        <LogOut size={25} />
                        <p className={`${isSemiClosed ? 'hidden' : 'block line-clamp-1'} `}>Se déconnecter</p>
                    </a>
                </div>
                <button type="button" className=" hidden z-50 absolute top-20 -right-8 lg:flex justify-center items-center text-white bg-green-700 rounded-full size-[20px] cursor-pointer" onClick={SemiCloseSidebar}>
                    {isSemiClosed ? <ChevronRight /> : <ChevronLeft />}
                </button>
            </div>
        </>
    )
}

export default SideBar