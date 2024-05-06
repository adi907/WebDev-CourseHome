import { Separator } from "@/components/ui/separator";

const Footer = () => {
    return (
        <>
            <footer className="max-w-[2000px] mx-auto">
                <section className="h-[3rem] lg:h-[4rem] bg-deep-blue text-[#c6c7c2] text-[11px] lg:text-[16px] flex justify-center items-center">
                    Copyright
                    <Separator
                        className="h-[1.25rem] mx-2 lg:mx-3 bg-[#c6c7c2]"
                        orientation="vertical"
                    />
                    &copy;
                    <span className="text-gold mx-1">Aditya Sharma</span>
                    <Separator
                        className="h-[1.25rem] mx-2 lg:mx-3 bg-[#c6c7c2]"
                        orientation="vertical"
                    />
                    <span>All Rights Reserved</span>
                </section>
            </footer>
        </>
    )
}

export default Footer;