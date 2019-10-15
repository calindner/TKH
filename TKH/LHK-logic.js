// 1-.each()
// d3.select("ul").selectAll("li");

// d3.select("ul").selectAll("li")
//     .each(function(d, i) {
//       console.log("element", this);
//       console.log("data", d);
//       console.log("index", i);
//     });


    var myMap = L.map("map", {
      center: [0,0],
      width: 64,
      height: 64,
      zoom: 4
    });
    
    // Adding a tile layer (the background map image) to our map
    // We use the addTo method to add objects to our map
    L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
      attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
      maxZoom: 20,
      id: "mapbox.streets",
      accessToken: API_KEY
    }).addTo(myMap);