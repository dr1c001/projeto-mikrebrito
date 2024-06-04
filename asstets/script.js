function toggleMode(){
  const html = document.documentElement
  /*pegando meu documento HTML e fazendo para objeto noja script*/
  html.classList.toggle ('light')
  /* OU PODE SER  ECRITO MAIS SIMPLIFICADO EXEMPLO:*/
  //if /*se(condicional)*/ 
  //(html.classList.contains('light')) /*esta perguntando se na classe list do HTML contem ou NÃO contem o modo LIGHT(modo claro do nosso site)*/ 
  //{html.classList.remove('light')
  /*esta dizendo: se contem, vou retirar o LIGHT*/ 
 // else {html.classList.add('light')}/* mas se não comtem, adicionar o modo light*/

  /* OU PODE SER  ECRITO MAIS SIMPLIFICADO EXEMPLO:*/
  /*html.classList.toggle ('light')*/
  //para trocar a imagem do dark para o light
  //vamos pegar a TAG img
  //substituir a imagem
  //condição: se tiver light mode, adicionar a imagem light
  //se tiver sem light mode, manter a imagem normal
  const img = document.querySelector("#profire img")
if /*se(condicional)*/ 
  (html.classList.contains('light'))
  img.setAttribute('src', './asstets/avatar light.png')
  else{
  img.setAttribute('src', './asstets/avatar.png')}
}
