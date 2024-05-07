
// eslint-disable-next-line react/prop-types
const SidebarLink = ({ children }) => {
  return (
    <a href="#" className=" w-full h-10 flex justify-start gap-4 px-5 items-center bg-slate-200 text-black/70 font-semibold hover:text-white hover:bg-green-600 text-lg rounded-lg active:bg-green-500 active:text-white">
        {children}
    </a>
  )
}

export default SidebarLink