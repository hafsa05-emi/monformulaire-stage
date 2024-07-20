document.addEventListener('DOMContentLoaded', () => {
    const organismeSelect = document.getElementById('organisme');
    const otherOrganismeGroup = document.getElementById('otherOrganismeGroup');
    const presidentFieldsContainer = document.getElementById('presidentFieldsContainer');
    const memberFieldsContainer = document.getElementById('memberFieldsContainer');
    const numTextAreas = document.getElementById('numTextAreas');
    
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

    // Event listeners
    document.getElementById('generatePdfButton').addEventListener('click', generatePDF);
    window.checkOtherOption = checkOtherOption;
    window.createPresidentFields = createPresidentFields;
    window.createMemberFields = createMemberFields;
});
