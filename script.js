
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('organisme').addEventListener('change', checkOtherOption);
    document.getElementById('createPresidentFieldsButton').addEventListener('click', createPresidentFields);
    document.getElementById('createMemberFieldsButton').addEventListener('click', createMemberFields);
    document.getElementById('createConcurrentsFieldsButton').addEventListener('click', createConcurrentsFields);
    document.getElementById('createReponsesFieldsButton').addEventListener('click', createReponsesFields);
    document.getElementById('createElectronicOffersFieldsButton').addEventListener('click', createElectronicOffersFields);
    document.getElementById('createFinalListFieldsButton').addEventListener('click', createFinalListFields);
    document.getElementById('createExcludedConcurrentsFieldsButton').addEventListener('click', createExcludedConcurrentsFields);
    document.getElementById('generatePdfButton').addEventListener('click', generatePdf);

    function checkOtherOption() {
        const organisme = document.getElementById('organisme').value;
        const otherOrganismeGroup = document.getElementById('otherOrganismeGroup');
        if (organisme === 'autre') {
            otherOrganismeGroup.style.display = 'block';
        } else {
            otherOrganismeGroup.style.display = 'none';
        }
    }

    function createPresidentFields() {
        const container = document.getElementById('presidentFieldsContainer');
        container.innerHTML = ''; // Efface le contenu précédent
        const number = parseInt(document.getElementById('presidentsNumber').value, 10);

        for (let i = 1; i <= number; i++) {
            const input = document.createElement('input');
            input.type = 'text';
            input.name = `president${i}`;
            input.placeholder = `Président ${i}`;
            input.className = 'form-group';
            container.appendChild(input);
        }
    }

    function createMemberFields() {
        const container = document.getElementById('memberFieldsContainer');
        container.innerHTML = ''; // Efface le contenu précédent
        const number = parseInt(document.getElementById('membersNumber').value, 10);

        for (let i = 1; i <= number; i++) {
            const input = document.createElement('input');
            input.type = 'text';
            input.name = `member${i}`;
            input.placeholder = `Membre ${i}`;
            input.className = 'form-group';
            container.appendChild(input);
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
        } else if (number === 0) {
            container.innerHTML = 'NEANT';
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
                input.placeholder = `Nom du concurrent ${i}`;
                input.className = 'form-group';
                container.appendChild(input);
            }
        } else if (number === 0) {
            container.innerHTML = 'NEANT';
        }
    }

    function createElectronicOffersFields() {
        const container = document.getElementById('electronicOffersFieldsContainer');
        container.innerHTML = ''; // Efface le contenu précédent
        const number = parseInt(document.getElementById('electronicOffersNumber').value, 10);

        if (number > 0) {
            for (let i = 1; i <= number; i++) {
                const input = document.createElement('input');
                input.type = 'text';
                input.name = `electronicOffer${i}`;
                input.placeholder = `Nom du concurrent ${i}`;
                input.className = 'form-group';
                container.appendChild(input);
            }
        } else if (number === 0) {
            container.innerHTML = 'NEANT';
        }
    }

    function createFinalListFields() {
        const container = document.getElementById('finalListFieldsContainer');
        container.innerHTML = ''; // Efface le contenu précédent
        const number = parseInt(document.getElementById('finalListNumber').value, 10);

        if (number > 0) {
            const table = document.createElement('table');
            const thead = document.createElement('thead');
            const headerRow = document.createElement('tr');
            const nameHeader = document.createElement('th');
            nameHeader.textContent = 'Nom du concurrent';
            const typeHeader = document.createElement('th');
            typeHeader.textContent = 'Type de dépôt';
            headerRow.appendChild(nameHeader);
            headerRow.appendChild(typeHeader);
            thead.appendChild(headerRow);
            table.appendChild(thead);

            const tbody = document.createElement('tbody');
            for (let i = 1; i <= number; i++) {
                const row = document.createElement('tr');
                const nameCell = document.createElement('td');
                const nameInput = document.createElement('input');
                nameInput.type = 'text';
                nameInput.name = `finalListName${i}`;
                nameInput.placeholder = `Nom du concurrent ${i}`;
                nameInput.className = 'form-group';
                nameCell.appendChild(nameInput);
                row.appendChild(nameCell);

                const typeCell = document.createElement('td');
                const typeInput = document.createElement('input');
                typeInput.type = 'text';
                typeInput.name = `finalListType${i}`;
                typeInput.placeholder = `Type de dépôt ${i}`;
                typeInput.className = 'form-group';
                typeCell.appendChild(typeInput);
                row.appendChild(typeCell);

                tbody.appendChild(row);
            }
            table.appendChild(tbody);
            container.appendChild(table);
        } else if (number === 0) {
            container.innerHTML = 'NEANT';
        }
    }

    function createExcludedConcurrentsFields() {
        const container = document.getElementById('excludedConcurrentsFieldsContainer');
        container.innerHTML = ''; // Efface le contenu précédent
        const number = parseInt(document.getElementById('excludedConcurrentsNumber').value, 10);

        if (number > 0) {
            const table = document.createElement('table');
            const thead = document.createElement('thead');
            const headerRow = document.createElement('tr');
            const nameHeader = document.createElement('th');
            nameHeader.textContent = 'Nom du concurrent écarté';
            const reasonHeader = document.createElement('th');
            reasonHeader.textContent = 'Motif d\'écartement';
            headerRow.appendChild(nameHeader);
            headerRow.appendChild(reasonHeader);
            thead.appendChild(headerRow);
            table.appendChild(thead);

            const tbody = document.createElement('tbody');
            for (let i = 1; i <= number; i++) {
                const row = document.createElement('tr');
                const nameCell = document.createElement('td');
                const nameInput = document.createElement('input');
                nameInput.type = 'text';
                nameInput.name = `excludedName${i}`;
                nameInput.placeholder = `Nom du concurrent écarté ${i}`;
                nameInput.className = 'form-group';
                nameCell.appendChild(nameInput);
                row.appendChild(nameCell);

                const reasonCell = document.createElement('td');
                const reasonInput = document.createElement('input');
                reasonInput.type = 'text';
                reasonInput.name = `excludedReason${i}`;
                reasonInput.placeholder = `Motif d'écartement ${i}`;
                reasonInput.className = 'form-group';
                reasonCell.appendChild(reasonInput);
                row.appendChild(reasonCell);

                tbody.appendChild(row);
            }
            table.appendChild(tbody);
            container.appendChild(table);
        } else if (number === 0) {
            container.innerHTML = 'NEANT';
        }
    }

    function generatePdf() {
        const { jsPDF } = window.jspdf;
        const doc = new jsPDF();
        doc.text('Formulaire de Contact', 10, 10);
        const form = document.getElementById('dynamicForm');
        const formData = new FormData(form);
        let y = 20;
        formData.forEach((value, key) => {
            doc.text(`${key}: ${value}`, 10, y);
            y += 10;
        });
        doc.save('formulaire.pdf');
    }
});
// Nouvelle fonctionnalité pour les concurrents admis sans réserves
document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('createAdmisSansReservationsFieldsButton').addEventListener('click', function () {
        const container = document.getElementById('admisSansReservationsFieldsContainer');
        const number = parseInt(document.getElementById('admisSansReservationsNumber').value, 10);
        
        container.innerHTML = ''; // Efface le contenu précédent
        
        if (number > 0) {
            for (let i = 1; i <= number; i++) {
                const input = document.createElement('input');
                input.type = 'text';
                input.name = `admisSansReservations${i}`;
                input.placeholder = `Nom du concurrent ${i}`;
                input.className = 'form-group';
                container.appendChild(input);
            }
        } else {
            container.innerHTML = '';
        }
    });
});






