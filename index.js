// // Declare variable
// var x = 2;
// var y = 3;
// multiply=()=> {

// 	// It returns the multiplication
// 	// of num1 and num2
// 	return x * y;
// }
	


// // Display the answer returned by
// // multiply function
// console.log("Multiplication of", x,
// 	"and", y, "is", multiply(x, y));
//     var company = {
//         Name: "GeeksforGeeks",
//         Address: "Noida",
//         Contact: "0000",
//         Email: "abc@geeksforgeeks.org"
//     };
    
//     // Display the object information
//     console.log("Information of variable company:", company.Address);
        
//     // Display the type of variable
//     console.log("Type of variable company:", typeof company.Address);
// // Require http module
// var http = require("http");

// // Create server
// http.createServer(function (req, res) {

// 	// Send the HTTP header
// 	// HTTP Status: 200 : OK
// 	// Content Type: text/plain
// 	res.writeHead(200, {'Content-Type': 'text/plain'});
	
// 	// Send the response body as "This is the example
// 	// of node.js web based application"
// res.end('This is the example of node.js web-based application \n');

// // Console will display the message
// }).listen(5000,
// 	()=>console.log('Server running at http://127.0.0.1:5000/'));
//Async/await
// const helperPromise = function () {
// 	const promise = new Promise(function (resolve, reject){
// 		const string1 = "geeksforgeeks";
// 		const string2 = "geeksforgeeks";
// 		if (string1 === string2) {
// 		  resolve("Succeed");
// 		} else {
// 		  reject("Rejected");
// 		}
		
// 	  });
// 	  return  promise
// }
// 	async function demo2(){
// 		try{
// 			let message = await helperPromise();
// 			  console.log(message);
// 		}
// 		catch(error){
// 			console.log(error)
// 		}
// 	}
// 	demo2();
	
		
			// const promise = new Promise(function (resolve, reject) {
			//   const x = "geeksforgeeks";
			//   const y = "geeksforgeeks";
			//   if (x === y) {
			// 	resolve("Strings are same");
			//   } else {
			// 	reject("Strings are not same");
			//   }
			// });
		  
			// return promise
			// .then(function () {
			// 	console.log("Promise resolved successfully");
			//   })
			//   .catch(function () {
			// 	console.log("Promise is rejected");
			//   });
// Write a JavaScript code Asynchronously using callbacks
// var fs = require("fs");  
    
// fs.readFile('inputfile1.txt', function (ferr, filedata) {  
//     if (ferr) return console.error("Not executed");  
//     console.log(filedata.toString());  
// }); 
// console.log("End of Program execution"); 		  
	
// const getNotes=require("./notes")
// const validator =require('validator')
//const chalk = require('chalk')
// const msg=getNotes()
// console.log(msg)
// console.log(validator.isBoolean("true"))
//console.log(chalk.green("Success"))
// //Synchronously	  
// var fs = require("fs");
// var filedata = fs.readFileSync('inputfile1.txt');
// console.log(filedata.toString());
// console.log("End of Program execution");

// console.log(process.argv[0])
const makeRequest = () => //promise way
  getJSON() .then(data => {
	console.log(data)
	return "done"
    })

makeRequest();

// //async
// const makeRequest = async () => { //async await way
// 	const data = await getJSON();
// 	return data;
//    }
  
//   makeRequest()