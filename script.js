function volume_sphere() {
    //Write your code here
	const radiusInput = document.getElementById("radius").value;
    const volumeOutput = document.getElementById("volume");

    // 2. Parse and validate: must be a non‑negative number
    const radius = parseFloat(radiusInput);

    if (isNaN(radius) || radius < 0) {
        volumeOutput.value = "NaN";
        return;
    }

    // 3. Compute volume using V = (4/3) * π * r^3
    const volume = (4 / 3) * Math.PI * Math.pow(radius, 3);

    // 4. Round to 4 decimal places and display
    volumeOutput.value = volume.toFixed(4);

  
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
