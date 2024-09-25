// noakhali donation section
const noakhaliDonate = document.getElementById('nowakhali-donate');
noakhaliDonate.addEventListener('click', function(){
   const noakhaliInput = parseFloat(document.getElementById('noakhali-input-field').value);
   const nkDonationAmount = parseFloat(document.getElementById('nk-donation-amount').innerText);
   const navAmount = parseFloat(document.getElementById('nav-amount').innerText);

   const totalNkDonate = noakhaliInput + nkDonationAmount;
   const navNew = navAmount - noakhaliInput;

   document.getElementById('nk-donation-amount').innerText = totalNkDonate;
   document.getElementById('nav-amount').innerText = navNew;
});
  
// feni donation section
const feniDonate = document.getElementById('feni-donate-btn');
feniDonate.addEventListener('click', function(){
   const feniInput = parseFloat(document.getElementById('feni-input-field').value);
   const feniDonationAmount = parseFloat(document.getElementById('feni-donation-amount').innerText);
   const navAmount = parseFloat(document.getElementById('nav-amount').innerText);

   const totalFeniDonate = feniInput + feniDonationAmount;
   const navNew = navAmount - feniInput;

   document.getElementById('feni-donation-amount').innerText = totalFeniDonate;
   document.getElementById('nav-amount').innerText = navNew;
});


const quotaDonate = document.getElementById('quota-donate-btn');
quotaDonate.addEventListener('click', function(){
   const quotaInput = parseFloat(document.getElementById('quota-input-field').value);
   const quotaDonationAmount = parseFloat(document.getElementById('quota-donation-amount').innerText);
   const navAmount = parseFloat(document.getElementById('nav-amount').innerText);

   const totalQuotaDonate = quotaInput + quotaDonationAmount;
   const navNew = navAmount - quotaInput;

   document.getElementById('quota-donation-amount').innerText = totalQuotaDonate;
   document.getElementById('nav-amount').innerText = navNew;
});
     
      
   
    

   
       

   


  
   



