import React from "react";
import {
  TileLayer,
  Marker,
  Popup,
  Tooltip,
  MapContainer as LeafletMap,
} from "react-leaflet";
import "./Maps.css";
import "leaflet/dist/leaflet.css";
import { iconFirstEcommerce } from "./IconMarker";
import logoImg from "../../../assets/img/logo-web-black.png";
const Map = () => {
  const position = [30.9661, 31.16138];
  const zoom = 14;
  return (
    <div className="map">
      <LeafletMap center={position} zoom={zoom}>
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position} icon={iconFirstEcommerce}>
          <Popup>
            <div className="info-container">
              <div className="info__logo">
                <img src={logoImg} alt="logo" />
              </div>
              <div className="info__name">First Ecommerce For ...</div>
              <div className="info__address">
                Address: Name of ST, Elmahala-Elkoubra, Gharbia, Egypt
              </div>
            </div>
          </Popup>
          <Tooltip>First Ecommerce</Tooltip>
        </Marker>
      </LeafletMap>
    </div>
  );
};

export default Map;
