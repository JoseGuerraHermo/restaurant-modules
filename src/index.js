import navBar from './modules/navBar'
import footer from './modules/footer'
import header from './modules/header'
import statement from './modules/statement'
import booking from './/modules/booking'
import events from './modules/events'
import menu from './modules/menu'



function init(){
    header()
    navBar()
    mainContent()
    footer()
}

function mainContent(){

    const div = document.querySelector('#content');//main container 
    const main = document.createElement('div'); //create custom container

    const listSelection = document.querySelectorAll('li');

    
    main.classList.add('mainSection');

    div.append(main);

    main.append(statement());//default value


    listSelection.forEach(listItem =>{
        listItem.addEventListener('click', (e)=> {

          const clickedList = e.target.value;
          
          switch(clickedList){
            case 1:{
                main.removeChild(main.childNodes[0]);
                main.appendChild(statement());
                break;
            }
            case 2:{
                main.removeChild(main.childNodes[0]);
                main.appendChild(menu());
                break;
            }
            case 3:{
                main.removeChild(main.childNodes[0]);
                main.appendChild(events());
                break;
            }
            case 4:{
                main.removeChild(main.childNodes[0]);
                main.appendChild(booking());
                break;
            }
          }
        })
    })

}


init()
