let sceneBakgroundTextureLoader = new THREE.TextureLoader().load(
	'https://space-assets-1.s3.us-east-2.amazonaws.com/milky-WAY.png'
);
let scene = new THREE.Scene();
let aspect = window.innerWidth / window.innerHeight;
let camera = new THREE.PerspectiveCamera(75, aspect, 0.1, 2000);
let renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
let controls = new THREE.OrbitControls(camera, renderer.domElement);
window.addEventListener('resize', onWindowResize, false);

camera.position.z = 65;

scene.background = {
	texture: sceneBakgroundTextureLoader,
};



function onWindowResize() {
	camera.aspect = window.innerWidth / window.innerHeight;
	camera.updateProjectionMatrix();
	renderer.setSize(window.innerWidth, window.innerHeight);
}

hemiLight = new THREE.HemisphereLight(0xddeeff, 0x0f0e0d, 1);
scene.add(hemiLight);