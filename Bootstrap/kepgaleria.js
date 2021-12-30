let gallery = document.getElementById("gallery");

function loadOsszesImg() {
    let images = document.getElementsByClassName('image');
    Array.from(images).forEach(element => {
        element.style = 'display: block';
    });
}
function visibleNovenyek(display) {
    let novenyek = document.getElementsByClassName('noveny');
    Array.from(novenyek).forEach(element => {
        element.style = 'display: ' + display;
    });
}

function visibleAllatok(display) {
    let allatok = document.getElementsByClassName('allat');
    Array.from(allatok).forEach(element => {
        element.style = 'display: ' + display;
    });
}

function loadNovenyekImg() {
    visibleNovenyek('block');
    visibleAllatok('none');
}

function loadAllatokImg() {
    visibleNovenyek('none');
    visibleAllatok('block');
}

document.getElementById('osszes').addEventListener('click', function clickOsszes(event) {
    loadOsszesImg();
});

document.getElementById('novenyek').addEventListener('click', function clickNovenyek(event) {
    loadNovenyekImg();
});

document.getElementById('allatok').addEventListener('click', function clickAllatok(event) {
    loadAllatokImg();
});