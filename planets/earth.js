let earthColorMap = new THREE.TextureLoader().load(
	'https://space-assets-1.s3.us-east-2.amazonaws.com/earth.jpg'
);

let earthNormalMap = new THREE.TextureLoader().load(
	'https://space-assets-1.s3.us-east-2.amazonaws.com/earthTexture.jpg'
);

let earthMetalnessMap = new THREE.TextureLoader().load(
	'https://space-assets-1.s3.us-east-2.amazonaws.com/earthSpecular.jpg'
);

let earthGeo = new THREE.SphereBufferGeometry(2, 32, 16);
let earthStandardMater = new THREE.MeshStandardMaterial({
	flatShading: false,
	wireframe: false,
	normalMap: earthNormalMap,
	metalnessMap: earthMetalnessMap,
	map: earthColorMap,
});
let earth = new THREE.Mesh(earthGeo, earthStandardMater);
scene.add(earth);
