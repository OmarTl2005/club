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
            <div className='w-[80%] flex items-center justify-around font-outfit my-4'>
                <button className='transition-all duration-500 hover:-translate-y-1 bg-slate-900 text-white hover:bg-transparent hover:text-black rounded-full py-2 px-4 ' onClick={() => resetFilter()}>All</button>
                <button className='transition-all duration-500 hover:-translate-y-1 bg-slate-900 text-white hover:bg-transparent hover:text-black rounded-full py-2 px-4 ' onClick={() => filterItems("football")}>Football</button>
                <button className='transition-all duration-500 hover:-translate-y-1 bg-slate-900 text-white hover:bg-transparent hover:text-black rounded-full py-2 px-4 ' onClick={() => filterItems("basketball")}>Basketball</button>
                <button className='transition-all duration-500 hover:-translate-y-1 bg-slate-900 text-white hover:bg-transparent hover:text-black rounded-full py-2 px-4 ' onClick={() => filterItems("volleyball")}>Volleyball</button>
                <button className='transition-all duration-500 hover:-translate-y-1 bg-slate-900 text-white hover:bg-transparent hover:text-black rounded-full py-2 px-4 ' onClick={() => filterItems("handball")}>Handball</button>
                <button className='transition-all duration-500 hover:-translate-y-1 bg-slate-900 text-white hover:bg-transparent hover:text-black rounded-full py-2 px-4 ' onClick={() => filterItems("other")}>Other</button>
            </div>
            <div className='flex flex-wrap w-full h-full'>
                {filteredPosts.map((val) => (
                    <div className="w-1/3 flex flex-col text-center items-center justify-between" key={val.id}>
                        <img className='rounded-3xl w-[70%] h-[70%]' src={ val.img } alt="football tournament" />
                        <h1 className='text-xl font-libre text-green-700 font-semibold' >{val.title}:</h1>
                        <p className='text-lg font-space w-full'>{val.desc}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Activities;