// Nouvelle fonctionnalité pour les concurrents admis avec réserve
document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('createAdmisAvecReserveFieldsButton').addEventListener('click', function () {
        const container = document.getElementById('admisAvecReserveFieldsContainer');
        const number = parseInt(document.getElementById('admisAvecReserveNumber').value, 10);
        
        container.innerHTML = ''; // Efface le contenu précédent
        
        if (number > 0) {
            const table = document.createElement('table');
            const thead = document.createElement('thead');
            const headerRow = document.createElement('tr');
            const nameHeader = document.createElement('th');
            nameHeader.textContent = 'Nom du concurrent';
            const reserveHeader = document.createElement('th');
            reserveHeader.textContent = 'Objet de réserve';
            headerRow.appendChild(nameHeader);
            headerRow.appendChild(reserveHeader);
            thead.appendChild(headerRow);
            table.appendChild(thead);

            const tbody = document.createElement('tbody');
            for (let i = 1; i <= number; i++) {
                const row = document.createElement('tr');
                
                // Nom du concurrent
                const nameCell = document.createElement('td');
                const nameInput = document.createElement('input');
                nameInput.type = 'text';
                nameInput.name = `admisAvecReserveName${i}`;
                nameInput.placeholder = `Nom du concurrent ${i}`;
                nameInput.className = 'form-group';
                nameCell.appendChild(nameInput);
                row.appendChild(nameCell);

                // Objet de réserve
                const reserveCell = document.createElement('td');
                const reserveInput = document.createElement('input');
                reserveInput.type = 'text';
                reserveInput.name = `admisAvecReserveReserve${i}`;
                reserveInput.placeholder = `Objet de réserve ${i}`;
                reserveInput.className = 'form-group';
                reserveCell.appendChild(reserveInput);
                row.appendChild(reserveCell);

                tbody.appendChild(row);
            }
            table.appendChild(tbody);
            container.appendChild(table);
        } else {
            // Pas besoin de "NEANT" ici, donc on laisse le conteneur vide
            container.innerHTML = '';
        }
    });
});






