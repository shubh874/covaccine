const request = require("request");
const axios =  require("axios");
const callVaccApi = (pin, date)=>{


    
    let pincode =pin;
    let dateReq = date;
    let url = "https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByPin?pincode="+pincode+"&date="+dateReq;
    
    return axios.get(url, {
        headers: {
            "Accept-Language": "hi_IN",
      
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.93 Safari/537.36",
                   
        }
      })
      .then(function (response) {
        return response.data;
      })
      .catch(function (error) {
        return error.response
        console.log(error);
      })

    
    // var options = { 
    //     url:url,
    //     method:"GET",
        
    //     headers :{
    //         "Accept-Language": "hi_IN",
      
    //         "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.93 Safari/537.36",
    //       }
    //     };
    // request(options,function(err,res,body){
    //     var bodyData = JSON.parse(body)
        
    //    });
    

}

module.exports = callVaccApi;