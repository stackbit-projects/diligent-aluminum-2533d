import React from "react";
import PropTypes from "prop-types";

export default function HeaderBlogPostDark({
  image,
  title,
  date,
  quote,
  quoteSource,
  description,
  icon,
  color,
}) {
  const iconBgColor = {
    purple: "bg-purple",
    blue: "bg-blue",
    black: "bg-black-gradient",
    gradient: "bg-gradient"
  };
  return (
    <>
      <div className="relative flex items-center p-0 min-h-screen-75">
        <div
          className="absolute w-full h-full bg-cover bg-50 z-1"
          style={{
            backgroundImage: "url('" + image + "')",
          }}
        ></div>
        <div className="absolute w-full h-full bg-black opacity-40 z-2"></div>
        <div className="container px-4 mx-auto z-3">
          <div className="flex flex-wrap justify-center -mx-4 text-white">
            <h1 className="mt-0 mb-2 mb-12 text-4xl font-bold leading-tight">
              {title}
            </h1>
          </div>
        </div>
      </div>

      <div className="container relative px-4 pt-20 mx-auto -mt-64 z-3">
        <div className="flex flex-wrap justify-center -mx-4 text-white">
          <div className="rounded-lg shadow-lg bg-blueGray-800">
            <div className="-mt-6 text-center">
              <div
                className={
                  iconBgColor[color] +
                  " rounded-full text-white w-16 h-16 inline-flex items-center justify-center -mt-2"
                }
              >
                <i className={"p-1 text-xl " + icon}></i>
              </div>
            </div>
            <blockquote className="block mx-0 mt-0 mt-6 mb-4 text-xl text-center">
              <small className="font-light">{date}</small>
              <footer className="block text-base text-blueGray-500">
                <span className="mr-2">{quote}</span>
                <cite title="Source Title">{quoteSource}</cite>
              </footer>
            </blockquote>
            <p className="px-12 pt-6 pb-12 mb-0 leading-relaxed text-center">
              {description}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

HeaderBlogPostDark.defaultProps = {
  color: "gradient",
};

HeaderBlogPostDark.propTypes = {
  // background image source
  image: PropTypes.string,
  title: PropTypes.string,
  date: PropTypes.string,
  quote: PropTypes.string,
  quoteSource: PropTypes.string,
  description: PropTypes.string,
  icon: PropTypes.string,
  // the background color of the icon
  color: PropTypes.oneOf([
    "gradient",
    "black",
    "purple",
    "blue"
  ]),
};
