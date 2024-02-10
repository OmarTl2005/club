import football from "../../media/activities/football tournament.jpg";
import matchs from "../../media/activities/matchs.png";

const blog = [
    {
        url: "/activities/football",
        top: "Football Tournament",
        title: "Football Tournament 2024: A Spectacle of Skill and Sportsmanship",
        content: (
            <p className='text-xl xsm:w-[90%] md:w-full self-center flex items-center flex-col mb-20'>
                <h1 className='text-2xl font-semibold mb-4'>Greetings, football enthusiasts!<br></br></h1>
                We are thrilled to announce the kickoff of the Sports Club Football Tournament 2024, a sporting extravaganza that promises to be a celebration of skill, teamwork, and the sheer joy of the beautiful game.
                <ul className='flex-col self-center text-start my-8 list-disc w-[90%] hidden'>
                    <h3 className='font-semibold'>Unveiling the Tournament:</h3>
                    <li>Date: </li>
                    <li>Time: </li>
                    <li>Location: </li>
                </ul>
                <h3 className='text-2xl font-semibold my-4'>Embracing the Spirit of Sportsmanship:</h3>
                At Sports Club, we believe in more than just winning or losing. Our football tournament is not just about scores; it's about the camaraderie, the friendships forged on the field, and the memories that will last a lifetime. We encourage everyone to cheer for their favorite teams, respect the competitors, and uphold the true spirit of sportsmanship.
                <h3 className='text-2xl font-semibold my-4'>Key Fixtures and Matchups:</h3>
                We've lined up a series of thrilling fixtures that will keep you on the edge of your seats. Whether you are a die-hard football fan or a casual spectator, there's something for everyone. Check out our schedule and mark your calendars for the most anticipated matchups of the tournament.
                <img className="mt-10 mb-8 rounded-lg xsm:h-full xsm:w-full lg:h-[70%] lg:w-[70%] self-center shadow-2xl shadow-black/90" src={matchs} alt="schedule" />
                <h3 className='text-2xl font-semibold my-4'>Stay Updated:</h3>
                For live updates, scores, and highlights, make sure to follow our social media channels that you will find in the <a className="font-bold text-cyan-600 hover:underline decoration-2 transition-all duration-500" href="/">homepage</a>. We'll be sharing behind-the-scenes glimpses, post-match analyses, and, of course, the jubilation of victory and the resilience in defeat.
            </p>
        ),
        img: football,
    },
]

export default blog;