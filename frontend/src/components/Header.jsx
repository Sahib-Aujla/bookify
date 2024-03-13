import { Link } from "react-router-dom";
import bookify from "../assets/bookify.svg";
import { navigation } from "../constants";
import {useLocation} from 'react-router-dom';
const Header = () => {
    const pathName=useLocation();
    console.log(pathName);
  return (
    <div className="fixed top-0 z-50 bg-n-8/90 backdrop-blur-sm border-b border-n-6 lg:bg-n-8/90 lg:backdrop-blur-sm w-full">
      <div className="flex items-center justify-between px-5 lg:px-7.5 xl:px-10 max-lg:py-4">
        <Link className="block w-[12rem] xl:mr-8" to="/">
          <img src={bookify} width={60} height={60} alt="bookify" />
        </Link>

        <nav
        className={`fixed top-[5rem] left-0 right-0 bottom-0 bg-n-8 lg:static lg:flex lg:justify-end lg:bg-transparent`}
      >
        <div className="relative z-2 flex flex-col items-center justify-between m-auto lg:flex-row">
            {navigation?.map((nav)=>(
                <Link className={`block relative font-code text-2xl uppercase text-n-1 transition-colors hover:text-color-1 ${nav.onlyMobile ? "lg:hidden":""} px-6 py-6 md:py-8 lg:-mr-0.25 lg:text-xs lg:font-semibold ${nav.url===pathName.pathname ? "z-2 lg:text-n-1":"lg:text-n-1/50"} lg:leading-5 lg:hover:text-n-1 xl:px-12 `} key={nav.id} to={nav.url}>
                    {nav.title}
                </Link>
            ))}
        </div>
      </nav>
      </div>
     
    </div>
  );
};

export default Header;
