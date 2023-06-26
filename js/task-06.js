const validInput = document.querySelector("#validation-input");
const inputValidLength = validInput.value.length;
const inputDataLength = validInput.getAttribute("data-length");
validInput.addEventListener("blur", validInputNumbers);
function validInputNumbers() {
    Number(inputDataLength) === validInput.value.trim().length
        ? changeClass("valid", "invalid")
        : changeClass("invalid", "valid");
        
}
function changeClass(first, second) {
    validInput.classList.add(first);
    validInput.classList.remove(second);

}