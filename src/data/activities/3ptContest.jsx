import threepoint from '../../media/activities/3pt.jpg';

const blog = [
    {
        url: "/activities/shooting-contest",
        title: "Join Our Three-Point Shooting Contest and Showcase Your Skills!",
        content: (
            <p className='text-xl xsm:w-[90%] md:w-full self-center'>
                <h1 className='text-2xl font-semibold mb-8'>Greetings, Sports Club Members and Basketball Enthusiasts!<br></br></h1>
                We are thrilled to announce our upcoming event – the Three-Point Shooting Contest! 🏀 Whether you're a seasoned sharpshooter or just getting started with your three-pointers, this contest is the perfect opportunity to showcase your skills and have a great time with fellow basketball enthusiasts.
                <ul className='flex-col self-center text-start my-8 list-disc w-[90%] hidden'>
                    <h3 className='font-semibold'>Event Details:</h3>
                    <li>Date: </li>
                    <li>Time: </li>
                    <li>Location: </li>
                </ul>
                <h3 className='text-2xl font-semibold mb-8'>What to Expect:</h3>
                <ul className='list-disc text-start mb-8'>
                    <li><span className='font-semibold'>Friendly Competition: </span>Compete in a friendly and inclusive environment where basketball lovers of all skill levels are welcome.</li>
                    <li><span className='font-semibold'>Prizes: </span>Exciting prizes await the top performers.</li>
                    <li><span className='font-semibold'>Networking: </span>Connect with fellow participants who share the same passion for basketball.</li>
                    <li><span className='font-semibold'>Fun Atmosphere: </span>Enjoy the thrill of the competition with music, food, and a supportive crowd cheering you on.</li>
                </ul>
                <h3 className='text-2xl font-semibold mb-8'>How to Participate:</h3>
                <ol className='list-decimal text-start mb-8'>
                    <li><span className='font-semibold'>Register: </span>Fill out the registration form Below.</li>
                    <li><span className='font-semibold'>Prepare: </span>Practice your three-pointers and get ready to bring your A-game.</li>
                    <li><span className='font-semibold'>Show Up: </span>Join us on [event date] at [venue] and be prepared for an unforgettable experience.</li>
                </ol>
                <h3 className='text-2xl font-semibold mb-8'>Fill the Form Now and Secure Your Spot!</h3>
                <iframe title='Three Pointer Contest Form' className='w-full md:h-[970px] xsm:h-[1050px] mb-8' src="https://docs.google.com/forms/d/e/1FAIpQLSdqOytWoeUwiYttUcjndPYHBMo_BRk2q8lv52TOWUW_9DfeCQ/viewform?embedded=true">Loading…</iframe>
            </p>
        ),
        img: threepoint,
    }
]

export default blog;