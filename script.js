const api={
        // ссылка
    endpoint: "https://api.openweathermap.org/data/2.5/",
    key: "c6c6353ce9fd5175a324e66d13632e72"
    
    // API ключ
}
//console.log(api);
const input = document.querySelector("#input");
input.addEventListener("keydown",enter);

function enter(event){
    //1 if 13/enter  pressed - then 
    //2 SEARCH
    if(event.keyCode === 13){
        getInfo(input.value);   // access to user's typing
    }
}

async function getInfo(data){
    const res = await fetch(`${api.endpoint}weather?q=${data}&units=metric&appID=${api.key}`);
    //console.log(res);
    const result = await res.json();
    console.log(result);
    console.log(result.main.temp);
    console.log(result.main.temp_min);
    console.log(result.main.temp_max);
    console.log(result.main.humidity);

    console.log(result.name);
    console.log(result.sys.country);
    
    console.log(result.weather[0].description);

    displayResult(result);
}

function displayResult(result){
    console.log(result);
    let city = document.querySelector("#city");
    city.textContent = `${result.name}, ${result.sys.country}`;

    getOurDate();

    let temperature = document.querySelector("#temperature");
    temperature.innerHTML = `${(Math.round(result.main.temp))}<span>°</span>`

    let feelsLike = document.querySelector("#feelsLike");
    feelsLike.innerHTML = `${(Math.round(result.main.feels_like))}<span>°</span>`

    let conditions = document.querySelector("#conditions");
    conditions.textContent = `${result.weather[0].main}`;

    let variation = document.querySelector("#variation");
    variation.innerHTML = "Min: "+`${Math.round(result.main.temp_min)}<span>°</span>` + " Max: " + `${Math.round(result.main.temp_max)}<span>°</span>`;


}

function getOurDate(){
    const myDate = new Date();
    //let date = document.querySelector("#date").innerHTML = myDate.getDay();
   // console.log(date); // NUMBER not a week-day

   // WEEK DAY 
    const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    //let day = document.querySelector("#date").textContent = days[myDate.getDay()];
    let day = days[myDate.getDay()];
    console.log(date);

    //let todayDate = document.querySelector("#date").textContent = myDate.getDate();
    let todayDate = myDate.getDate();

    console.log(todayDate);

    let month = months[myDate.getMonth()];
    console.log(month);

    let year = myDate.getFullYear();
    console.log(year);

    // SHOW in HTML
    let showDate = document.querySelector("#date");
    showDate.textContent = `${day}`+" "+`${todayDate}`+" "+`${month}`+" "+`${year}`;

}
