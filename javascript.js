const container = document.getElementById("container");
let rows = document.getElementsByClassName("gridRow");
let cells = document.getElementsByClassName("cell");

function makeGrid(rowNum,colNum)
{
    for(i=0;i<rowNum;i++)
    {
        let newRow = document.createElement("div");
        container.appendChild(newRow).className = "grid-row";
        for(j=0;j<colNum;j++)
        {
            let newCell = document.createElement("div");
            newCell.innerText = (i+1)+(16*j); 
            newRow.appendChild(newCell).className = "grid-item";
        }
    }
}

makeGrid(16,16);