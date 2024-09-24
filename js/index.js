// document.getElementById('history-btn')
//   .addEventListener('click', function() {
//      window.location.href = "../history.html";
//   });
document.getElementById('donate-now-btn')
 .addEventListener('click', function(){
    const noakhaliInput = parseFloat(document.getElementById('noakhali-input-field').value);
   
    if(!isNaN(noakhaliInput) && noakhaliInput !== ''){
       
        const nkDonationAmount = parseFloat(document.getElementById('nk-donation-amount').innerText);
        const newDonation = noakhaliInput + nkDonationAmount;
        document.getElementById('nk-donation-amount').innerText = newDonation.toFixed(2);
    }

    else{
     document.getElementById('noakhali-input-field').innerText = `${noakhaliInput} is not a valid number.`
    }
       
   
 

 });