// Nouvelle fonctionnalité pour les concurrents non admis
document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('createNonAdmisFieldsButton').addEventListener('click', function () {
        const container = document.getElementById('nonAdmisFieldsContainer');
        const number = parseInt(document.getElementById('nonAdmisNumber').value, 10);
        
        container.innerHTML = ''; // Efface le contenu précédent
        
        if (number > 0) {
            for (let i = 1; i <= number; i++) {
                const input = document.createElement('input');
                input.type = 'text';
                input.name = `nonAdmisName${i}`;
                input.placeholder = `Nom du concurrent non admis ${i}`;
                input.className = 'form-group';
                container.appendChild(input);
            }
        } else {
            // Pas besoin d'afficher de message si le nombre est 0, donc on laisse le conteneur vide
            container.innerHTML = '';
        }
    });
});




// Nouvelle fonctionnalité pour les concurrents écartés dont les dossiers doivent être retournés
document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('createDossiersReturnedFieldsButton').addEventListener('click', function () {
        const container = document.getElementById('dossiersReturnedFieldsContainer');
        const number = parseInt(document.getElementById('dossiersReturnedNumber').value, 10);
        
        container.innerHTML = ''; // Efface le contenu précédent
        
        if (number > 0) {
            for (let i = 1; i <= number; i++) {
                const input = document.createElement('input');
                input.type = 'text';
                input.name = `dossiersReturnedName${i}`;
                input.placeholder = `Nom du concurrent écarté ${i}`;
                input.className = 'form-group';
                container.appendChild(input);
            }
        } else {
            // Pas besoin d'afficher de message si le nombre est 0, donc on laisse le conteneur vide
            container.innerHTML = '';
        }
    });
});




