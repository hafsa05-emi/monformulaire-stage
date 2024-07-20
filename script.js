document.addEventListener('DOMContentLoaded', function() {
    function checkOtherOption() {
        const organisme = document.getElementById('organisme').value;
        const otherOrganismeGroup = document.getElementById('otherOrganismeGroup');
        otherOrganismeGroup.style.display = (organisme === 'autre') ? 'block' : 'none';
    }

    function createPresidentFields() {
        const numPresidents = parseInt(document.getElementById('numPresidents').value, 10);
        const container = document.getElementById('presidentFieldsContainer');
        container.innerHTML = '';

        for (let i = 0; i < numPresidents; i++) {
            const div = document.createElement('div');
            div.className = 'form-group';
            div.innerHTML = `
                <label for="president${i}">Président ${i + 1} :</label>
                <input type="text" id="president${i}" name="president${i}">
                <select id="presidentRole${i}" name="presidentRole${i}">
                    <option value="président">Président</option>
                    <option value="membre">Membre</option>
                </select>
            `;
            container.appendChild(div);
        }

        // Hide the number input field after creating the fields
        document.getElementById('numPresidents').style.display = 'none';
    }

    function createMemberFields() {
        const numMembers = parseInt(document.getElementById('numMembers').value, 10);
        const container = document.getElementById('memberFieldsContainer');
        container.innerHTML = '';

        for (let i = 0; i < numMembers; i++) {
            const div = document.createElement('div');
            div.className = 'form-group';
            div.innerHTML = `
                <label for="member${i}">Membre ${i + 1} :</label>
                <input type="text" id="member${i}" name="member${i}">
                <select id="memberRole${i}" name="memberRole${i}">
                    <option value="président">Président</option>
                    <option value="membre">Membre</option>
                </select>
            `;
            container.appendChild(div);
        }

        // Hide the number input field after creating the fields
        document.getElementById('numMembers').style.display = 'none';
    }

    function generatePDF() {
        const { jsPDF } = window.jspdf;
        const doc = new jsPDF();
        doc.text('Formulaire Professionnel', 10, 10);
        
        // Capture form data and add to PDF
        // (This is a simple example. Adjust as necessary for your form)
        doc.text(`Organisme: ${document.getElementById('organisme').value}`, 10, 20);
        doc.text(`Procès Verbal: ${document.getElementById('pv').value}`, 10, 30);
        doc.text(`Date: ${document.getElementById('date').value}`, 10, 40);

        const presidentNames = [];
        const presidentRoles = [];
        document.querySelectorAll('[id^="president"]').forEach(input => {
            if (input.value) {
                presidentNames.push(input.value);
            }
        });
        document.querySelectorAll('[id^="presidentRole"]').forEach(select => {
            if (select.value) {
                presidentRoles.push(select.value);
            }
        });
        doc.text(`Présidents: ${presidentNames.join(', ')}`, 10, 50);

        const memberNames = [];
        const memberRoles = [];
        document.querySelectorAll('[id^="member"]').forEach(input => {
            if (input.value) {
                memberNames.push(input.value);
            }
        });
        document.querySelectorAll('[id^="memberRole"]').forEach(select => {
            if (select.value) {
                memberRoles.push(select.value);
            }
        });
        doc.text(`Membres: ${memberNames.join(', ')}`, 10, 60);

        // Add other form data as needed

        doc.save('formulaire.pdf');
    }

    document.getElementById('generatePdfButton').addEventListener('click', generatePDF);

    window.checkOtherOption = checkOtherOption;
    window.createPresidentFields = createPresidentFields;
    window.createMemberFields = createMemberFields;
});
