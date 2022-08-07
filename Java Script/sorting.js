let arraySize=document.querySelector("#arrSize");
let sortSpeed=document.querySelector("#sortSpeed")
let lowerLimit=0;
let upperLimit=200;
let delay = 200;


createArray();

arraySize.addEventListener('input', function(){
    createArray(Number(arraySize.value));
})

function createArray(totalElement=arraySize.value){
    deletePrevArray();
    array=[totalElement];
    for(let i=0; i<totalElement; i++){
        array[i]=Math.floor(Math.random()*(upperLimit-lowerLimit)+lowerLimit);
    }
    console.log(array);
    const elements=document.querySelector("#elements");
    for(let i=0; i<totalElement; i++){
        const element=document.createElement("div");
        element.style.height=`${1.8*array[i]}px`;
        element.style.width=`${1000/totalElement}px`;
        element.classList.add('element');
        element.classList.add('elementStyle');
        element.classList.add(`element${i}`);
        elements.appendChild(element);
    }
}

function deletePrevArray(){
    document.querySelector("#elements").innerHTML="";
}

const newArray=document.querySelector("#newArray");
newArray.addEventListener("click", function(){
    enableArraySizeSlider();
    enableSorter();
    createArray(Number(arraySize.value));
})

let speed=document.querySelector("#sortSpeed");
speed.addEventListener("input", function(){
    delay=410-Number(speed.value);
})

function waitforme(milisec) { 
    return new Promise(resolve => { 
        setTimeout(() => { resolve('') }, milisec); 
    }) 
}

function swap(element1, element2){
    const temp=element1.style.height;
    element1.style.height=element2.style.height;
    element2.style.height=temp;
}

function disableSorter(){
    document.querySelector(".bubbleSort").disabled=true;
    document.querySelector(".insertionSort").disabled=true;
    document.querySelector(".selectionSort").disabled=true;
    document.querySelector(".mergeSort").disabled=true;
    document.querySelector(".quickSort").disabled=true;
}

function enableSorter(){
    document.querySelector(".bubbleSort").disabled=false;
    document.querySelector(".insertionSort").disabled=false;
    document.querySelector(".selectionSort").disabled=false;
    document.querySelector(".mergeSort").disabled=false;
    document.querySelector(".quickSort").disabled=false;
}

function disableArraySizeSlider(){
    document.querySelector("#arrSize").disabled = true;
}
function enableArraySizeSlider(){
    document.querySelector("#arrSize").disabled=false;
}





// let arraySize=document.querySelector("#arr_sz");
// //let lowerLimit=querySelector("low");
// //let upperLimit=querySelector("high");
// let upperLimit=200;
// let lowerLimit=20;

// let array=[];
// createArray();

// arraySize.addEventListener("input", function(){
// //    console.log("Array Size: " + Number(arraySize.value));
//     createArray(Number(arraySize.value));
// })

// function createArray(totalElement=100){
//     deletePrevArray();
//     array=[totalElement];
//     for(let i=0; i<totalElement; i++){
//         array[i]=Math.floor(Math.random()*(upperLimit-lowerLimit)+lowerLimit);
//     }
//     const elements = document.querySelector("#elements");

//     for (let i=0; i<totalElement; i++) {
//         console.log("San"+i);
//         const element=document.createElement("div");
//         element.style.height=`${array[i]*2}px`;
//         element.classList.add('element');
//         element.classList.add('flex-item');
//         element.classList.add(`element${i}`);
//         elements.appendChild(element);
//     }
// //    console.log(array);
// }

// function deletePrevArray() {
//     const elements = document.querySelector("#elements");
//     elements.innerHTML = '';
// }




// function enableSorter(){
//     document.querySelector(".bubbleSort").disabled = false;
//     document.querySelector(".selectionSort").disabled = false;
//     document.querySelector(".insertionSort").disabled = false;
//     document.querySelector(".mergeSort").disabled = false;
//     document.querySelector(".quickSort").disabled = false;
// }
// function disableSorter(){
//     document.querySelector(".bubbleSort").disabled = true;
//     document.querySelector(".selectionSort").disabled = true;
//     document.querySelector(".insertionSort").disabled = true;
//     document.querySelector(".mergeSort").disabled = true;
//     document.querySelector(".quickSort").disabled = true;
// }
// function disableSizeSlider(){
//     document.querySelector("#arr_sz").disabled = true;
// }
// function enableSizeSlider(){
//     document.querySelector("#arr_sz").disabled = false;
// }
// function disableNewArrayBtn(){
//     document.querySelector("#newArray").disabled = true;
// }
// function enableNewArrayBtn(){
//     document.querySelector("#newArray").disabled = false;
// }


// const newArray=document.querySelector(".newArray");
// newArray.addEventListener("onclick", function(){
//     enableSortingBtn();
//     enableSizeSlider();
//     createArray(arraySize.value);
// })


// function swap(element1, element2){
//     let temp=element1.style.height;
//     element1.style.height=element2.style.height;
//     element2.style.height=temp;
// }