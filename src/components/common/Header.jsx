import { BellRing, Search, X } from "lucide-react"
import { useState } from "react";

const Header = () => {

    const [adminIsActive, setAdminIsActive] = useState(false)
    const [sidebarIsDisplayed, setSidebarIsDisplayed] = useState(false)

    const toggleTabs = (e) => {
        // console.log(e.target.firstChild.data);
        if (e.target.firstChild.data === "Administration") {
            setAdminIsActive(true)
        } else {
            setAdminIsActive(false)
        }
    }

    const showSeachBar = () => {
        console.log(sidebarIsDisplayed)
        setSidebarIsDisplayed(!sidebarIsDisplayed)
    }

  return (
    <div className='w-full h-16 shadow-black flex justify-evenly items-center border-b-[1px] border-gray-200 py-2 sticky top-0 bg-white'>
        <div className='absolute p-3 hidden lg:relative lg:block w-full lg:w-[400px]'>
            <input type="text" className="w-full h-[45px] rounded-lg px-2 text-lg border-[1px] border-gray-300" placeholder="Rechercher ici..."/>
            <Search color="#aaa" className="absolute top-1/2 right-4 -translate-y-1/2" />
        </div>
        {sidebarIsDisplayed && 
            <div className='absolute p-3 w-full bg-slate-50 flex items-center justify-between gap-2'>
                <input type="text" className="w-full h-[45px] rounded-lg px-2 text-lg border-[1px] border-gray-300" placeholder="Rechercher ici..."/>
                <Search color="#aaa" className="absolute top-1/2 right-12 -translate-y-1/2" />
                <X color="#333" onClick={showSeachBar}/>
            </div>
        }
        <div className="w-[250px] sm:w-[300px] lg:w-[510px] bg-green-700 h-[45px] rounded-[6px] p-[3px] flex justify-between">
            <button className={`${adminIsActive ? 'text-white' : 'bg-slate-50 text-dark/70'} text-[10px] sm:text-xs lg:text-base h-full  w-[300px] px-8 rounded font-semibold`} onClick={toggleTabs}>Projets & Programmmes</button>
            <button className={`${adminIsActive ? 'bg-slate-50 text-dark/70' : 'text-white '} text-[10px] sm:text-xs lg:text-base w-[200px] font-semibold h-full rounded `} onClick={toggleTabs}>Administration</button>
        </div>
        <div className="flex items-center lg:gap-6">
            <Search className="cursor-pointer hover:bg-gray-200 rounded-full p-2 size-8 lg:hidden" onClick={showSeachBar}/>
            <BellRing className="cursor-pointer hover:bg-gray-200 rounded-full p-2 size-8 "/>
            <div className="cursor-pointer size-[40px] bg-violet-700 hover:bg-violet-900 text-white rounded-full flex justify-center items-center font-bold text-xl">
                {/* <img src="" alt="" /> */}
                <p>P</p>
            </div>
        </div>
    </div>
  )
}

export default Header