var btn= document.getElementById("btn").addEventListener("click", getPost);
var div=document.getElementById("cardDiv");
var con=0;

function getPost(){
   
   fetch('https://jsonplaceholder.typicode.com/todos')
    .then((res)=>{
        return res.json();
        
    })
   

    
    .then((post)=>(
              (post.map(post =>  (div.innerHTML+=`
                <tr>
                <td> ${post.userId}</td>
                <td> ${post.id}</td>
                <td> ${post.title}</td>
                <td> ${post.completed}</td>
              </tr>
              `
              
              )))
    ))
    .catch(error => {
      alert(error);
    })
    
  
           
        }