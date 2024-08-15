document.addEventListener('DOMContentLoaded', () => {
  // Example of dynamic behavior
  const asideSection = document.getElementById('aside-section');

  // Add dynamic content to the aside section
  asideSection.innerHTML += '<p>Dynamic content added to the aside section with JavaScript.</p>';

  // Example of handling button clicks
  document.querySelectorAll('.button').forEach(button => {
      button.addEventListener('click', () => {
          alert('Redirecting to detailed article page!');
      });
  });
});


document.addEventListener('DOMContentLoaded', () => {
  const recipes = [
      { name: 'Spaghetti Carbonara', url: 'https://youtu.be/3AAdKl1UYZs?si=Wp7u87cQJX8m7HfK' },
      { name: 'Burger', url: 'https://youtu.be/_q5GKCNZcHI?si=Hn2HXC6oKbNM6kOa' },
      { name: 'Pav Bhaji', url: 'https://youtu.be/XbMHXqo4DTw?si=QH51kmRbN3N5vEp1' }
  ];

  const tips = [
      'Use fresh herbs for better flavor.',
      'Always preheat your oven before baking.',
      'Let meat rest before slicing to retain juices.'
  ];

  const comments = [
      { author: 'Alice', text: 'This recipe was fantastic! Easy to follow and delicious.' },
      { author: 'Bob', text: 'Great tips! I never knew how much difference fresh herbs make.' }
  ];

  const recipeList = document.querySelector('.recipe-list');
  const tipsList = document.querySelector('.tips-list');
  const commentsSection = document.querySelector('.comments-section');

  recipes.forEach(recipe => {
      const li = document.createElement('li');
      const a = document.createElement('a');
      a.href = recipe.url;
      a.textContent = recipe.name;
      a.target = "_blank";  // Ensures the link opens in a new tab
      a.rel = "noopener noreferrer";  // Security feature for links opening in new tab
      li.appendChild(a);
      recipeList.appendChild(li);
  });

  tips.forEach(tip => {
      const li = document.createElement('li');
      li.textContent = tip;
      tipsList.appendChild(li);
  });

  comments.forEach(comment => {
      const div = document.createElement('div');
      div.classList.add('comment');
      div.innerHTML = `<p class="comment-author">${comment.author}</p><p class="comment-text">${comment.text}</p>`;
      commentsSection.appendChild(div);
  });
});



 // back-to-top button


document.addEventListener('DOMContentLoaded', () => {
    // Create back-to-top button
    const backToTopBtn = document.createElement('button');
    backToTopBtn.textContent = '↑';
    backToTopBtn.classList.add('back-to-top');
    document.body.appendChild(backToTopBtn);

    // Show or hide button based on scroll position
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            backToTopBtn.style.opacity = '1';
        } else {
            backToTopBtn.style.opacity = '0';
        }
    });

    // Scroll to top on button click
    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});
