
function SoniStock_audio(symbol){

        var callback = function(data) {
            var opening = data.query.results.quote["Open"];
            var last_trade = data.query.results.quote["LastTradePriceOnly"];
            Sonifizer_array([opening, last_trade], Sonifizer_Play)            
        };
        var url = "http://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20yahoo.finance.quotes%20where%20symbol%20in%20(%22"+symbol+"%22)%0A%09%09&env=http%3A%2F%2Fdatatables.org%2Falltables.env&format=json"
        $.getJSON(url, callback);
}

function submit_stock_audio(e){
    e.preventDefault();
    var stock_qoute = $('#stock-input').val()
    if (stock_qoute.length>0){
        SoniStock_audio(stock_qoute, Sonifizer_Play);
    }
}

$(function(){
    $('#stock-play-button').on('click', submit_stock_audio)
});

