const footer = () => {

    const div = document.querySelector('#content');// general container
    const container = document.createElement('div');//custom container
    const address = document.createElement('ul');
    const openingHours = document.createElement('ul');

    const fullAddress = ["House of Brunch", "23 Manson Street", "BN1 2AB", "Brighton, UK", "0127344567", "houseofbrunchforyou@fake.con"];


    const fullOpeningHours = {
        day1:{
            day: 'Thursday',
            hours: '11:00 - 15:30',
        },
        day2:{
            day: 'Friday',
            hours: '11:00 - 15:30',
        },
        day3:{
            day: 'Saturday',
            hours: '10:00 - 16:00',
        },
        day4:{
            day: 'Thursday',
            hours: '10:00 - 16:00',
        },
    }
    

    for(const [key,value]of Object.entries(fullOpeningHours)){

        const listItem = document.createElement('li');

        listItem.textContent = `${value.day}: ${value.hours}`;
        listItem.classList.add('footer__hours--day')

        openingHours.append(listItem);

    }


    fullAddress.forEach(line =>{

        const listItem = document.createElement('li');

        listItem.textContent = `${line}`;
        listItem.classList.add('footer__hours--line');

        address.append(listItem);

    })

    container.classList.add('footer')
    address.classList.add('footer__address');
    openingHours.classList.add('footer__hours')


    
    div.append(container);
    container.append(address)
    container.append(openingHours)

    
}

export default footer;