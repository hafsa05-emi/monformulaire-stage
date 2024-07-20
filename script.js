document.addEventListener('DOMContentLoaded', () => {
    const organismeSelect = document.getElementById('organisme');
    const otherOrganismeGroup = document.getElementById('otherOrganismeGroup');
    const presidentFieldsContainer = document.getElementById('presidentFieldsContainer');
    const memberFieldsContainer = document.getElementById('memberFieldsContainer');

    // Function to handle other option for organisme
    function checkOtherOption() {
        if (organismeSelect.value === 'autre') {
            otherOrganismeGroup.style.display = 'block';
        } else {
            otherOrganismeGroup.style.display = 'none';
        }
    }

    // Function to create president fields
    function createPresidentFields() {
        const number = document.getElementById('presidentsNumber').value;
        presidentFieldsContainer.innerHTML = '';

        for (let i = 0; i < number; i++) {
            presidentFieldsContainer.innerHTML += `
                <div class="form-group">
                    <label for="president${i}">Président ${i + 1} :</label>
                    <input type="text" id="president${i}" name="president${i}" placeholder="Nom du président">
                </div>
            `;
        }
        document.getElementById('presidentsNumber').parentElement.style.display = 'none';
    }

    // Function to create member fields
    function createMemberFields() {
        const number = document.getElementById('membersNumber').value;
        memberFieldsContainer.innerHTML = '';

        for (let i = 0; i < number; i++) {
            memberFieldsContainer.innerHTML += `
                <div class="form-group">
                    <label for="member${i}">Membre ${i + 1} :</label>
                    <input type="text" id="member${i}" name="member${i}" placeholder="Nom du membre">
                </div>
            `;
        }
        document.getElementById('membersNumber').parentElement.style.display = 'none';
    }

    // Function to generate PDF
    function generatePDF() {
        const { jsPDF } = window.jspdf;
        const doc = new jsPDF();

        doc.text('Formulaire Professionnel', 10, 10);
        doc.text('Organisme : ' + document.getElementById('organisme').value, 10, 20);
        doc.text('Procès verbal : ' + document.getElementById('pv').value, 10, 30);
        doc.text('Date : ' + document.getElementById('date').value, 10, 40);
        doc.text('Déclaration : ' + document.getElementById('declaration').value, 10, 50);

        let yPosition = 60;
        document.querySelectorAll('[id^="president"]').forEach((input) => {
            doc.text('Président : ' + input.value, 10, yPosition);
            yPosition += 10;
        });

        document.querySelectorAll('[id^="member"]').forEach((input) => {
            doc.text('Membre : ' + input.value, 10, yPosition);
            yPosition += 10;
        });

        doc.save('formulaire.pdf');
    }

    // Event listeners
    document.getElementById('organisme').addEventListener('change', checkOtherOption);
    document.getElementById('generatePdfButton').addEventListener('click', generatePDF);
    document.querySelector('button[onclick="createPresidentFields()"]').addEventListener('click', createPresidentFields);
    document.querySelector('button[onclick="createMemberFields()"]').addEventListener('click', createMemberFields);
});
