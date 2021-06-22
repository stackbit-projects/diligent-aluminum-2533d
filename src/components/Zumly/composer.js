/**
    * @description      :
    * @author           :
    * @group            :
    * @created          : 21/06/2021 - 00:15:03
    *
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 21/06/2021
    * - Author          :
    * - Modification    :
**/
import React, { Component } from 'react';
import Zumly from "../Zumly";
import "zumly/dist/zumly.css";
import ReactDOM from 'react-dom';




/**
* Zumly | Hello World!
* https://zumly.org
*/

const hello = `<div class="z-view hello">
H E L L O <br>
W <span class='zoom-me o' data-to='world'>O</span> R L D!
</div>
`;

const world = {
  async render() {
    return `<div class="z-view world">
<img class="world" src="https://raw.githubusercontent.com/zumly/website/gh-pages/images/world.png"/>
</div>`
  }
 };

// Zumly instance
const app = new Zumly({
  mount: ".example",
  initialView: "hello",
  views: {
    hello,
    world
  }
});


const ZumZum = app.init();

class Zoomly extends Component {

    render(){
       <ZumZum />    }
    };
export default Zoomly;


