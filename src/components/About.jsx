import { TypeAnimation } from "react-type-animation";
import running from '../media/running.gif';

const About = () => {
    return (
        <div className="md:w-[65%] xl:w-[40%] xsm:w-[80%] flex flex-col items-center justify-center self-center h-full my-[5%]">
            <h1 className="font-outfit border-b-2 mb-11 border-b-black text-green-700 md:text-4xl xsm:text-3xl text-bold hover:-translate-y-2 cursor-pointer transition-all duration-500">About</h1>
            <div className="flex items-center justify-center w-full">
                <TypeAnimation
                    sequence={[
                        1000,
                        'Welcome to ESTN Sports Club!',
                        2500,
                        ''
                    ]}
                    wrapper="h2"
                    speed={30}
                    style={{ display: 'inline-block' }}
                    repeat={Infinity}
                    cursor="true"
                    className="font-libre md:text-xl xsm:text-lg text-blue-600 font-semibold z-[-1] text-center"
                />
                    <img src={ running } alt="running" className="md:h-[100px] md:w-[100px] xsm:h-[76px] xsm:w-[76px]" />
            </div>
            <p 
                className="font-space my-10 text-center font-medium md:text-lg xsm:text-md"
            >
                At ESTN Sports Club, we're passionate about fostering 
                a community that celebrates sports and physical activity. Our club 
                was founded with the aim of bringing together students who share 
                a love for sports, fitness, and a desire to stay active.
            </p>
            <h2 className="font-libre mb-10 md:text-xl xsm:text-lg text-blue-600 font-semibold">Our Mission:</h2>
            <p 
                className="font-space text-center font-medium md:text-lg xsm:text-md"
            >
                We strive to promote a healthy and active lifestyle among 
                ESTN students through various sports activities, 
                events, and workshops. We believe in creating an inclusive 
                environment where everyone can participate, regardless of skill 
                level or prior experience.
            </p>
            <h2 className="font-libre my-10 md:text-xl xsm:text-lg text-blue-600 font-semibold">What We Offer:</h2>
            <p 
                className="font-space text-center font-medium md:text-lg xsm:text-md"
            >
                <span className="font-bold">Diverse Sports Activities: </span>
                From soccer and basketball to voleyball and handball etc. we organize a wide 
                range of activities to cater to different interests.<br />
                <span className="font-bold">Skill Development: </span>
                Whether you're a beginner looking to learn a new sport or an experienced 
                athlete seeking to enhance your skills, our club provides opportunities 
                for growth and development.<br />
                <span className="font-bold">Community Engagement: </span>
                Beyond the field or court, we encourage social interaction and bonding among members through team-building events and social gatherings.
            </p>
        </div>
    )
}

export default About