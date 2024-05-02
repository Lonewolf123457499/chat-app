import Convsersations from "./Convsersations"
import LogoutButton from "./LogoutButton"
import SearchInput from "./SearchInput"


const Sidebar = () => {
  return (
    <div className="border-slate-500 p-4 flex flex-col">
        <SearchInput/>
        {/* <div className="divider px-3"></div> */}
        <Convsersations/>
        <LogoutButton/>
    </div>
  )
}

export default Sidebar