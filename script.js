document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const organisme = document.getElementById('organisme').value;
    const procesVerbal = document.getElementById('proces-verbal').value;

    alert(`Organisme: ${organisme}\nProcès Verbal: ${procesVerbal}`);
});
