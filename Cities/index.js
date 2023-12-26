let field   = document.querySelector('#field');
let message = document.querySelector('#message');
let lastnamecity;

let cities = [];

field.addEventListener('keydown', (event)=> {
    if(event.key === 'Enter'){
        let city = field.value.toLocaleLowerCase();
        if (cities.includes(city)) {
            message.textContent = 'Город уже есть'
            return
        }

        if(lastnamecity) {
            const last = lastnamecity.substr(lastnamecity.length - 1);
            if(last!==city[0]) {
                message.textContent = `начинайте с буквы ${last}`;
                return;
            }
        }
       
        cities.push(city)
        lastnamecity = city 

       
        message.textContent = ''
    }
})

