
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
    const numPresidents = document.getElementById('numPresidents').value;
    const numMembers = document.getElementById('numMembers').value;

    // Hide the input fields for number of presidents and members
    document.getElementById('numPresidents').style.display = 'none';
    document.getElementById('numMembers').style.display = 'none';

    const presidentFieldsContainer = document.getElementById('presidentFieldsContainer');
    presidentFieldsContainer.innerHTML = ''; // Clear existing fields

    for (let i = 0; i < numPresidents; i++) {
        const fieldGroup = document.createElement('div');
        fieldGroup.className = 'field-group';
        fieldGroup.innerHTML = `
            <label for="president${i + 1}">Président ${i + 1} :</label>
            <input type="text" id="president${i + 1}" name="president${i + 1}" placeholder="Nom du président ${i + 1}">
        `;
        presidentFieldsContainer.appendChild(fieldGroup);
    }

    const memberFieldsContainer = document.getElementById('memberFieldsContainer');
    memberFieldsContainer.innerHTML = ''; // Clear existing fields

    for (let i = 0; i < numMembers; i++) {
        const fieldGroup = document.createElement('div');
        fieldGroup.className = 'field-group';
        fieldGroup.innerHTML = `
            <label for="member${i + 1}">Membre ${i + 1} :</label>
            <input type="text" id="member${i + 1}" name="member${i + 1}" placeholder="Nom du membre ${i + 1}">
        `;
        memberFieldsContainer.appendChild(fieldGroup);
    }
}

document.getElementById('generatePdfButton').addEventListener('click', function() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    doc.text("Formulaire de Contact", 10, 10);

    const formData = new FormData(document.getElementById('dynamicForm'));
    for (const [key, value] of formData.entries()) {
        doc.text(`${key}: ${value}`, 10, 20 + 10 * formData.entries().indexOf([key, value]));
    }

    doc.save('formulaire.pdf');
});
