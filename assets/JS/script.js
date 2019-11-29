/* function switch(){
var = 'assets/img/falaises_etretat.jpg';
var= 'assets/img/femme-escalade.jpg';
  if (onmouseOver){
    alert='assets/img/falaises_etretat.jpg';
}else(onmouseLeave){
  alert='assets/img/femme-escalade.jpg';
}*/


//Affecte la nouvelle image lorsque la souris survole l'élément
function overPicture(element) {
element.setAttribute('src', 'falaises_etretat.jpg');
}
//Affecte l'image de départ lorsque la souris ne survole plus l'élément
function outPicture(element) {
element.setAttribute('src', 'femme-escalade.jpg');
}
