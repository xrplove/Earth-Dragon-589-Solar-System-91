let mercuryColorMap = new THREE.TextureLoader().load(
	'https://space-assets-1.s3.us-east-2.amazonaws.com/mercury.png'
);

let mercuryGeo = new THREE.SphereBufferGeometry(1.2, 32, 16);
let mercuryStandardMater = new THREE.MeshStandardMaterial({
	flatShading: false,
	wireframe: false,
	map: mercuryColorMap,
});
let mercury = new THREE.Mesh(mercuryGeo, mercuryStandardMater);
scene.add(mercury);
