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
                        <td>
                            <button id="delBut" style="color:red;" >Fire Them!!!</button>
                        </td>
                      </tr>`);
    $('input').val('');
    $('table').on('click', '#delBut', function(event) {        
        const fired = $(event.target);
        fired.closest('tr').remove();
    }) //empTab closed
} //addEmployee closed

// where should the deleteEmp function go? Outside, since its an independant func.
//nope, at the end of addEmployee


// sum the annual salaries and /12.
// Append above to h3.  set annualSalary to number. number(annualSalary)
// If monthly cost > 25k, change the background to red. 
// --- Use a .toggleClass, so it can go back to black, if I get that far.
// should be called after addEmployee?

// The delete button to remove an employee from the table.


/* useful codes:
$('#an-input').val(); // returns the value of the input field.
$('#an-input').val(''); // clears input text.

*/