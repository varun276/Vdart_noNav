document.getElementById('accordionButton').addEventListener('click', function () {
    const content = document.getElementById('accordionContent');
    if (content.style.display === 'none' || content.style.display === '') {
        content.style.display = 'block';
        this.innerHTML = 'What is Netflix? <i class="fa-solid fa-xmark"></i>';
    }
    else {
        content.style.display = 'none';
        this.innerHTML = 'What is Netflix? <i class="fa-solid fa-plus"></i>';
    }
});

document.getElementById('accordionButton2').addEventListener('click', function () {
    const content = document.getElementById('accordionContent2');
    if (content.style.display === 'none' || content.style.display === '') {
        content.style.display = 'block';
        this.innerHTML = 'How much does Netflix cost?<i class="fa-solid fa-xmark"></i> ';
    }
    else {
        content.style.display = 'none';
        this.innerHTML = 'How much does Netflix cost?<i class="fa-solid fa-plus"></i> ';
    }
});

document.getElementById('accordionButton3').addEventListener('click', function () {
    const content = document.getElementById('accordionContent3');
    if (content.style.display === 'none' || content.style.display === '') {
        content.style.display = 'block';
        this.innerHTML = 'Where can I watch? <i class="fa-solid fa-xmark"></i> ';
    }
    else {
        content.style.display = 'none';
        this.innerHTML = 'Where can I watch? <i class="fa-solid fa-plus"></i>';
    }
});

document.getElementById('accordionButton4').addEventListener('click', function () {
    const content = document.getElementById('accordionContent4');
    if (content.style.display === 'none' || content.style.display === '') {
        content.style.display = 'block';
        this.innerHTML = 'How do I cancel? <i class="fa-solid fa-xmark"></i> ';
    }
    else {
        content.style.display = 'none';
        this.innerHTML = 'How do I cancel? <i class="fa-solid fa-plus"></i>';
    }
});

document.getElementById('accordionButton5').addEventListener('click', function () {
    const content = document.getElementById('accordionContent5');
    if (content.style.display === 'none' || content.style.display === '') {
        content.style.display = 'block';
        this.innerHTML = 'What can I watch on Netflix? <i class="fa-solid fa-xmark"></i>';
    }
    else {
        content.style.display = 'none';
        this.innerHTML = 'What can I watch on Netflix? <i class="fa-solid fa-plus"></i>';
    }
});

document.getElementById('accordionButton6').addEventListener('click', function () {
    const content = document.getElementById('accordionContent6');
    if (content.style.display === 'none' || content.style.display === '') {
        content.style.display = 'block';
        this.innerHTML = 'Is Netflix is good for kids? <i class="fa-solid fa-xmark"></i>';
    }
    else {
        content.style.display = 'none';
        this.innerHTML = 'Is Netflix is good for kids?<i class="fa-solid fa-plus"></i>';
    }
});