var describe = document.querySelectorAll('.description');
var photoGallery = document.querySelector('#photoGallery');
var submitButton = document.querySelector('#submitButton');
submitButton.addEventListener('click', () => {
    describe.forEach(des => des.innerText = document.getElementById('newName').value);
    photoGallery.innerHTML = "New Name";

});