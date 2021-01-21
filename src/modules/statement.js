const statement =()=>{

    const container = document.createElement('div');//create custom container
    const tittle = document.createElement('h3');
    const p = document.createElement('p');

    container.classList.add('statement');
    tittle.classList.add('statement__title');
    p.classList.add('statement__parag');

    tittle.textContent = "House of brach";
    p.textContent = "Come and enjoy our decadent but healthy brunches, events and atmostphere.";
    
    container.append(tittle);
    container.append(p)

    return container;
}

export default statement