$('#myForm').submit(async function (e) { 
    e.preventDefault();
    let cityName = $('#nameCity').val();
    console.log(cityName);
    let data = await $.get(`https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&APPID=620b451e49e05f5d7a18ef4edc963223&units=metric`)
    console.log(data);
    document.querySelector('.row').innerHTML = '';
    $('.row').append(`
    <h2>Прогноз на 24 часа</h2>
    <div class="card col-4" style="width: 18rem;">
    <p>${data.list[0].dt_txt}</p>
  <img src=" https://openweathermap.org/img/wn/${data.list[0].weather[0].icon}@2x.png" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${data.city.name}(${data.city.country}) ${data.list[0].main.temp}&deg; </h5>
    <h5 class="card-title">${data.list[0].weather[0].description}</h5>
    <h5 class="card-title">Ветер: ${data.list[0].wind.speed}</h5>
  </div>
</div>
    <div class="card col-4" style="width: 18rem;">
    <p>${data.list[1].dt_txt}</p>
  <img src=" https://openweathermap.org/img/wn/${data.list[1].weather[0].icon}@2x.png" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title"> ${data.city.name}(${data.city.country}) ${data.list[1].main.temp}&deg; </h5>
    <h5 class="card-title">${data.list[1].weather[0].description}</h5>
    <h5 class="card-title">Ветер: ${data.list[1].wind.speed}</h5>
  </div>
</div>
    <div class="card col-4" style="width: 18rem;">
    <p>${data.list[2].dt_txt}</p>
  <img src=" https://openweathermap.org/img/wn/${data.list[2].weather[0].icon}@2x.png" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${data.city.name}(${data.city.country}) ${data.list[2].main.temp}&deg; </h5>
    <h5 class="card-title">${data.list[2].weather[0].description}</h5>
    <h5 class="card-title">Ветер:${data.list[2].wind.speed}</h5>
  </div>
</div>
    <div class="card col-4" style="width: 18rem;">
    <p>${data.list[3].dt_txt}</p>
  <img src=" https://openweathermap.org/img/wn/${data.list[3].weather[0].icon}@2x.png" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${data.city.name}(${data.city.country}) ${data.list[3].main.temp}&deg; </h5>
    <h5 class="card-title">${data.list[3].weather[0].description}</h5>
    <h5 class="card-title">Ветер: ${data.list[3].wind.speed}</h5>
  </div>
</div>
    <div class="card col-4" style="width: 18rem;">
    <p>${data.list[4].dt_txt}</p>
  <img src=" https://openweathermap.org/img/wn/${data.list[4].weather[0].icon}@2x.png" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${data.city.name}(${data.city.country}) ${data.list[4].main.temp}&deg; </h5>
    <h5 class="card-title">${data.list[4].weather[0].description}</h5>
    <h5 class="card-title">Ветер: ${data.list[4].wind.speed}</h5>
  </div>
</div>
    <div class="card col-4" style="width: 18rem;">
    <p>${data.list[5].dt_txt}</p>
  <img src=" https://openweathermap.org/img/wn/${data.list[5].weather[0].icon}@2x.png" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${data.city.name}(${data.city.country}) ${data.list[5].main.temp}&deg; </h5>
    <h5 class="card-title">${data.list[5].weather[0].description}</h5>
    <h5 class="card-title">Ветер: ${data.list[5].wind.speed}</h5>
  </div>
</div>
    <div class="card col-4" style="width: 18rem;">
    <p>${data.list[6].dt_txt}</p>
  <img src=" https://openweathermap.org/img/wn/${data.list[6].weather[0].icon}@2x.png" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${data.city.name}(${data.city.country}) ${data.list[6].main.temp}&deg; </h5>
    <h5 class="card-title">${data.list[6].weather[0].description}</h5>
    <h5 class="card-title">Ветер: ${data.list[6].wind.speed}</h5>
  </div>
</div>
    `)
});
