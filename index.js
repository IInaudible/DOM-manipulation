    //use querySelector to change the fontSize on the h1 element
    document.querySelector("h1").style.fontSize = "100px";

    //use querySelector and innerHTML to add text using #firstDiv id
    document.querySelector("#firstDiv").innerHTML = "Added Text";

    //use querySelectorAll to change all p tags to a different color
    const pColor = () => {
        let ps = document.querySelectorAll("p");
        for (let i = 0; i <= ps.length - 1; i++) {
            ps[i].style.color = "red";
        }
    }
    pColor();

    //use querySelector to select the paragraph class and set it's display to none
    document.getElementsByClassName("paragraph").display = "none";

    //use getElementsById and innerHTML to add text using #secondDiv id
    document.getElementById("secondDiv").innerHTML = "Added Text 2";
    //change the font size to 64px
    document.getElementById("secondDiv").style.fontSize = "64px";
    //add an h1 element inside the div
    document.getElementById("secondDiv").innerHTML = `<h1>h1 thingy<h1>`;
    //add id to the h1 you just created
    document.querySelectorAll("h1")[1].id = "Joe";
    //add border around h1
    document.getElementById("Joe").style.borderStyle = "Solid";
