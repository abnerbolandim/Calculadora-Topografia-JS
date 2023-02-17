function calcular() {
	var altura_instrumento =
		parseFloat(document.getElementById("visada_re").value) + 100;
	var leituras = document.getElementById("leituras").value.split(" ");
	var resultados = [];
	for (var i = 0; i < leituras.length; i++) {
		resultados.push(altura_instrumento - parseFloat(leituras[i]));
	}
	document.getElementById("resultados").innerHTML = resultados.join("<br>");
}
