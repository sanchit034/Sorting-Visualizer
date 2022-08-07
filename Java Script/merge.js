const mergebtn=document.querySelector(".mergeSort");
mergebtn.addEventListener("click", async function(){
    const concept=document.querySelector("#concept");
    concept.innerHTML="<a href=merge.html &quot;>What is merge sort</a>";
    const arr=document.querySelectorAll(".element");
    disableArraySizeSlider();
    disableSorter();
    await mergeSort(arr, 0, arr.length-1);
    enableArraySizeSlider();
    enableSorter();
})


async function mergeSort(arr, left, right){
    if(left<right){
        const mid=left+Math.floor((right-left)/2);
        await mergeSort(arr, left, mid);
        await mergeSort(arr, mid+1, right);
        await merge(arr, left, mid, right);
        console.log("San");
    }
}

async function merge(arr, left, mid, right){
    let size1=mid-left+1;
    let size2=right-mid;
    let leftArr=new Array(size1);
    let rightArr=new Array(size2);
    await waitforme(delay);
    for(let i=0; i<size1; i++){
        arr[i+left].style.background='rgb(224 178 98)';
        leftArr[i]=arr[i+left].style.height;
    }
    for(let i=0; i<size2; i++){
        arr[i+mid+1].style.background='rgb(246 226 81)';
        rightArr[i]=arr[i+mid+1].style.height;
    }
    await waitforme(delay);
    let i=0, j=0, k=left;
    while(i<size1&&j<size2){
        await waitforme(delay);
        if(parseFloat(leftArr[i])<parseFloat(rightArr[j])){
            arr[k].style.height=leftArr[i++];
        }
        else{
            arr[k].style.height=rightArr[j++];
        }
        arr[k].style.background='rgb(96 201 78)';
        k++;
    }
    while(i<size1){
        arr[k].style.height=leftArr[i++];
        arr[k].style.background='rgb(96 201 78)';
        k++;
    }
    while(j<size2){
        arr[k].style.height=rightArr[j++];
        arr[k].style.background='rgb(96 201 78)';
        k++;
    }
}