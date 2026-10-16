let moonColorMap = new THREE.TextureLoader().load(
	'https://space-assets-1.s3.us-east-2.amazonaws.com/moon.jpg'
);

let moonGeo = new THREE.SphereBufferGeometry(0.6, 32, 16);
let moonStandardMater = new THREE.MeshStandardMaterial({
	flatShading: false,
	wireframe: false,
	map: moonColorMap,
});
let moon = new THREE.Mesh(moonGeo, moonStandardMater);
scene.add(moon);
