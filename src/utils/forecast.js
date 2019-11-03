const request = require('request')

const forecast= (latitude,longtitude, callback) => {
    const url = 'https://api.darksky.net/forecast/5e5cb46b1e405545b19383b6e2737cb0/'+latitude+','+ longtitude +'?units=si'
    request({url:url, json: true}, (error, response)=>{
        if(error){
            callback('couldnt connect',undefined);
        }else if(response.body.error){
            callback('Couldnt find location. wrong long/lat',undefined)
        }else{
            const temp= response.body;
            //console.log(temp);
            const data= {
                location: temp.timezone,
                latitude,
                longtitude,
                summary: temp.currently.summary,
                visibility: temp.currently.visibility
            }
            callback(undefined, data);
        }
    })
}

module.exports = forecast