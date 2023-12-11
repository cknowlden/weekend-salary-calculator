console.log('employee salary calc');

function handleSubmit(event){
	//prevents default action, like a refresh on submit
	event.preventDefault();
    const firstNameInputElement = document.getElementById('firstNameInput');
    const lastNameInputElement = document.getElementById('lastNameInput');
    const idInputElement = document.getElementById('idInput');
    const titleInputElement = document.getElementById('titleInput');
    const annualSalaryInputElement = document.getElementById('annualSalaryInput');
    const errorElement = document.getElementById('error');
	console.log('Submit', event);
	
	console.log('First name:', firstNameInputElement.value);
	console.log('Last name:', lastNameInputElement.value);
    console.log('ID:', idInputElement.value);
    console.log('Title:', titleInputElement.value);
    console.log('Annual salary:', annualSalaryInputElement.value);

    //alert when there's an error in filling the form
    if (!firstNameInputElement || !lastNameInputElement || !idInputElement || !titleInputElement || !annualSalaryInputElement) {
        alert('Value is required');
        return;
      }

	const tableElement = document.querySelector('#employeeTable tbody');
	console.log('TABLE:', tableElement)
	tableElement.innerHTML += `
		<tr>
		    <td>${firstNameInputElement.value}</td>
		    <td>${lastNameInputElement.value}</td>
            <td>${idInputElement.value}</td>
            <td>${titleInputElement.value}</td>
            <td>${annualSalaryInputElement.value}</td>
		</tr>
		`
		//clear form fields
		firstNameInputElement.value = '';
		lastNameInputElement.value = '';
        idInputElement.value = '';
        titleInputElement.value = '';
        annualSalaryInputElement.value = '';
}

    //total annual salaries
function totalMonthly(){
    var table = document.getElementById('employeeTable');
    let total = 0;
    for(let i=1; i<table.rows.length; i++){
        total+=parseInt(table.rows[i].cells[2].innerHTML)
    }
    console.log(total);
}
totalMonthly();

//module.exports = sayNames;