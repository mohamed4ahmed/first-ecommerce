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
import { iconSimksa } from "./IconMarker";
import logoImg from "../../../assets/img/logo-web-black.png";
const Map = () => {
  const position = [24.671036, 46.837574];
  const zoom = 14;
  return (
    <div className="map">
      <LeafletMap center={position} zoom={zoom}>
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position} icon={iconSimksa}>
          <Popup>
            <div className="info-container">
              <div className="info__logo">
                <img src={logoImg} alt="logo" />
              </div>
              <div className="info__name">SIM Company</div>
              <div className="info__address">
                Address: Riyadh,SA
              </div>
            </div>
          </Popup>
          <Tooltip>SIM Company</Tooltip>
        </Marker>
      </LeafletMap>
    </div>
  );
};

export default Map;
