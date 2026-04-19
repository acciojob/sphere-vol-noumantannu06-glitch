 function volume_sphere() {
            const radius = parseFloat(document.getElementById('radius').value);
            
            if (isNaN(radius) || radius < 0) {
                document.getElementById('volume').value = 'NaN';
                return;
            }
            
            const volume = (4 / 3) * Math.PI * Math.pow(radius, 3);
            document.getElementById('volume').value = volume.toFixed(4);
        }