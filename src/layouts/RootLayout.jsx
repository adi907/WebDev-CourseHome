import Navbar from "@/components/custom/navbar/index";
import Footer from "@/components/custom/footer/index";
import { Outlet } from "react-router-dom";

const RootLayout = () => {

    return(
        <>
            <Navbar />
            <main >
                <Outlet />
            </main>
            <Footer />
        </>

    )

}

export default RootLayout;