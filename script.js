
function qs(){
    const form_quote=document.getElementById('qs');
    form_quote.addEventListener('submit',function(event)
    {
     event.preventDefault();//prevent default form submition
    })
    const NameValue= document.getElementById('Name').value;
    const EmailValue = document.getElementById('Email').value;
    const MessageValue = document.getElementById('msg').value;

    if (NameValue ===''|| EmailValue === '' ||MessageValue ==='')
    {
        alert('Please fill in all required fields(email,name,message)');
         return false;
    }else if (NameValue ===' '|| EmailValue === ' ' ||MessageValue ===' ')
    {alert('Please fill in all required fields(email,name,message)');}
     else
    {
        document.location.href = "COMING,HTML";
        console.log('COMING SOON');
        fetch('auth_check.php', {
            method: 'POST',
            body: JSON.stringify({ EmailValue, NameValue, MessageValue }), // Send user data in request body
            headers: { 'Content-Type': 'application/json' }
          })
          .then(response => response.json())
          .then(data => {
            if (data.success) {
              // Send additional data using a separate request or redirect
              console.log('Subscription validated, sending additional data or redirecting...');
              // ... your logic here ...
            } else {
              alert(data.error); // Handle errors from the PHP script (e.g., invalid subscription)
            }
          })
          .catch(error => {
            console.error('Error:', error); // Handle network errors
          });
    }
   
}


function ns(){
    const form_quote=document.getElementById('ns');
    form_quote.addEventListener('submit',function(event)
    {
     event.preventDefault();//prevent default form submition
    })
    
    const EmailValue = document.getElementById('Email').value;
    if (EmailValue === ''|| EmailValue === ' ')
       {
         alert('Please fill in all required fields(email)');

      }else{ alert('submitted'); document.location.href =('index.html')}
   
}

