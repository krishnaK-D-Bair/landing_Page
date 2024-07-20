let list = [" Hey I am Krishna !!" , "Frontend Developer......." ]
let Charecter = 0 ;
let index = 0 ;
function display(){
  if(index < list.length){
    let ch = list[index];
    if(Charecter < ch.length){
      document.querySelector('#hlw').innerHTML = ch.slice(0 , Charecter + 1) ;
      Charecter ++ ;
      setTimeout(display , 100)
    }else{
      index ++ ;
      Charecter = 0 ;
      setTimeout(display , 600);
    }
  }else{
    index = 0 ;
    Charecter = 0 ;
    setTimeout(display , 200)
  }
 
}



display();


document.querySelector('.magnifier').onclick = () =>{
  document.querySelector('.search-bar-container').classList.toggle('active')
} 