venusColorMap = new THREE.TextureLoader().load(
	'https://space-assets-1.s3.us-east-2.amazonaws.com/venus.jpg'
);

let venusGeo = new THREE.SphereBufferGeometry(2.2, 32, 16);
let venusStandardMater = new THREE.MeshStandardMaterial({
	flatShading: false,
	wireframe: false,
	map: venusColorMap,
});
let venus = new THREE.Mesh(venusGeo, venusStandardMater);
scene.add(venus);
