let jupiterColorMap = new THREE.TextureLoader().load(
	'https://space-assets-1.s3.us-east-2.amazonaws.com/jupiter.jpg'
);

let jupiterGeo = new THREE.SphereBufferGeometry(6, 32, 16);
let jupiterStandardMater = new THREE.MeshStandardMaterial({
	flatShading: false,
	wireframe: false,
	map: jupiterColorMap,
});
let jupiter = new THREE.Mesh(jupiterGeo, jupiterStandardMater);
scene.add(jupiter);
