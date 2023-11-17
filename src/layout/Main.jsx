import { Outlet } from "react-router-dom";
import SideNav from "../components/sidenav/SideNav";
import { MdOutlineReadMore } from "react-icons/md";

const Main = () => {
    return (
        <div>
          
         
     
          <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    {/* Page content here */}
                    <label htmlFor="my-drawer-2" className="drawer-button lg:hidden sticky top-0 left-0 "><MdOutlineReadMore className="bg-green-500 text-white text-3xl rounded-md" /></label>

                    <Outlet></Outlet>
                
                </div> 
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label> 
                 
                    <SideNav></SideNav>

                </div>
                </div>
         
         
        </div>
    );
};

export default Main;