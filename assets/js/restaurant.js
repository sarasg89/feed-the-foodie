$(document).ready(function () {
    // ******************
    // STYLING FOR NAVBAR
    // ******************

    var menuBtn = document.getElementById('menu-button');
    var menu = document.getElementById('menu');
    var barsIcon = document.getElementById('bars');
    var xmarkIcon = document.getElementById('xmark');

    menuBtn.addEventListener('click', () => {
        menu.classList.toggle('hidden');
        barsIcon.classList.toggle('hidden');
        xmarkIcon.classList.toggle('hidden');
    });

    var searchFormEl = $("#search-form");
    var searchBtnEl = $("#search-btn");
    var restaurantEl = $("#restaurant-section");
    var newSearchEl = $("#new-search");
    var newSearchBtnEl = $("#new-search-btn");
    var saveBtnEl = $(".save-btn");

    // *******************
    // DISPLAY RESTAURANTS
    // *******************

    searchBtnEl.on("click", function (event) {
        event.preventDefault();

        var city = $("#city").val();
        var cuisine = $("#cuisine").val();
        var distance = $("#distance").val();

        // Check if the fields are filled in
        if(distance.length == 0 || city.length == 0 || cuisine.length == 0 ){
            alert("All fields must be populated.");
            return;
        }

        // Use the "is not a number" function to see if the user put text where a number should go
        if(isNaN(distance)){
            alert("Distance must be a number.");
            return;
        }

        restaurantEl.removeAttr("hidden");
        newSearchEl.removeAttr("hidden");
        searchFormEl.attr("hidden", "hidden");

        APIkey1 = "2D3652D5BC3F451F8D340C99078D1247";
        var cors = 'https://cors-anywhere.herokuapp.com/' // this needs to go before the TripAdvisor url
        

        // Everything is OK, time to call the API!

        var advisorUrl = cors+'https://api.content.tripadvisor.com/api/v1/location/search?key=2D3652D5BC3F451F8D340C99078D1247&searchQuery=' + city + '%20'+cuisine+'&category=restaurants&language=en&radiusUnit=km&radius='+distance


        fetch(advisorUrl)
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                console.log(data)
                data = data.data;
                // I have the data now, start filling in the divs. The first element in data[0] is basic details about the selected city so I skip it
                for(i = 1; i < 4; i++){
                    $("#title"+i).html(data[i].name)
                    $("#cuisine-"+i).html(cuisine)
                    $("#address-"+i).html(data[i].address_obj.address_string)
                    $("#button-" +i).attr("data-id",data[i].location_id);

                    // This is very ugly but I'm out of time to do anything better....
                    $("#web-"+i).attr("id", "web-"+data[i].location_id)
                    $("#contact-"+i).attr("id", "contact-"+data[i].location_id)
                    $("#rating-img-"+i).attr("id", "rating-img-"+data[i].location_id)

                    // I need to do a second fetch to get the restaurant details to fill in the remaining data
                    var detailsUrl = cors+'https://api.content.tripadvisor.com/api/v1/location/'+data[i].location_id+'/details?key=2D3652D5BC3F451F8D340C99078D1247&currency=CAD'
                    fetch(detailsUrl)
                        .then(function (response) {
                            return response.json();
                        })
                        .then(function (dataDetails) {
                            console.log(dataDetails)
                            $("#web-" + dataDetails.location_id).attr("href", dataDetails.web_url);
                            $("#contact-"+ dataDetails.location_id).html(dataDetails.phone)
                            $("#rating-img-"+ dataDetails.location_id).attr("src", dataDetails.rating_image_url)
                        })

                }

            }
        )
        

    })

    // *****************************
    // SAVE RESTAURANT TO FAVOURITES
    // *****************************

    function saveRestaurant(data) {
        var restIdSave = data

        // An empty array is created first
        var restaurantSaved = [];

        // If local storage is NOT empty, the existing data is added to the recipeSaved array
        var alreadyInStorage = localStorage.getItem("restaurant");
        if (alreadyInStorage !== null) {
            restaurantSaved = JSON.parse(alreadyInStorage);
        }

        // Check if the new recipe to be saved already exists in local storage
        if (!restaurantSaved.includes(restIdSave)) {
            restaurantSaved.push(restIdSave);
            // recipeSaved is added to local storage with a key of "recipe"
            localStorage.setItem("restaurant", JSON.stringify(restaurantSaved));
        }
    }

    saveBtnEl.on("click", function () {
        var idSave = $(this).attr("data-id");
        saveRestaurant(idSave);
    })

    // **********
    // NEW SEARCH
    // **********

    newSearchBtnEl.on("click", function () {
        location.reload();
    })

})