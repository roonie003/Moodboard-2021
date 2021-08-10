const panels = document.querySelectorAll('.panel');

panels.forEach(panel => { 

    //add event listener
    panel.addEventListener('click', () => {
        removeActiveClasses()
        panel.classList.add('active')
    })
})

//Remove active classes

function removeActiveClasses() {
    panels.forEach(panel => {
        panel.classList.remove('active');
    })
}