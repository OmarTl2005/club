import { SiInstagram } from "react-icons/si";
import { FaFacebook } from "react-icons/fa6";
import { BiLogoGmail } from "react-icons/bi";
import { PiLinkedinLogoBold, PiGithubLogoDuotone } from "react-icons/pi";

const Contact = () => {
    return (
        <section className="md:w-[80%] xsm:w-full h-full flex items-center justify-center flex-col self-center mb-12">
            <h1 className="font-outfit border-b-2 mb-11 border-b-black text-green-700 md:text-4xl xsm:text-3xl text-bold hover:-translate-y-2 cursor-pointer transition-all duration-500">Contact</h1>
            <div className="w-full h-full flex flex-col items-center justify-center gap-y-px">
                <div className="w-full flex flex-col items-center justify-center">
                    <h1 className="font-libre text-2xl text-blue-500">Contact Our Team:</h1>
                    <div className="mt-7 w-1/2 flex justify-center items-center h-full mb-7">
                        <div className="flex flex-col h-full items-center justify-between gap-2">
                            <a alt="instagram" href="https://www.instagram.com/estn_sports_club" target="_blank" rel="noreferrer"><SiInstagram className="text-4xl text-black hover:text-[#cd486b] transition-all duration-500 hover:-translate-y-2 cursor-pointer" /></a>
                            <a alt="Facebook" href="https://www.facebook.com/profile.php?id=61553553870800&mibextid=ZbWKwL" target="_blank" rel="noreferrer"><FaFacebook  className="text-4xl text-black hover:text-[#3b5998] transition-all duration-500 hover:-translate-y-2 cursor-pointer"/></a>
                            <a alt="Send an email" href="https://mail.google.com/mail/?view=cm&fs=1&to=sportsclub@codenerd.tech" target="_blank" rel="noreferrer"><BiLogoGmail className="text-4xl text-black hover:text-[#c71610] transition-all duration-500 hover:-translate-y-2 cursor-pointer" /></a>
                        </div>
                        <div className="flex flex-col h-full gap-2 ml-3">
                            <h1 className="font-space text-black cursor-pointer text-2xl mt-[3px] mb-[1px]">Instagram</h1>
                            <h1 className="font-space text-black cursor-pointer text-2xl mt-[3px]">Facebook</h1>
                            <h1 className="font-space text-black cursor-pointer text-2xl mt-[3px]">Email Us</h1>
                        </div>
                    </div>
                </div>
                <div className="w-full h-full flex flex-col items-center justify-center">
                    <h1 className="font-libre text-2xl text-blue-500">Contact The Developer:</h1>
                    <div className="xsm:w-[90%] sm:w-[60%] flex flex-col items-center justify-center text-center mt-7 font-space">
                        <h1 className="text-2xl text-lime-700">Omar taouil</h1>
                        <h2 className="text-xl mt-4">A Member of the team, a software engineering student at alx africa and a 1st year student at school of science and technology Nador.</h2>
                        <div className="flex flex-col justify-center mt-5 text-xl">
                            <h1>Email: omartaouil@codenerd.tech</h1>
                            <div className="flex items-center justify-around text-5xl mt-2">
                                <a target="_blank" rel="noreferrer" className="hover:-translate-y-2 hover:text-[#0072b1] transition-all duration-500" href="https://www.linkedin.com/in/taouilomar/"><PiLinkedinLogoBold /></a>
                                <a target="_blank" rel="noreferrer" className="hover:-translate-y-2 hover:text-[#072140] transition-all duration-500" href="https://github.com/OmarTl2005/"><PiGithubLogoDuotone /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact