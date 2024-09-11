var tbtn = document.getElementById("theme");
var x = 0;
function theme(){
    if(window.localStorage.getItem("thm1") === "Home1.css"){
        window.localStorage.setItem("thm1", "Home2.css");
    } else {
        window.localStorage.setItem("thm1", "Home1.css");
        document.getElementById("theme1").href = "Home1.css";
    }
    location.reload();
}

window.onload = () => {
    if(window.localStorage.getItem("thm1") === "Home1.css"){
        document.getElementById("theme1").href = "Home1.css";
    } else {
        document.getElementById("theme1").href = "Home2.css";
    }
}
    
