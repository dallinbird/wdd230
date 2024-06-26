const input = document.querySelector("#favchap");
input.focus();
const button = document.querySelector("button");
const list = document.querySelector("#list");

button.addEventListener("click", (e) => {
  e.preventDefault();
  if (input.value != "") {
    const li = document.createElement("li");
    const deleteButton = document.createElement("button");
    li.innerHTML = input.value;
    deleteButton.textContent = "❌";
    li.append(deleteButton);
    list.append(li);

    deleteButton.addEventListener("click", () => {
      list.removeChild(li);
      input.focus();
    });

    input.focus();
    input.value = "";
  } else {
    alert("Please enter a Book of Mormon Chapter.");
    input.focus();
  }
});
