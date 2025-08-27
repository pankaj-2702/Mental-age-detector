const buttons = document.querySelectorAll("button");

buttons.forEach(button => {
  button.addEventListener("click", (e) => {
    e.preventDefault();  // stops the default action (like form submit, link redirect, etc.)
    console.log(button.innerText + " clicked!");
    e.target.style.backgroundColor="green";
     for(btn of buttons){
        btn.disabled=true;
     }
  });
});

const q1= document.querySelector("#one");
const q2= document.querySelector("#two");
const q3= document.querySelector("#three");
const q4= document.querySelector("#four");

const list=document.querySelectorAll("li");

 list.forEach(li =>{
    li.addEventListener("click",(e)=>{
     e.target.style.backgroundColor="green";
});
 });
  const body = document.querySelector("body");
  const result = document.querySelector(".result");
 const submit = document.querySelector(".submit");
  const message = document.querySelector(".message");
  const loader= document.querySelector(".loader");
  const image = document.querySelector(".image");
  
  result.remove();
 submit.addEventListener("click",()=>{
   
  image.remove();
 const gender = document.querySelector('input[name="gender"]:checked');
      console.log(gender);
      if(gender==null){
           body.appendChild(result) ;
           loader.remove();
            result.appendChild(image);
         message.innerText="Select Gender, Try again!";
          return;
      }
       body.appendChild(result) ;
       result.appendChild(loader);
    submit.disabled=true;
    for( let i=1;i<8;i++){
    setTimeout(() => {
      
    let randomNum = Math.floor(Math.random() * 21); 
    console.log(messages[randomNum]);
     message.innerText=messages[randomNum];
     
    },i* 2000);
   
}
   setTimeout(()=>{
    compliment(gender.id);
   },8*2000);
 })


 const compliment=(id)=>{
     loader.remove();
     result.appendChild(image);
    message.style.fontSize="2rem";
     console.log(id);
     if(id==="male"){
         let random1 = Math.floor(Math.random() * 4);
         message.innerText=maleMsg[random1];
     }else if(id==="female"){
        let random2 = Math.floor(Math.random() * 6);
         message.innerText=femaleMsg[random2];
     }
    
      
     
 
 }
 
 image.addEventListener("click",()=>{
  message.innerText="📡 Connecting to NASA satellites..."
  result.remove();
 })

