
// JSON 
var productslist = [];

function api() {
  fetch("katalog.json")
    .then((res) => res.json())
    .then((data) => {
      productslist = data;
      list(productslist, 0);

    });
}



function list(productslist, index) {
  let tabLeftLogo = document.getElementById("tab-bar");
  let tabProductContent = document.getElementById("tab-bar-content");
  tabLeftLogo.innerHTML = "";



  if (productslist[index].products.length > 0) {
    tabProductContent.innerHTML += `
    <img src="${productslist[0].brandImage}" class="content-img">
    `;
    productslist[index].products.forEach((element) => {

      tabProductContent.innerHTML += `
  
      <div class=" flex-card lazy">
          <img src="${element.image}" alt="">
        <div class="card-body">
          <p class="product-name">${element.name}</p>
          <p class="price">${element.price} TL</p>
          <a  href="#popup1"> <button class="shop-btn">Sepete Ekle</button></a>
          <div id="popup1" class="overlay">
          <div class="popup">
            <a class="close" href="#">&times;</a>
            <div class="content">
                    <i class="fa-solid fa-check popup-icon"></i>
              <p>Ürün sepete eklendi</p>  
                    <a href="" ><p class="content-link" >Sepete Git</p></a>
            </div>
          </div>
        </div>
       </div>
    </div>

`;

    });

  }


  productslist.forEach(element => {

    tabLeftLogo.innerHTML += `
    <div  style="display:flex;">
          <img src="${element.brandLogo}" class="tablinks"  onclick="CategoryShow(this)" data-name="${element.brandName}"/>    
        <div class="${element.brandName === "NIKE" ? "ucgen" : ""}" ></div>
</div>
          <div class="tablinks-name">
          <p  onclick="CategoryShow(this)" data-name="${element.brandName}">${element.brandName}</p>
          </div>
     `;


  });

}


function CategoryShow(t) {
  var tabLeftLogo = document.getElementById("tab-bar");
  var tabProductContent = document.getElementById("tab-bar-content");
  tabLeftLogo.innerHTML = "";
  tabProductContent.innerHTML = "";


  var name = $(t).data('name');

  productslist.forEach((element) => {

    if (element.brandName === name) {

      tabProductContent.innerHTML += `
      <img src="${element.brandImage}" class="content-img">
  `;


      element.products.forEach(products => {


        tabProductContent.innerHTML += `
        
            <div class="flex-card lazy">
                <img src="${products.image}" alt="">
              <div class="card-body">
                <p class="product-name">${products.name}</p>
                <p class="price">${products.price} TL</p>
                <a  href="#popup1">  <button class="shop-btn">Sepete Ekle</button></a>
                <div id="popup1" class="overlay">
                <div class="popup">
                  <a class="close" href="#">&times;</a>
                  <div class="content">
                          <i class="fa-solid fa-check popup-icon"></i>
                    <p>Ürün sepete eklendi</p>  
                          <a href="" ><p class="content-link" >Sepete Git</p></a>
                  </div>
                </div>
              </div>
             </div>
          </div>
      
    `;

      });
    }

    tabLeftLogo.innerHTML += `

       <div  style="display:flex;">
        <img src="${element.brandLogo}" class="tablinks" onclick="CategoryShow(this)" data-name="${element.brandName}"/> 
        <div class="${element.brandName === name ? "ucgen" : ""}" ></div>
        </div>
        <p class="tablinks-name"  onclick="CategoryShow(this)" data-name="${element.brandName}">${element.brandName}</p>

         `;
  });
}



api();