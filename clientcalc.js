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
        (salArr).push(annualSalary);
        monthCost();
    }); // close SubBut
    // sum the annual salaries and /12.

    function monthCost(){
        $("#TMC").empty();
        let numSalArr = salArr.map(Number);
        let costSum = 0;
        costSum = ((numSalArr.reduce(adder))/12).toFixed(2);
        function adder(total, num) {
            return total + num;
        };
        // costSum += Number(salArr)/12;
        $("#TMC").append(`<span> ${costSum} </span>`);
        if (costSum > 20000) {  // If monthly cost > 20k, change total monthly cost background to red. 
            $('h3').addClass('red');
        }
  
}
        

})// on ready closed

//let test = [1,2,3,4,5]

let salArr = []


//  Add taken inputs to dom.
function addEmployee(firstName, lastName, idNumber, jobTitle, annualSalary){
    $("table").append(`<tr>
                        <td>${firstName}</td>
                        <td>${lastName}</td>
                        <td>${idNumber}</td>
                        <td>${jobTitle}</td>
                        <td class='toAdd' >${annualSalary}</td>
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



// set annualSalary to number. number(annualSalary) Append above to h3.
// --- Use a .toggleClass, so it can go back to black, if I get that far.
// should be called after addEmployee?



