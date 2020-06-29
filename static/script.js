
var btn = document.getElementsByClassName('.view-images');
$('.view-images').click(function(event){
    event.preventDefault()

    $('.result').empty()

    var search = $("#text-input").val();

    var url = "https://api.unsplash.com/search/photos?query="+search+"&client_id=64A_BbD18jx8NolPOLrBIlJEdmDD5TXw-5oDOqkq5Vg";

    $.ajax({
        method: 'GET',
        url:url,
        success:function(data){
            console.log(data);

            data.results.forEach(photo => {
                
                $('.result').append(`
                
                <img src="${photo.urls.regular}" />

                `)
            });
        }
    })
});