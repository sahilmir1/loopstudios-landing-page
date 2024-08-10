const About = () => {
  return (
    <div className="mt-20 mx-6 lg:m-[150px] flex flex-wrap relative">
      <div className="lg:w-[60%] mb-10">
        <img
          src="./assets/desktop/image-interactive.jpg"
          alt=""
          className="w-full"
        />
      </div>
      <div className="lg:absolute right-[2%] top-[40%] lg:w-1/2 lg:p-20 bg-white">
        <h1 className="text-4xl text-center lg:text-left lg:text-6xl font-light mb-4">
          THE LEADER IN INTERACTIVE VR
        </h1>
        <p className="text-center lg:text-left lg:w-[80%] font-alata font-light text-dark-gray leading-6">
          Founded in 2011, Loopstudios has been producing world-class virtual
          reality projects for some of the best companies around the globe. Our
          award-winning creations have transformed businesses through digital
          experiences that bind to their brand.
        </p>
      </div>
    </div>
  );
};

export default About;
