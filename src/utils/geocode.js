const request = require('request')

const geocode = (address, callback)=>{
    const url= 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+ encodeURIComponent(address) +'.json?access_token=pk.eyJ1IjoiYWxvbmplaG8iLCJhIjoiY2p6N2hlNDEzMGM3ODNubnlyd2liYmsxeiJ9.JsG2aMMSWjbIf2UTHloL1A&limit=1'

    request({url: url , json: true}, (error, response)=>{
        console.log
        if (error || response.body.features [0]=== undefined){
            callback('error opening url',undefined);
        }else if( response.body.features.length === undefined ){
           callback(' couldnt find this place',undefined)
        }else{
           callback(undefined, 
            {   
               latitude:  response.body.features[0].center[1],
               longtitude:  response.body.features[0].center[0],
               location:  response.body.features[0].place_name
        })

        }
    }
    )
}

module.exports = geocode