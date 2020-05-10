var btn= document.getElementById("btn").addEventListener("click", getData);
var div=document.getElementById("cardDiv");
var con=0;

function getData(){
    let xhr= new XMLHttpRequest();
    xhr.open('GET','https://jsonplaceholder.typicode.com/todos',true);
    xhr.onload=function(){
        if(this.status===200){

            let data = JSON.parse(this.responseText);
            for (let index = 0; index < 1; index++) {
                div.innerHTML+=`
                <tr>
                <td> ${data[con].userId}</td>
                <td> ${data[con].id}</td>
                <td> ${data[con].title}</td>
                <td> ${data[con].completed}</td>
              </tr>
                `
                con=con+1;
            }
        }
    }
    xhr.send();
}