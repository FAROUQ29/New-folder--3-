const input = document.getElementById('input')
const target = document.getElementById('target')

input.addEventListener("input", function(e) {
    const value = e.target.value
    target.innerText = value
})