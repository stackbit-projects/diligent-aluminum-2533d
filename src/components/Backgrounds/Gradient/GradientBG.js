import React, { Component } from 'react';
import { Link } from "gatsby"
import "./GradientBG.scoped.scss";

export default function Background({children}) {
        return (
<>
          <div className="gradientbgdiv">
                {children}
          </div>
          </>
        );
    }

