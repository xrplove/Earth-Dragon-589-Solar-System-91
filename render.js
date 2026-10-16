function render() {
	let time = Date.now();

	requestAnimationFrame(render);

	// Earth
	mercury.position.x = Math.cos(time * 0.0017) * 14;
	mercury.position.z = Math.sin(time * 0.0017) * 14;

	// Venus
	venus.position.x = Math.cos(time * 0.0007) * 20;
	venus.position.z = Math.sin(time * 0.0007) * 20;

	// Earth
	earth.position.x = Math.cos(time * 0.001) * 28;
	earth.position.z = Math.sin(time * 0.001) * 28;

	// Mars
	mars.position.x = Math.cos(time * 0.00095) * 35;
	mars.position.z = Math.sin(time * 0.00095) * 35;

	// Jupiter
	jupiter.position.x = Math.cos(time * 0.0001) * 50;
	jupiter.position.z = Math.sin(time * 0.0001) * 50;

	// Saturn
	saturn.position.x = Math.cos(time * 0.00009) * 87;
	saturn.position.z = Math.sin(time * 0.00009) * 87;

	// Uranus
	uranus.position.x = Math.cos(time * 0.00009) * 200;
	uranus.position.z = Math.sin(time * 0.00009) * 200;

	// // Moon
	// moon.position.x = Math.cos(time * 0.001) * 28;
	// moon.position.z = Math.sin(time * 0.001) * 28;

	mercury.rotation.y += 0.1;
	venus.rotation.y += 0.09;
	earth.rotation.y += 3.65;
	moon.rotation.y += 0.365;
	mars.rotation.y += 0.387;
	jupiter.rotation.y += 0.09;
	saturn.rotation.y += 0.1;
	mercury.rotation.y += 0.1;
	sun.rotation.y += 0.01;

	renderer.render(scene, camera);
}

render();
