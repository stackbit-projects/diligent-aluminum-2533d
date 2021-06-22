/**
    * @description      :
    * @author           :
    * @group            :
    * @created          : 15/06/2021 - 16:54:33
    *
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 15/06/2021
    * - Author          :
    * - Modification    :
**/
import React from "react";
import { ParallaxBanner, ParallaxProvider } from "react-scroll-parallax";
import "./Waves.scoped.scss";

export default function Background({children}) {
    var state = {
    value: -1
  };

  const handleChange = (event, value) => {
    document.getElementById(value).scrollIntoView();
    this.setState({ value });
  };

    return (
      <div>
        <canvas style={{ position: "absolute", zIndex: 900 }} id="canvas" />

        <ParallaxProvider>
          <div className="App" style={{ position: "relative" }}>
            <ParallaxBanner
              className="your-class"
              layers={[
                {
                    amount: 1,
                    expanded: true
                  },
                {

                  amount: 3,
                  expanded: true
                },

              ]}
              style={{
                height: "100vh",
                overflow: "auto !important"
              }}
            >
             {children}{" "}
            </ParallaxBanner>
          </div>
        </ParallaxProvider>
      </div>
    );
  }
