import football from '../media/activities/football tournament.jpg';
import basketball from '../media/activities/basketball.jpg';
import threePoint from '../media/activities/3pt.jpg';

const posts = [
    {
        id: "1",
        title: "football tournament",
        category: "football",
        desc: "Football tornament updates and games",
        url: "/activities/football",
        img: football
    },
    {
        id: "2",
        title: "basketball tournament",
        category: "basketball",
        desc: "Basketball tournament rules and informations",
        img: basketball
    },
    {
        id: "3",
        title: "shooting contest",
        category: "basketball",
        desc: "Open 3 pointer shooting contest",
        url: "/activities/shooting-contest",
        img: threePoint
    }
]

export default posts