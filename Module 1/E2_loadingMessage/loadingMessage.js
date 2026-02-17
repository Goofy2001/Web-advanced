let loadingMessage = document.querySelector("#LoadingMessage")
console.log(loadingMessage)

window.addEventListener("load", function() {
    loadingMessage.innerHTML = "Welcome!"
})

setTimeout(function() {loadingMessage.style.display = "none"}, 2000)