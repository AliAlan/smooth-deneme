const artistContainer = document.querySelector(".artists-wrapper");
const template = document.querySelector(".template");
let datas = [];
fetch("data.json")
  .then((res) => res.json())
  .then((data) => {
    datas = data.map((article) => {
      const artist = template.content.cloneNode(true).children[0];
      const arrow = artist.querySelector(".arrow");
      const pp = artist.querySelector(".profile");
      const register = artist.querySelector("#register");
      const ppContainer = artist.querySelector(".pp");
      const shortInfoH3 = artist.querySelector(".short-info h3");
      const shortInfop = artist.querySelector(".short-info p");
      const longInfo = artist.querySelector(".long-info ");
      pp.src = article.photo;
      pp.alt = article.name;
      register.textContent = article.register;
      shortInfoH3.textContent = article.name;
      shortInfop.textContent = article.short_info;
      longInfo.textContent = article.long_info;

      artistContainer.appendChild(artist);

      arrow.addEventListener("click", (e) => {
        if (e.target.classList.contains("arrow-active")) {
          e.target.classList.remove("arrow-active");
          longInfo.classList.remove("show");
          artist.style.height = "80px";
          ppContainer.style.width = "100px";
        } else {
          e.target.classList.add("arrow-active");
          longInfo.classList.add("show");
          artist.style.height = "250px";
          ppContainer.style.width = "200px";
        }
      });
    });
  });
