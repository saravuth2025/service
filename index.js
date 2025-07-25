// Smooth scroll for navbar links
document.querySelectorAll('.w3-bar-item').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 50,
        behavior: 'smooth'
      });
    }
  });
});

// Highlight active navbar item
window.addEventListener('scroll', () => {
  const sections = document.querySelectorAll('section, header');
  const navLinks = document.querySelectorAll('.w3-bar-item');
  let index = sections.length;

  while (--index && window.scrollY + 60 < sections[index].offsetTop) {}

  navLinks.forEach(link => link.classList.remove('w3-white'));
  if (navLinks[index]) {
    navLinks[index].classList.add('w3-white');
  }
});
