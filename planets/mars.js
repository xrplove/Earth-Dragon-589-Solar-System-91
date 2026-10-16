let marsColorMap = new THREE.TextureLoader().load(
	'https://space-assets-1.s3.us-east-2.amazonaws.com/mars.jpg'
);

let marsGeo = new THREE.SphereBufferGeometry(1.7, 32, 16);
let marsStandardMater = new THREE.MeshStandardMaterial({
	flatShading: false,
	wireframe: false,
	map: marsColorMap,
});
let mars = new THREE.Mesh(marsGeo, marsStandardMater);
scene.add(mars);
