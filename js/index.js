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

      document.getElementById('nk-history-amount').innerText = noakhaliInput;
       
   // validation
   if(noakhaliInput <= 0 || isNaN(noakhaliInput)){
      alert('Invalid Input ❌')
   }

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

   document.getElementById('feni-history-amount').innerText = feniInput;

    
   // validation
   if(feniInput <= 0 || isNaN(feniInput)){
      alert('Invalid Input ❌')
   }
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

   document.getElementById('quota-history-amount').innerText = quotaInput;

    
   // validation
   if(quotaInput <= 0 || isNaN(quotaInput)){
      alert('Invalid Input ❌');
      
   }
});



// navbar's btn clicking function
document.getElementById('donate-btn').addEventListener('click', function(){
   document.getElementById('history-section').classList.add('hidden');
   document.getElementById('donation-section').classList.remove('hidden');

    // btn color changing functions;
    document.getElementById('donate-btn').classList.add('bg-[#B4F461]');
    document.getElementById('history-btn').classList.remove('bg-[#B4F461]');
});

document.getElementById('history-btn').addEventListener('click', function(){
   document.getElementById('history-section').classList.remove('hidden');
      document.getElementById('donation-section').classList.add('hidden');
   
      // btn color changing functions;
      document.getElementById('donate-btn').classList.remove('bg-[#B4F461]');
   document.getElementById('history-btn').classList.add('bg-[#B4F461]');
});

// blog toggle
document.getElementById('btn-blog').addEventListener('click', function(){
   document.getElementById('blog-section').classList.remove('hidden');
      document.getElementById('donation-section').classList.add('hidden');

      document.getElementById('btn-home').classList.remove('hidden');
      document.getElementById('btn-blog').classList.add('hidden');


  });

  document.getElementById('btn-home').addEventListener('click', function(){
   document.getElementById('blog-section').classList.add('hidden');
      document.getElementById('donation-section').classList.remove('hidden');

  });
     
      
   
    

   
       

   


  
   



