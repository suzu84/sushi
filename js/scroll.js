{
    // スクロール
    const scroll = document.querySelector(".scroll");
    scroll.addEventListener("click", () => {
      const header = document.getElementById("header");
      header.scrollIntoView({
        behavior: "smooth",
      });
    });
}