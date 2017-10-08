$(document).ready(function() {

	$.when(
		$.ajax({'url':'http://apis.is/petrol','type':'GET','dataType':'json','success':function(response){console.log(response); var petrol = response; return petrol; }}),
		$.ajax({'url':'http://apis.is/currency/arion','type':'GET','dataType':'json','success':function(response){console.log(response); var currEntry = response; return currEntry; }})
	)
	.done(function(petrol, currEntry) {
		var currency = currEntry[0]['results'];
		console.log(currEntry);
		var gases = petrol[0]['results'];
		get_started(currency, gases);
	})
	.fail(function() {
	 	console.log('Something went wrong. I am sorry');
	});

	var tableid = document.getElementById('myTable');
	var gas = [];
	var curr = [];

	function get_started(para, para2) {
		for (var i = 0; i < para2.length; i++) {
			gas.push([para2[i]['company'],para2[i]['name'],para2[i]['bensin95']]);
		}
		for (var i = 1; i < (para.length - 1); i++) {
			curr.push(para[i]['value']);
		}
		print_table_contents();
	}

	function print_table_contents() {
		var tbodyid = document.createElement('tbody');
		for (var i = 0; i < gas.length; i++) {
			var trid = document.createElement('tr');
				var tdid = document.createElement('td');
					var temp = document.createTextNode(gas[i][0]);
				tdid.appendChild(temp);
				var tdid2 = document.createElement('td');
					var temp2 = document.createTextNode(gas[i][1]);
				tdid2.appendChild(temp2);
				var tdid3 = document.createElement('td');
					var temp3 = document.createTextNode((gas[i][2]).toFixed(2));
				tdid3.appendChild(temp3);
				var tdid4 = document.createElement('td');
					var temp4 = document.createTextNode((gas[i][2]/curr[0]).toFixed(2));
				tdid4.appendChild(temp4);
				var tdid5 = document.createElement('td');
					var temp5 = document.createTextNode((gas[i][2]/curr[1]).toFixed(2));
				tdid5.appendChild(temp5);
				var tdid6 = document.createElement('td');
					var temp6 = document.createTextNode((gas[i][2]/curr[2]).toFixed(2));
				tdid6.appendChild(temp6);
				var tdid7 = document.createElement('td');
					var temp7 = document.createTextNode((gas[i][2]/curr[3]).toFixed(2));
				tdid7.appendChild(temp7);
				var tdid8 = document.createElement('td');
					var temp8 = document.createTextNode((gas[i][2]/curr[4]).toFixed(2));
				tdid8.appendChild(temp8);
				var tdid9 = document.createElement('td');
					var temp9 = document.createTextNode((gas[i][2]/curr[5]).toFixed(2));
				tdid9.appendChild(temp9);
				var tdid10 = document.createElement('td');
					var temp10 = document.createTextNode((gas[i][2]/curr[6]).toFixed(2));
				tdid10.appendChild(temp10);
				var tdid11 = document.createElement('td');
					var temp11 = document.createTextNode((gas[i][2]/curr[7]).toFixed(2));
				tdid11.appendChild(temp11);
				var tdid12 = document.createElement('td');
					var temp12 = document.createTextNode((gas[i][2]/curr[8]).toFixed(2));
				tdid12.appendChild(temp12);
			trid.appendChild(tdid);
			trid.appendChild(tdid2);
			trid.appendChild(tdid3);
			trid.appendChild(tdid4);
			trid.appendChild(tdid5);
			trid.appendChild(tdid6);
			trid.appendChild(tdid7);
			trid.appendChild(tdid8);
			trid.appendChild(tdid9);
			trid.appendChild(tdid10);
			trid.appendChild(tdid11);
			trid.appendChild(tdid12);
			tbodyid.appendChild(trid);
			tableid.appendChild(tbodyid);
		}
		$("#myTable").tablesorter();
	}
});