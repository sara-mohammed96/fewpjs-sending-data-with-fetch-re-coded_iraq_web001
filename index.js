// Add your code here
function submitData(userName,email){
 let body=document.querySelector('body');
let info = {
  name:uerName,
  email:email
};

let configurationObj = {

  method : 'POST',
  headers : { 'content-type':'application/json' , 'Accept':'application/json'},
  body : JSON.stringify(info)

}
return fetch ('http://localhost:3000/users',configurationObj)
.then(resp=> resp.json())
.then(resp => {

  body.innerHTML = resp.id;
}).catch( error=> {

body.innerHTML = error.message;
})
}