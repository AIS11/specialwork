async function trees(){

    try{
        let sam = await axios.get('https://tbhpwebdevapi.azurewebsites.net/api/Bonsai')

        document.getElementById("title").innerHTML = sam.data[12].productTitle
        document.getElementById("price").innerHTML = "Price: N" + sam.data[12].productPrice;
        document.getElementById("description").innerHTML = sam.data[12].productDescription;
        document.getElementById("image").src = "https://project1-bonsai-jacobtimms.vercel.app/" + sam.data[12].productImage;

        document.getElementById("titlea").innerHTML = sam.data[13].productTitle
        document.getElementById("pricea").innerHTML = "Price: N" + sam.data[13].productPrice;
        document.getElementById("descriptiona").innerHTML = sam.data[13].productDescription;
        document.getElementById("imagea").src = "https://project1-bonsai-jacobtimms.vercel.app/" + sam.data[13].productImage;

        document.getElementById("titleb").innerHTML = sam.data[14].productTitle
        document.getElementById("priceb").innerHTML = "Price: N" + sam.data[14].productPrice;
        document.getElementById("descriptionb").innerHTML = sam.data[14].productDescription;
        document.getElementById("imageb").src = "https://project1-bonsai-jacobtimms.vercel.app/" + sam.data[14].productImage;

        document.getElementById("titlec").innerHTML = sam.data[15].productTitle
        document.getElementById("pricec").innerHTML = "Price: N" + sam.data[15].productPrice;
        document.getElementById("descriptionc").innerHTML = sam.data[15].productDescription;
        document.getElementById("imagec").src = "https://project1-bonsai-jacobtimms.vercel.app/" + sam.data[15].productImage;

        document.getElementById("titled").innerHTML = sam.data[16].productTitle
        document.getElementById("priced").innerHTML = "Price: N" + sam.data[16].productPrice;
        document.getElementById("descriptiond").innerHTML = sam.data[16].productDescription;
        document.getElementById("imaged").src = "https://project1-bonsai-jacobtimms.vercel.app/" + sam.data[16].productImage;

        document.getElementById("titlee").innerHTML = sam.data[17].productTitle
        document.getElementById("pricee").innerHTML = "Price: N" + sam.data[17].productPrice;
        document.getElementById("descriptione").innerHTML = sam.data[17].productDescription;
        document.getElementById("imagee").src = "https://project1-bonsai-jacobtimms.vercel.app/" + sam.data[17].productImage;

        document.getElementById("titlef").innerHTML = sam.data[9].productTitle
        document.getElementById("pricef").innerHTML = "Price: N" + sam.data[9].productPrice;
        document.getElementById("descriptionf").innerHTML = sam.data[9].productDescription;
        document.getElementById("imagef").src = "https://project1-bonsai-jacobtimms.vercel.app/" + sam.data[9].productImage;

        document.getElementById("titleg").innerHTML = sam.data[8].productTitle
        document.getElementById("priceg").innerHTML = "Price: N" + sam.data[8].productPrice;
        document.getElementById("descriptiong").innerHTML = sam.data[8].productDescription;
        document.getElementById("imageg").src = "https://project1-bonsai-jacobtimms.vercel.app/" + sam.data[8].productImage;

        document.getElementById("titleh").innerHTML = sam.data[7].productTitle
        document.getElementById("priceh").innerHTML = "Price: N" + sam.data[7].productPrice;
        document.getElementById("descriptionh").innerHTML = sam.data[7].productDescription;
        document.getElementById("imageh").src = "https://project1-bonsai-jacobtimms.vercel.app/" + sam.data[7].productImage;

        document.getElementById("titlei").innerHTML = sam.data[6].productTitle
        document.getElementById("pricei").innerHTML = "Price: N" + sam.data[6].productPrice;
        document.getElementById("descriptioni").innerHTML = sam.data[6].productDescription;
        document.getElementById("imagei").src = "https://project1-bonsai-jacobtimms.vercel.app/" + sam.data[6].productImage;

        document.getElementById("titlej").innerHTML = sam.data[5].productTitle
        document.getElementById("pricej").innerHTML = "Price: N" + sam.data[5].productPrice;
        document.getElementById("descriptionj").innerHTML = sam.data[5].productDescription;
        document.getElementById("imagej").src = "https://project1-bonsai-jacobtimms.vercel.app/" + sam.data[5].productImage;

        document.getElementById("titlek").innerHTML = sam.data[4].productTitle
        document.getElementById("pricek").innerHTML = "Price: N" + sam.data[4].productPrice;
        document.getElementById("descriptionk").innerHTML = sam.data[4].productDescription;
        document.getElementById("imagek").src = "https://project1-bonsai-jacobtimms.vercel.app/" + sam.data[4].productImage;

        document.getElementById("titlel").innerHTML = sam.data[3].productTitle
        document.getElementById("pricel").innerHTML = "Price: N" + sam.data[3].productPrice;
        document.getElementById("descriptionl").innerHTML = sam.data[3].productDescription;
        document.getElementById("imagel").src = "https://project1-bonsai-jacobtimms.vercel.app/" + sam.data[3].productImage;

        document.getElementById("titlem").innerHTML = sam.data[2].productTitle
        document.getElementById("pricem").innerHTML = "Price: N" + sam.data[2].productPrice;
        document.getElementById("descriptionm").innerHTML = sam.data[2].productDescription;
        document.getElementById("imagem").src = "https://project1-bonsai-jacobtimms.vercel.app/" + sam.data[2].productImage;

        document.getElementById("titlen").innerHTML = sam.data[1].productTitle
        document.getElementById("pricen").innerHTML = "Price: N" + sam.data[1].productPrice;
        document.getElementById("descriptionn").innerHTML = sam.data[1].productDescription;
        document.getElementById("imagen").src = "https://project1-bonsai-jacobtimms.vercel.app/" + sam.data[1].productImage;

    }
    catch (err){
        console.error(err)
    }
}
trees()


