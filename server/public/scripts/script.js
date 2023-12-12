console.log('employee salary calc');
let monthlyArray = [];
let monthlyTotal;


function handleSubmit(event){
	//prevents default action, like a refresh on submit
	event.preventDefault();
    const firstNameInputElement = document.getElementById('firstNameInput');
    const lastNameInputElement = document.getElementById('lastNameInput');
    const idInputElement = document.getElementById('idInput');
    const titleInputElement = document.getElementById('titleInput');
    const annualSalaryInputElement = document.getElementById('annualSalaryInput');
    const deleteElement = document.getElementById('delete-button');
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

	const tableElement = document.querySelector('.employeeTable tbody');
	console.log('TABLE:', tableElement)
	tableElement.innerHTML += `
	<div>	
        <tr>
		    <td>${firstNameInputElement.value}</td>
		    <td>${lastNameInputElement.value}</td>
            <td>${idInputElement.value}</td>
            <td>${titleInputElement.value}</td>
            <td>$${annualSalaryInputElement.value}</td>
            <td><input type="button" value="Delete" onclick="removePerson(event)"></td>
		</tr>
    </div>
		`
    //make array with salary and divide by 12 to get monthly
    monthlyArray.push(annualSalaryInputElement.value / 12);
    console.log('monthly array is:', monthlyArray);
    
    //loop through to sum array
    monthlyTotal = 0;
    monthlyArray.forEach(element => {
        monthlyTotal += element;
    });
    console.log('monthly sum', monthlyTotal);
    const salaryElement = document.querySelector('#total-monthly');
    salaryElement.innerHTML = `Total Monthly: $${monthlyTotal}`;

    //clear form fields
	firstNameInputElement.value = '';
	lastNameInputElement.value = '';
    idInputElement.value = '';
    titleInputElement.value = '';
    annualSalaryInputElement.value = '';
}

function removePerson(event){
    event.target.parentElement.remove();
};


//module.exports = sayNames;