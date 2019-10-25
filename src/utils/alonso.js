
const https= require('https')
const url='https://api.darksky.net/forecast/5e5cb46b1e405545b19383b6e2737cb0/37.8267,-122.4233';
request({url: url, json: true}, (error, response)=>{
    if (error){
        console.log('error happened');
    }else if (response.error){
        console.log('error in reading from this url')
    }else{
        console.log('jaja')
       const data= response.body
        console.log(data.currently)
    }
})