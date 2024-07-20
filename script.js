function checkOtherOption() {
    const organisme = document.getElementById('organisme').value;
    const otherOrganismeGroup = document.getElementById('otherOrganismeGroup');
    if (organisme === 'autre') {
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
    
    // Clear previous fields
    presidentFieldsContainer.innerHTML = '';
    memberFieldsContainer.innerHTML = '';

    // Create president fields
    for (let i = 1; i <= numPresidents; i++) {
        const input = document.createElement('input');
        input.type = 'text';
        input.name = 'president' + i;
        input.placeholder = 'Nom du Président ' + i;
        presidentFieldsContainer.appendChild(input);
        presidentFieldsContainer.appendChild(document.createElement('br'));
    }

    // Create member fields
    for (let i = 1; i <= numMembers; i++) {
        const input = document.createElement('input');
        input.type = 'text';
        input.name = 'member' + i;
        input.placeholder = 'Nom du Membre ' + i;
        memberFieldsContainer.appendChild(input);
        memberFieldsContainer.appendChild(document.createElement('br'));
    }

    // Hide the number fields after displaying the name fields
    document.getElementById('numFieldsGroup').style.display = 'none';
    document.getElementById('numFieldsGroup2').style.display = 'none';
}

document.getElementById('generatePdfButton').addEventListener('click', function() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    doc.text("Formulaire de Contact", 10, 10);

    const formData = new FormData(document.getElementById('dynamicForm'));
    let yPosition = 20;
    for (const [key, value] of formData.entries()) {
        if (value) {
            doc.text(`${key}: ${value}`, 10, yPosition);
            yPosition += 10;
        }
    }

    doc.save('formulaire.pdf');
});
