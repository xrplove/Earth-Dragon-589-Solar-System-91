let uranusColorMap = new THREE.TextureLoader().load(
	'https://space-assets-1.s3.us-east-2.amazonaws.com/uranus.jpg'
);

let uranusGeo = new THREE.SphereBufferGeometry(8, 32, 16);
let uranusStandardMater = new THREE.MeshStandardMaterial({
	flatShading: false,
	wireframe: false,
	map: uranusColorMap,
});
let uranus = new THREE.Mesh(uranusGeo, uranusStandardMater);
scene.add(uranus);
