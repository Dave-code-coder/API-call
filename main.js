var btn= document.getElementById("btn").addEventListener("click", getData);
var div=document.getElementById("postsDiv");
var con=0;

function getData(){
    let xhr= new XMLHttpRequest();
    xhr.open('GET','https://jsonplaceholder.typicode.com/todos',true);
    xhr.onload=function(){
        if(this.status===200){

            let data = JSON.parse(this.responseText);
            for (let index = 0; index < 90; index++) {
                div.innerHTML+=`
                <div class="col-4 text-white bg-dark mx-auto border border-white" >

  <div class="card-body">
    <p>ID: ${data[con].id}</p>
    <p>TITLE: ${data[con].title}</p>
    <p>COMPLETED: ${data[con].completed}</p>
  </div>
</div>
                
                
                
                `
                con=con+1;
            }
        }
    }
    xhr.send();
}