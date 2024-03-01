import { Link } from "react-router-dom"
import Logo from './assets/logo.svg'
function Navbar() {
    
    return (
      <nav >
        <div className=" text-xl  text-gray-600 p-8 flex justify-between   font-bold mx-44 ">
        <img src={Logo} alt="sweeft-logo" className="w-52"/>
           <div className="flex gap-8">
            <Link className="hover:text-gray-800" to="/">Main</Link>
            <Link className="hover:text-gray-800" to="/history">History</Link>
            </div>
            </div>
      </nav>
    )
}

export default Navbar
