const booking =()=>{


    //creating a container
    const container = document.createElement('div');
    const tittle = document.createElement('h3');
    const form = document.createElement('form');
    const inputDate = document.createElement('input');
    const dateLabel = document.createElement('label');
    const inputHour = document.createElement('input');
    const hourLabel = document.createElement('label');
    const guests = document.createElement('input');
    const guestLabel = document.createElement('label');
    const button = document.createElement('button');


    inputDate.setAttribute('type', 'date');
    inputHour.setAttribute('type', 'time');
    guests.setAttribute('type', 'number');
    button.setAttribute('type', 'submit');
    button.setAttribute('action', '');
    


    tittle.textContent = 'Book a table';
    dateLabel.textContent = 'Pick a date';
    hourLabel.textContent = 'At what time are you coming?';
    guestLabel.textContent = 'How many of you are coming?';
    button.textContent = 'Check your spot';


    form.classList.add('form');

    container.classList.add('bookings');

    tittle.classList.add('form__tittle');
    inputDate.classList.add('form__input--date');
    inputHour.classList.add('form__input--hour');
    guests.classList.add('form__input--guests');

    dateLabel.classList.add('form__label--date');
    hourLabel.classList.add('form__label--hour');
    guestLabel.classList.add('form__label--guest');

    button.classList.add('button');

    
    container.append(tittle);
    container.append(form);
    form.append(inputDate);
    form.append(dateLabel);
    form.append(inputHour);
    form.append(hourLabel);
    form.append(guests);
    form.append(guestLabel);
    form.append(button);



    button.addEventListener('click', (e)=> {
        e.preventDefault();
    })




    return container
}

export default booking
