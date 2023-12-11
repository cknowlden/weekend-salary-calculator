console.log('employee salary calc');

function handleSubmit(event){
	//prevents default action, like a refresh on submit
	event.preventDefault();
    const firstNameInputElement = document.getElementById('firstNameInput');
    const lastNameInputElement = document.getElementById('lastNameInput');
    const idInputElement = document.getElementById('idInput');
    const titleInputElement = document.getElementById('titleInput');
    const annualSalaryInputElement = document.getElementById('annualSalaryInput');
	console.log('Submit', event);
	
	console.log('First name:', firstNameInputElement.value);
	console.log('Last name:', lastNameInputElement.value);
    console.log('ID:', idInputElement.value);
    console.log('Title:', titleInputElement.value);
    console.log('Annual salary:', annualSalaryInputElement.value);

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

//module.exports = sayNames;