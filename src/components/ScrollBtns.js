import React, { useRef } from "react";

const ScrollBtns = () => {
  const sectionRef = useRef();

  const scroll = (offsetValue) => {
    sectionRef.current.scrollLeft += offsetValue;
  };

  return (
    <div className="scroll-container">
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="left-arrow"
          onClick={() => scroll(-300)}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 19.5 8.25 12l7.5-7.5"
          />
        </svg>
      </div>
      <div ref={sectionRef} className="images-container">
        <img
          className="virat-image"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQuKHYq2ce1jFOt_avam8E89SbSWKSOSrnqGSEb0QxeOkjGDjdyKaVR53Bty6f2ExCQfw&usqp=CAU"
          alt="king"
        ></img>
        <img
          className="virat-image"
          src="https://w0.peakpx.com/wallpaper/164/447/HD-wallpaper-virat-kohli-wali-pays-tribute-virat-kohli-pays-tribute-king-kohli-cricketer-thumbnail.jpg"
          alt="king"
        ></img>

        <img
          className="virat-image"
          src="https://wallpapers.com/images/featured/virat-kohli-yc8dfpcjssp3s4se.jpg"
          alt="king"
        ></img>
        <img
          className="virat-image"
          src="https://i.pinimg.com/736x/42/06/b7/4206b73d45c5b8079ab4561d6ebce880.jpg"
          alt="king"
        ></img>
        <img
          className="virat-image"
          src="https://cms-article.forbesindia.com/media/images/2022/Aug/img_192351_viratkohli.jpg"
          alt="king"
        ></img>

        <img
          className="virat-image"
          src="https://assets.thehansindia.com/h-upload/2022/01/16/1195087-kohli.webp"
          alt="king"
        ></img>
        <img
          className="virat-image"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQuKHYq2ce1jFOt_avam8E89SbSWKSOSrnqGSEb0QxeOkjGDjdyKaVR53Bty6f2ExCQfw&usqp=CAU"
          alt="king"
        ></img>
        <img
          className="virat-image"
          src="https://w0.peakpx.com/wallpaper/164/447/HD-wallpaper-virat-kohli-wali-pays-tribute-virat-kohli-pays-tribute-king-kohli-cricketer-thumbnail.jpg"
          alt="king"
        ></img>

        <img
          className="virat-image"
          src="https://wallpapers.com/images/featured/virat-kohli-yc8dfpcjssp3s4se.jpg"
          alt="king"
        ></img>
        <img
          className="virat-image"
          src="https://i.pinimg.com/736x/42/06/b7/4206b73d45c5b8079ab4561d6ebce880.jpg"
          alt="king"
        ></img>
        <img
          className="virat-image"
          src="https://cms-article.forbesindia.com/media/images/2022/Aug/img_192351_viratkohli.jpg"
          alt="king"
        ></img>

        <img
          className="virat-image"
          src="https://assets.thehansindia.com/h-upload/2022/01/16/1195087-kohli.webp"
          alt="king"
        ></img>
      </div>
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="right-arrow"
          onClick={() => scroll(300)}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m8.25 4.5 7.5 7.5-7.5 7.5"
          />
        </svg>
      </div>
    </div>
  );
};

export default ScrollBtns;
