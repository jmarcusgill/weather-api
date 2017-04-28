$(document).ready(function(){

  const apiKey = ""
  let zipCode = 77346;

  $("#sbmtBTN").on("click", (e) => {
    loadZip().then((results) =>{
      console.log("data", results.city);
    })
  })

  const loadWeather = () => {
    return new Promise((resolve, reject) =>{
      $.ajax(`http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID=${apiKey}`)
      .done((data) => resolve(data))
      .fail((error) => reject(error));
    });
  };

  const loadZip = () => {
    return new Promise((resolve, reject) =>{
      $.ajax(`http://api.openweathermap.org/data/2.5/forecast/daily?zip=${zipCode},us&units=imperial&APPID=${apiKey}`)
      .done((data2) => resolve(data2))
      .fail((error2) => reject(error2));
    });
  };


























}); //closes doc.ready