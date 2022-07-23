let weather= {
   apiKey :  "777ac634471881e5a981ab4a9275dfc4",
   fetchWeather:function(city){
      fetch("https://api.openweathermap.org/data/2.5/weather?q="  
      +  city 
      +  "&units=metric&appid=" 
      +this.apiKey
      )
      .then((response) => response.json())
      .then((data)=>this.displayWeather(data));
   },
   displayWeather:function(data){
     //data se name uthaya then.....data.weather se icon or description ki value 
      const {name}=data;
      const {icon,description} =data.weather[0];
      const {temp,humidity}=data.main;
      const{speed}=data.wind;
    console.log(name,icon,description,temp,humidity,speed)
    document.querySelector(".city").innerText="Weather in "+name;
    document.querySelector(".icon").src="https://openweathermap.org/img/wn/" + icon + ".png";
    document.querySelector(".temp").innerText=parseInt(temp)+"°C";
    document.querySelector(".humidity").innerText="Humidity : "+ humidity +"%";
    document.querySelector(".description").innerText= description;
    document.querySelector(".wind").innerText= "Wind speed : "+ speed + "km/hr";

    document.querySelector(".weather").classList.remove("loading");
    document.body.style.backgroundImage =
    " url('https://source.unsplash.com/1600x900/?"+name+")";

   },
   search: function(){
      this.fetchWeather(document.querySelector(".search-bar").value);
   }
};
document.querySelector(".search button")
.addEventListener("click",function(){
   weather.search();

});
document.querySelector(".search-bar").addEventListener("keyup",function(event){
  if(event.key=="Enter"){
     weather.search();
  }

});


