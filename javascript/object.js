"use strict";

var scene = new THREE.Scene(); //setur upp scene

var camera = new THREE.PerspectiveCamera(60, window.innerWidth/window.innerHeight, 1, 10000 ); //setur upp camera
			   //THREE.PerspectiveCamera( fov, aspect, near, far );

var renderer = new THREE.WebGLRenderer(); //
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

var geometry = new THREE.CylinderGeometry( 1, 200, 700, 20, 20, false );

var material = new THREE.MeshBasicMaterial({color: 0xfffff, wireframe: true});

var pyralinder = new THREE.Mesh(geometry, material);
scene.add(pyralinder);

camera.position.z = 1000;



function render() {
   	requestAnimationFrame(render);
   	pyralinder.rotation.x += 0.01;
	pyralinder.rotation.y += 0.02;
	pyralinder.rotation.z += 0.05;
	renderer.render(scene, camera);
}
render();