const Hero = () => {
  return (
    <div className="min-h-screen">
      <div
        className="relative w-full h-screen bg-cover bg-center bg-no-repeat flex items-center"
        style={{ backgroundImage: 'url("./assets/desktop/image-hero.jpg")' }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="lg:w-1/2 border border-white mx-6 lg:mx-[150px] p-6 text-white font-josefin font-light text-[50px] lg:text-8xl z-10 ">
          IMMERSIVE EXPERIENCES THAT DELIVER
        </div>
      </div>
    </div>
  );
};

export default Hero;
