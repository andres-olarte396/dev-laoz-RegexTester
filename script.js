function testRegex() {
    const regexInput = document.getElementById('regex').value;
    const textInput = document.getElementById('text').value;
    const resultDiv = document.getElementById('result');
    const matchesDiv = document.getElementById('matches');

    try {
        // Crear expresión regular a partir de la entrada
        const regex = new RegExp(regexInput, 'g');
        const matches = [...textInput.matchAll(regex)];

        if (matches.length > 0) {
            resultDiv.innerText = '¡Coincidencias encontradas!';
            resultDiv.classList.remove('no-match');
            
            // Mostrar todas las coincidencias
            let matchResults = 'Coincidencias encontradas: \n';
            matches.forEach((match, index) => {
                matchResults += `Coincidencia ${index + 1}: ${match[0]} en la posición ${match.index}\n`;
            });
            matchesDiv.innerHTML = `<pre>${matchResults}</pre>`;
        } else {
            resultDiv.innerText = 'No se encontraron coincidencias.';
            resultDiv.classList.add('no-match');
            matchesDiv.innerHTML = '';
        }
    } catch (e) {
        resultDiv.innerText = 'Error en la expresión regular.';
        resultDiv.classList.add('no-match');
        matchesDiv.innerHTML = '';
    }
}