
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('organisme').addEventListener('change', checkOtherOption);
    document.getElementById('createConcurrentsFieldsButton').addEventListener('click', createConcurrentsFields);
    document.getElementById('createReponsesFieldsButton').addEventListener('click', createReponsesFields);
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

    function promptForTextAreas() {
        const numTextAreas = prompt("Combien de zones de texte voulez-vous ajouter ?");
        if (numTextAreas && !isNaN(numTextAreas) && numTextAreas > 0) {
            const container = document.getElementById('textAreasContainer');
            container.innerHTML = ''; // Réinitialiser le contenu précédent

            for (let i = 0; i < numTextAreas; i++) {
                const textArea = document.createElement('textarea');
                textArea.rows = 4;
                textArea.cols = 50;
                textArea.placeholder = `Zone de texte ${i + 1}`;
                container.appendChild(textArea);
                container.appendChild(document.createElement('br'));
            }
        }
    }

    function createPresidentFields() {
        const number = parseInt(document.getElementById('presidentsNumber').value, 10);
        const container = document.getElementById('presidentFieldsContainer');
        container.innerHTML = '';

        for (let i = 0; i < number; i++) {
            const input = document.createElement('input');
            input.type = 'text';
            input.placeholder = `Président ${i + 1}`;
            container.appendChild(input);
            container.appendChild(document.createElement('br'));
        }
    }

    function createMemberFields() {
        const number = parseInt(document.getElementById('membersNumber').value, 10);
        const container = document.getElementById('memberFieldsContainer');
        container.innerHTML = '';

        for (let i = 0; i < number; i++) {
            const input = document.createElement('input');
            input.type = 'text';
            input.placeholder = `Membre ${i + 1}`;
            container.appendChild(input);
            container.appendChild(document.createElement('br'));
        }
    }

    function createConcurrentsFields() {
        const number = parseInt(document.getElementById('concurrentsNumber').value, 10);
        const container = document.getElementById('concurrentsFieldsContainer');
        container.innerHTML = '';  // Réinitialiser les champs existants

        if (number > 0) {
            for (let i = 0; i < number; i++) {
                const input = document.createElement('input');
                input.type = 'text';
                input.placeholder = `Concurrent ${i + 1}`;
                container.appendChild(input);
                container.appendChild(document.createElement('br'));
            }
        }
    }

    function createReponsesFields() {
        const number = parseInt(document.getElementById('reponsesNumber').value, 10);
        const container = document.getElementById('reponsesFieldsContainer');
        container.innerHTML = '';  // Réinitialiser les champs existants

        if (number > 0) {
            for (let i = 0; i < number; i++) {
                const input = document.createElement('input');
                input.type = 'text';
                input.placeholder = `Concurrent ayant répondu ${i + 1}`;
                container.appendChild(input);
                container.appendChild(document.createElement('br'));
            }
        } else if (number === 0) {
            const neantMessage = document.createElement('p');
            neantMessage.textContent = 'NEANT';
            container.appendChild(neantMessage);
        }
    }

    function generatePdf() {
        const { jsPDF } = window.jspdf;
        const doc = new jsPDF();

        const form = document.getElementById('dynamicForm');
        const formData = new FormData(form);

        formData.forEach((value, key) => {
            doc.text(`${key}: ${value}`, 10, 10);
        });

        doc.save('formulaire.pdf');
    }

    document.getElementById('createPresidentFieldsButton').addEventListener('click', createPresidentFields);
    document.getElementById('createMemberFieldsButton').addEventListener('click', createMemberFields);
});
