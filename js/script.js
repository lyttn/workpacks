var d = new Date();
const cm = document.querySelector('.menu');


document.getElementById("today").innerHTML = d.getDate()+"-"+d.getMonth()+"-"+d.getFullYear()+" v0.0.1";
function onUser(){
    var dropdown = document.getElementsByClassName("dropdown-btn");
    var i;

    for(i=0;i<dropdown.length;i++){
        dropdown[i].addEventListener("click", function(){
            this.classList.toggle("active");
            var dropdownContent = this.nextElementSibling;
            if(dropdownContent.style.display === "block"){
                dropdownContent.style.display = "none";
            }else{
                dropdownContent.style.display = "block";
            }
        });
    }
}

window.addEventListener('contextmenu', (e) => {
    e.preventDefault();
    console.log(e);
    showContextMenu();
    cm.style.top = e.y + 'px';
    cm.style.left = e.x + 'px';


});

window.addEventListener('click',() => {
    showContextMenu(false);
});

function showContextMenu(show = true){
    cm.style.display = show ? 'block' : 'none';
}

function sortTable(n){
    var table, switching, dir, rows, i, shouldSwitch, switchCount=0, len;
    table = document.getElementById("cwaList");
    switching = true;
    dir = "asc";
    while(switching){
        switching = false;
        rows = table.rows;
        len = rows.length-1;
        for(i=1;i< len;i++){
            shouldSwitch = false;
            x = rows[i].getElementsByTagName("TD")[n];
            y = rows[i+1].getElementsByTagName("TD")[n];
            if(dir=="asc"){
                if(x.innerHTML.toLowerCase()>y.innerHTML.toLowerCase()){
                    shouldSwitch = true;
                    break;
                }
            }else if(dir== "desc"){
                if(x.innerHTML.toLowerCase()<y.innerHTML.toLowerCase()){
                    shouldSwitch = true;
                    break;
                }
            }
        }
        if(shouldSwitch){
            rows[i].parentNode.insertBefore(rows[i+1],rows[i]);
            switching = true;
            switchCount++;
        }else{
            if(switchCount == 0 && dir=="asc"){
                dir = "desc";
                switching = true;
            }
        }
    }
}





function createOneRow(tableId){
    var t = document.getElementById(tableId);
    var r = document.createElement("tr");
    r.setAttribute('id','01');
    t.appendChild(r);

    var c = document.createElement('td');
    var textNode = '<input type="checkbox" value="" name="drawings01">';
    var cText = document.createTextNode(textNode);

    c.appendChild(cText);
    r.appendChild(c);

}
const t = document.getElementById('editTableOfContents');

function showTableOfContentIWP(show=true){
    t.style.display = show ? 'block' : 'none';
    if(show){
        t.style.top = t.parentElement.width/2;
        t.style.left = t.parentElement.height/2;
        t.style.position = 'fixed';
        t.style.zIndex = 1;
    }
}
const objT = document.getElementById('editTableOfContentsBody');
function insertNewRow(rowIndex=0){
    let row = objT.insertRow(rowIndex);
    let cell0 = row.insertCell(0);
    let cell1 = row.insertCell(1);
    let cell2 = row.insertCell(2);
    let cell3 = row.insertCell(3);
    let cell4 = row.insertCell(4);
    cell0.innerHTML = 'B';
    cell1.innerHTML = '1';
    cell2.innerHTML = '2';
    cell3.innerHTML = '3';
    cell4.innerHTML = '4';
    console.log(rowIndex);

}