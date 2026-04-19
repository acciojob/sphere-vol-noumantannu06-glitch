function volume_sphere() {
    // Get radius from input field (assume id="radius")
    const radiusInput = document.getElementById('radius');
    const radius = parseFloat(radiusInput.value);
    
    // Validate: NaN or negative → output NaN
    if (isNaN(radius) || radius < 0) {
        document.getElementById('volume').value = 'NaN';
        return;
    }
    
    // Calculate V = (4/3) * π * r³
    const volume = (4 / 3) * Math.PI * Math.pow(radius, 3);
    
    // Round to 4 decimal places and display
    document.getElementById('volume').value = volume.toFixed(4);
}