var btn= document.getElementById("btn").addEventListener("click", getData);
var div=document.getElementById("postsDiv");
var con=0;

function getData(){
    let xhr= new XMLHttpRequest();
    xhr.open('GET','https://jsonplaceholder.typicode.com/todos',true);
    xhr.onload=function(){
        if(this.status===200){

            let data = JSON.parse(this.responseText);
            for (let index = 0; index < 20; index++) {
                div.innerHTML+=`<table class="table table-dark table ">
                <thead>
                  <tr>
                    <th>ID: ${data[con].id}</th>
                    <th>TITLE: ${data[con].title}</th>
                    <th>COMPLETED: ${data[con].completed}</th>
                  </tr>
                </thead>
                <tbody>
                  </tr>
                </tbody>
              </table>




 
                
                
                `
                con=con+1;
            }
        }
    }
    xhr.send();
}