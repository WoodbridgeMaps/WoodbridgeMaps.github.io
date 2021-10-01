let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: new google.maps.LatLng(15, 0),
    zoom: 3,
  });

	var icon1 = "W.svg?raw=true";
	var icon1a = "Wzoom.svg?raw=true";
	var icon2 = "Wjv.svg?raw=true";
	var icon2a = "Wjvzoom.svg?raw=true";
	var icon3 = "JVw.svg?raw=true";
	var icon3a = "JVwzoom.svg?raw=true";
	
  const iconBase = "./"
    //"https://developers.google.com/maps/documentation/javascript/examples/full/images/";
  const icons = {
    WoodbridgeSite: {
      //icon: iconBase + "parking_lot_maps.png",
	  icon: "W.svg?raw=true",
    },
    WoodbridgeManagedJV: {
      //icon: iconBase + "library_maps.png",
	  icon: "Wjv.svg?raw=true",
    },
	JV: {
      //icon: iconBase + "library_maps.png",
	  icon: "JVw.svg?raw=true",
    },
  };
//*******************************************************************************************
// PASTE CODE BELOW THIS LINE
//*******************************************************************************************
const features = [
{
      position: new google.maps.LatLng(-34.786408, 138.639341),
      type: "WoodbridgeSite",
      title: "Adelaide, Moulded Foam"
},
{
      position: new google.maps.LatLng(34.958641, 137.080297),
      type: "JV",
      title: "INOAC Woodbridge Anjo, Moulded Foam"
},
{
      position: new google.maps.LatLng(33.738169, -84.120239),
      type: "WoodbridgeSite",
      title: "Atlanta, Moulded Foam, Assembly and Diversified"
},
{
      position: new google.maps.LatLng(-19.967308, -44.20119),
      type: "WoodbridgeSite",
      title: "Betim, Moulded Foam, Interior Parts"
},
{
      position: new google.maps.LatLng(42.341888, -82.002486),
      type: "WoodbridgeSite",
      title: "Blenheim, Interior Parts, Moulded Foam"
},
{
      position: new google.maps.LatLng(42.341580, -82.000630),
      type: "WoodbridgeManagedJV",
      title: "WITP Blenheim Interior Trim, Assembly and Sequencing"
},
{
      position: new google.maps.LatLng(-22.818477, -45.182541),
      type: "WoodbridgeSite",
      title: "Cacapava, Moulded Foam"
},
{
      position: new google.maps.LatLng(-12.697178, -38.333198),
      type: "WoodbridgeSite",
      title: "Camacari, Moulded Foam"
},
{
      position: new google.maps.LatLng(-23.001111, -47.503333),
      type: "WoodbridgeSite",
      title: "Capivari, Interior Parts, Moulded Foam"
},
{
      position: new google.maps.LatLng(-29.114177, -51.094567),
      type: "WoodbridgeManagedJV",
      title: "WSul, Moulded Foam"
},
{
      position: new google.maps.LatLng(35.09054294400145, -85.26202604089458),
      type: "WoodbridgeSite",
      title: "Chattanooga Formed Plastics, Formed Plastics"
},
{
      position: new google.maps.LatLng(31.895771, -106.392247),
      type: "WoodbridgeManagedJV",
      title: "WITP El Paso, Flame Lamination, Flexible Foam"
},
{
      position: new google.maps.LatLng(31.895771, -106.392247),
      type: "WoodbridgeSite",
      title: "Englewood, Noise Vibration and Hardness"
},
{
      position: new google.maps.LatLng(43.586548, -79.66089),
      type: "WoodbridgeSite",
      title: "Engineering, Corporate"
},
{
      position: new google.maps.LatLng(41.35415, -83.077678),
      type: "WoodbridgeSite",
      title: "Fremont, Moulded Foam"
},
{
      position: new google.maps.LatLng(13.601770599359426, 101.34155693493673),
      type: "JV",
      title: "Gateway IWCT, Moulded Foam"
},
{
      position: new google.maps.LatLng(52.423054525504746, 10.790659182073073),
      type: "WoodbridgeSite",
      title: "Woodbridge Germany, Commercial Center"
},
{
      position: new google.maps.LatLng(36.007362, -79.781104),
      type: "WoodbridgeManagedJV",
      title: "WITP Greensboro, Flexible Foam"
},
{
      position: new google.maps.LatLng(23.116667, 113.25),
      type: "WoodbridgeManagedJV",
      title: "Guangzhou, Moulded Foam"
},
{
      position: new google.maps.LatLng(34.730278, -86.586111),
      type: "WoodbridgeSite",
      title: "Huntsville, Moulded Foam"
},
{
      position: new google.maps.LatLng(14.528242361883033, 100.91143299566305),
      type: "JV",
      title: "Saraburi IWCT Co Ltd, Moulded PU"
},
{
      position: new google.maps.LatLng(35.423298, 136.760654),
      type: "WoodbridgeSite",
      title: "IWFoam, Moulded Foam"
},
{
      position: new google.maps.LatLng(39.172456, -94.6333),
      type: "WoodbridgeSite",
      title: "Kansas City Foam, Moulded Foam"
},
{
      position: new google.maps.LatLng(39.287172, -94.669501),
      type: "WoodbridgeSite",
      title: "Kansas City Sequencing, Assembly and Sequencing"
},
{
      position: new google.maps.LatLng(43.790163, -79.599991),
      type: "WoodbridgeSite",
      title: "Kipling North, Slab"
},
{
      position: new google.maps.LatLng(43.790162, -79.599991),
      type: "WoodbridgeSite",
      title: "Kipling South, Moulded Foam"
},
{
      position: new google.maps.LatLng(43.466407, -80.463824),
      type: "WoodbridgeSite",
      title: "Kitchener, EPP"
},
{
      position: new google.maps.LatLng(42.704733, -84.628915),
      type: "WoodbridgeSite",
      title: "Lansing, Assembly and Sequencing"
},
{
      position: new google.maps.LatLng(21.043691, -101.571703),
      type: "WoodbridgeManagedJV",
      title: "PSW Leon, Moulded Foam, Formed Plastics, Interior Parts"
},
{
      position: new google.maps.LatLng(21.02277082715128, -101.5954938048287),
      type: "WoodbridgeManagedJV",
      title: "PSW Leon Wires, Wire Frames"
},
{
      position: new google.maps.LatLng(21.066210, -101.678360),
      type: "WoodbridgeManagedJV",
      title: "WITP Leon Lamination, Flame Lamination"
},
{
      position: new google.maps.LatLng(19.432608, -99.133208),
      type: "WoodbridgeManagedJV",
      title: "PSW Mexico City, Moulded Foam, Interior Parts"
},
{
      position: new google.maps.LatLng(43.586548, -79.66089),
      type: "WoodbridgeSite",
      title: "Mississauga, Corporate"
},
{
      position: new google.maps.LatLng(-34.70145, -58.438305),
      type: "WoodbridgeSite",
      title: "Pilar, Moulded Foam"
},
{
      position: new google.maps.LatLng(19.041297, -98.2062),
      type: "WoodbridgeManagedJV",
      title: "PSW Puebla, Formed Plastics, Interior Parts, Moulded Foam"
},
{
      position: new google.maps.LatLng(42.187702, -83.391209),
      type: "WoodbridgeSite",
      title: "Romulus, Moulded Foam"
},
{
      position: new google.maps.LatLng(25.540921, -100.943102),
      type: "WoodbridgeManagedJV",
      title: "PSW Saltillo, Moulded Foam, Assembly and Diversified, Interior Parts"
},
{
      position: new google.maps.LatLng(25.54092, -100.943101),
      type: "WoodbridgeManagedJV",
      title: "WITP Saltillo Lamination, Flame Lamination"
},
{
      position: new google.maps.LatLng(22.989941, 72.379883),
      type: "WoodbridgeSite",
      title: "Sanand, Moulded Foam"
},
{
      position: new google.maps.LatLng(-23.699049, -46.56429),
      type: "WoodbridgeSite",
      title: "Sao Bernardo, Moulded Foam, Interior Parts"
},
{
      position: new google.maps.LatLng(31.230416, 121.473701),
      type: "WoodbridgeSite",
      title: "Shanghai, Moulded Foam, Commercial Center"
},
{
      position: new google.maps.LatLng(38.808422, -90.645628),
      type: "WoodbridgeSite",
      title: "St. Peters, Moulded Foam"
},
{
      position: new google.maps.LatLng(42.25, -82.433333),
      type: "WoodbridgeSite",
      title: "Tilbury, Moulded Foam"
},
{
      position: new google.maps.LatLng(35.708946, 139.774268),
      type: "WoodbridgeSite",
      title: "Woodbridge Japan, Commercial Center"
},
{
      position: new google.maps.LatLng(43.862071, -78.895176),
      type: "WoodbridgeSite",
      title: "Whitby, Moulded Foam"
},
{
      position: new google.maps.LatLng(35.08674, -85.266024),
      type: "WoodbridgeManagedJV",
      title: "WITP Chattanooga, Technical Foam, Flexible Foam"
},
{
      position: new google.maps.LatLng(40.83687, -74.04729),
      type: "WoodbridgeManagedJV",
      title: "WITP New Jersey, Technical Foam"
},
{
      position: new google.maps.LatLng(30.492658, 114.180207),
      type: "WoodbridgeSite",
      title: "Wuhan, Moulded Foam"
},
{
      position: new google.maps.LatLng(31.49117, 120.31191),
      type: "WoodbridgeSite",
      title: "Wuxi, Slab"
},
{
      position: new google.maps.LatLng(30.71444, 111.28472),
      type: "WoodbridgeSite",
      title: "Yichang, Moulded Foam"
},
{
      position: new google.maps.LatLng(37.696370, -85.187750),
      type: "WoodbridgeManagedJV",
      title: "WITP Springfield, Technical Foam"
},
{
      position: new google.maps.LatLng(43.155270, -80.213350),
      type: "WoodbridgeSite",
      title: "Brantford, Noise Vibration and Hardness"
},
{
      position: new google.maps.LatLng(25.77956186552148, -100.17274300699805),
      type: "WoodbridgeManagedJV",
      title: "WITP Monterrey, Technical Foam"
},
{
      position: new google.maps.LatLng(12.96331298800585, 77.58521922955535),
      type: "WoodbridgeSite",
      title: "Bangalore, Commercial Center"
},
{
      position: new google.maps.LatLng(33.27439685712034, 130.90626412863776),
      type: "JV",
      title: "INOAC Woodbridge Inado, Moulded Foam"
},
{
      position: new google.maps.LatLng(35.18289952004401, 136.8999215037453),
      type: "JV",
      title: "INOAC Woodbridge Nanno, Moulded Foam"
},
{
      position: new google.maps.LatLng(13.698737103376029, 100.34499491874801),
      type: "JV",
      title: "Bangkok IWCT, Moulded Foam"
},
{
      position: new google.maps.LatLng(45.287141232587665, 8.581543556676209),
      type: "JV",
      title: "Toscana Gomma Spa, Technical Agreement"
},
];
//*******************************************************************************************
// PASTE CODE ABOVE THIS LINE
//*******************************************************************************************
  
  // Create markers.
  for (let i = 0; i < features.length; i++) {
    const marker = new google.maps.Marker({
      position: features[i].position,
      icon: icons[features[i].type].icon,
      map: map,
	  title: features[i].title,
    });


	google.maps.event.addListener(marker, 'mouseover', function() {
		switch(marker.icon) {
		  	case icon2:
		    	return marker.setIcon(icon2a);
		    	break;
		  	case icon3:
		    	return marker.setIcon(icon3a);
		    	break;
		  	default:
		    	return marker.setIcon(icon1a);
		}
	});
	google.maps.event.addListener(marker, 'mouseout', function() {
	    switch(marker.icon) {
		  	case icon2a:
		    	return marker.setIcon(icon2);
		    	break;
		  	case icon3a:
		    	return marker.setIcon(icon3);
		    	break;
		  	default:
		    	return marker.setIcon(icon1);
		}
	});
  }
}
