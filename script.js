
document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    }, {
        threshold: 0.2
    });

    sections.forEach(section => {
        section.classList.add("hidden");
        observer.observe(section);
    });
});

<script>
  function toggleQuoteForm() {
    const formSection = document.getElementById('quote-form');
    if (formSection.style.display === 'none') {
      formSection.style.display = 'block';
      formSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      formSection.style.display = 'none';
    }
  }
</script>
