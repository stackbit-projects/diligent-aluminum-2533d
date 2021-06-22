import React from "react";
import ReactDOM from "react-dom";
import { ParallaxBanner, ParallaxProvider } from "react-scroll-parallax";

import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import Button from "@material-ui/core/Button";

import "./dust";

import "./bannerstyles.css";

class App extends React.Component {
  state = {
    value: -1
  };

  handleChange = (event, value) => {
    document.getElementById(value).scrollIntoView();
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <div>
        <canvas style={{ position: "absolute", zIndex: 900 }} id="canvas" />

        <ParallaxProvider>
          <div className="App" style={{ position: "relative" }}>
            <ParallaxBanner
              className="your-class"
              layers={[
                {
                  amount: 0.3,
                  expanded: true
                },
                {
                  amount: 0.1,
                  expanded: true
                },
                {
                  image: "./scarymore.svg",
                  amount: 1,
                  expanded: false
                },
                {
                  image: "./runningmore.svg",
                  amount: 1,
                  expanded: false
                }
              ]}
              style={{
                height: "100vh",
                overflow: "auto !important"
              }}
            >
              <div className="mainbody">
                <span id="about_section" />
                <div class="text-center">
                  <h1 className="pl-2 mt-8 leading-normal text-white border-l-8 2xl:text-9xl xl:text-9xl text-9xl dincondensed lg:pl-12 xl:mt-0">
                    Hi.
                  </h1>
                  <h2 className="font-bold underline dincondensed white-text font-size-3xl ">
                    We Need To Talk.
                  </h2>
                  <p className="grotesk white-text font-size-xl">
                    It's about your brand and creative again. It's been...
                    frightening.
                  </p>{" "}
                </div>
              </div>
            </ParallaxBanner>
          </div>
        </ParallaxProvider>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
