// Initialize and add the map
function initMap() {
    
    var russia = { lat: 3.51602, lng: -2.1969 };

    var map = new google.maps.Map(
        document.getElementById('map'), { zoom: 20, center: india });
    
    var marker = new google.maps.Marker({ position: india, map: map });
}


// toggle menu
var MenuItems = document.getElementById("menu-items");

MenuItems.style.maxHeight = "0px";

function menutoggle(){
    if(MenuItems.style.maxHeight == "0"){
        MenuItems.style.maxHeight = "200px";
    } else {
        MenuItems.style.maxHeight = "0px";
    }
}
