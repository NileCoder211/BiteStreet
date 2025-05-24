 function showSidebar(){
            const sidebar = document.querySelector('.sidebar')
            sidebar.style.display = 'flex'
        }
        
        function hideSidebar(){
            const sidebar = document.querySelector('.sidebar')
            sidebar.style.display = 'none'
        }


const accordion = document.getElementsByClassName('content-container');

for(i = 0; i < accordion.length; i++) {
    accordion[i].addEventListener('click', function (){
        this.classList.toggle('active');
    });
};


function showMore (){
    const content = document.getElementById("moreInfo");
    if(content.style.display === "none"){
        content.style.display = "block";
    } else{
        content.style.display = "none";
    }
}




  const track = document.querySelector('.carousel-track');
  const leftBtn = document.querySelector('.carousel-btn.left');
  const rightBtn = document.querySelector('.carousel-btn.right');
 
  const scrollAmount = 400; // width of one card + margin

  leftBtn.addEventListener('click', () => {
    track.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
  });

  rightBtn.addEventListener('click', () => {
    track.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  });





/* 
const http = require('http');// this is to import in-built http module.require means import.http facilitates commmunication
const server = http.crateServer((req, res) =>{
  res.write("Hello World")

    });
    server.listen(3000, () =>{
        console.log(Server is running at port 3000)
        });
 */
































