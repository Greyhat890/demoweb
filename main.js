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
//zobot
{
	"connectionLinkName": "zobotsalesiq",
	"connectionName": "zobotsalesiq",
	"serviceName": "zlabs_integration",
	"userAccess": false,
	"isUserDefinedService": false,
	"sharedBy": "769146822",
	"scope": [
		"SalesIQ.visitors.ALL",
		"SalesIQ.visitors.UPDATE",
		"SalesIQ.visitors.READ",
		"SalesIQ.operators.ALL",
		"SalesIQ.visitors.CREATE",
		"SalesIQ.conversations.READ",
		"SalesIQ.conversations.CREATE",
		"SalesIQ.conversations.UPDATE",
		"SalesIQ.conversations.DELETE"
	]
}
