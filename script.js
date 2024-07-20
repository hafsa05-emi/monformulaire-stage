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
        } // Pas de `else` pour ne rien afficher lorsque le nombre est 0
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
        } // Pas de `else` pour ne rien afficher lorsque le nombre est 0
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
        } // Pas de `else` pour ne rien afficher lorsque le nombre est 0
    }

    function generatePdf() {
        // Votre logique pour générer le PDF
    }
});

