
const user=document.getElementById('user');

console.log(user);
console.log(user.dataset);
console.log(user.dataset.userName);
console.log(user.dataset.userAge);


const drop =document.getElementById('drop');

drop.addEventListener('dragover', (e)=>{
    e.preventDefault();

})

drop.addEventListener("drop", () => {
  console.log("Dropped");
});