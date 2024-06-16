const button=document.getElementById("search-btn");
const input=document.getElementById("search");
const city=document.getElementById("City-name");
const time=document.getElementById("time");
const temp=document.getElementById("temp");


async function getData(cityName){
    const promise=await fetch(`http://api.weatherapi.com/v1/current.json?key=6a6de6665ec74483b95210003241606&q=${cityName}&aqi=no`)
 return await promise.json();
}


button.addEventListener("click",async()=>{
    const val=input.value;
     const result=await getData(val);
    city.innerText=`${result.location.name},${result.location.region},${result.location.country}`;
    time.innerText=result.location.localtime;
    temp.innerText=result.current.temp_c;


});  