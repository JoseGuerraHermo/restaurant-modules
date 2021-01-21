 const header = () => {
   const div = document.querySelector('#content');
   const creation = document.createElement('h1');
   const headline = 'The house of brunch';

   creation.classList.add('headerTittle');
   creation.textContent = headline;

   return div.append(creation);
}


export default header;