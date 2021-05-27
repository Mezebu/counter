let count = 0;

const value = document.querySelector("#value");
const btns = document.querySelectorAll("button");

btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const styles = e.currentTarget.classList;

    styles.contains("decrease")
      ? count--
      : styles.contains("reset")
      ? (count = 0)
      : styles.contains("increase")
      ? count++
      : "";

    count < 0
      ? (value.style.color = "red")
      : count > 0
      ? (value.style.color = "green")
      : (value.style.color = "white");

    value.textContent = count;
  });
});
