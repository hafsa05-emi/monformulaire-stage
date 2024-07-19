function addTextAreas() {
    const numTextAreas = document.getElementById('numTextAreas').value;
    const container = document.getElementById('textAreasContainer');
    
    // Clear any existing text areas
    container.innerHTML = '';
    
    // Create the specified number of text areas
    for (let i = 0; i < numTextAreas; i++) {
        const textArea = document.createElement('textarea');
        textArea.setAttribute('name', `textArea${i}`);
        textArea.setAttribute('placeholder', `Zone de texte ${i + 1}`);
        container.appendChild(textArea);
    }
}
