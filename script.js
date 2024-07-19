document.addEventListener('DOMContentLoaded', () => {
    const { jsPDF } = window.jspdf;

    const form = document.getElementById('dynamicForm');
    form.addEventListener('submit', (event) => {
        event.preventDefault(); // Empêche l'envoi du formulaire par défaut

        // Récupérer les valeurs du formulaire
        const organisme = document.getElementById('organisme').value;
        const otherOrganisme = document.getElementById('otherOrganisme').value;
        const pv = document.getElementById('pv').value;
        const date = document.getElementById('date').value;

        // Créer un nouveau PDF
        const doc = new jsPDF();

        // Ajouter du texte au PDF
        doc.text(`Organisme: ${organisme === 'autre' ? otherOrganisme : organisme}`, 10, 10);
        doc.text(`Procès verbal de la séance d'appel d'offres: ${pv}`, 10, 20);
        doc.text(`Date: ${date}`, 10, 30);

        // Ajouter une ligne pour chaque zone de texte dynamique
        const numTextAreas = document.getElementById('numTextAreas').value;
        if (numTextAreas > 0) {
            let y = 40;
            for (let i = 0; i < numTextAreas; i++) {
                const textArea = document.getElementById(`textArea${i}`);
                if (textArea) {
                    doc.text(textArea.value, 10, y);
                    y += 10;
                }
            }
        }

        // Sauvegarder le PDF
        doc.save('formulaire.pdf');
    });
});

function promptForTextAreas() {
    const numTextAreas = prompt('Combien de zones de texte souhaitez-vous ajouter ?');
    const container = document.getElementById('textAreasContainer');
    container.innerHTML = ''; // Réinitialiser le conteneur
    for (let i = 0; i < numTextAreas; i++) {
        const textarea = document.createElement('textarea');
        textarea.id = `textArea${i}`;
        textarea.placeholder = `Zone de texte ${i + 1}`;
        container.appendChild(textarea);
    }
    document.getElementById('numTextAreas').value = numTextAreas;
}
