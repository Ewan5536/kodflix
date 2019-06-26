import React from "react";
import { Link } from "react-router-dom";
export default function ShowStack(props) {
    return( 
    <Link to={`/${props.id}`} className="TvTile">
      <img src={props.tvShowLogo} alt={`${props.name} tvShowLogo`} />
      <div className="TitleOverLay">
        <h1>{props.name}</h1>
      </div>
    </Link>
    );
  }