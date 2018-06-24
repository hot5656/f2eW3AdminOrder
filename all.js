


// get parameter from href
// var mytext ;
// mytext = getUrlParam('telphone','Empty');
// console.log(mytext);
// mytext = getUrlParam('mail','Empty');
// console.log(mytext);

window.onload = function() {
	// get current html's file name 
	var pathFileArrary = window.location.pathname.split('/') ;
	name = pathFileArrary[pathFileArrary.length-1] ;
	
	switch (name) {
		case "index.html" :
      // google load chars
      google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawChart);
			break;
		case "orders.html" :
			// var show = document.getElementById("product");
			// if (show) {
			// 	show.innetHTML = getCookie("product");
			// }
			break;
		case "product.html" :
			break;
		default :
			break
	}
}

// triger orders.html + parameter 
function pageOrders(event) {
	var telphoneNo  = 0;
	event.target.href = "orders.html?person=robert&telphone=" + telphoneNo+"&mail=robert@www.yahoo.com.tw" ;
} 

// html add parameter format : ?content=aaa&person=aa&telphone=ab&mail=ac
// get parameter from href --> if not exist give default value
// var mytext = getUrlParam('text','Empty');
function getUrlParam(parameter, defaultvalue){
    var urlparameter = defaultvalue;
    if(window.location.href.indexOf(parameter) > -1){
        urlparameter = getUrlVars()[parameter];
        }
    return urlparameter;
}
// get parameter from href 
// var mytext = getUrlVars()["text"];
function getUrlVars() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
        vars[key] = value;
    });
    return vars;
}

// google draw function
function drawChart() {
    var data = google.visualization.arrayToDataTable([
      ['Year', 'Sales', 'Expenses'],
      ['2004',  1000,      400],
      ['2005',  1170,      460],
      ['2006',  660,       1120],
      ['2007',  1030,      540]
    ]);

    var options = {
      title: 'Company Performance',
      curveType: 'none',
      legend: { position: 'bottom' }
    };

    var chart = new google.visualization.LineChart(document.getElementById('curve_chart'));

    chart.draw(data, options);
}



