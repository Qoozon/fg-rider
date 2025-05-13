
function getPostId() {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get('id');
}

fetch('posts.json')
  .then(res => res.json())
  .then(posts => {
    const post = posts.find(p => p.id.toString() === getPostId());
    const container = document.getElementById('post-content');
    if (post) {
      const title = document.createElement('h2');
      title.innerText = post.title;
      const content = document.createElement('p');
      content.innerText = post.content;
      const link = document.createElement('a');
      link.href = post.link;
      link.target = '_blank';
      link.innerText = 'Читать в Telegram';
      container.appendChild(title);
      container.appendChild(content);
      container.appendChild(link);
    } else {
      container.innerText = 'Пост не найден.';
    }
  });
