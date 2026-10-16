let sun = new THREE.PointLight('ccb786', 1, 1000);
sun.position.set(50, 50, 50);

let sunPic = new THREE.TextureLoader().load(
	'https://space-assets-1.s3.us-east-2.amazonaws.com/sun_1.jpg'
);
sun.position.set(50, 50, 50);

let sunGeo = new THREE.SphereBufferGeometry(10, 32, 16);

sunMat = new THREE.MeshStandardMaterial({
	emissive: 'yellow',
	emissiveMap: sunPic,
	emissiveIntensity: 12,
});

sun.add(new THREE.Mesh(sunGeo, sunMat));
sun.position.set(0, 2, 0);
sun.castShadow = true;

scene.add(sun);
