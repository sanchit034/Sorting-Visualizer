const selectionbtn=document.querySelector(".selectionSort");
selectionbtn.addEventListener("click", async function(){
    const concept=document.querySelector("#concept");
    concept.innerHTML="<a href=selection.html &quot;>What is selection sort</a>";
    disableArraySizeSlider();
    disableSorter();
    await selection();
    enableArraySizeSlider();
    enableSorter();
})

async function selection(){
    const arr=document.querySelectorAll(".element");
    const temp=parseFloat(arr[0].style.width);
    const newW=temp*1.5+"px";
    const oldW=temp+"px";
    for(let i=0; i<arr.length; i++){
        let minIndex=i;
        arr[i].style.background='rgb(114 99 203)';
        arr[i].style.width=newW;
        await waitforme(delay);
        for(let j=i+1; j<arr.length;j++){
            arr[j].style.background='rgb(224 178 98)';
            arr[j].style.width=newW;
            await waitforme(delay);
            if(parseFloat(arr[j].style.height)<parseFloat(arr[minIndex].style.height)){
                if(minIndex>i){
                    arr[minIndex].style.background='rgb(246 86 81)';
                    arr[minIndex].style.width=oldW;
                }
                minIndex=j;
                arr[j].style.background='rgb(22 111 7)';
            }
            else{
                arr[j].style.background='rgb(246 86 81)';
                arr[j].style.width=oldW;
            }
        }
        await waitforme(delay);
        swap(arr[minIndex], arr[i]);
        await waitforme(delay);
        arr[minIndex].style.background='rgb(246 86 81)';
        arr[i].style.background='rgb(96 201 78)';
        arr[i].style.width=oldW;
    }
}