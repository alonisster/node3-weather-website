const path = require('path')
const hbs = require('hbs')
const express= require ('express')
const geo= require ('./utils/geocode')
//const fetch =  require('node-fetch')

const forecast = require('./utils/forecast')
const app = express()



const publicDirPath= path.join(__dirname, '../public')
const templatesPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')


app.use(express.static(publicDirPath))
hbs.registerPartials(partialsPath)



app.set('view engine','hbs')
app.set('views', templatesPath)
app.get('/help', (req, res)=>{
    res.render('help', {
        title: 'Help page',
        name: 'Alon'

    })
})
app.get('/about', (req,res)=>{
    res.render('about', {
        title: 'About Page W',
        name: 'Alon'
    })
})
app.get('', (req, res)=>{
    res.render('index',{
        title: 'Weather',
        name:'Alon'
    })
})

app.get('/weather', (req,res)=>{
    if(!req.query.address){
        return res.send({
            error: 'didnt entered any address'
        })
    }
    const adr = req.query.address;
    geo(adr,(error,{latitude=0,longtitude=0,location='none'}={})=>{
        if(error){
            return res.send({error});
        }
        forecast(latitude, longtitude, (error,foreResult)=>{
            if(error){
                return res.send(error);
            }
            res.send({
                forecast: foreResult.summary,
                location: location,
                address: adr
            })
        })
    })
})




























// app.get('/weather', (req, res)=>{
//     if(!req.query.address){
//         return res.send({
//             error: 'didnt entered an address'
//         })
//     }
//     const adr= req.query.address;
//     console.log(adr);
//     //geo.geocode(adr,(obj)=>console.log(obj));
//     geo(adr ,(error,{latitude, longtitude,location})=>{
//         if(error){
//             return res.send({error});
//         }
//         else{
//             forecast(latitude,longtitude,(error,forecastData)=>{
//                 if(error){
//                     return res.send({error});
//                 }
//                 res.send({
//                     forecast: forecastData,
//                     location: location,
//                     address: adr
//                 });
//             })
//         }
//     });
   

// })



app.get('*', (req,res)=>{
    res.render('404',{
        title: 'my 404Page',
        name: 'Alon'
    })
})


app.listen(3000, ()=>{
    console.log('Server is up on host 3000')
})




