function volume_sphere() {
    var radius=parseFloat(document.getElementById('radius').value);

	if (isNaN(radius)) {
		alert('please enter a valid number of radius');
		return false;
	}
	var volume=(4/3)*Math.PI*Math.pow(radius,3);
	
	document.getElementById('volume').value=volume.toFixed(2);
	return false;
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
