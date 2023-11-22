import { TbWorldPin } from "react-icons/tb";

const Navbar = () => {
    return ( 
        <div className="nav w-full flex flex-row bg-red-500 h-20 " >
            <TbWorldPin fontSize={50} className="mr-5 text-white"/>
            <h2 className="text-2xl text-white">my travel journal.</h2>
        </div>
     );
}
 
export default Navbar;