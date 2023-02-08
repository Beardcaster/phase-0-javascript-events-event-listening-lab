function addingEventListener() {
    const btn = document.getElementById("button")
    btn.addEventListener('click', () => {

        console.log("click")
        alert("I was clicked");
    })


}
addingEventListener();