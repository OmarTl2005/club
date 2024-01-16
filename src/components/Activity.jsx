const Activity = ({ blog }) => {
  return (
    <div className="flex items-center justify-center flex-col self-center xsm:w-full md:w-[80%] h-full">
      <h1 className="font-outfit border-b-2 mb-11 mt-8 border-b-black text-green-700 md:text-4xl xsm:text-3xl text-bold hover:-translate-y-2 cursor-pointer transition-all duration-500">3pt Contest</h1>
      <div>
        <div className="flex flex-col items-center justify-center">
          <h1 className="font-outfit xsm:text-2xl font-semibold md:text-4xl xsm:w-[90%] md:w-full text-blue-700/80 mb-10 text-center">{blog.title}</h1>
          <img className="rounded-3xl shadow-2xl shadow-black/60 xsm:w-[80%] md:w-[90%]" alt='Three point contest' src={ blog.img } />
          <div className="text-center font-outfit text-xl mt-[100px] w-[90%] flex flex-col">{blog.content}</div>
        </div>
      </div>
    </div>
  );
};

export default Activity;
