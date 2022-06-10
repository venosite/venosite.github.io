document.getElementById("discord").onclick = function() {
    window.open("https://discord.gg/efQhHPfsWS");
}
document.getElementById("github").onclick = function() {
    window.open("https://github.com/NixonXC/Venox");
};
var menuList = document.getElementById("navMenu");
    menuList.style.maxHeight = "0px";
    function togglemenu(){
        if (menuList.style.maxHeight == "0px") {
            menuList.style.maxHeight = "130px"
        }
        else {
            menuList.style.maxHeight = "0px"
        }
    }