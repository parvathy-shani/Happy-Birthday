document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('.gif_image');
    
    images.forEach((img) => {
        img.classList.add('fade-in');
    });
});
