document.addEventListener('DOMContentLoaded', () => {
    const quote = document.getElementById('kinetic-quote');
    const words = quote.querySelectorAll('.word');

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
});