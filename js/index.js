$(function () {
    let st;
    $.ajax({
        url: 'https://www.toutiao.com/stream/widget/local_weather/data/?city=太原',
        dataType: 'jsonp',
        success: function (obj) {
            console.log(obj);
            st = obj.data.weather;
            console.log(st)
            $(".city").html(st.city_name);
            $(".temperaturess").html(st.current_temperature)
            $(".txt-weather").html(st.dat_condition)
            $(".txtss").html(st.wind_direction);
            $(".txts").html(st.wind_level);
            // $(".temperatures").html(st.dat_high_temperature);
            // $(".temperaturesss").html(st.dat_low_temperature);
            // $(".weater").html(st.dat_condition)
        //     let str1 = `
        //     <div class="item">
        //     <div class="top">
        //         <p class="date">今天</p>
        //         <p class="temperature">
        //             <span class="temperatures">${st.dat_high_temperature}</span>/<span class="temperaturesss">${st.dat_low_temperature}</span>°
        //         </p>
        //     </div>
        //     <div class="buttom">
        //         <p class="weater">${st.dat_condition}</p>
        //         <img src="img/${st.dat_weather_icon_id}.png" alt="" class="logo">
        //     </div>
        // </div>
        // <div class="item">
        //     <div class="top">
        //         <p class="date">明天</p>
        //         <p class="temperature">
        //             <span class="temperatures">${st.tomorrow_high_temperature}</span>/<span class="temperaturesss">${st.tomorrow_low_temperature}</span>°
        //         </p>
        //     </div>
        //     <div class="buttom">
        //         <p class="weater">${st.tomorrow_condition}</p>
        //         <img src="img/${st.tomorrow_weather_icon_id}.png" alt="" class="logo">
        //     </div>
        // </div>
        // //     `
        // //    /* $(".sec-tomorrow").html(function (index,str) {
        // //         return str=str1+str;
        // //     })*/
            $(".sec-tomorrow").html(`
            <div class="item">
            <div class="top">
                <p class="date">今天</p>
                <p class="temperature">
                    <span class="temperatures">${st.dat_high_temperature}</span>/<span class="temperaturesss">${st.dat_low_temperature}</span>°
                </p>
            </div>
            <div class="buttom">
                <p class="weater">${st.dat_condition}</p>
                <img src="img/${st.dat_weather_icon_id}.png" alt="" class="logo">
            </div>
        </div>
        <div class="item">
            <div class="top">
                <p class="date">明天</p>
                <p class="temperature">
                    <span class="temperatures">${st.tomorrow_high_temperature}</span>/<span class="temperaturesss">${st.tomorrow_low_temperature}</span>°
                </p>
            </div>
            <div class="buttom">
                <p class="weater">${st.tomorrow_condition}</p>
                <img src="img/${st.tomorrow_weather_icon_id}.png" alt="" class="logo">
            </div>
        </div>
            `);
            st.hourly_forecast.forEach(function (ele) {
                let str=`<li class="items">
                    <p class="txt-time">${ele.hour}:00</p>
                    <img src="img/${ele.weather_icon_id}.png" alt="" class="icon">
                    <p class="txt-degree">
                        <span class="txt-degrees">${ele.temperature}</span>°
                    </p>
                </li>`;
                // console.log(str);
                $(".li-hours").append(str)
            })
            //初始化清空
            $(".li-days").empty();
            st.forecast_list.forEach(function (ele) {
                let jiequ=ele.date;
                let jieq=jiequ.slice(5);
                // console.log(jiequ)
                // console.log(jiequ.slice(5));
                let str=` <li class="itemss">
                <p class="day">昨天</p>
                <p class="date">${jieq}</p>
                <div class="ct-daytime">
                    <p class="weather">${ele.condition}</p>
                    <img src="img/${ele.weather_icon_id}.png" alt="" class="icon">
                </div>
                <div class="ct-night">
                    <img src="img/${ele.weather_icon_id}.png" alt="" class="icon">
                    <p class="weathers">${ele.condition}</p>
                </div>
                <p class="wind">${ele.wind_direction}</p>
                <p class="wind">${ele.wind_level}</p>
            </li> `
                $(".li-days").append(str)
            })

            }

    })
})