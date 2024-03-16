// To switch to comfirmation page.
document.getElementById('button').addEventListener('click', function(event) {
    document.querySelector('.main-cont').style.display = 'none';
    document.querySelector('.sub-cont').style.display = 'flex';
    event.preventDefault();

});

// When dismiss message is clicked.
document.getElementById('dismissButton').addEventListener('click', function () {
  alert("Message Dismissed");
  location.reload();
})

// Email display.
document.getElementById('button').addEventListener('click', function() {
    const inputValue = document.getElementById('email').value;
    document.getElementById('inputEmail').innerText = inputValue;
});

// Email validation.
// function validateEmail(email) {
//     const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//     return re.test(String(email).toLowerCase());
//   }
  
//   document.getElementById('button').addEventListener('click', function() {
//     const emailInput = document.getElementById('email').value;
//     if (validateEmail(emailInput)) {
//       document.getElementById('email').innerText = emailInput;
//       document.querySelector('.main-cont').style.display = 'none';
//       document.querySelector('.sub-cont').style.display = 'flex';
//     } else {
//       alert('Please enter a valid email address.');
//     }
//   });

// Reminder: Find out what the above regex expression is...