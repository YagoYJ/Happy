import React from "react";
import { Link } from "react-router-dom";
import { Map, TileLayer } from "react-leaflet";

import { FiPlus } from "react-icons/fi";

import mapMarker from "../images/map-marker.svg";

import "../styles/pages/orphanagesMap.css";
import "leaflet/dist/leaflet.css";

export default function OrphanagesMap() {
  return (
    <div id="page-map">
      <aside>
        <header>
          <img src={mapMarker} alt="Happy" />
          <h2>Escolha um orfanato</h2>
          <p>Muitas crianças estão esperando a sua visita :)</p>
        </header>
        <footer>
          <strong>Fortaleza</strong>
          <span>Ceará</span>
        </footer>
      </aside>
      <Map
        center={[-3.7181623, -38.5763963]}
        zoom={15}
        style={{
          width: "100%",
          height: "100%",
        }}
      >
        <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      </Map>

      <Link to="" className="create-orphanage">
        <FiPlus fontSize={32} color="#ffffff" />
      </Link>
    </div>
  );
}
