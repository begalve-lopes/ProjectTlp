const tenis1=  document.querySelector('#tenis-1');
const tenis2=document.querySelector('#tenis-2');

const setaRight=document.querySelector('#right')
const setaLet=document.querySelector('#left')

setaLet.addEventListener('click',()=>{
  tenis1.style.left='650px'
  tenis2.style.left='-50px'
})

setaRight.addEventListener('click',()=>{
  tenis1.style.left='-50px'
  tenis2.style.left='650px' 
})