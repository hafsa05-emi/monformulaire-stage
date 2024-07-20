document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('organisme').addEventListener('change', checkOtherOption);
    document.getElementById('createConcurrentsFieldsButton').addEventListener('click', createConcurrentsFields);
    document.getElementById('createReponsesFieldsButton').addEventListener('click', createReponsesFields);
    document.getElementById('createPresidentFieldsButton').addEventListener('click', createPresidentFields);
    document.getElementById('createMemberFieldsButton').addEventListener('click', createMemberFields);
    document.getElementById('generatePdfButton').addEventListener('click', generatePdf);

    function checkOtherOption() {
        const organismeSelect = document.getElementById('organisme');
        const otherOrganismeGroup = document.getElementById('otherOrganismeGroup');
        if (organismeSelect.value === 'autre') {
            otherOrganismeGroup.style.display = 'block';
        } else {
            otherOrganismeGroup.style.display = 'none';
        }
    }

    function createConcurrentsFields() {
        const container = document.getElementById('concurrentsFieldsContainer');
        container.innerHTML = ''; // Efface le contenu précédent
        const number = parseInt(document.getElementById('concurrentsNumber').value, 10);
        
        if (number > 0) {
            for (let i = 1; i <= number; i++) {
                const input = document.createElement('input');
                input.type = 'text';
                input.name = `concurrent${i}`;
                input.placeholder = `Nom du concurrent ${i}`;
                input.className = 'form-group';
                container.appendChild(input);
            }
        }
    }

    function createReponsesFields() {
        const container = document.getElementById('reponsesFieldsContainer');
        container.innerHTML = ''; // Efface le contenu précédent
        const number = parseInt(document.getElementById('reponsesNumber').value, 10);

        if (number > 0) {
            for (let i = 1; i <= number; i++) {
                const input = document.createElement('input');
                input.type = 'text';
                input.name = `reponse${i}`;
                input.placeholder = `Nom du concurrent ayant répondu ${i}`;
                input.className = 'form-group';
                container.appendChild(input);
            }
        } else if (number === 0) {
            container.innerHTML = 'NEANT';
        }
    }

    function createPresidentFields() {
        const container = document.getElementById('presidentFieldsContainer');
        container.innerHTML = ''; // Efface le contenu précédent
        const number = parseInt(document.getElementById('presidentsNumber').value, 10);

        if (number > 0) {
            for (let i = 1; i <= number; i++) {
                const input = document.createElement('input');
                input.type = 'text';
                input.name = `president${i}`;
                input.placeholder = `Nom du président ${i}`;
                input.className = 'form-group';
                container.appendChild(input);
            }
        }
    }

    function createMemberFields() {
        const container = document.getElementById('memberFieldsContainer');
        container.innerHTML = ''; // Efface le contenu précédent
        const number = parseInt(document.getElementById('membersNumber').value, 10);

        if (number > 0) {
            for (let i = 1; i <= number; i++) {
                const input = document.createElement('input');
                input.type = 'text';
                input.name = `member${i}`;
                input.placeholder = `Nom du membre ${i}`;
                input.className = 'form-group';
                container.appendChild(input);
            }
        }
    }

    function generatePdf() {
        // Importer jsPDF
        const { jsPDF } = window.jspdf;

        // Créer un document PDF
        const doc = new jsPDF();

        // Ajouter le titre
        doc.setFontSize(18);
        doc.text('Formulaire Professionnel', 10, 10);

        // Ajouter les données du formulaire
        doc.setFontSize(12);
        doc.text(`Organisme: ${document.getElementById('organisme').value}`, 10, 20);
        doc.text(`Procès verbal: ${document.getElementById('pv').value}`, 10, 30);
        doc.text(`Date: ${document.getElementById('date').value}`, 10, 40);
        
        // Ajouter la section Présidents
        const presidentsNumber = parseInt(document.getElementById('presidentsNumber').value, 10);
        if (presidentsNumber > 0) {
            doc.text('Présidents:', 10, 50);
            for (let i = 1; i <= presidentsNumber; i++) {
                doc.text(`${i}: ${document.querySelector(`input[name="president${i}"]`).value}`, 10, 60 + i * 10);
            }
        }

        // Ajouter la section Membres
        const membersNumber = parseInt(document.getElementById('membersNumber').value, 10);
        if (membersNumber > 0) {
            doc.text('Membres:', 10, 70 + presidentsNumber * 10);
            for (let i = 1; i <= membersNumber; i++) {
                doc.text(`${i}: ${document.querySelector(`input[name="member${i}"]`).value}`, 10, 80 + (i + presidentsNumber) * 10);
            }
        }

        // Ajouter la section Concurrents
        const concurrentsNumber = parseInt(document.getElementById('concurrentsNumber').value, 10);
        if (concurrentsNumber > 0) {
            doc.text('Concurrents:', 10, 90 + (presidentsNumber + membersNumber) * 10);
            for (let i = 1; i <= concurrentsNumber; i++) {
                doc.text(`${i}: ${document.querySelector(`input[name="concurrent${i}"]`).value}`, 10, 100 + (i + presidentsNumber + membersNumber) * 10);
            }
        }

        // Ajouter la section Réponses
        const reponsesNumber = parseInt(document.getElementById('reponsesNumber').value, 10);
        if (reponsesNumber > 0) {
            doc.text('Concurrents ayant répondu:', 10, 110 + (presidentsNumber + membersNumber + concurrentsNumber) * 10);
            for (let i = 1; i <= reponsesNumber; i++) {
                doc.text(`${i}: ${document.querySelector(`input[name="reponse${i}"]`).value}`, 10, 120 + (i + presidentsNumber + membersNumber + concurrentsNumber) * 10);
            }
        } else {
            doc.text('Concurrents ayant répondu: NEANT', 10, 110 + (presidentsNumber + membersNumber + concurrentsNumber) * 10);
        }

        // Enregistrer le PDF
        doc.save('formulaire_professionnel.pdf');
    }
});
