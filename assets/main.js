function updateCollection() {
    var seach__query = $(".filter__form").serialize();
    sectionUpdate(seach__query)
}


function sectionUpdate(query) {
    fetch("?section_id=main-collection&" + query)
        .then(res => res.text())
        .then(data => {
            var data_html = $(data);
            console.log(data_html);
            var coll__card = $("#collection__product-grid", data_html);
            $("#collection__product-grid").replaceWith(coll__card);
        })
}


$(".filter__form input[type=checkbox], .filter__form input[type=number] ").on("change", function () {
    updateCollection()
})


// load more collection js

var productOnPage = $("#collection__product-grid");
var nextUrl = productOnPage.attr("data-next-url");
$(".loadMore").click(function (e) {
    $("#loadMore__wrap").hide();
    $.ajax({
        url: nextUrl,
        method: "GET",
        dataType: "html",
        success: function (nextPage) {
            var newProduct = $(nextPage).find("#collection__product-grid");
            productOnPage.append(newProduct.html());
            var newUrl=newProduct.attr("data-next-url");
            console.log(newUrl)
            nextUrl=newUrl;
            if(newUrl){
            $("#loadMore__wrap").show();
            }
            
        }
       
    })
})


// sort by collection 
Shopify.queryParams={};
let keyValue;
let queries= location.search.substr(1).split('&');
if(location.search.length){
  for(let i=0; i < queries.length;i++){
    keyValue= queries[i].split('=');
    if (keyValue.length > 1) {
      Shopify.queryParams[decodeURIComponent(keyValue[0])]= decodeURIComponent(keyValue[1]);
    }
  }
}
let selected= document.getElementById("defualt__sort")
selected.addEventListener('change',function(e){
  let value= e.currentTarget.value;
  Shopify.queryParams.sort_by = value;
 location.search= new URLSearchParams(Shopify.queryParams).toString()
});






// price range 

const rangeInput = document.querySelectorAll(".range-input input"),
    priceInput = document.querySelectorAll(".price-input input"),
    range = document.querySelector(".slider .progress");
let priceGap = 1000;

priceInput.forEach(input =>{
    input.addEventListener("input", e =>{
        let minPrice = parseInt(priceInput[0].value),
        maxPrice = parseInt(priceInput[1].value);

        if((maxPrice - minPrice >= priceGap) && maxPrice <= rangeInput[1].max){
            if(e.target.className === "input-min"){
                rangeInput[0].value = minPrice;
                range.style.left = ((minPrice / rangeInput[0].max) * 100) + "%";
            }else{
                rangeInput[1].value = maxPrice;
                range.style.right = 100 - (maxPrice / rangeInput[1].max) * 100 + "%";
            }
        }
    });
});

rangeInput.forEach(input => {
    input.addEventListener("input", e => {
        let minVal = parseInt(rangeInput[0].value),
            maxVal = parseInt(rangeInput[1].value);

            var test=maxVal - minVal
      
        if ((maxVal - minVal) < priceGap) {
            console.log("value price Gap 1000 nuche.. " + test);
            if (e.target.className === "range-min") {
                console.log("class name range-min.. ");
                rangeInput[0].value = maxVal - priceGap
            } else {
                rangeInput[1].value = minVal + priceGap;
            }
        } else {
            priceInput[0].value = minVal;
            priceInput[1].value = maxVal;
            range.style.left = ((minVal / rangeInput[0].max) * 100) + "%";
            range.style.right = 100 - (maxVal / rangeInput[1].max) * 100 + "%";
        }
    });
});
