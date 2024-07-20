function checkOtherOption() {
    const organismeSelect = document.getElementById('organisme');
    const otherOrganismeGroup = document.getElementById('otherOrganismeGroup');
    if (organismeSelect.value === 'autre') {
        otherOrganismeGroup.style.display = 'block';
    } else {
        otherOrganismeGroup.style.display = 'none';
    }
}

function showFields() {
    const numPresidents = document.getElementById('numPresidents').value;
    const numMembers = document.getElementById('numMembers').value;

    document.querySelector('.form-group.hidden').style.display = 'none';

    const presidentFieldsContainer = document.getElementById('presidentFieldsContainer');
    presidentFieldsContainer.innerHTML = ''; // Clear existing fields

    for (let i = 0; i < numPresidents; i++) {
        const fieldGroup = document.createElement('div');
        fieldGroup.className = 'field-group';
        fieldGroup.innerHTML = `
            <label for="president${i + 1}">Président ${i + 1} :</label>
            <input type="text" id="president${i + 1}" name="president${i + 1}" placeholder="Nom du président ${i + 1}">
        `;
        presidentFieldsContainer.appendChild(fieldGroup);
    }

    const memberFieldsContainer = document.getElementById('memberFieldsContainer');
    memberFieldsContainer.innerHTML = ''; // Clear existing fields

    for (let i = 0; i < numMembers; i++) {
        const fieldGroup = document.createElement

