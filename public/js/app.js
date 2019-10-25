console.log('Client side JS file loaded')
//const fetch =  require('node-fetch')


const weatherForm = document.querySelector('form');
const search = document.querySelector('input');
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')



weatherForm.addEventListener('submit',(e)=>{
    e.preventDefault();
    const location = search.value;
    messageOne.textContent="";
    messageTwo.textContent="";
    fetch('http://localhost:3000/weather?address='+location).then((response)=>{
        //console.log(response);
        response.json().then((res)=>{
            if(res.error){
                messageOne.textContent = res.error;
            }else{
            
                messageOne.textContent = res.location;
                messageTwo.textContent = res.forecast;
            }
        })
    })
})
