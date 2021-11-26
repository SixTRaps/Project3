import React from "react";
import GoogleMapReact from "google-map-react";

const CenterRedCirclePinpoint = () => (
  <div
    style={{
      color: "white",
      background: "red",
      padding: "10px 10px",
      display: "inline-flex",
      textAlign: "center",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: "100%",
      transform: "translate(-50%, -50%)",
    }}
  >
    {"Location"}
  </div>
);

function Map(props) {
  let defaultProps = {
    center: {
      lat: props.latitude,
      lng: props.longitude,
    },
    zoom: 11,
  };

  return (
    // Important! Always set the container height explicitly
    <div style={{ height: "50vh", width: "48vh" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyD-RXUr0q6940CAxa6V7U4dpS86hLKpPSg" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <CenterRedCirclePinpoint lat={props.latitude} lng={props.longitude} />
      </GoogleMapReact>
    </div>
  );
}

export default Map;