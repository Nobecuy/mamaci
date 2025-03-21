let lastScrollTop = 0;
const navbar = document.getElementById("navbar");

window.addEventListener("scroll", function() {
  let currentScroll = window.pageYOffset || document.documentElement.scrollTop;

  if (currentScroll > lastScrollTop) {
    navbar.classList.add("hide");
    navbar.classList.remove("show");
  } else {
    navbar.classList.add("show");
    navbar.classList.remove("hide");
  }
  lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // For mobile or negative scrolling
});

document.addEventListener('scroll', function() {
  const elements = document.querySelectorAll('.hidden'); // Pilih semua elemen dengan class hidden
  
  elements.forEach(element => {
      const rect = element.getBoundingClientRect();
      
      // Jika elemen berada di dalam viewport
      if (rect.top < window.innerHeight && rect.bottom >= 0) {
          // Hapus class blur dan hidden
          element.classList.remove('blur', 'hidden');

          // Tambahkan class animasi sesuai kebutuhan
          if (element.classList.contains('fade-in')) {
              element.classList.add('fade-in');
          } else if (element.classList.contains('slide-in-left')) {
              element.classList.add('slide-in-left');
          }
      }
  });
});