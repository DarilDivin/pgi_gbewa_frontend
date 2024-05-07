import SideBar from './SideBar'
import Header from './Header'
import { useState } from 'react'
import { Menu } from 'lucide-react'

// eslint-disable-next-line react/prop-types
const Layout = ( {children}) => {

  const [sidebarIsOpen, setSidebarIsOpen] = useState(true)

  const handleSidebar = () => {
    // console.log('valeur avant click',sidebarIsOpen, typeof(sidebarIsOpen))
    setSidebarIsOpen(!sidebarIsOpen)
    // console.log('valeur après click',sidebarIsOpen)

  }

  return (
    <div className="flex flex-row h-screen overflow-hidden">
        {/* <div> */}
          <SideBar open={sidebarIsOpen} />
        {/* </div> */}
        <div className='absolute top-16 left-0 p-1 flex justify-center items-center rounded-xl hover:bg-gray-200 text-black z-50 lg:hidden'>
          <button onClick={handleSidebar}><Menu size={25} /></button>
        </div>
        <div className="flex flex-col flex-1 h-full overflow-y-scroll relative">
          <Header />
          <div className='mt-12'>
            {children}
          </div>
        </div>
    </div>
  )
}

export default Layout