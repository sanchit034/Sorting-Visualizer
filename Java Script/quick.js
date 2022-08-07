const quickbtn=document.querySelector(".quickSort");
quickbtn.addEventListener("click", async function(){
    const concept=document.querySelector("#concept");
    concept.innerHTML="<a href=quick.html &quot;>What is quick sort</a>";
    const arr=document.querySelectorAll('.element');
    disableArraySizeSlider();
    disableSorter();
    await quick(0, arr.length-1, arr);
    enableArraySizeSlider();
    enableSorter();
})

async function quick(left, right, arr){
    if(left>right)
        return ;
    let pi=await partition(left, right, arr);
    arr[pi].style.background='rgb(96 201 78)';
    await quick(left, pi-1, arr);
    await quick(pi+1, right, arr);
}

async function partition(left, right, arr){
    let i=left;
    arr[i].style.background='rgb(114 99 203)';

    await waitforme(delay);
    for(let j=left; j<right; j++){
        arr[j].style.background='rgb(224 178 98)';
        await waitforme(delay);
        if(parseFloat(arr[j].style.height)<parseFloat(arr[right].style.height)){
            await waitforme(delay);
            swap(arr[j], arr[i]);
            arr[i].style.background='rgb(246 86 81)';
            i++;
        }
        arr[j].style.background='rgb(246 86 81)';
        arr[i].style.background='rgb(114 99 203)';
    }
    await waitforme(delay);
    swap(arr[i], arr[right]);
    return i;
}