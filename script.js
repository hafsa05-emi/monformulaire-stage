document.addEventListener('DOMContentLoaded', () => {
    const organismeSelect = document.getElementById('organisme');
    const otherOrganismeGroup = document.getElementById('otherOrganismeGroup');
    const presidentFieldsContainer = document.getElementById('presidentFieldsContainer');
    const memberFieldsContainer = document.getElementById('memberFieldsContainer');
    const concurrentsFieldsContainer = document.getElementById('concurrentsFieldsContainer');

    // Fonction pour gérer l'option autre pour organisme
    function checkOtherOption() {
        if (organismeSelect.value === 'autre') {
            otherOrganismeGroup.style.display = 'block';
        } else {
            otherOrganismeGroup.style.display = 'none';
        }
    }

    // Fonction pour créer les champs des présidents
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

    // Fonction pour créer les champs des membres
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

    // Fonction pour créer les champs des concurrents
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

    // Fonction pour générer le PDF
    function generatePDF() {
        const { jsPDF } = window.jspdf;
        const doc = new jsPDF();

        doc.text('Formulaire Professionnel', 10, 10);
        doc.text('Organisme : ' + document.getElementById('organisme').value, 10, 20);
        doc.text('Procès verbal : ' + document.getElementById('pv').value, 10, 30);
        doc.text('Date : ' + document.getElementById('date').value, 10, 40);

        doc.text('Déclaration :', 10, 50);
        doc.text('Lieu et adresse : ' + document.getElementById('declarationPlace').value, 10, 60);
        doc.text('Numéro : ' + document.getElementById('declarationNumber').value, 10, 70);
        doc.text('Objet de l\'appel d\'offres : ' + document.getElementById('declarationObject').value, 10, 80);
        doc.text('Journaux ou avis et dates de parution : ' + document.getElementById('declarationPublication').value, 10, 90);

        let yPosition = 100;
        document.querySelectorAll('[id^="president"]').forEach((input) => {
            doc.text('Président : ' + input.value, 10, yPosition);
            yPosition += 10;
        });

        document.querySelectorAll('[id^="member"]').forEach((input) => {
            doc.text('Membre : ' + input.value, 10, yPosition);
            yPosition += 10;
        });

        document.querySelectorAll('[id^="concurrent"]').forEach((input) => {
            doc.text('Concurrent : ' + input.value, 10, yPosition);
            yPosition += 10;
        });

        doc.save('formulaire.pdf');
    }

    // Écouteurs d'événements
    document.getElementById('organisme').addEventListener('change', checkOtherOption);
