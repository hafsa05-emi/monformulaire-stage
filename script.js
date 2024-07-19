document.addEventListener('DOMContentLoaded', () => {
    const { jsPDF } = window.jspdf;

    // Fonction pour générer le PDF
    function generatePDF() {
        const organisme = document.getElementById('organisme').value;
        const otherOrganisme = document.getElementById('otherOrganisme').value;
        const pv = document.getElementById('pv').value;
        const date = document.getElementById('date').value;

        const doc = new jsPDF();
        doc.text(`Organisme: ${organisme === 'autre' ? otherOrganisme : organisme}`, 10, 10);
        doc.text(`Procès verbal de la séance d'appel d'offres: ${pv}`, 10, 20);
        doc.text(`Date: ${date}`, 10, 30);

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

        doc.save('formulaire.pdf');
    }

    // Événement de clic pour le bouton de génération du PDF
    document.getElementById('generatePdfButton').addEventListener('click', generatePDF);
});

function checkOtherOption() {
    const organismeSelect = document.getElementById('organisme');
    const otherOrganismeGroup = document.getElementById('otherOrganismeGroup');
    if (organismeSelect.value === 'autre') {
        otherOrganismeGroup.style.display = 'block';
    } else {
        otherOrganismeGroup.style.display = 'none';
    }
}

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
