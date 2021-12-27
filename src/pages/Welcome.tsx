import { PageContainer } from "@ant-design/pro-layout";
import React, { useState } from "react";
import MapGL, { Layer, Source } from "react-map-gl";

import { clusterCountLayer, clusterLayer, unclusteredPointLayer } from "./layers";

const MAPBOX_TOKEN = ''; // Set your mapbox token here

const Welcome: React.FC = () => {
  const [viewport, setViewport] = useState({
    latitude: 40.67,
    longitude: -103.59,
    zoom: 3,
    bearing: 0,
    pitch: 0,
  });

  return (
    <PageContainer>
      <MapGL
        {...viewport}
        width="100%"
        height="100%"
        mapStyle="mapbox://styles/mapbox/dark-v10"
        onViewportChange={setViewport}
        mapboxApiAccessToken={MAPBOX_TOKEN}
        interactiveLayerIds={[clusterLayer.id]}
      >
        <Source
          id="earthquakes"
          type="geojson"
          data="https://docs.mapbox.com/mapbox-gl-js/assets/earthquakes.geojson"
          cluster={true}
          clusterMaxZoom={14}
          clusterRadius={50}
        >
          <Layer {...clusterLayer} />
          <Layer {...clusterCountLayer} />
          <Layer {...unclusteredPointLayer} />
        </Source>
      </MapGL>
    </PageContainer>
  );
};

export default Welcome;
