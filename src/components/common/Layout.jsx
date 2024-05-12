import SideBar from './SideBar'
import Header from './Header'
import { useState } from 'react'

// eslint-disable-next-line react/prop-types
const Layout = ( {children}) => {

  const [sidebarIsOpen, setSidebarIsOpen] = useState(true);

  const showSidebar = (state) => {
    setSidebarIsOpen(state)
  }

  return (
    <div className="flex flex-row h-screen overflow-hidden">
        {/* <div> */}
          <SideBar open={sidebarIsOpen} showSidebar={showSidebar}/>
        {/* </div> */}
        <div className="flex flex-col flex-1 h-full overflow-y-scroll relative">
          <Header showSidebar={showSidebar} />
          <div className='mt-12'>
            {children}
          </div>
        </div>
    </div>
  )
}

export default Layout