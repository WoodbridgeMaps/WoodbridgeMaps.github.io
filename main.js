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
      type: "WoodbridgeSite",
      title: "Anjo, Moulded Foam"
},
{
      position: new google.maps.LatLng(33.738169, -84.120239),
      type: "WoodbridgeSite",
      title: "Atlanta, Moulded Foam"
},
{
      position: new google.maps.LatLng(33.738169, -84.120239),
      type: "WoodbridgeSite",
      title: "AtlantaAssembly, Assembly and Sequencing"
},
{
      position: new google.maps.LatLng(-19.967308, -44.20119),
      type: "WoodbridgeSite",
      title: "Betim, Moulded Foam"
},
{
      position: new google.maps.LatLng(42.341888, -82.002486),
      type: "WoodbridgeSite",
      title: "Blenheim, Interior Parts"
},
{
      position: new google.maps.LatLng(42.341888, -82.002486),
      type: "WoodbridgeSite",
      title: "BlenheimConventionalAssembly, Assembly and Sequencing"
},
{
      position: new google.maps.LatLng(42.341888, -82.002486),
      type: "WoodbridgeSite",
      title: "BlenheimFIP1, Interior Parts"
},
{
      position: new google.maps.LatLng(42.341888, -82.002486),
      type: "WoodbridgeSite",
      title: "BlenheimFIP2, Interior Parts"
},
{
      position: new google.maps.LatLng(42.341888, -82.002486),
      type: "WoodbridgeSite",
      title: "BlenheimFIP3, Interior Parts"
},
{
      position: new google.maps.LatLng(42.341888, -82.002486),
      type: "WoodbridgeSite",
      title: "BlenheimFoam, Moulded Foam"
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
      title: "CapivariFIP, Interior Parts"
},
{
      position: new google.maps.LatLng(-23.001111, -47.503333),
      type: "WoodbridgeSite",
      title: "CapivariFoam, Moulded Foam"
},
{
      position: new google.maps.LatLng(-29.114177, -51.094567),
      type: "WoodbridgeSite",
      title: "Caxias, Moulded Foam"
},
{
      position: new google.maps.LatLng(35.09054294400145, -85.26202604089458),
      type: "WoodbridgeSite",
      title: "ChattanoogaFormedPlastics, EPP"
},
{
      position: new google.maps.LatLng(43.586548, -79.66089),
      type: "WoodbridgeSite",
      title: "CIM/IT, Corporate"
},
{
      position: new google.maps.LatLng(31.895771, -106.392247),
      type: "WoodbridgeSite",
      title: "ElPasoLamination, Flame Lamination"
},
{
      position: new google.maps.LatLng(31.895771, -106.392247),
      type: "WoodbridgeSite",
      title: "ElPasoSlab, Slab"
},
{
      position: new google.maps.LatLng(43.586548, -79.66089),
      type: "WoodbridgeSite",
      title: "Engineering, Corporate"
},
{
      position: new google.maps.LatLng(52.39404, 8.62),
      type: "WoodbridgeSite",
      title: "Espelkamp, Moulded Foam"
},
{
      position: new google.maps.LatLng(41.35415, -83.077678),
      type: "WoodbridgeSite",
      title: "Fremont, Moulded Foam"
},
{
      position: new google.maps.LatLng(13.690419, 101.07796),
      type: "WoodbridgeSite",
      title: "GatewaySeat3, Moulded Foam"
},
{
      position: new google.maps.LatLng(13.690419, 101.07796),
      type: "WoodbridgeSite",
      title: "GatewaySeat4, Moulded Foam"
},
{
      position: new google.maps.LatLng(52.420679, 10.770026),
      type: "WoodbridgeSite",
      title: "GmbH, Moulded Foam"
},
{
      position: new google.maps.LatLng(36.007362, -79.781104),
      type: "WoodbridgeSite",
      title: "Greensboro, Slab"
},
{
      position: new google.maps.LatLng(23.116667, 113.25),
      type: "WoodbridgeSite",
      title: "Guangzhou, Moulded Foam"
},
{
      position: new google.maps.LatLng(34.730278, -86.586111),
      type: "WoodbridgeSite",
      title: "Huntsville, Moulded Foam"
},
{
      position: new google.maps.LatLng(13.58436, 101.28385),
      type: "JV",
      title: "IWCTthailand, JV"
},
{
      position: new google.maps.LatLng(35.423298, 136.760654),
      type: "WoodbridgeSite",
      title: "IWFoam, Moulded Foam"
},
{
      position: new google.maps.LatLng(39.172456, -94.6333),
      type: "WoodbridgeSite",
      title: "KansasCityFoam, Moulded Foam"
},
{
      position: new google.maps.LatLng(39.287172, -94.669501),
      type: "WoodbridgeSite",
      title: "KansasCitySequencing, Assembly and Sequencing"
},
{
      position: new google.maps.LatLng(39.172456, -94.6333),
      type: "WoodbridgeSite",
      title: "KansasCityStructural, Moulded Foam"
},
{
      position: new google.maps.LatLng(43.790162, -79.599991),
      type: "WoodbridgeSite",
      title: "KiplingNorth, Slab"
},
{
      position: new google.maps.LatLng(43.790162, -79.599991),
      type: "WoodbridgeSite",
      title: "KiplingSouth, Moulded Foam"
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
      type: "WoodbridgeSite",
      title: "LeonEANSA, Moulded Foam"
},
{
      position: new google.maps.LatLng(21.043691, -101.571703),
      type: "WoodbridgeSite",
      title: "LeonFIP, Interior Parts"
},
{
      position: new google.maps.LatLng(21.043691, -101.571703),
      type: "WoodbridgeSite",
      title: "LeonFoam, Moulded Foam"
},
{
      position: new google.maps.LatLng(21.043691, -101.571703),
      type: "WoodbridgeSite",
      title: "LeonLamination, Flame Lamination"
},
{
      position: new google.maps.LatLng(53.570564, -2.169522),
      type: "WoodbridgeSite",
      title: "Manchester, Moulded Foam"
},
{
      position: new google.maps.LatLng(-37.827321, 144.784423),
      type: "WoodbridgeSite",
      title: "MelbourneLine1, Moulded Foam"
},
{
      position: new google.maps.LatLng(-37.827321, 144.784423),
      type: "WoodbridgeSite",
      title: "MelbourneLine2, Moulded Foam"
},
{
      position: new google.maps.LatLng(19.432608, -99.133208),
      type: "WoodbridgeSite",
      title: "MexicoCityLine1, Moulded Foam"
},
{
      position: new google.maps.LatLng(19.432608, -99.133208),
      type: "WoodbridgeSite",
      title: "MexicoCityLine2, Moulded Foam"
},
{
      position: new google.maps.LatLng(19.432608, -99.133208),
      type: "WoodbridgeSite",
      title: "MexicoCityLine3, Moulded Foam"
},
{
      position: new google.maps.LatLng(19.432608, -99.133208),
      type: "WoodbridgeSite",
      title: "MexicoCityLine4, Moulded Foam"
},
{
      position: new google.maps.LatLng(19.432608, -99.133208),
      type: "WoodbridgeSite",
      title: "MexicoCityLine6, Moulded Foam"
},
{
      position: new google.maps.LatLng(19.432608, -99.133208),
      type: "WoodbridgeSite",
      title: "MexicoCityLine7, Moulded Foam"
},
{
      position: new google.maps.LatLng(19.432608, -99.133208),
      type: "WoodbridgeSite",
      title: "MexicoCityLine9, Moulded Foam"
},
{
      position: new google.maps.LatLng(43.586548, -79.66089),
      type: "WoodbridgeSite",
      title: "Mississauga, Corporate"
},
{
      position: new google.maps.LatLng(50.413425, 14.908438),
      type: "WoodbridgeSite",
      title: "Mlada, Moulded Foam"
},
{
      position: new google.maps.LatLng(-34.70145, -58.438305),
      type: "WoodbridgeSite",
      title: "Pilar, Moulded Foam"
},
{
      position: new google.maps.LatLng(19.041297, -98.2062),
      type: "WoodbridgeSite",
      title: "PueblaEPP, EPP"
},
{
      position: new google.maps.LatLng(19.041297, -98.2062),
      type: "WoodbridgeSite",
      title: "PueblaFoam, Moulded Foam"
},
{
      position: new google.maps.LatLng(19.041297, -98.2062),
      type: "WoodbridgeSite",
      title: "PueblaLine2, Moulded Foam"
},
{
      position: new google.maps.LatLng(42.187702, -83.391209),
      type: "WoodbridgeSite",
      title: "Romulus, Moulded Foam"
},
{
      position: new google.maps.LatLng(49.992328, 8.392584),
      type: "WoodbridgeSite",
      title: "Ruesselsheim, Moulded Foam"
},
{
      position: new google.maps.LatLng(25.540921, -100.943102),
      type: "WoodbridgeSite",
      title: "SaltilloFoam, Moulded Foam"
},
{
      position: new google.maps.LatLng(25.540921, -100.943102),
      type: "WoodbridgeSite",
      title: "SaltilloFoamLine1, Moulded Foam"
},
{
      position: new google.maps.LatLng(25.540921, -100.943102),
      type: "WoodbridgeSite",
      title: "SaltilloFoamLine2, Moulded Foam"
},
{
      position: new google.maps.LatLng(25.54092, -100.943101),
      type: "WoodbridgeSite",
      title: "SaltilloLamination, Flame Lamination"
},
{
      position: new google.maps.LatLng(25.540921, -100.943102),
      type: "WoodbridgeSite",
      title: "SaltilloSIT, Interior Parts"
},
{
      position: new google.maps.LatLng(22.989941, 72.379883),
      type: "WoodbridgeSite",
      title: "Sanand, Moulded Foam"
},
{
      position: new google.maps.LatLng(-23.699049, -46.56429),
      type: "WoodbridgeSite",
      title: "SaoBernardo, Moulded Foam"
},
{
      position: new google.maps.LatLng(31.230416, 121.473701),
      type: "WoodbridgeSite",
      title: "Shanghai, Moulded Foam"
},
{
      position: new google.maps.LatLng(38.808422, -90.645628),
      type: "WoodbridgeSite",
      title: "St.Peters, Moulded Foam"
},
{
      position: new google.maps.LatLng(13.727896, 100.524123),
      type: "WoodbridgeSite",
      title: "Thailand, Moulded Foam"
},
{
      position: new google.maps.LatLng(42.25, -82.433333),
      type: "WoodbridgeSite",
      title: "Tilbury, Moulded Foam"
},
{
      position: new google.maps.LatLng(35.708946, 139.774268),
      type: "WoodbridgeSite",
      title: "Tokyo, Moulded Foam"
},
{
      position: new google.maps.LatLng(48.957913, 2.95048),
      type: "WoodbridgeSite",
      title: "Trilport, Moulded Foam"
},
{
      position: new google.maps.LatLng(43.862071, -78.895176),
      type: "WoodbridgeSite",
      title: "Whitby, Moulded Foam"
},
{
      position: new google.maps.LatLng(35.08674, -85.266024),
      type: "WoodbridgeManagedJV",
      title: "WITPChattanooga, Technical Foam"
},
{
      position: new google.maps.LatLng(40.83687, -74.04729),
      type: "WoodbridgeManagedJV",
      title: "WITPNewJersey, Technical Foam"
},
{
      position: new google.maps.LatLng(-29.114177, -51.094567),
      type: "WoodbridgeSite",
      title: "Wsul, Moulded Foam"
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
