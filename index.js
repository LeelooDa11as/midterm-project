const error = document.getElementById("error-messages")

if (!input.include("@")) {
    error.innerText = "This is not an email"
}