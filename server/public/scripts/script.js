console.log('employee salary calc');

function handleSubmit(eventObj){
	//prevents default action, like a refresh on submit
	eventObj.preventDefault();
	
	//query selector using the eventObj target specifies where to look instead of whole page
	const firstNameInputElement = eventObj.target.querySelector('#firstNameInput');
	const lastNameInputElement = eventObj.target.querySelector('#lastNameInput');
    const idInputElement = eventObj.target.querySelector('#idInput');
    const titleInputElement = eventObj.target.querySelector('#titleInput');
    const annualSalaryInputElement = eventObj.target.querySelector('#annualSalaryInput');
	console.log('Submit', eventObj);
	
	//the value makes the code look into the area where the user filled out the form block for that element
	console.log('First name:', firstNameInputElement.value);
	console.log('Last name:', lastNameInputElement.value);
    console.log('ID:', idInputElement.value);
    console.log('Title:', titleInputElement.value);
    console.log('Annual salary:', annualSalaryInputElement.value);

	const tableElement = document.querySelector('#nameTable tbody');
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

module.exports = sayNames;