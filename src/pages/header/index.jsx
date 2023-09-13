import Logo from "../../../public/icone.png";
import Icone from "../../../public/hamburger.svg"
import Image from "next/image"

const Header = () => {
    return (
        <div className=" border-[1px] border-[#2300FF] p-2 flex justify-between">
            <div>
                <Image className="w-[4rem] h-[2rem] justify-end" src={Icone} alt="icone" />
            </div>
            <div>
                <Image className="w-[4rem] h-[2rem] justify-start" src={Logo} />
            </div>
        </div>
    )
};

export default Header;