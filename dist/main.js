(()=>{"use strict";const e=()=>{const e=document.createElement("div"),t=document.createElement("h3"),n=document.createElement("p");return e.classList.add("statement"),t.classList.add("statement__title"),n.classList.add("statement__parag"),t.textContent="House of brach",n.textContent="Come and enjoy our decadent but healthy brunches, events and atmostphere.",e.append(t),e.append(n),e},t={event1:{stagePerformance:"Accoustic trio session",date:"05/07/21"},event2:{stagePerformance:"Soul & Jazz cocktail session",date:"03/03/21"},event3:{stagePerformance:"Open microphone: poetry session",date:"25/10/21"},event4:{stagePerformance:"Piano session",date:"31/01/21"}},n={Starters:{dishName:"Toasties",dishDescrip:"Toasted sourdough with one of this three options: hummus and roasted peppers, plant based cream cheese and carrot lox salmon or  refried beans, tofu and avocado.",dishPrice:"£8"},Soups:{dishName:"Soups",dishDescrip:"Choose one of our soups of the day...yummy!",dishPrice:"£6"},Drinks:{dishName:"Drinks",dishDescrip:"Juice of the day, water and sodas",dishPrice:"£3"}};(()=>{const e=document.querySelector("#content"),t=document.createElement("h1");t.classList.add("headerTittle"),t.textContent="The house of brunch",e.append(t)})(),(()=>{const e=document.querySelector("#content"),t=document.createElement("div"),n=document.createElement("ul"),a=document.createElement("li"),s=document.createElement("li"),d=document.createElement("li"),o=document.createElement("li");a.textContent="About us",s.textContent="Our menu",d.textContent="Coming events",o.textContent="Book a table",t.classList.add("NavList"),n.classList.add("NavList__ul"),a.classList.add("NavList__ul--mission"),s.classList.add("NavList__ul--menu"),d.classList.add("NavList__ul--events"),o.classList.add("NavList__ul--book"),a.value=1,s.value=2,d.value=3,o.value=4,e.append(t),t.append(n),n.append(a),n.append(s),n.append(d),n.append(o)})(),function(){const a=document.querySelector("#content"),s=document.createElement("div"),d=document.querySelectorAll("li");s.classList.add("mainSection"),a.append(s),s.append(e()),d.forEach((a=>{a.addEventListener("click",(a=>{switch(a.target.value){case 1:s.removeChild(s.childNodes[0]),s.appendChild(e());break;case 2:s.removeChild(s.childNodes[0]),s.appendChild((()=>{const e=document.createElement("div"),t=document.createElement("h2");e.classList.add("menuContainer"),t.classList.add("menuContainer__title"),t.textContent="Our Menu",e.append(t);for(const[t,a]of Object.entries(n)){const t=document.createElement("h4"),n=document.createElement("p"),s=document.createElement("p");t.classList.add("menuContainer__name"),n.classList.add("menuContainer__descrip"),s.classList.add("menuContainer__price"),t.textContent=a.dishName,n.textContent=a.dishDescrip,s.textContent=a.dishPrice,e.append(t),e.append(n),e.append(s)}return e})());break;case 3:s.removeChild(s.childNodes[0]),s.appendChild((()=>{const e=document.createElement("div"),n=document.createElement("h2");n.textContent="Coming events...",e.classList.add("events"),n.classList.add("events__title"),e.append(n);for(const[n,a]of Object.entries(t)){const t=document.createElement("h3"),n=document.createElement("p");t.textContent=a.stagePerformance,n.textContent=a.date,t.classList.add("events__deventDesc"),n.classList.add("events__dates"),e.append(t),e.append(n)}return e})());break;case 4:s.removeChild(s.childNodes[0]),s.appendChild((()=>{const e=document.createElement("div"),t=document.createElement("h3"),n=document.createElement("form"),a=document.createElement("input"),s=document.createElement("label"),d=document.createElement("input"),o=document.createElement("label"),c=document.createElement("input"),r=document.createElement("label"),i=document.createElement("button");return a.setAttribute("type","date"),d.setAttribute("type","time"),c.setAttribute("type","number"),i.setAttribute("type","submit"),i.setAttribute("action",""),t.textContent="Book a table",s.textContent="Pick a date",o.textContent="At what time are you coming?",r.textContent="How many of you are coming?",i.textContent="Check your spot",n.classList.add("form"),e.classList.add("bookings"),t.classList.add("form__tittle"),a.classList.add("form__input--date"),d.classList.add("form__input--hour"),c.classList.add("form__input--guests"),s.classList.add("form__label--date"),o.classList.add("form__label--hour"),r.classList.add("form__label--guest"),i.classList.add("button"),e.append(t),e.append(n),n.append(a),n.append(s),n.append(d),n.append(o),n.append(c),n.append(r),n.append(i),i.addEventListener("click",(e=>{e.preventDefault()})),e})())}}))}))}(),(()=>{const e=document.querySelector("#content"),t=document.createElement("div"),n=document.createElement("ul"),a=document.createElement("ul"),s={day1:{day:"Thursday",hours:"11:00 - 15:30"},day2:{day:"Friday",hours:"11:00 - 15:30"},day3:{day:"Saturday",hours:"10:00 - 16:00"},day4:{day:"Thursday",hours:"10:00 - 16:00"}};for(const[e,t]of Object.entries(s)){const e=document.createElement("li");e.textContent=`${t.day}: ${t.hours}`,e.classList.add("footer__hours--day"),a.append(e)}["House of Brunch","23 Manson Street","BN1 2AB","Brighton, UK","0127344567","houseofbrunchforyou@fake.con"].forEach((e=>{const t=document.createElement("li");t.textContent=`${e}`,t.classList.add("footer__hours--line"),n.append(t)})),t.classList.add("footer"),n.classList.add("footer__address"),a.classList.add("footer__hours"),e.append(t),t.append(n),t.append(a)})()})();