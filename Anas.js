const checkbox = document.getElementById("checkbox")
const ball = document.querySelector('.ball');
        
ball.addEventListener('click', function() {
    checkbox.checked = !checkbox.checked;
    document.body.classList.toggle("dark");
});

checkbox.addEventListener("change", () => {
    document.body.classList.toggle("dark");
});


