let saturnColorMap = new THREE.TextureLoader().load(
	'https://space-assets-1.s3.us-east-2.amazonaws.com/saturn.jpg'
);

let saturnGeo = new THREE.SphereBufferGeometry(10, 32, 16);
let saturnStandardMater = new THREE.MeshStandardMaterial({
	flatShading: false,
	wireframe: false,
	map: saturnColorMap,
});
let saturn = new THREE.Mesh(saturnGeo, saturnStandardMater);

scene.add(saturn);
