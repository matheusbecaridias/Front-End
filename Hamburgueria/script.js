 function mostrarSecao(id, linkClicado){
  document.querySelectorAll('main section').forEach(sec =>{
   sec.classList.remove("visivel")
  });
  document.getElementById(id).classList.add('visivel');
  linkClicado.classList.add('ativo');
 }


 
