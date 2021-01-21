const comingEvents = {
    event1: {
        stagePerformance: 'Accoustic trio session',
        date: '05/07/21'
    },
    event2: {
        stagePerformance: 'Soul & Jazz cocktail session',
        date: '03/03/21'
    },
    event3: {
        stagePerformance: 'Open microphone: poetry session',
        date: '25/10/21'
    },
    event4: {
        stagePerformance: 'Piano session',
        date: '31/01/21'
    },
}

const events =()=>{

    const eventContainer = document.createElement('div');
    const titleEvents = document.createElement('h2');

    titleEvents.textContent = 'Coming events...'
    
    eventContainer.classList.add('events');
    titleEvents.classList.add('events__title');
  
    

    eventContainer.append(titleEvents);


    for(const[key,value]of Object.entries(comingEvents)){
        
        const eventDescrip = document.createElement('h3');
        const datesPerformances = document.createElement('p');

        eventDescrip.textContent = value.stagePerformance;
        datesPerformances.textContent = value.date;

        eventDescrip.classList.add('events__deventDesc');
        datesPerformances.classList.add('events__dates')

        eventContainer.append(eventDescrip)
        eventContainer.append(datesPerformances)
        
    }
    
    return eventContainer
}

export default events
