const setLi = document.querySelectorAll(".item");
console.log("Number of categories:" + setLi.length);
setLi.forEach(function(item){
return console.log("Category:", item.firstElementChild.textContent, "\nElements:", item.lastElementChild.children.length);
})