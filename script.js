document.addEventListener('DOMContentLoaded', () => {
    const quote = document.getElementById('kinetic-quote');
    const words = quote.querySelectorAll('.word');
    const navLinks = document.querySelectorAll('.nav-link');
    const contentBlocks = document.querySelectorAll('.content-blocks');

    function animateWords() {
        words.forEach((word, index) => {
            setTimeout(() => {
                word.classList.add('active');
            }, index * 200);
        });
    }
    animateWords();
    // setInterval(() => {
    //     words.forEach(word => word.classList.remove('active'));
    //     setTimeout(animateWords, 500);
    // }, 6000);
    function showContent(category) {
        contentBlocks.forEach(block => {
            if (block.id === category) {
                block.style.display = 'flex';
                setTimeout(() => {
                    block.classList.add('active');
                }, 50);
            } else {
                block.classList.remove('active');
                setTimeout(() => {
                    block.style.display = 'none';
                }, 500);
            }
        });
    }
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const category = link.getAttribute('data-category');
            
            //atv nav link updates
            navLinks.forEach(navLink => navLink.classList.remove('active'));
            link.classList.add('active');
            
            //its contnet here 
            showContent(category);
        });
    });

    //first categry init
    showContent('skills');
});
    const h1 = document.querySelector('h1');
    const authorImage = document.querySelector('.author-image img');
    
    h1.addEventListener('mouseover', () => {
        h1.style.color = '#555';
    });

    h1.addEventListener('mouseout', () => {
        h1.style.color = '#000';
    });

    authorImage.addEventListener('mouseover', () => {
        authorImage.style.transform = 'scale(1.1)';
    });

    authorImage.addEventListener('mouseout', () => {
        authorImage.style.transform = 'scale(1)';
    });

    //block interct 
    const blocks = document.querySelectorAll('.block');
    blocks.forEach(block => {
        block.addEventListener('click', () => {
            blocks.forEach(b => b.classList.remove('active'));
            block.classList.add('active');
            document.querySelectorAll('.block p').forEach(p => p.style.display = 'none');
            block.querySelector('p').style.display = 'block';
        });
    });

document.addEventListener('DOMContentLoaded', () => {
    const h1 = document.querySelector('h1');
    const authorImage = document.querySelector('.author-image img');
    
    h1.addEventListener('mouseover', () => {
        h1.style.color = '#555';
    });

    h1.addEventListener('mouseout', () => {
        h1.style.color = '#000';
    });

    authorImage.addEventListener('mouseover', () => {
        authorImage.style.transform = 'scale(1.1)';
    });

    authorImage.addEventListener('mouseout', () => {
        authorImage.style.transform = 'scale(1)';
    });
});

    // Mini-page functionality
    const miniPageOverlay = document.querySelector('.mini-page-overlay');
    const miniPageContent = document.querySelector('.mini-page-content');
    const closeButton = document.querySelector('.close-button');

    blocks.forEach(block => {
        block.addEventListener('click', (e) => {
            e.preventDefault();
            const title = block.querySelector('h3').textContent;
            const description = block.querySelector('p').textContent;
            
            miniPageContent.innerHTML = `
                <h2>${title}</h2>
                <p>${description}</p>
                <p>This is additional content for the ${title} mini-page. You can add more details, images, or any other relevant information here.</p>
            `;
            
            miniPageOverlay.style.display = 'flex';
        });
    });

    closeButton.addEventListener('click', () => {
        miniPageOverlay.style.display = 'none';
    });

    miniPageOverlay.addEventListener('click', (e) => {
        if (e.target === miniPageOverlay) {
            miniPageOverlay.style.display = 'none';
        }
    });

    document.querySelectorAll('.scroll-btn').forEach(btn => {
        btn.addEventListener('click', () => {
          const direction = btn.classList.contains('left') ? -1 : 1;
          const container = btn.closest('.content-container').querySelector('.content-blocks');
          container.scrollBy({ left: direction * 270, behavior: 'smooth' });
        });
      });
      
      document.querySelectorAll('.read-more-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
          e.preventDefault();
          e.stopPropagation();
          const block = btn.closest('.block');
          const title = block.querySelector('h3').textContent;
          const description = block.querySelector('p').textContent;
          
          miniPageContent.innerHTML = `
            <h2>${title}</h2>
            <p>${description}</p>
            <p>This is additional content for the ${title} mini-page. You can add more details, images, or any other relevant information here.</p>
          `;
          
          miniPageOverlay.style.display = 'flex';
        });
      });

      function redirectToLink(button) {
        // Find the parent block element containing the data-link attribute
        var block = button.closest('.block');
        if (block) {
            // Get the URL from the data-link attribute
            var link = block.getAttribute('data-link');
            if (link) {
                // Redirect to the specified URL
                window.open(link, '_blank'); // Opens link in a new tab
                // window.location.href = link; // Alternatively, opens link in the same tab
            }
        }
    }
    
