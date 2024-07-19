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
    const numTextAreas = prompt("Combien de zones de texte souhaitez-vous ajouter ?");
    const numTextAreasInput = document.getElementById('numTextAreas');
    const textAreasContainer = document.getElementById('textAreasContainer');
    numTextAreasInput.value = numTextAreas;
    textAreasContainer.innerHTML = ''; // Clear existing text areas
    for (let i = 0; i < numTextAreas; i++) {
        const textAreaGroup = document.createElement('div');
        textAreaGroup.className = 'text-area-group';
        textAreaGroup.innerHTML = `
            <textarea name="textArea${i + 1}" rows="4" placeholder="Zone de texte ${i + 1}"></textarea>
            <select name="role${i + 1}">
                <option value="membre">Membre</option>
                <option value="président">Président</option>
            </select>
        `;
        textAreasContainer.appendChild(textAreaGroup);
    }
}

document.getElementById('generatePdfButton').addEventListener('click', async () => {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();
    const form = document.getElementById('dynamicForm');
    const formData = new FormData(form);

    doc.text('Formulaire de Contact', 10, 10);
    let y = 20
