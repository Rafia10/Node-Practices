const request=require("request")
const forcast=(lat,long,callback)=>{
    const url='http://api.weatherstack.com/current?access_key=0b22d082ef26345da892cc59ff6bc165&query'+lat+" "+long+'&unit=f'

    request({url:url,json:'true'},(error,response)=>{
        if(error){
            callback("Invalid Url",undefined)
          }
        else if(response.body.error){
            callback("Something went wrong",undefined)
        }
        else{
            callback("current weather is "+" "+response.body.current.weather_descriptions[0]+" "+"but feels like"+ " "+response.body.current.feelslike+" "+response.body.current.precip+"% chance of rain")
        }
    })

}


module.exports=forcast