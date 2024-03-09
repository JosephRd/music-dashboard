import React, { useEffect, useState } from "react";
import { Card } from "antd";
import "./CardV1.css";
import "bootstrap/dist/css/bootstrap.min.css";
import StarIcon from "../../images/star.svg";
import PopBG from "../../images/bg-pop.svg";
import KpopBG from "../../images/bg-kpop.svg";
import HiphopBG from "../../images/bg-hiphop.svg";
import RbBG from "../../images/bg-rb.svg";

interface CardProps {
  data: string[];
  title: string;
}

const CardV1: React.FC<CardProps> = (props) => {
  let cover;
  if (props.title === "Pop") {
    cover = PopBG;
  } else if (props.title === "K-Pop") {
    cover = KpopBG;
  } else if (props.title === "Hip Hop") {
    cover = HiphopBG;
  } else if (props.title === "R&B") {
    cover = RbBG;
  }

  return (
    <>
      <Card style={{ backgroundImage: `url(${cover})`, backgroundSize: "cover" }}>
        <h5 id="cardTitle" className="card-title">
          {props.title}
        </h5>
        <div style={{ paddingTop: "1rem" }} className="d-flex justify-content-between">
          <div className="card-icon rounded-circle d-flex align-items-center justify-content-start">
            <i>
              <img style={{ height: "1rem" }} src={StarIcon} alt="" />
            </i>
            {props.data.length > 0 && (
              <>
                <h1 id="cardNumber">{props.data[0][1]}</h1>
                <h6 id="cardNumber">/100</h6>
              </>
            )}
          </div>
          <div className="ps-4 d-flex align-items-end">
            {props.data.length > 0 && (
              <div>
                <div id="cardJudul">{props.data[0][2]}</div>
                <div id="cardArtist">{props.data[0][0]}</div>
              </div>
            )}
          </div>
        </div>
      </Card>
    </>
  );
};

export default CardV1;
