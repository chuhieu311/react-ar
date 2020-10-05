import React from "react";
import ReactDOM from "react-dom";

const ImageAR = () => {
  const renderVirtualComponent = component =>
    ReactDOM.createPortal(component, document.body);

  return renderVirtualComponent(
    <>
      <div className="arjs-loader">
        <div>Loading, please wait...</div>
      </div>
      <a-scene
        vr-mode-ui="enabled: false;"
        renderer="logarithmicDepthBuffer: true;"
        embedded
        arjs="trackingMethod: best; sourceType: webcam;debugUIEnabled: false;"
      >
        <a-nft
          type="nft"
          url="https://arjs-cors-proxy.herokuapp.com/https://raw.githack.com/AR-js-org/AR.js/master/aframe/examples/image-tracking/nft/trex/trex-image/trex"
          smooth="true"
          smoothCount="10"
          smoothTolerance=".01"
          smoothThreshold="5"
        >
          <a-entity>
            <a-entity
              gltf-model="https://arjs-cors-proxy.herokuapp.com/https://raw.githack.com/AR-js-org/AR.js/master/aframe/examples/image-tracking/nft/trex/scene.gltf"
              // gltf-model={"https://root.gboss.tk/scene.gltf"}
              scale="5 5 5"
              position="50 150 0"
              rotation="0 45 0"
            ></a-entity>
            {/* <a-animation
              dur="1000"
              attribute="scale"
              from="4 4 4"
              to="8 8 8"
              easing="ease-in-out-circ"
              repeat="indefinite"
            ></a-animation> */}
            <a-animation
              attribute="rotation"
              easing="linear"
              dur="60000"
              to="0 360 0"
              repeat="indefinite"
            ></a-animation>
          </a-entity>
        </a-nft>
        <a-entity camera></a-entity>
      </a-scene>
    </>,
  );
};

export default ImageAR;
