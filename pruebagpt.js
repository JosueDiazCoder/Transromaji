function translateText() {
    const inputText = document.getElementById('input-text').value;
    const outputTextElement = document.getElementById('output-text');
    
    // Llamar a la API de traducción de Google Translate
    fetch(`https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=es&dt=t&q=${encodeURI(inputText)}`)
        .then(response => response.json())
        .then(data => {
            const translatedText = data[0][0][0];
            outputTextElement.textContent = translatedText;
        })
        .catch(error => {
            console.error('Error al traducir:', error);
            outputTextElement.textContent = 'Error al traducir el texto.';
        });
}