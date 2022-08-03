document.addEventListener("DOMContentLoaded", () => {
  const input = document.getElementById("js-input");
  input.onchange = (e) => {
    console.log(e.target.value);
  };

  const btn = document.getElementById("js-button");
  btn.onclick = () => {
    input.value = "test";
    input.dispatchEvent(new Event("change"));
  };
});
