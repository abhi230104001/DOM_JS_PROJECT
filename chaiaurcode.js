//for project 1


const buttons = document.querySelectorAll('.button');// it give nodelist 
const body = document.querySelector('body');
const heading = document.querySelector('h1');
buttons.forEach(function(button){
    console.log(button);
    button.addEventListener('click',function(e){
        console.log(e);
        console.log(e.target);
        if(e.target.id === 'grey'){
            body.style.backgroundColor = e.target.id;
            heading.style.color = 'brown';
            body.style.backgroundColor= 'grey';
        }
        if(e.target.id==='white'){
            body.style.backgroundColor = e.target.id;
            heading.style.color = 'darkpink';
            body.style.backgroundColor= 'white';
            
        }

        if(e.target.id==='yellow'){
            body.style.backgroundColor = e.target.id;
            heading.style.color = 'green';
            body.style.backgroundColor= 'yellow';
        }
        if(e.target.id==='blue'){
            body.style.backgroundColor = e.target.id;
            heading.style.color = 'red';
             body.style.backgroundColor= 'blue';
        }


    });


 });


// project 2 code
// html and css code se on starbitzz(go from hitesh sir's github )

// const form = document.querySelector('form');
// // this usecase will give you empty
// // const height = parseInt(document.querySelector('#height').value)

// form.addEventListener('submit', function (e) {
//   e.preventDefault();

//   const height = parseInt(document.querySelector('#height').value);// this the method to take input val
//   const weight = parseInt(document.querySelector('#weight').value);
//   const results = document.querySelector('#results');

//   if (height === '' || height < 0 || isNaN(height)) {
//     results.innerHTML = `Please give a valid height ${height}`;
//   } else if (weight === '' || weight < 0 || isNaN(weight)) {
//     results.innerHTML = `Please give a valid weight ${weight}`;
//   } else {
//     const bmi = (weight / ((height * height) / 10000)).toFixed(2);
//     //show the result
//     results.innerHTML = `<span>${bmi}</span>`;
//   }
// });


// PROJECT 3

// const clock = document.getElementById('clock');
// setInterval(function(){
//     let date = new Date();
//     clock.innerHTML =  date.toLocaleTimeString();
// })