// popup modal functions
const myModal = document.getElementById("my-modal");

function openPopup(){
   myModal.classList.remove('hidden');
};
function closePopup(){
   myModal.classList.add('hidden');
};


// button navigation function;
// const donateButton = document.getElementById('donate-btn');
//  donateButton.addEventListener('click', function (){
//     window.location.href = "../index.html"
//  });

//  document.getElementById('history-btn')
//   .addEventListener('click', function() {
//      window.location.href = "../history.html";
//   });

  document.getElementById('btn-blog')
  .addEventListener('click', function() {
     window.location.href = "../blog.html";
  });

  document.getElementById('button-home')
  .addEventListener('click', function() {
     window.location.href = "../index.html";
 
  });





 







