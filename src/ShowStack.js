import React from "react";
export default function ShowStack(props) {
    return( 
    <div className="TvTile">
      <img src={props.tvShowLogo} alt={`${props.name} tvShowLogo`} />
      <div className="TitleOverLay">
        <h1>{props.name}</h1>
      </div>
    </div>
    );
  }