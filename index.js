
let toastBox = document.getElementById("toastBox");
let successMessage = ' <i class="fa-solid fa-circle-check"></i> Succesfully Submitted';
let errorMessage = ' <i class="fa-solid fa-circle-xmark"></i> Please fix the Error!';
let invalidMessage = ' <i class="fa-solid fa-anchor-circle-exclamation"></i> Invalid Input, Check Again';


function showToast(msg){
    let toast =  document.createElement("div");
    toast.classList.add("toast");
    toast.innerHTML = msg;
    toastBox.appendChild(toast);

    if(msg.includes('Error')){
        toast.classList.add('error');
    }
    if(msg.includes('Invalid')){
        toast.classList.add('invalid');
    }
    if(msg.includes('error')){
        toast.classList.add('error');
    }

    setTimeout(()=>{
        toast.remove();
    },6000);
    
}