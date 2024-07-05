document.addEventListener('DOMContentLoaded', () => {
    const quote = document.getElementById('kinetic-quote');
    const words = quote.querySelectorAll('.word');
    const navLinks = document.querySelectorAll('.nav-link');
    const contentBlocks = document.querySelectorAll('.content-blocks');
    const scrollBtns = document.querySelectorAll('.scroll-btn');

    function animateWords() {
        words.forEach((word, index) => {
            setTimeout(() => {
                word.classList.add('active');
            }, index * 200);
        });
    }
    animateWords();

    function showContent(category) {
        contentBlocks.forEach(block => {
            if (block.id === category) {
                block.style.display = 'flex';
                setTimeout(() => {
                    block.classList.add('active');
                }, 50);
            } else {
                block.classList.remove('active');
                block.style.display = 'none';
            }
        });
        updateScrollButtonsVisibility();
    }

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const category = link.getAttribute('data-category');
            
            navLinks.forEach(navLink => navLink.classList.remove('active'));
            link.classList.add('active');
            
            showContent(category);
        });
    });

    showContent('exp');

    function updateScrollButtonsVisibility() {
        const activeContainer = document.querySelector('.content-blocks.active');
        if (activeContainer) {
            const leftBtn = activeContainer.parentElement.querySelector('.scroll-btn.left');
            const rightBtn = activeContainer.parentElement.querySelector('.scroll-btn.right');

            leftBtn.style.display = 'flex';
            rightBtn.style.display = 'flex';

            leftBtn.disabled = activeContainer.scrollLeft <= 0;
            rightBtn.disabled = activeContainer.scrollLeft >= activeContainer.scrollWidth - activeContainer.clientWidth;

            leftBtn.style.opacity = leftBtn.disabled ? '0.5' : '1';
            rightBtn.style.opacity = rightBtn.disabled ? '0.5' : '1';
        }
    }

    scrollBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            if (!btn.disabled) {
                const direction = btn.classList.contains('left') ? -1 : 1;
                const container = btn.closest('.content-container').querySelector('.content-blocks.active');
                container.scrollBy({ left: direction * 300, behavior: 'smooth' });
            }
        });
    });

    contentBlocks.forEach(block => {
        block.addEventListener('scroll', updateScrollButtonsVisibility);
    });

    window.addEventListener('resize', updateScrollButtonsVisibility);

    const h1 = document.querySelector('h1');
    const authorImage = document.querySelector('.author-image img');
    
    h1.addEventListener('mouseout', () => {
        h1.style.color = '#000';
    });

    authorImage.addEventListener('mouseover', () => {
        authorImage.style.transform = 'scale(1.1)';
    });

    authorImage.addEventListener('mouseout', () => {
        authorImage.style.transform = 'scale(1)';
    });

    const blocks = document.querySelectorAll('.block, .block-edu');
    blocks.forEach(block => {
        block.addEventListener('click', () => {
            blocks.forEach(b => b.classList.remove('active'));
            block.classList.add('active');
            document.querySelectorAll('.block p, .block-edu p').forEach(p => p.style.display = 'none');
            block.querySelector('p').style.display = 'block';
        });
    });

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

    document.querySelectorAll('.read-more-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            const block = btn.closest('.block, .block-edu');
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

    updateScrollButtonsVisibility();
});

function redirectToLink(button) {
    var block = button.closest('.block, .block-edu');
    if (block) {
        var link = block.getAttribute('data-link');
        if (link) {
            window.open(link, '_blank');
        }
    }
}