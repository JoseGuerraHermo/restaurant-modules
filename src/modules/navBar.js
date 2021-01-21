const navBar = () =>{

    const div = document.querySelector('#content');//main container 

    const navContainer = document.createElement('div');//custom container for this elements 

    const uList = document.createElement('ul');//main list container 

    const listItem_1 = document.createElement('li');
    const listItem_2 = document.createElement('li');
    const listItem_3 = document.createElement('li');
    const listItem_4 = document.createElement('li');

    
    //text to show
    listItem_1.textContent = 'About us';
    listItem_2.textContent = 'Our menu';
    listItem_3.textContent = 'Coming events';
    listItem_4.textContent = 'Book a table';
    

    //class
    navContainer.classList.add('NavList');//give custom container class
    uList.classList.add('NavList__ul');
    listItem_1.classList.add('NavList__ul--mission');
    listItem_2.classList.add('NavList__ul--menu');
    listItem_3.classList.add('NavList__ul--events');
    listItem_4.classList.add('NavList__ul--book');



    //adding values
    listItem_1.value = 1;
    listItem_2.value = 2;
    listItem_3.value = 3;
    listItem_4.value = 4;


    //appendings
    div.append(navContainer);
    navContainer.append(uList);
    uList.append(listItem_1);
    uList.append(listItem_2);
    uList.append(listItem_3);
    uList.append(listItem_4);

}


export default navBar;
