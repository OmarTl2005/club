import logo from "../media/logo.svg";
import { TypeAnimation } from 'react-type-animation';
import { SiInstagram } from "react-icons/si";
import { FaFacebook } from "react-icons/fa6";
import { BiLogoGmail } from "react-icons/bi";

const Home = () => {
    return (
        <main className="w-full xsm:w-full md:w-[80%] xsm:pt-[100px] md:pt-0 self-center xsm:h-full md:h-[83vh] flex flex-row items-center justify-center" >
            <section className="flex w-[4%] items-center flex-col justify-center md:mr-[30px] xsm:pl-4 md:pl-0 sm:pl-6 z-[1000000]">
                <a alt="instagram" href="https://www.instagram.com/estn_sports_club" target="_blank" rel="noreferrer"><SiInstagram className="md:text-4xl sm:text-3xl xsm:text-2xl text-black mb-[15px] hover:text-[#cd486b] transition-all duration-500 hover:-translate-y-2 cursor-pointer" /></a>
                <a alt="Facebook" href="https://www.facebook.com/profile.php?id=61553553870800&mibextid=ZbWKwL" target="_blank" rel="noreferrer"><FaFacebook  className="md:text-4xl xsm:text-2xl sm:text-3xl text-black mb-[15px] hover:text-[#3b5998] transition-all duration-500 hover:-translate-y-2 cursor-pointer"/></a>
                <a alt="Send an email" href="https://mail.google.com/mail/?view=cm&fs=1&to=sportsclub@codenerd.tech" target="_blank" rel="noreferrer"><BiLogoGmail className="md:text-4xl xsm:text-2xl sm:text-3xl text-black mb-[15px] hover:text-[#c71610] transition-all duration-500 hover:-translate-y-2 cursor-pointer" /></a>
            </section>
            <section className="xsm:flex-col-reverse md:flex-row flex-col-reverse w-full self-end h-full flex items-center justify-between" >
                <section className="md:w-[70%] xsm:w-[90%] flex flex-col justify-center items-center">
                    <TypeAnimation
                        sequence={[
                            'Experience the thrill of every game right Here!',
                            2000,
                            ''
                            ]}
                        wrapper="h1"
                        speed={35}
                        style={{ display: 'inline-block' }}
                        repeat={Infinity}
                        cursor="true"
                        className="font-libre font-bold text-blue-700 xsm:text-lg sm:text-xl md:text-4xl  leading-[50px] text-center z-[-1]"
                    />
                    <h3 className="xsm:mb-[4.3rem] mt-20 w-[80%] text-center xl:text-2xl md:text-xl font-outfit">Your home for real-time game scores, match schedules, and team updates. Stay connected with our sports club's latest victories and upcoming events!</h3>
                    <div>
                        <button href="/activities">See Activities</button>
                    </div>
                </section>
                <section className="md:w-[70%] xsm:w-[85%] sm:w-[60%] hero:w-[45%] ">
                    <div className="w-full h-full flex items-center justify-end z-10 ">
                        <img alt="hero" src={ logo } />
                    </div>
                </section>
            </section>
        </main>
    )
}

export default Home