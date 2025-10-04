let btn = document.querySelector("button");
let ul = document.querySelector("ul");
let inp = document.querySelector("input");

    btn.addEventListener("click", function () {
      if (inp.value.trim() === "") return; // prevent empty tasks

      let li = document.createElement("li");
      li.innerText = inp.value;

      // create delete button
      let delbtn = document.createElement("button");
      delbtn.classList.add("delete-btn");
      delbtn.innerText = "❌";

      // delete functionality
      delbtn.addEventListener("click", function () {
        li.remove();
      });

      li.appendChild(delbtn);
      ul.appendChild(li);

      inp.value = ""; // clear input
    });