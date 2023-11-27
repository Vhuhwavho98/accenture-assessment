import {Link ,Switch,Route,Routes} from "react-router-dom";
import { useState } from "react";
import ContactModal from "../../components/Modals/ContactModal";
import Cases from "../../pages/cases";
import Home from "../../pages/home";
import logo from '../../assets/logos/logo.svg'
import { RxHamburgerMenu } from "react-icons/rx";


const Navbar=()=>{
    const [showModal,setShowModal]=useState(false);
    const [showMobileMenu,setshowMobileMenu]=useState(false);
    const handleChat = () => {
        console.log("Chat clicker");
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    return(
        <>
            {showModal && <ContactModal isOpen={showModal} onClose={handleCloseModal} />}
              <div className="bg-violet-500 lg:px-8 px-4 text-white font-[700] grid lg:grid-cols-3  grid-cols-2 py-2 relative">
                    <Link className="left-0 col-span-1" to='/'>
                            <img
                                className=" items-baseline h-[35px] "
                                src={logo}
                                alt="Accenture"
                                
                            />
                    </Link>
                    <div className="col-span-1 hidden text-right  items-end lg:block">
                    <ul className="flex space-x-2 justify-center ">
                        <li>
                        <Link to="/services">Services</Link>
                        </li>
                        <li>
                        <Link to="/industries">Industries</Link>
                        </li>
                        <li>
                        <Link to="/services">Cases</Link>
                        </li>
                        <li>
                        <Link to="/contact">Contact</Link>
                        </li>
                    </ul>
                    </div>
                    
                    <div className="col-span-1 right-2 absolute  text-end py-1 my-1" >
                        <button onClick={handleChat} className="bg-white w-[120px] py-1 font-semibold text-[#000] px-1 rounded-[25px] hidden lg:block">Let's Chat</button>
                        <div className="lg:hidden block col-span-1">
                        <RxHamburgerMenu onClick={()=>{
                            setshowMobileMenu(!showMobileMenu)
                        }} className=" " />
                    </div>
                
                {
                    showMobileMenu && <div> xxxxxxxxxxx
                        </div>
                }
                    </div>
                    
        </div>
        </>
        )
}

export default Navbar;