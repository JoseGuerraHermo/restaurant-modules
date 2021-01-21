const menuItems = {
    Starters:{
        dishName: 'Toasties',
        dishDescrip: 'Toasted sourdough with one of this three options: hummus and roasted peppers, plant based cream cheese and carrot lox salmon or  refried beans, tofu and avocado.',
        dishPrice: '£8',
    },
    Soups:{
        dishName: 'Soups',
        dishDescrip: 'Choose one of our soups of the day...yummy!',
        dishPrice: '£6',
    },
    Drinks:{
        dishName: 'Drinks',
        dishDescrip: 'Juice of the day, water and sodas',
        dishPrice: '£3',
    }
}

const menu =()=>{

    const menuContainer = document.createElement('div');//custom container
    const addingTittle = document.createElement('h2');
    const menuTittle = 'Our Menu';

    menuContainer.classList.add('menuContainer');

    addingTittle.classList.add('menuContainer__title');
    addingTittle.textContent = menuTittle;

    menuContainer.append(addingTittle);

   for(const [key, value] of Object.entries(menuItems)){
   
       const h4Name = document.createElement('h4');
       const descrip = document.createElement('p');
       const priceItem = document.createElement('p');

       h4Name.classList.add('menuContainer__name');
       descrip.classList.add('menuContainer__descrip');
       priceItem.classList.add('menuContainer__price');

       h4Name.textContent = value.dishName;
       descrip.textContent = value.dishDescrip;
       priceItem.textContent = value.dishPrice;


       menuContainer.append(h4Name)
       menuContainer.append(descrip);
       menuContainer.append(priceItem)
   }

    return menuContainer;
}

export default menu