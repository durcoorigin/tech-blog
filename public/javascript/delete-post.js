async function deleteFormHandler(event) {
    event.preventDefault();

    const title = document.querySelector('input[name="post-title"]');
    const post_content = document.querySelector('textarea[name="post-content"]');

    const response = await fetch(`/api/posts/${id}`, {
        method: 'DELETE'
      });
  
    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert(response.statusText);
    }
  }
  
  document.querySelector('.delete-post-btn').addEventListener('click', deleteFormHandler);