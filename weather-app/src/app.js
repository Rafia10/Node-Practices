//Example of Async Code
// console.log("starting")
// setTimeout(()=>{
//     console.log("2 timer Hello")
// },2000)
// setTimeout(()=>{
//     console.log("0 timer Hello")
// },0)

// console.log("stopping")

   // const data=JSON.parse(response.body)
    //request function accept two arguments first is your object and second 
    //one is the function which will return response after the execution

//Geocoding
// const request=require('request')
// const url2='https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoicmFmaWFtZW1vbiIsImEiOiJja3pnbzRvdzAyaWdtMzBvMWQyMDZpYTE3In0.RgT5816JF33PbsRVvQ47-Q&limit=1'
// request({url:url2,json:'true'},(error,response)=>{
//     if(response){
//         // var lat=response.body.features[0].center[0]
//         // var long=response.body.features[0].center[1]
//         // console.log(lat+" "+long)
//         console.log(response.body)
//     }
//     else{
 
//         console.log(error)
//     }

//  })
// const forcast=require('../weather-app/weather')
// forcast(30.3753,69.345,(error,{lat,long})=>{
//     console.log(error)
// console.log(data)
// })
// const add=function(a,b,callbacks){
//     setTimeout(()=>{
//         callbacks(a+b)
//     },2000)
    
   
// }
// add(1,2,(sum)=>{
// console.log(sum)
// })