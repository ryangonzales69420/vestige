function showPage(reference) {
    const loader = document.getElementById("pageLoader");
    const pages = document.getElementsByClassName("pageDynamic");

    loader.style.display = "block";

    setTimeout(() => {

        for (let page of pages) {
            page.style.display = "none";
        }

        document.getElementById(reference).style.display = "flex";

        loader.style.display = "none";

    }, 76); // loading effect duration
}