// Nouvelle fonctionnalité pour l'ouverture des enveloppes des concurrents admis
document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('createEngagementsFieldsButton').addEventListener('click', function () {
        const container = document.getElementById('engagementsFieldsContainer');
        const number = parseInt(document.getElementById('engagementsNumber').value, 10);
        
        container.innerHTML = ''; // Efface le contenu précédent
        
        if (number > 0) {
            // Crée un tableau pour afficher les concurrents et les montants des actes d'engagement
            const table = document.createElement('table');
            table.className = 'form-group';
            
            // Crée l'en-tête du tableau
            const thead = document.createElement('thead');
            const headerRow = document.createElement('tr');
            const competitorHeader = document.createElement('th');
            competitorHeader.textContent = 'Nom du Concurrent';
            const amountHeader = document.createElement('th');
            amountHeader.textContent = 'Montant de l\'Acte d\'Engagement';
            headerRow.appendChild(competitorHeader);
            headerRow.appendChild(amountHeader);
            thead.appendChild(headerRow);
            table.appendChild(thead);
            
            // Crée le corps du tableau
            const tbody = document.createElement('tbody');
            for (let i = 1; i <= number; i++) {
                const row = document.createElement('tr');
                
                // Colonne pour le nom du concurrent
                const competitorCell = document.createElement('td');
                const competitorInput = document.createElement('input');
                competitorInput.type = 'text';
                competitorInput.name = `competitorName${i}`;
                competitorInput.placeholder = `Nom du concurrent ${i}`;
                competitorCell.appendChild(competitorInput);
                row.appendChild(competitorCell);
                
                // Colonne pour le montant de l'acte d'engagement
                const amountCell = document.createElement('td');
                const amountInput = document.createElement('input');
                amountInput.type = 'text';
                amountInput.name = `engagementAmount${i}`;
                amountInput.placeholder = `Montant ${i}`;
                amountCell.appendChild(amountInput);
                row.appendChild(amountCell);
                
                tbody.appendChild(row);
            }
            table.appendChild(tbody);
            container.appendChild(table);
        } else {
            // Si le nombre est 0, efface le contenu
            container.innerHTML = '';
        }
    });
});




// Nouvelle fonctionnalité pour les concurrents écartés
document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('createExclusionFieldsButton').addEventListener('click', function () {
        const container = document.getElementById('exclusionFieldsContainer');
        const number = parseInt(document.getElementById('exclusionNumber').value, 10);
        
        container.innerHTML = ''; // Efface le contenu précédent
        
        if (number > 0) {
            // Crée un tableau pour afficher les concurrents écartés et les motifs d'écartement
            const table = document.createElement('table');
            table.className = 'form-group';
            
            // Crée l'en-tête du tableau
            const thead = document.createElement('thead');
            const headerRow = document.createElement('tr');
            const competitorHeader = document.createElement('th');
            competitorHeader.textContent = 'Nom du Concurrent';
            const reasonHeader = document.createElement('th');
            reasonHeader.textContent = 'Motif d\'Écartement';
            headerRow.appendChild(competitorHeader);
            headerRow.appendChild(reasonHeader);
            thead.appendChild(headerRow);
            table.appendChild(thead);
            
            // Crée le corps du tableau
            const tbody = document.createElement('tbody');
            for (let i = 1; i <= number; i++) {
                const row = document.createElement('tr');
                
                // Colonne pour le nom du concurrent
                const competitorCell = document.createElement('td');
                const competitorInput = document.createElement('input');
                competitorInput.type = 'text';
                competitorInput.name = `excludedCompetitorName${i}`;
                competitorInput.placeholder = `Nom du concurrent ${i}`;
                competitorCell.appendChild(competitorInput);
                row.appendChild(competitorCell);
                
                // Colonne pour le motif d'écartement
                const reasonCell = document.createElement('td');
                const reasonInput = document.createElement('input');
                reasonInput.type = 'text';
                reasonInput.name = `exclusionReason${i}`;
                reasonInput.placeholder = `Motif ${i}`;
                reasonCell.appendChild(reasonInput);
                row.appendChild(reasonCell);
                
                tbody.appendChild(row);
            }
            table.appendChild(tbody);
            container.appendChild(table);
        } else {
            // Si le nombre est 0, efface le contenu
            container.innerHTML = '';
        }
    });
});


