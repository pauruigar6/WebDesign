const containers = document.querySelectorAll('.row .container');

containers.forEach(container => {
    const panels = container.querySelectorAll('.panel');

    panels.forEach(panel => {
        panel.addEventListener('click', () => {
            removeActiveClasses(panels); 
            panel.classList.add('active');
        });
    });
});

function removeActiveClasses(panels) {
    panels.forEach(panel => {
        panel.classList.remove('active');
    });
}
