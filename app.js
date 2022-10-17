const joke=document.querySelectorAll(".joke-item");

console.log(joke);
joke.forEach((joke) => {
  joke.addEventListener("click",function(){

    joke.classList.toggle("active");
  });
});
