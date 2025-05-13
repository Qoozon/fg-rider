
fetch('posts.json')
  .then(res => res.json())
  .then(posts => {
    const container = document.getElementById('post-list');
    posts.forEach(post => {
      const div = document.createElement('div');
      div.className = 'post-item';
      div.innerText = post.title;
      div.onclick = () => {
        window.location.href = `post.html?id=${post.id}`;
      };
      container.appendChild(div);
    });
  });
