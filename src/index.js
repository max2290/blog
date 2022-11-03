import "./style.css";


const xhr = new XMLHttpRequest();
const  form = document.querySelector("form");
form.addEventListener('submit',event => {
    event.preventDefault()
    const  formData = new  FormData(form);

    xhr.open("POST", 'https://restapi.fr/upload',);
    xhr.withCredentials=true;
    xhr.upload.addEventListener('loadstart',() => {
        console.log('load started');
    });
    xhr.upload.addEventListener('progress',(event) => {
        console.log(event);
        const  pourcentage = event.loaded / event.total * 100 .toFixed(0) ;
        console.log(pourcentage, '%');

    });
    xhr.upload.addEventListener('loadend',() => {
        console.log('load ended');
    });
    xhr.upload.addEventListener('error',() => {
        console.log('err');
    });
    xhr.send(formData);


});

//xhr.timeout=1000;


///xhr.responseType= "json";
//xhr.setRequestHeader('Content-type','application/json');
//xhr.send();
//xhr.addEventListener("abort",event => {
  //  console.log(event)
//})
//xhr.abort();
//xhr.addEventListener('timeout',(event) => {
  //  console.log(event);
//})

