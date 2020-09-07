async function editFormHandler(event) {
    event.preventDefault();
  
const id = window.location.toString().split('/')[
      window.location.toString().split('/').length - 1];
const title = document.querySelector('input[name="post-title"]').value;
const main_text = document.querySelector('input[name="main_text"]').value;


  const response = await fetch(`/api/posts/${id}`, {
     method: 'PUT',
     body: JSON.stringify({
       title,
       main_text
     }),
     headers: {
       'Content-Type': 'application/json'
     }
   });
   
   if (response.ok) {
    document.location.replace('/dashboard');
    } else {
    alert(response.statusText);
    }
      
  }
  
  document.querySelector('.edit-post-form').addEventListener('submit', editFormHandler);