// Nouvelle fonctionnalité pour les rectifications des montants des offres
document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('createRectificationFieldsButton').addEventListener('click', function () {
        const container = document.getElementById('rectificationFieldsContainer');
        const number = parseInt(document.getElementById('rectificationNumber').value, 10);
        
        container.innerHTML = ''; // Efface le contenu précédent
        
        if (number > 0) {
            // Crée un tableau pour afficher les concurrents et les montants rectifiés
            const table = document.createElement('table');
            table.className = 'form-group';
            
            // Crée l'en-tête du tableau
            const thead = document.createElement('thead');
            const headerRow = document.createElement('tr');
            const competitorHeader = document.createElement('th');
            competitorHeader.textContent = 'Nom du Concurrent';
            const amountBeforeHeader = document.createElement('th');
            amountBeforeHeader.textContent = 'Montant Avant Rectification';
            const amountAfterHeader = document.createElement('th');
            amountAfterHeader.textContent = 'Montant Rectifié';
            headerRow.appendChild(competitorHeader);
            headerRow.appendChild(amountBeforeHeader);
            headerRow.appendChild(amountAfterHeader);
            thead.appendChild(headerRow);
            table.appendChild(thead);
            
            // Crée le corps du tableau
            const tbody = document.createElement('tbody');
            for (let i = 1; i <= number; i++) {
                const row = document.createElement('tr');
                
                // Colonne pour le nom du concurrent
                const competitorCell = document.createElement('td');
                const competitorInput = document.createElement('input');
                competitorInput.type = 'text';
                competitorInput.name = `rectifiedCompetitorName${i}`;
                competitorInput.placeholder = `Nom du concurrent ${i}`;
                competitorCell.appendChild(competitorInput);
                row.appendChild(competitorCell);
                
                // Colonne pour le montant avant rectification
                const amountBeforeCell = document.createElement('td');
                const amountBeforeInput = document.createElement('input');
                amountBeforeInput.type = 'text';
                amountBeforeInput.name = `amountBeforeRectification${i}`;
                amountBeforeInput.placeholder = `Montant avant rectification ${i}`;
                amountBeforeCell.appendChild(amountBeforeInput);
                row.appendChild(amountBeforeCell);
                
                // Colonne pour le montant rectifié
                const amountAfterCell = document.createElement('td');
                const amountAfterInput = document.createElement('input');
                amountAfterInput.type = 'text';
                amountAfterInput.name = `amountAfterRectification${i}`;
                amountAfterInput.placeholder = `Montant rectifié ${i}`;
                amountAfterCell.appendChild(amountAfterInput);
                row.appendChild(amountAfterCell);
                
                tbody.appendChild(row);
            }
            table.appendChild(tbody);
            container.appendChild(table);
        } else {
            // Si le nombre est 0, efface le contenu
            container.innerHTML = '';
        }
    });
});


