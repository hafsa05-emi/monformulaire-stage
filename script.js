function checkOtherOption() {
    const organismeSelect = document.getElementById('organisme');
    const otherOrganismeGroup = document.getElementById('otherOrganismeGroup');
    if (organismeSelect.value === 'autre') {
        otherOrganismeGroup.style.display = 'block';
    } else {
        otherOrganismeGroup.style.display = 'none';
    }
}

function updateFields(role) {
    const numFields = document.getElementById(`num${role.charAt(0).toUpperCase() + role.slice(1)}s`).value;
    const fieldsContainer = document.getElementById(`${role}FieldsContainer`);
    fieldsContainer.innerHTML = ''; // Clear existing fields

    for (let i = 0; i < numFields; i++) {
        const fieldGroup = document.createElement('div');
        fieldGroup.className = 'field-group';
        fieldGroup.innerHTML = `
            <textarea name="${role}TextArea${i + 1}" rows="2" placeholder="Zone de texte ${role} ${i + 1}"></textarea>
        `;
        fieldsContainer.appendChild(fieldGroup);
    }
}

document.getElementById('generatePdfButton').addEventListener('click', async () => {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();
    const form = document.getElementById('dynamicForm');
    const formData = new FormData(form);

    doc.text('Formulaire de Contact', 10, 10);
    let y = 20;

    for (let [key, value]
