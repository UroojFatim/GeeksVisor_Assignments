function changeColor() {
    var content = document.getElementById('content');
    var paragraph = content.querySelector('p');

    if (paragraph.classList.contains('red')) {
        // If it does, remove 'red' and add 'blue'
        paragraph.classList.remove('red');
        paragraph.classList.add('blue');
    } else {
        // If it doesn't, remove 'blue' and add 'red'
        paragraph.classList.remove('blue');
        paragraph.classList.add('red');
    }
}
