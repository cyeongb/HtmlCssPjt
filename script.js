window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    header.classList.toggle('sticky', window.scrollY > 100);
    
    const sections = document.querySelectorAll('section');
    const content = document.querySelector('.content');
    const sectionContents = document.querySelectorAll('.section-content');
    
    // Banner content animation
    if (isInViewport(sections[0])) {
        content.classList.add('active');
    } else {
        content.classList.remove('active');
    }
    
    // Section content animations
    sectionContents.forEach((sectionContent, index) => {
        if (isInViewport(sections[index + 1])) {
            sectionContent.classList.add('active');
        } else {
            sectionContent.classList.remove('active');
        }
    });
});

// Navigation smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Check if element is in viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top <= (window.innerHeight || document.documentElement.clientHeight) / 1.3 &&
        rect.bottom >= 0
    );
}

// Add active class to content on page load
window.addEventListener('load', function() {
    const content = document.querySelector('.content');
    content.classList.add('active');
});