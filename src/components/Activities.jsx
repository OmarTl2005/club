import posts from '../data/posts';
import { useState } from 'react';

const Activities = () => {
    const [filteredPosts, setFilteredPosts] = useState(posts);

    const filterItems = (cat) => {
        const newItem = posts.filter((newval) => newval.category === cat);
        setFilteredPosts(newItem);
    };

    const resetFilter = () => {
        setFilteredPosts(posts);
    };

    return (
        <div className="flex items-center justify-center flex-col self-center xsm:w-full md:w-[80%] h-full">
            <h1 className="font-outfit border-b-2 mb-11 border-b-black text-green-700 md:text-4xl xsm:text-3xl text-bold hover:-translate-y-2 cursor-pointer transition-all duration-500">Activities</h1>
            <div className='md:w-[80%] xsm:w-full flex xsm:flex-wrap md:flex-nowrap items-center justify-around font-outfit my-6 gap-1'>
                <button className='isolate aspect-video bg-blue-500/90 shadow-2xl ring-1 ring-black/7 transition-all duration-700 hover:-translate-y-1 text-white hover:bg-transparent hover:text-black rounded-full py-2 px-4 ' onClick={() => resetFilter()}>All</button>
                <button className='isolate aspect-video bg-blue-500/90 shadow-2xl ring-1 ring-black/7 transition-all duration-700 hover:-translate-y-1 text-white hover:bg-transparent hover:text-black rounded-full py-2 px-4 ' onClick={() => filterItems("football")}>Football</button>
                <button className='isolate aspect-video bg-blue-500/90 shadow-2xl ring-1 ring-black/7 transition-all duration-700 hover:-translate-y-1 text-white hover:bg-transparent hover:text-black rounded-full py-2 px-4 ' onClick={() => filterItems("basketball")}>Basketball</button>
                <button className='isolate aspect-video bg-blue-500/90 shadow-2xl ring-1 ring-black/7 transition-all duration-700 hover:-translate-y-1 text-white hover:bg-transparent hover:text-black rounded-full py-2 px-4 ' onClick={() => filterItems("volleyball")}>Volleyball</button>
                <button className='isolate aspect-video bg-blue-500/90 shadow-2xl ring-1 ring-black/7 transition-all duration-700 hover:-translate-y-1 text-white hover:bg-transparent hover:text-black rounded-full py-2 px-4 ' onClick={() => filterItems("handball")}>Handball</button>
                <button className='isolate aspect-video bg-blue-500/90 shadow-2xl ring-1 ring-black/7 transition-all duration-700 hover:-translate-y-1 text-white hover:bg-transparent hover:text-black rounded-full py-2 px-4 ' onClick={() => filterItems("other")}>Other</button>
            </div>
            <div className='flex flex-wrap justify-center w-full h-full mb-4 gap-7'>
                {filteredPosts.map((val) => (
                    <div className="md:w-1/2 lg:w-1/3 xsm:w-[80%] md:h-[300px] hover:-translate-y-2 cursor-pointer trasition-all duration-700 flex flex-col text-center items-center justify-between isolate aspect-video rounded-3xl bg-blue-500/70 shadow-2xl ring-1 ring-black/5 py-4" key={val.id}>
                        <img className='rounded-3xl w-[70%] h-[70%] cursor-pointer' src={ val.img } alt="football tournament" />
                        <h1 className='text-xl font-libre font-semibold cursor-pointer text-blue-800/90 trasition_all duration-700' >{val.title}:</h1>
                        <p className='text-lg font-space w-[90%]'>{val.desc}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Activities;
