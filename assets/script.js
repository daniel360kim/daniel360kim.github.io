document.addEventListener('DOMContentLoaded', () => {

    // "bibtex" links toggle the <pre> block that follows them.
    document.querySelectorAll('.bibtex-link').forEach((link) => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const pre = link.nextElementSibling;
            if (pre && pre.classList.contains('bibtex')) pre.classList.toggle('open');
        });
    });

    // Cover loops: only spend bandwidth while on screen, and honor reduced-motion.
    const loops = document.querySelectorAll('video.cover-loop');
    if (loops.length) {
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
            loops.forEach((v) => { v.removeAttribute('autoplay'); v.pause(); });
        } else {
            const io = new IntersectionObserver((entries) => {
                entries.forEach((e) => {
                    if (e.isIntersecting) e.target.play().catch(() => {});
                    else e.target.pause();
                });
            }, { threshold: 0.25 });
            loops.forEach((v) => io.observe(v));
        }
    }
});
