$(".product__addToCart").click(function (e) {
    e.preventDefault();
    var formData = $(".single__product-form").serialize();

    $.ajax({
        type: "POST",
        url: "/cart/add.js",
        dataType: "json",
        data: formData,
        success: function (data) {
            console.log(data)
            openCart();
            render();
        },
        error: function (error) {
            console.log(error)
        }
    })

})



function render() {

    fetch("?section_id=cart")
        .then(res => res.text())
        .then(data => {
            var cart__html = $(data);

            var replaceHtml = $(".right-ch-sideBar", cart__html);
            $(".right-ch-sideBar").replaceWith(replaceHtml)
        })
    fetch("?section_id=main-header")
        .then(res => res.text())
        .then(data => {
            var cart__html = $(data);

            var replaceHtml = $(".cart__count", cart__html);
            $(".cart__count").replaceWith(replaceHtml)
        })

}
// render()


function removeCartItem(event, value) {
    event.preventDefault();
var data_line= $(value).attr("data-line");
var data={
    "line":data_line,
    "quantity":0
}

$.ajax({
    type:"POST",
    url:"/cart/change.js",
    dataType:"json",
    data:data,
    success:function(data){
        render();
    },
    error:function(e){
        console.log("Error from remove" + e);
    }
})


}




function increment(el) {
    console.log(el);
    
    var input = el.previousElementSibling;
    console.log(input);
    var value = parseInt(input.value);
    value = isNaN(value) ? 0 : value;
    value++;
   
    input.value = value;

    changeQuantity(input)
}

function decrement(el) {
    var input = el.nextElementSibling;
    var value = parseInt(input.value);
    if (value > 0) {
        value = isNaN(value) ? 0 : value;
        value--;
        input.value = value;
        
        changeQuantity(input)
    }
}

function changeQuantity(input) {

    var quantity = $(input).val();

    var data_line = $(input).attr("data-line");
    var data = {
        "line": data_line,
        "quantity": quantity
    };
    $.ajax({
        type: "POST",
        url: "/cart/change.js",
        dataType: "json",
        data: data,
        success: function (data) {
            console.log(data);
            render();
        },
        error: function (err) {
            console.log("Error from quantity update")
        }
    })


}