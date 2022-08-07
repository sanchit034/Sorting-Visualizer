const bubblebtn=document.querySelector(".bubbleSort");
bubblebtn.addEventListener('click', async function(){
    const concept=document.querySelector("#concept");
    concept.innerHTML="<a href=bubble.html &quot;>What is bubble sort</a>";
    disableArraySizeSlider();
    disableSorter();
    await bubble();
    enableArraySizeSlider();
    enableSorter();
})

async function bubble(){
    const arr=document.querySelectorAll(".element");
    const temp=parseFloat(arr[0].style.width);
    const newW=temp*1.5+"px";
    const oldW=temp+"px";
    for(let i=0; i<arr.length-1; i++){
        for(let j=0; j<arr.length-i-1; j++){
            arr[j].style.width=newW;
            arr[j+1].style.width=newW;
            arr[j].style.background='rgb(224 178 98)';
            arr[j+1].style.background='rgb(224 178 98)';
            await waitforme(delay);
            if(parseFloat(arr[j].style.height)>parseFloat(arr[j+1].style.height)){
                await waitforme(delay);
                swap(arr[j], arr[j+1]);
            }
            arr[j].style.width=oldW;
            arr[j+1].style.width=oldW;
            arr[j].style.background='rgb(246 86 81)';
            await waitforme(delay);
        }
        arr[arr.length-i-1].style.background='rgb(96 201 78)';
    }
    arr[0].style.background='rgb(96 201 78)';
}