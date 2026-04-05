function volume_sphere() {
    //Write your code here
 const radiusEl = document.getElementById("radius");
    const volumeEl = document.getElementById("volume");

    if (!radiusEl || !volumeEl) {
        console.error("Missing DOM elements: radius or volume");
        return;
    }

    // 2. Get and parse radius
    const radiusInput = radiusEl.value;
    const radius = parseFloat(radiusInput);

    // 3. Validate
    if (isNaN(radius) || radius < 0) {
        volumeEl.value = "NaN";
        return;
    }

    // 4. Volume = (4/3) * π * r^3
    const volume = (4 / 3) * Math.PI * Math.pow(radius, 3);

    // 5. Round to 4 decimal places
    volumeEl.value = volume.toFixed(4);

  
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