// Nouvelle fonctionnalité pour les offres financières écartées
document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('createFinancialExclusionFieldsButton').addEventListener('click', function () {
        const container = document.getElementById('financialExclusionFieldsContainer');
        const number = parseInt(document.getElementById('financialExclusionNumber').value, 10);
        
        container.innerHTML = ''; // Efface le contenu précédent
        
        if (number > 0) {
            // Crée un tableau pour afficher les concurrents et les montants des actes d'engagement
            const table = document.createElement('table');
            table.className = 'form-group';
            
            // Crée l'en-tête du tableau
            const thead = document.createElement('thead');
            const headerRow = document.createElement('tr');
            const competitorHeader = document.createElement('th');
            competitorHeader.textContent = 'Nom du Concurrent';
            const engagementAmountHeader = document.createElement('th');
            engagementAmountHeader.textContent = 'Montant des Actes d\'Engagement';
            headerRow.appendChild(competitorHeader);
            headerRow.appendChild(engagementAmountHeader);
            thead.appendChild(headerRow);
            table.appendChild(thead);
            
            // Crée le corps du tableau
            const tbody = document.createElement('tbody');
            for (let i = 1; i <= number; i++) {
                const row = document.createElement('tr');
                
                // Colonne pour le nom du concurrent
                const competitorCell = document.createElement('td');
                const competitorInput = document.createElement('input');
                competitorInput.type = 'text';
                competitorInput.name = `excludedCompetitorName${i}`;
                competitorInput.placeholder = `Nom du concurrent ${i}`;
                competitorCell.appendChild(competitorInput);
                row.appendChild(competitorCell);
                
                // Colonne pour le montant des actes d'engagement
                const engagementAmountCell = document.createElement('td');
                const engagementAmountInput = document.createElement('input');
                engagementAmountInput.type = 'text';
                engagementAmountInput.name = `engagementAmount${i}`;
                engagementAmountInput.placeholder = `Montant des actes d'engagement ${i}`;
                engagementAmountCell.appendChild(engagementAmountInput);
                row.appendChild(engagementAmountCell);
                
                tbody.appendChild(row);
            }
            table.appendChild(tbody);
            container.appendChild(table);
        } else {
            // Si le nombre est 0, efface le contenu
            container.innerHTML = '';
        }
    });
});



// Nouvelle fonctionnalité pour les concurrents admis
document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('createAdmittedFieldsButton').addEventListener('click', function () {
        const container = document.getElementById('admittedFieldsContainer');
        const number = parseInt(document.getElementById('admittedNumber').value, 10);
        
        container.innerHTML = ''; // Efface le contenu précédent
        
        if (number > 0) {
            // Crée un tableau pour afficher les concurrents et les montants des actes d'engagement
            const table = document.createElement('table');
            table.className = 'form-group';
            
            // Crée l'en-tête du tableau
            const thead = document.createElement('thead');
            const headerRow = document.createElement('tr');
            const competitorHeader = document.createElement('th');
            competitorHeader.textContent = 'Nom du Concurrent';
            const engagementAmountHeader = document.createElement('th');
            engagementAmountHeader.textContent = 'Montant des Actes d\'Engagement';
            headerRow.appendChild(competitorHeader);
            headerRow.appendChild(engagementAmountHeader);
            thead.appendChild(headerRow);
            table.appendChild(thead);
            
            // Crée le corps du tableau
            const tbody = document.createElement('tbody');
            for (let i = 1; i <= number; i++) {
                const row = document.createElement('tr');
                
                // Colonne pour le nom du concurrent
                const competitorCell = document.createElement('td');
                const competitorInput = document.createElement('input');
                competitorInput.type = 'text';
                competitorInput.name = `admittedCompetitorName${i}`;
                competitorInput.placeholder = `Nom du concurrent ${i}`;
                competitorCell.appendChild(competitorInput);
                row.appendChild(competitorCell);
                
                // Colonne pour le montant des actes d'engagement
                const engagementAmountCell = document.createElement('td');
                const engagementAmountInput = document.createElement('input');
                engagementAmountInput.type = 'text';
                engagementAmountInput.name = `admittedEngagementAmount${i}`;
                engagementAmountInput.placeholder = `Montant des actes d'engagement ${i}`;
                engagementAmountCell.appendChild(engagementAmountInput);
                row.appendChild(engagementAmountCell);
                
                tbody.appendChild(row);
            }
            table.appendChild(tbody);
            container.appendChild(table);
        } else {
            // Si le nombre est 0, efface le contenu
            container.innerHTML = '';
        }
    });
});

