async function adds(){

    try{
        let res = await axios.get('https://tbhpwebdevapi.azurewebsites.net/api/Bonsai')
    

    document.getElementById("title").innerHTML = res.data[6].productTitle; 
    document.getElementById("price").innerHTML = "Price: N" + res.data[6].productPrice;
    document.getElementById("description").innerHTML = res.data[6].productDescription;
    document.getElementById("image").src = "https://project1-bonsai-jacobtimms.vercel.app/" + res.data[6].productImage;


    document.getElementById("title2").innerHTML = res.data[7].productTitle; 
    document.getElementById("price2").innerHTML = "Price: N" + res.data[7].productPrice;
    document.getElementById("description2").innerHTML = res.data[7].productDescription;
    document.getElementById("image2").src = "https://project1-bonsai-jacobtimms.vercel.app/" + res.data[7].productImage;


    document.getElementById("title3").innerHTML = res.data[8].productTitle; 
    document.getElementById("price3").innerHTML = "Price: N" + res.data[8].productPrice;
    document.getElementById("description3").innerHTML = res.data[8].productDescription;
    document.getElementById("image3").src = "https://project1-bonsai-jacobtimms.vercel.app/" + res.data[8].productImage;
    }
    catch (err){
        console.error(err)
    }

}
adds()

function openNav(){
    document.getElementById("mysidenav").style.width = "300px"
}

function closeNav(){
    document.getElementById("mysidenav").style.width = "0"
    document.getElementById("about").style.width = "0"
}

function order(){
    var order = document.getElementById("order").value
    document.getElementById("order") = window.location.href = "https://mail.google.com/mail/u/0/?tab=om1#inbox"
}