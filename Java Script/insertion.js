const insertionbtn=document.querySelector(".insertionSort");
insertionbtn.addEventListener("click", async function(){
    const concept=document.querySelector("#concept");
    concept.innerHTML="<a href=insertion.html &quot;>What is insertion sort</a>";
    disableArraySizeSlider();
    disableSorter();
    await insertion();
    enableArraySizeSlider();
    enableSorter();
})

async function insertion(){
    const arr=document.querySelectorAll(".element");
    const temp=parseFloat(arr[0].style.width);
    const newW=temp*1.5+"px";
    const oldW=temp+"px";
    for(let i=0; i<arr.length; i++){
        arr[i].style.background='rgb(96 201 78)';
        arr[i].style.width=newW;
        for(let j=i; j>0; j--){
            arr[j].style.background='rgb(224 178 98)';
            await waitforme(delay);
            arr[j-1].style.width=newW;
            if(parseFloat(arr[j].style.height)<parseFloat(arr[j-1].style.height)){
                await waitforme(delay);
                swap(arr[j], arr[j-1]);
                arr[j].style.background='rgb(96 201 78)';
                arr[j].style.width=oldW;
            }
            else{
                await waitforme(delay);
                arr[j].style.background='rgb(96 201 78)';
                arr[j].style.width=oldW;
                arr[j-1].style.width=oldW;
                break;
            }
        }
        await waitforme(delay);
        arr[0].style.width=oldW;
    }
}