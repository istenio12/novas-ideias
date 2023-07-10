const educationContent = document.querySelector('.education-content');
const popup = document.getElementById('popup');

educationContent.addEventListener('mouseenter', function() {
  popup.style.display = 'block';
});

educationContent.addEventListener('mouseleave', function() {
  popup.style.display = 'none';
});