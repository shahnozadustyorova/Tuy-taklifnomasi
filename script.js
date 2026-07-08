document.addEventListener("DOMContentLoaded", function () {

    const title = document.querySelector("h1");

    let scale = 1;

    setInterval(() => {

        scale = scale === 1 ? 1.05 : 1;

        title.style.transform = `scale(${scale})`;

    }, 1000);

});
