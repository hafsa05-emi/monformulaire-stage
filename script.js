document.addEventListener('DOMContentLoaded', () => {
    const organismeSelect = document.getElementById('organisme');
    const otherOrganismeGroup = document.getElementById('otherOrganismeGroup');
    const presidentFieldsContainer = document.getElementById('presidentFieldsContainer');
    const memberFieldsContainer = document.getElementById('memberFieldsContainer');
    const concurrentsFieldsContainer = document.getElementById('concurrentsFieldsContainer');

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

    // Function to create concurrents fields
    function createConcurrentsFields() {
        const number = document.getElementById('concurrentsNumber').value;
        concurrentsFieldsContainer.innerHTML = '';

        for (let i = 0; i < number; i++) {
            concurrentsFieldsContainer.innerHTML += `
                <div class="form-group">
                    <label for="concurrent${i}">Concurrent ${i + 1} :</label>
                    <input type="text" id="concurrent${i}" name="concurrent${i}" placeholder="Nom du concurrent">
                </div>
            `;
        }
        document.getElementById('concurrentsNumber').parentElement.style.display = 'none';
    }

    // Function to generate PDF
    function generatePDF() {
        const { jsPDF } = window.jspdf;
        const doc = new jsPDF();

        doc.text('Formulaire Professionnel', 10, 10);
        doc.text('Organisme : ' + document.getElementById('organisme').value, 10, 20);
        doc.text('Procès verbal : ' + document.getElementById('pv').value, 10, 30);
        doc.text('Date : ' + document.getElementById('date').value, 10, 40);

        // Add presidents
        let y = 50;
        const numPresidents = document.getElementById('presidentsNumber').value;
        for (let i = 0; i < numPresidents; i++) {
            const president = document.getElementById(`president${i}`).value;
            doc.text(`Président ${i + 1} : ${president}`, 10, y);
            y += 10;
        }

        // Add members
        const numMembers = document.getElementById('membersNumber').value;
        for (let i = 0; i < numMembers; i++) {
            const member = document.getElementById(`member${i}`).value;
            doc.text(`Membre ${i + 1} : ${member}`, 10, y);
            y += 10;
        }

        // Add declaration
        doc.text('Déclaration :', 10, y);
        y += 10;
        doc.text(`Lieu : ${document.getElementById('declarationPlace').value}`, 10, y);
        y += 10;
        doc.text(`Numéro : ${document.getElementById('declarationNumber').value}`, 10, y);
        y += 10;
        doc.text(`Objet : ${document.getElementById('declarationObject').value}`, 10, y);
        y += 10;
        doc.text(`Publication : ${document.getElementById('declarationPublication').value}`, 10, y);
        y += 10;

        // Add concurrents
        doc.text('À l\'ouverture de la séance, le président dispose sur le bureau tous les plis reçus des concurrents, à savoir :', 10, y);
        y += 10;
        const numConcurrents = document.getElementById('concurrentsNumber').value;
        for (let i = 0; i < numConcurrents; i++) {
            const concurrent = document.getElementById(`concurrent${i}`).value;
            doc.text(`Concurrent ${i + 1} : ${concurrent}`, 10, y);
            y += 10;
        }

        doc.save('formulaire.pdf');
    }

    // Event listeners
    document.getElementById('organisme').addEventListener('change', checkOtherOption);
    document.getElementById('generatePdfButton').addEventListener('click', generatePDF);
    document.querySelector('button[onclick="createPresidentFields()"]').addEventListener('click', createPresidentFields);
    document.querySelector('button[onclick="createMemberFields()"]').addEventListener('click', createMemberFields);
    document.querySelector('button[onclick="createConcurrentsFields()"]').addEventListener('click', createConcurrentsFields);
});
