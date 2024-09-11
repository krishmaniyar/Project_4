const container = document.getElementById("container");
let mouseDown = false;

var color = ["#3C9EE7", "#E7993C","#E73C99", "#3CE746", "#E7993C"];

var size = prompt("What size do you want?");
console.log(size);

function makeGrid(rowNum,colNum)
{
    for(i=0;i<rowNum;i++)
    {
        let newRow = document.createElement("div");
        container.appendChild(newRow).className = "grid-row";
        for(j=0;j<colNum;j++)
            {
                let newCell = document.createElement("div");
                newCell.addEventListener('mousedown',()=>{
                    mouseDown = true;
                    newCell.style.backgroundColor = "black";
                });
                newCell.addEventListener('mouseenter',()=>{
                    if(mouseDown===true){
                    newCell.style.backgroundColor = "black";
                }
            });
            newCell.addEventListener('mouseup',()=>{
                mouseDown = false;
            });
            newRow.appendChild(newCell).className = "grid-item";
            let var1 = 30*16/size;
            var var2 = "" + var1 + "px";
            console.log(var2);
            newCell.style.width = var2;
            newCell.style.height = var2;
            document.getElementById("eraser").addEventListener("click",()=>{
                newCell.addEventListener('mousedown',()=>{
                    mouseDown = true;
                    newCell.style.backgroundColor = "white";
                });
                newCell.addEventListener('mouseenter',()=>{
                    if(mouseDown===true){
                        newCell.style.backgroundColor = "white";
                    }
                });
                newCell.addEventListener('mouseup',()=>{
                    mouseDown = false;
                });
            });
            document.getElementById("defaultColor").addEventListener("click",()=>{
                newCell.addEventListener('mousedown',()=>{
                    mouseDown = true;
                    newCell.style.backgroundColor = "black";
                });
                newCell.addEventListener('mouseenter',()=>{
                    if(mouseDown===true){
                        newCell.style.backgroundColor = "black";
                    }
                });
                newCell.addEventListener('mouseup',()=>{
                    mouseDown = false;
                });
            });
            document.getElementById("rainbowColor").addEventListener("click",()=>{
                newCell.addEventListener('mousedown',()=>{
                    mouseDown = true;
                    newCell.style.backgroundColor = color[(Math.floor(Math.random() * color.length))];
                });
                newCell.addEventListener('mouseenter',()=>{
                    if(mouseDown===true){
                        newCell.style.backgroundColor = color[(Math.floor(Math.random() * color.length))];
                    }
                });
                newCell.addEventListener('mouseup',()=>{
                    mouseDown = false;
                });
            });
            document.getElementById("clear").addEventListener("click",()=>{
                newCell.style.backgroundColor = "white";
            });
        };
    };
};

makeGrid(size,size);