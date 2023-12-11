console.log('employee salary calc');

function handleSubmit(eventObj){
	//prevents default action, like a refresh on submit
	eventObj.preventDefault();
    // const firstNameInputElement = eventObj.target.querySelector('#firstNameInput');
    // const lastNameInputElement = eventObj.target.querySelector('#lastNameInput');
    // const idInputElement = eventObj.target.querySelector('#idInput');
    // const titleInputElement = eventObj.target.querySelector('#titleInput');
    // const annualSalaryInputElement = eventObj.target.querySelector('#annualSalaryInput');
    const firstNameInputElement = document.getElementById('firstNameInput');
    const lastNameInputElement = document.getElementById('lastNameInput');
    const idInputElement = document.getElementById('idInput');
    const titleInputElement = document.getElementById('titleInput');
    const annualSalaryInputElement = document.getElementById('annualSalaryInput');
	console.log('Submit', eventObj);
	
	console.log('First name:', firstNameInputElement.value);
	console.log('Last name:', lastNameInputElement.value);
    console.log('ID:', idInputElement.value);
    console.log('Title:', titleInputElement.value);
    console.log('Annual salary:', annualSalaryInputElement.value);

	const tableElement = document.querySelector('#employeeTable tbody');
	console.log('TABLE:', tableElement)
	tableElement.innerHTML += `
		<tr>
			//updates the DOM
			<td>${firstNameInputElement.value}</td>
			<td>${lastNameInputElement.value}</td>
         <td>${idInputElement.value}</td>
         <td>${titleInputElement.value}</td>
         <td>${annualSalaryInputElement.value}</td>
		</tr>
		`
		//clear form fields
		// firstNameInputElement.value = '';
		// lastNameInputElement.value = '';
        // idInputElement.value = '';
        // titleInputElement.value = '';
        // annualSalaryInputElement.value = '';
}

//module.exports = sayNames;