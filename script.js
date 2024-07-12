document.addEventListener('DOMContentLoaded', () => {
    const quote = document.getElementById('kinetic-quote');
    const words = quote.querySelectorAll('.word');
    const authorSection = document.getElementById('author-section');
    const navLinks = document.querySelectorAll('.nav-link');
    const contentBlocks = document.querySelectorAll('.content-blocks');
    const miniPageOverlay = document.querySelector('.mini-page-overlay');
    const miniPageContent = document.querySelector('.mini-page-content');
    const closeButton = document.querySelector('.close-button');

    function animateWords() {
        words.forEach((word, index) => {
            setTimeout(() => {
                word.classList.add('active');
            }, index * 200);
        });
    }
    animateWords();

    setTimeout(() => {
        quote.style.display = 'none';
        authorSection.style.display = 'flex';
    }, 3000);

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

    contentBlocks.forEach(block => {
        block.addEventListener('wheel', (e) => {
            if (e.deltaY !== 0) {
                block.scrollBy({
                    left: e.deltaY < 0 ? -350 : 350,
                    behavior: 'smooth'
                });
                e.preventDefault();
            }
        });

        
        let isDown = false;
        let startX;
        let scrollLeft;

        block.addEventListener('mousedown', (e) => {
            isDown = true;
            block.classList.add('active');
            startX = e.pageX - block.offsetLeft;
            scrollLeft = block.scrollLeft;
        });

        block.addEventListener('mouseleave', () => {
            isDown = false;
            block.classList.remove('active');
        });

        block.addEventListener('mouseup', () => {
            isDown = false;
            block.classList.remove('active');
        });

        block.addEventListener('mousemove', (e) => {
            if (!isDown) return;
            e.preventDefault();
            const x = e.pageX - block.offsetLeft;
            const walk = (x - startX) * 3; // Adjust scroll speed
            block.scrollLeft = scrollLeft - walk;
        });
    });

    const blocks = document.querySelectorAll('.block, .block-edu');

    document.querySelectorAll('.read-more-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            const block = btn.closest('.block, .block-edu');
            const title = block.querySelector('h3').textContent;
            const description = block.querySelector('p').textContent;
            const additionalContent = block.querySelector('.read-more-content') ? block.querySelector('.read-more-content').innerHTML : '';

            miniPageContent.innerHTML = `
                <h2>${title}</h2>
                <p>${description}</p>
                <div>${additionalContent}</div>
            `;

            miniPageOverlay.style.display = 'flex';
        });
    });

    document.querySelectorAll('.gpa-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            const block = btn.closest('.block-edu');
            const title = block.querySelector('h3').textContent;
            const description = block.querySelector('.clg-name').textContent;
            const additionalContent = block.querySelector('.read-more-content') ? block.querySelector('.read-more-content').innerHTML : '';

            miniPageContent.innerHTML = `
                <h2>${title}</h2>
                <p>${description}</p>
                <div>${additionalContent}</div>
            `;

            miniPageOverlay.style.display = 'flex';
        });
    });

    document.querySelectorAll('.link-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            const link = btn.closest('.block, .block-edu').getAttribute('data-link');
            window.open(link, '_blank');
        });
    });

    blocks.forEach(block => {
        block.addEventListener('click', () => {
            blocks.forEach(b => b.classList.remove('active'));
            block.classList.add('active');
        });
    });

    closeButton.addEventListener('click', () => {
        miniPageOverlay.style.display = 'none';
        resetContentBlocks();
    });

    miniPageOverlay.addEventListener('click', (e) => {
        if (e.target === miniPageOverlay) {
            miniPageOverlay.style.display = 'none';
            resetContentBlocks();
        }
    });

    function resetContentBlocks() {
        const activeCategory = document.querySelector('.nav-link.active').getAttribute('data-category');
        showContent(activeCategory);
    }
});
