import React from "react";

const Products = () => {
  interface Image {
    imgLink: string;
    name: string;
  }

  interface ImageGridProps {
    images: Image[];
  }

  const getProductImages = (screen: string): Image[] => {
    return [
      {
        imgLink: `./assets/${screen}/image-deep-earth.jpg`,
        name: "deep earth",
      },
      {
        imgLink: `./assets/${screen}/image-night-arcade.jpg`,
        name: "night arcade",
      },
      {
        imgLink: `./assets/${screen}/image-soccer-team.jpg`,
        name: "soccer team vr",
      },
      {
        imgLink: `./assets/${screen}/image-grid.jpg`,
        name: "the grid",
      },
      {
        imgLink: `./assets/${screen}/image-from-above.jpg`,
        name: "from up above vr",
      },
      {
        imgLink: `./assets/${screen}/image-pocket-borealis.jpg`,
        name: "pocket borealis",
      },
      {
        imgLink: `./assets/${screen}/image-curiosity.jpg`,
        name: "the curiosity",
      },
      {
        imgLink: `./assets/${screen}/image-fisheye.jpg`,
        name: "make it fisheye",
      },
    ];
  };

  // Component to render images
  const ImageGrid: React.FC<ImageGridProps> = ({ images }) => (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
      {images.map((item, index) => (
        <div
          className="w-full brightness-85 h-[150px] lg:h-[550px] relative bg-cover bg-center bg-no-repeat"
          key={index}
          style={{
            backgroundImage: `url(${item.imgLink})`,
          }}
        >
          <h1 className="absolute z-50 bottom-0 left-0 m-4 text-white p-2 uppercase font-josefin font-light text-4xl w-2/3">
            {item.name}
          </h1>
        </div>
      ))}
    </div>
  );

  const desktopImages = getProductImages("desktop");
  const mobileImages = getProductImages("mobile");

  return (
    <div className="mx-6 lg:mx-[150px] my-20">
      <div className="flex w-full justify-center lg:justify-between items-center mb-10 lg:mb-20">
        <h1 className="text-4xl lg:text-5xl font-josefin uppercase font-light">
          Our Creations
        </h1>
        <button className="hidden lg:block border border-black h-10 w-40 font-josefin rounded-sm tracking-widest hover:bg-black hover:text-white">
          SEE ALL
        </button>
      </div>

      {/* Desktop Grid */}
      <div className="hidden lg:block">
        <ImageGrid images={desktopImages} />
      </div>

      {/* Mobile Grid */}
      <div className="lg:hidden">
        <ImageGrid images={mobileImages} />
      </div>

      <div className="flex w-full justify-center lg:hidden mt-10">
        <button className="border border-black h-10 w-40 font-josefin rounded-sm tracking-widest hover:bg-black hover:text-white">
          SEE ALL
        </button>
      </div>
    </div>
  );
};

export default Products;
