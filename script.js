const dropdown = document.querySelectorAll('.dropdown-button');
// console.log(dropdown)

for (i=0; i < dropdown.length; i++) {
    dropdown[i].addEventListener('click', function() {
        this.classList.toggle('active');
        let content = this.nextElementSibling;
        content.classList.toggle('open');
        if (content.style.maxHeight) {
            content.style.maxHeight = null;
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
        }
    });
}