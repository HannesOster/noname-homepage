import 'bootstrap/dist/css/bootstrap.min.css';
import { FaUserAlt } from "react-icons/fa";


export default function Header() {
    return (
      <>

        <header className="page-header row container-fluid text-center p-3">
            
         <a className="login-link_header" href="#Login"><span ><FaUserAlt className="user-icon_header"/></span>Anmelden</a>
        </header>
      </>
    )
  }
  