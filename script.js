const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "fa64568db7msh3cadbe3bfc9bea0p1a49e9jsn4fc7e1e88704",
    "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
  },
};

const getWeather = (city) => {
  cityName.innerHTML = city;
  fetch(
    "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=" + city,
    options
  )
    .then((response) => response.json())
    .then((response) => {
      //console.log(response);

      //cloud_pct.innerHTML = response.cloud_pct;
      temp.innerHTML = response.temp;
      temp2.innerHTML = response.temp;

      //feels_like.innerHTML = response.feels_like;
      humidity.innerHTML = response.humidity;
      humidity2.innerHTML = response.humidity;

      min_temp.innerHTML = response.min_temp;
      max_temp.innerHTML = response.max_temp;
      wind_speed.innerHTML = response.wind_speed;
      wind_speed2.innerHTML = response.wind_speed;

      wind_degrees.innerHTML = response.wind_degrees;
      //sunrise.innerHTML = response.sunrise;
      //sunset.innerHTML = response.sunset;
    })
    .catch((err) => console.error(err));
};

submit.addEventListener("click", (e) => {
  e.preventDefault();
  getWeather(city.value);
});


	getWeather("Delhi");








//Weather report of Agra

fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Agra', options)
	.then(response => response.json())
	.then(response => {
		
		//console.log("Agra weather",response);
		h_agra.innerHTML = response.humidity;
		//max_agra.innerHTML = response.max_temp;
		//min_agra.innerHTML = response.min_temp;
		temp_agra.innerHTML = response.temp;
		winddegree_agra.innerHTML = response.wind_degrees;
		windspeed_agra.innerHTML = response.wind_speed;
	}
	)
	.catch(err => console.error(err));



	//Weather report of Chennai

	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Chennai', options)
	.then(response => response.json())
	.then(response => {
		
		//console.log("Chennai weather",response);
		h_c.innerHTML = response.humidity;
		////max_c.innerHTML = response.max_temp;
		////min_c.innerHTML = response.min_temp;
		temp_c.innerHTML = response.temp;
		winddegree_c.innerHTML = response.wind_degrees;
		windspeed_c.innerHTML = response.wind_speed;
	}
	)
	.catch(err => console.error(err));


	//Weather report of Shimla

	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Shimla', options)
	.then(response => response.json())
	.then(response => {
		
		//console.log("Shimla weather",response);
		h_s.innerHTML = response.humidity;
		//max_s.innerHTML = response.max_temp;
		//min_s.innerHTML = response.min_temp;
		temp_s.innerHTML = response.temp;
		winddegree_s.innerHTML = response.wind_degrees;
		windspeed_s.innerHTML = response.wind_speed;
	}
	)
	.catch(err => console.error(err));


	//Weather report of Jaipur

	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Jaipur', options)
	.then(response => response.json())
	.then(response => {
		
		//console.log("Jaipur weather",response);
		h_j.innerHTML = response.humidity;
		////max_j.innerHTML = response.max_temp;
		////min_j.innerHTML = response.min_temp;
		temp_j.innerHTML = response.temp;
		winddegree_j.innerHTML = response.wind_degrees;
		windspeed_j.innerHTML = response.wind_speed;
	}
	)
	.catch(err => console.error(err));



		//Weather report of Kolkata

	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Lucknow', options)
	.then(response => response.json())
	.then(response => {
		
		console.log("Kolkata weather",response);
		h_k.innerHTML = response.humidity;
		//max_k.innerHTML = response.max_temp;
		//min_k.innerHTML = response.min_temp;
		temp_k.innerHTML = response.temp;
		winddegree_k.innerHTML = response.wind_degrees;
		windspeed_k.innerHTML = response.wind_speed;
	}
	)
	.catch(err => console.error(err));


