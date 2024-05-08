import InputBuscador from "../InputBuscador/InputBuscador";
import LogoHeader from "../LogoHeader/LogoHeader";

const Header = ({ funcionBuscador }) => {
    return (
    <div className="w-full flex bg-slate-900 bg-opacity-95 py-5 px-40 items-center h-24 fixed top-0 z-10">
      <LogoHeader />
      <InputBuscador funcionLeerInput={ funcionBuscador }/>
    </div>
    );
};

export default Header;