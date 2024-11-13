// import React, { useEffect, useRef } from 'react';
// import * as THREE from 'three';
// import { ARToolkitContext, ARToolkitSource, ARMarkerControls } from 'ar.js';

// const ARComponent = () => {
//   const arRef = useRef(null);

//   useEffect(() => {
//     // Set up AR.js
//     const arToolkitSource = new ARToolkitSource({ sourceType: 'webcam' });
//     arToolkitSource.init(() => onResize());

//     window.addEventListener('resize', () => {
//       onResize();
//     });

//     const onResize = () => {
//       arToolkitSource.onResizeElement();
//       arToolkitSource.copyElementSizeTo(arRef.current);
//       if (arToolkitContext.arController !== null) {
//         arToolkitSource.copyElementSizeTo(arToolkitContext.arController.canvas);
//       }
//     };

//     const scene = new THREE.Scene();
//     const camera = new THREE.Camera();
//     scene.add(camera);

//     const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
//     renderer.setClearColor(new THREE.Color('lightgrey'), 0);
//     renderer.setSize(window.innerWidth, window.innerHeight);
//     renderer.domElement.style.position = 'absolute';
//     arRef.current.appendChild(renderer.domElement);

//     const arToolkitContext = new ARToolkitContext({
//       cameraParametersUrl: 'data/camera_para.dat',
//       detectionMode: 'mono'
//     });

//     arToolkitContext.init(() => {
//       camera.projectionMatrix.copy(arToolkitContext.getProjectionMatrix());
//     });

//     new ARMarkerControls(arToolkitContext, camera, {
//       type: 'pattern',
//       patternUrl: 'data/patt.hiro',
//       changeMatrixMode: 'cameraTransformMatrix'
//     });

//     const animate = () => {
//       requestAnimationFrame(animate);
//       if (arToolkitSource.ready) {
//         arToolkitContext.update(arToolkitSource.domElement);
//       }
//       renderer.render(scene, camera);
//     };

//     animate();
//   }, []);

//   return <div ref={arRef} />;
// };

// export default ARComponent;
