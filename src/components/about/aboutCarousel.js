import React from "react";
import Carousel from "./carousel";
import "./aboutCarousel.css";
import img1 from "../../images/spatial.png";
import img2 from "../../images/groupomania.png";
import img3 from "../../images/ohmyfood.png";
import img4 from "../../images/sunnyside.png";
import img5 from "../../images/orinoco.png";

class aboutCarousel extends React.Component {
  render() {
    const items = [
      { img: img1, name: "SPATIAL", link: "/spatial" },
      { img: img2, name: "GROUPOMANIA", link: "/groupomania" },
      { img: img3, name: "OHMYFOOD", link: "/ohmyfood" },
      { img: img4, name: "SUNNYSIDE", link: "/sunnyside" },
      { img: img5, name: "ORINOCO", link: "/orinoco" },
    ];
    console.log(items);

    const setting = {
      dragSpeed: 1.25,
      itemWidth: 450,
      itemHeight: 400,
      itemSideOffsets: 15,
    };

    const itemStyle = {
      width: `${setting.itemWidth}px`,
      height: `${setting.itemHeight}px`,
      margin: `0px ${setting.itemSideOffsets}px`,
    };

    return (
      <div className="container">
        <div className="linkHome">
          <a href="/#home" className="nameAbout">
            NICOLAS BICTEL
          </a>
        </div>
        <Carousel _data={items} {...setting}>
          {items.map((i, _i) => (
            <div key={_i} className="item" style={{ ...itemStyle }}>
              <div className="card">
                <img src={i.img} alt="" className="imgCarousel" />

                <a href={i.link}>{i.name}</a>
              </div>
            </div>
          ))}
        </Carousel>
        <div className="itemSite" _data={items} {...setting}>
          {items.map((i, _i) => (
            <div key={_i} className="item" >
            

                <a href={i.link}>{i.name}</a>
              
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default aboutCarousel;

