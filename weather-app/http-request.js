const http=require('http')
const url='http://api.weatherstack.com/current?access_key=0b22d082ef26345da892cc59ff6bc165&query=30,70&unit=f'
const request=http.request(url,(response)=>{
let data=''
response.on('data',(chunk)=>{
   data=data+chunk.toString()

})
 response.on('end',()=>{
     const getjson=JSON.parse(data)
     console.log(getjson)

 })
 response.on('error',(error)=>{
     console.log("An error occured",error)
 })

})
request.end()