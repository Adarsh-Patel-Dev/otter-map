import React from "react";
import { useUserContext } from "../../userContext";
import Map from "ol/Map";
import View from "ol/View";
import TileLayer from "ol/layer/Tile";
import XYZ from "ol/source/XYZ";
import "./map.css"

function Maps() {
  new Map({
    target: "map",
    layers: [
      new TileLayer({
        source: new XYZ({
          url: "https://{a-c}.tile.openstreetmap.org/{z}/{x}/{y}.png",
        }),
      }),
    ],
    view: new View({
      center: [0, 0],
      zoom: 2,
    }),
  });

  const { name } = useUserContext();
  return (
    <section>
      <h2 className="header">Welcome <em>{name}</em></h2>
      <div className="map-container">
        This is map section.
      </div>
    </section>
  );
}

export default Maps;