var mybutton = document.getElementById("myBtn");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

















    function adds(){
        var fname = document.getElementById("fname").value
        var email = document.getElementById("email").value
        var adr = document.getElementById("adr").value
        var city = document.getElementById("city").value
        var state = document.getElementById("state").value
        var zip = document.getElementById("fname").value
        var cname = document.getElementById("fname").value
        var ccnum = document.getElementById("ccnum").value
        var expmonth = document.getElementById("expmonth").value
        var expyear = document.getElementById("expyear").value
        var cvv = document.getElementById("cvv").value
    
    
    if ((!fname.match(/^[A-Za-z ]+$/)) || fullname.length > 50) {
        document.getElementById("message").innerHTML = "please enter a valid name"
    }
    else if ((!email.match(/\S+@\S+/))) {
        document.getElementById("message").innerHTML = "please enter a valid email"
    }
    else if (adr.length < 30){
        document.getElementById("message").innerHTML = "name of address can't be more than thirty characters"
    }
    else if (city.length < 20){
        document.getElementById("message").innerHTML = "name of city can't be more than twenty characters"
    }
    else if (state.length < 20){
        document.getElementById("message").innerHTML = "please input a valid state"
    }
    else if (zip.length < 6){
        document.getElementById("message").innerHTML = "zipcode can't be more than six characters"
    }
    else if((!cname.match(/^[A-Za-z ]+$/)) || fullname.length > 50) {
        document.getElementById("message").innerHTML = "please enter a valid card name"
    }
    else if(ccnum.length >16 || ccnum <16){
        document.getElementById("message").innerHTML = "please input a valid card number"
    }
    else if (expmonth.length < 12){
        document.getElementById("message").innerHTML = "please a valid date"
    }
    else if(expyear.length < 4){
        document.getElementById("message").innerHTML = "please input a valid expiry year"
    }
    else if(cvv.length < 3){
        document.getElementById("message").innerHTML = "please input a valid cvv"
    }
    
}
