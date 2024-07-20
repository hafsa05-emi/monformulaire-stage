document.addEventListener('DOMContentLoaded', function() {
    // Fonction pour vérifier si "Autre" est sélectionné dans le menu déroulant "Organisme"
    function checkOtherOption() {
        const organismeSelect = document.getElementById('organisme');
        const otherOrganismeGroup = document.getElementById('otherOrganismeGroup');
        if (organismeSelect.value === 'autre') {
            otherOrganismeGroup.style.display = 'block';
        } else {
            otherOrganismeGroup.style.display = 'none';
        }
    }

    // Fonction pour créer dynamiquement des zones de texte
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

    // Fonction pour créer des champs pour les présidents
    function createPresidentFields() {
        const number = document.getElementById('presidentsNumber').value;
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

    // Fonction pour créer des champs pour les membres
    function createMemberFields() {
        const number = document.getElementById('membersNumber').value;
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

    // Fonction pour créer des champs pour les concurrents
    function createConcurrentFields() {
        const number = document.getElementById('concurrentNumber').value;
        const container = document.getElementById('concurrentsFieldsContainer');
        const neantMessage = document.getElementById('neantMessage');

        container.innerHTML = '';
        neantMessage.style.display = 'none';

        if (number === '0') {
            neantMessage.style.display = 'block';
        } else if (number > 0) {
            for (let i = 0; i < number; i++) {
                const input = document.createElement('input');
                input.type = 'text';
                input.placeholder = `Concurrent ${i + 1}`;
                container.appendChild(input);
                container.appendChild(document.createElement('br'));
            }
        }
    }

    // Ajout des événements aux boutons pour générer des champs
    document.querySelector('[onclick="promptForTextAreas()"]').addEventListener('click', promptForTextAreas);
    document.querySelector('[onclick="createPresidentFields()"]').addEventListener('click', createPresidentFields);
    document.querySelector('[onclick="createMemberFields()"]').addEventListener('click', createMemberFields);
    document.querySelector('[onclick="createConcurrentFields()"]').addEventListener('click', createConcurrentFields);

    // Gestion du bouton de génération de PDF (exemple basique)
    document.getElementById('generatePdfButton').addEventListener('click', function() {
        const { jsPDF } = window.jspdf;
        const doc = new jsPDF();
        doc.text("Contenu du formulaire ici", 10, 10);
        doc.save("formulaire.pdf");
    });

    // Événement pour la sélection du menu déroulant "Organisme"
    document.getElementById('organisme').addEventListener('change', checkOtherOption);
});
