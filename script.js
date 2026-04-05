function volume_sphere() {
    //Write your code here
	let radiusInput = document.getElementById('radius'); // your radius input id
  let output = document.getElementById('volume'); // output element

  let r = parseFloat(radiusInput.value);
  if (isNaN(r) || r < 0) {
    output.value = 'NaN';
    return;
  }
  let volume = (4 / 3) * Math.PI * Math.pow(r, 3);
  output.value = volume.toFixed(4);


  
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
