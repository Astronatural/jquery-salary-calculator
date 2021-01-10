$(document).ready(function () {
    console.log('JQ and js ready');
//  Take input data and in.
    $('#subBut').on('click', function () {
        const firstName = $("#fN").val();
        const lastName = $("#lN").val();
        const idNumber = $("#iD").val();
        const jobTitle = $("#jT").val();
        const annualSalary = $("#aS").val();
        addEmployee(firstName, lastName, idNumber, jobTitle, annualSalary);
        
        
    });

})
//  Add taken inputs to dom.
function addEmployee(firstName, lastName, idNumber, jobTitle, annualSalary){
    $("table").append(`<tr>
                        <td>${firstName}</td>
                        <td>${lastName}</td>
                        <td>${idNumber}</td>
                        <td>${jobTitle}</td>
                        <td>${annualSalary}</td> 
                      </tr>`);
    $('input').val('');
}






// sum the annual salaries and /12.
// Append above to h3.
// If monthly cost > 25k, change the background to red.


// The delete button to remove an employee from the table.


/* useful codes:
$('#an-input').val(); // returns the value of the input field.
$('#an-input').val(''); // clears input text.

*/