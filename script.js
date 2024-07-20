
function checkOtherOption() {
    const organismeSelect = document.getElementById('organisme');
    const otherOrganismeGroup = document.getElementById('otherOrganismeGroup');
    if (organismeSelect.value === 'autre') {
        otherOrganismeGroup.style.display = 'block';
    } else {
        otherOrganismeGroup.style.display = 'none';
    }
}

function showFields() {
    const numPresidents = parseInt(document.getElementById('numPresidents').value, 10);
    const numMembers = parseInt(document.getElementById('numMembers').value, 10);

    const presidentFieldsContainer = document.getElementById('presidentFieldsContainer');
    const memberFieldsContainer = document.getElementById('memberFieldsContainer');
    const numFieldsGroup = document.getElementById('numFieldsGroup');

    // Clear existing fields
    presidentFieldsContainer.innerHTML = '';
    memberFieldsContainer.innerHTML = '';

    // Generate fields for presidents
    for (let i = 0; i < numPresidents; i++) {
        const fieldGroup = document.createElement('div');
        fieldGroup.className = 'form-group';
        fieldGroup.innerHTML = `
            <label for="president${i + 1}">Président ${i + 1} :</label>
            <input type="text" id="president${i + 1}" name="president${i + 1}" placeholder="Nom du président ${i + 1}">
        `;
        presidentFieldsContainer.appendChild(fieldGroup);
    }

    // Generate fields for members
    for (let i = 0; i < numMembers; i++) {
        const fieldGroup = document.createElement('div');
        fieldGroup.className = 'form-group';
        fieldGroup.innerHTML = `
            <label for="member${i + 1}">Membre ${i + 1} :</label>
            <input type="text" id="member${i + 1}" name="member${i + 1}" placeholder="Nom du membre ${i + 1}">
        `;
        memberFieldsContainer.appendChild(fieldGroup);
    }

    // Hide the input fields for number of presidents and members
    numFieldsGroup.style.display = 'none';
}

document.getElementById('generatePdfButton').addEventListener('click', function() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    doc.text("Formulaire de Contact", 10, 10);

    const formData = new FormData(document.getElementById('dynamicForm'));
    let yPosition = 20;
    for (const [key, value] of formData.entries()) {
        doc.text(`${key}: ${value}`, 10, yPosition);
        yPosition += 10;
    }

    doc.save('formulaire.pdf');
});
