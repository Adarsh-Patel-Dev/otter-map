import React from "react";
import { useUserContext } from "../../userContext";
import "./map.css"

import {layer,Map,Layers} from "react-openlayers"

function Maps() {
  

  const { name } = useUserContext();
  return (
    <section>
      <h2 className="header">Welcome <em>{name}</em></h2>
      <div className="map-container">
        <Map view={{
          center:[0,0],zoom:1
        }}>
          <Layers>
            <layer.Tile></layer.Tile>
          </Layers>
        </Map>
      </div>
    </section>
  );
}

export default Maps;
