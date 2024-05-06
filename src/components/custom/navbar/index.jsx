import { useEffect, useState } from "react";
import { UserRound } from "lucide-react";

const Navbar = () =>{

    const [navBg, setNavBg] =useState(false);

    const changeNavBg = () => {
        window.scrollY >= 35 ? setNavBg(true) : setNavBg(false);
    }

    useEffect( () => {
        window.addEventListener("scroll",changeNavBg);
        return () => {
            window.removeEventListener("scroll", changeNavBg);
        };
    },[]);

    return (
        <>
            <section className="w-full fixed top-0 z-30">
                <div
                  className={`h-20 mx-auto border-b-2 border-white/[0.2] flex justify-between items-center max-w-[3000px] px-[5%] ${
                    navBg ? "backdrop-blur-sm bg-deep-blue/[0.6]" : "bg-deep-blue/[0.8]"
                  }`}
                >

                    <h2 className="text-2xl font-bold text-white">Web Development</h2>
                    <UserRound color="#fff" className="cursor-pointer" />


            </div>

            </section>
        </>
    )
}

export default Navbar;