const form = document.querySelector('form');
const tBodyEl = document.querySelector('tbody');
const tableEl = document.querySelector('table');
function onAdd(e){

    e.preventDefault();
    const todo = document.getElementById("Todo").value;
    tBodyEl.innerHTML += `
        <tr>
        <td>${todo}</td>
        <td><button class="doneBtn">Done</button></td>
        <td><button class="deleteBtn">X</button></td>
        </tr> 
    `
}

function onDeleteRow(e){
    if (!e.target.classList.contains('deleteBtn')){
    return;
    }
    const btn = e.target;
    btn.closest("tr").remove();
}
function onChangeColor(e){
    e.target.closest("tr").toggleClass('highlight');
    }
    


form.addEventListener("submit",onAdd);
tableEl.addEventListener("click",onDeleteRow);
tBodyEl.addEventListener("click",onChangeColor);

$( document ).on( "click", function( event ) {
    $( event.target ).closest( "tr" ).toggleClass( "highlight" );
  });

       

