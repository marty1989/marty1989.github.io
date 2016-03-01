/*Jordan statistics begin here*/
function drawJordanChampionships() {
	var data = google.visualization.arrayToDataTable([
		['Teams', 'Times Won'],
		['Player\'s Team',     6],
		['Other Teams',      9]
	]);
	
	var options = {
		title: 'Michael Jordan\'s Championships vs. Years Played',
		backgroundColor:'transparent',
		titleTextStyle:{color: '#990000', fontName: 'Arial', fontSize: 15, bold:true, italic:false},
		is3D: true,
		legend:{textStyle:{color: '#990000', fontName: 'Arial', fontSize: 10, bold:true, italic:false}},
		pieSliceText: 'percentage',
		slices: {  1: {offset: 0.2},
			2: {offset: 0.2},
		},
	};
	
	var chart = new google.visualization.PieChart(document.getElementById('jordanChampionships'));
	chart.draw(data, options);
}

function drawJordanChampionshipsAppearances() {
	var data = google.visualization.arrayToDataTable([
		['Teams', 'Times Won'],
		['Player\'s Team',     6],
		['Other Teams',      0]
	]);
	
	var options = {
		title: 'Michael Jordan\'s Championships vs. NBA Finals Appearances',
		backgroundColor:'transparent',
		titleTextStyle:{color: '#990000', fontName: 'Arial', fontSize: 15, bold:true, italic:false},
		is3D: true,
		legend:{textStyle:{color: '#990000', fontName: 'Arial', fontSize: 10, bold:true, italic:false}},
		pieSliceText: 'percentage',
		slices: {  1: {offset: 0.2},
			2: {offset: 0.2},
		},
	};
	var chart = new google.visualization.PieChart(document.getElementById('jordanChampionshipsAppearances'));
	chart.draw(data, options);
}
function drawJordanFinalsMVPAwards() {
	var data = google.visualization.arrayToDataTable([
		['Player', 'Times Won'],
		['Player',     6],
		['Other Player\'s',      0]
	]);
	
	var options = {
		title: 'Michael Jordan\'s Playoff M.V.P Awards vs. NBA Finals Appearances',
		backgroundColor:'transparent',
		titleTextStyle:{color: '#990000', fontName: 'Arial', fontSize: 15, bold:true, italic:false},
		is3D: true,
		legend:{textStyle:{color: '#990000', fontName: 'Arial', fontSize: 10, bold:true, italic:false}},
		pieSliceText: 'percentage',
		slices: {  1: {offset: 0.2},
			2: {offset: 0.2},
		},
	};
	
	var chart = new google.visualization.PieChart(document.getElementById('jordanFinalsMVPAwards'));
	chart.draw(data, options);
}
function drawJordanMVPAwards() {
	var data = google.visualization.arrayToDataTable([
		['Player', 'Times Won'],
		['Player',     5],
		['Other Player\'s',      10]
	]);
	
	var options = {
		title: 'Michael Jordan\'s Regular Season M.V.P Awards vs. Years Played',
		backgroundColor:'transparent',
		titleTextStyle:{color: '#990000', fontName: 'Arial', fontSize: 15, bold:true, italic:false},
		is3D: true,
		legend:{textStyle:{color: '#990000', fontName: 'Arial', fontSize: 10, bold:true, italic:false}},
		pieSliceText: 'percentage',
		slices: {  1: {offset: 0.2},
			2: {offset: 0.2},
		},
	};
	
	var chart = new google.visualization.PieChart(document.getElementById('jordanMVPAwards'));
	chart.draw(data, options);
}
function drawJordanDefensiveAwards() {
	var data = google.visualization.arrayToDataTable([
		['Player', 'Times Won'],
		['Player',     1],
		['Other Player\'s',      14]
	]);
	
	var options = {
		title: 'Michael Jordan\'s Defensive Player of the Year Awards vs. Years Played',
		backgroundColor:'transparent',
		titleTextStyle:{color: '#990000', fontName: 'Arial', fontSize: 15, bold:true, italic:false},
		is3D: true,
		legend:{textStyle:{color: '#990000', fontName: 'Arial', fontSize: 10, bold:true, italic:false}},
		pieSliceText: 'percentage',
		slices: {  1: {offset: 0.2},
			2: {offset: 0.2},
		},
	};
	
	var chart = new google.visualization.PieChart(document.getElementById('jordanDefensiveAwards'));
	chart.draw(data, options);
}
function drawJordanScoringTitles() {
	var data = google.visualization.arrayToDataTable([
		['Player', 'Times Won'],
		['Player',     10],
		['Other Player\'s',      5]
	]);
	
	var options = {
		title: 'Michael Jordan\'s Scoring Titles vs. Years Played',
		backgroundColor:'transparent',
		titleTextStyle:{color: '#990000', fontName: 'Arial', fontSize: 15, bold:true, italic:false},
		is3D: true,
		legend:{textStyle:{color: '#990000', fontName: 'Arial', fontSize: 10, bold:true, italic:false}},
		pieSliceText: 'percentage',
		slices: {  1: {offset: 0.2},
			2: {offset: 0.2},
		},
	};
	
	var chart = new google.visualization.PieChart(document.getElementById('jordanScoringTitles'));
	chart.draw(data, options);
}
function drawJordanStealsTitles() {
	var data = google.visualization.arrayToDataTable([
		['Player', 'Times Won'],
		['Player',     3],
		['Other Player\'s',      12]
	]);
	
	var options = {
		title: 'Times Michael Jordan\'s leader in Steals vs. Years Played',
		backgroundColor:'transparent',
		titleTextStyle:{color: '#990000', fontName: 'Arial', fontSize: 15, bold:true, italic:false},
		is3D: true,
		legend:{textStyle:{color: '#990000', fontName: 'Arial', fontSize: 10, bold:true, italic:false}},
		pieSliceText: 'percentage',
		slices: {  1: {offset: 0.2},
			2: {offset: 0.2},
		},
	};
	
	var chart = new google.visualization.PieChart(document.getElementById('jordanStealsTitles'));
	chart.draw(data, options);
}
function drawJordanFirstTeam() {
	var data = google.visualization.arrayToDataTable([
		['Player', 'Times Won'],
		['Selected',     10],
		['Not Selected',      5]
	]);
	
	var options = {
		title: 'Michael Jordan\'s times selected as a NBA First Team Player vs. Years Played',
		backgroundColor:'transparent',
		titleTextStyle:{color: '#990000', fontName: 'Arial', fontSize: 15, bold:true, italic:false},
		is3D: true,
		legend:{textStyle:{color: '#990000', fontName: 'Arial', fontSize: 10, bold:true, italic:false}},
		pieSliceText: 'percentage',
		slices: {  1: {offset: 0.2},
			2: {offset: 0.2},
		},
	};
	
	var chart = new google.visualization.PieChart(document.getElementById('jordanFirstTeam'));
	chart.draw(data, options);
}

function drawJordanSecondTeam() {
	var data = google.visualization.arrayToDataTable([
		['Player', 'Times Won'],
		['Selected',     1],
		['Not Selected',     14]
	]);
	
	var options = {
		title: 'Michael Jordan\'s times selected as a NBA Second Team Player vs. Years Played',
		backgroundColor:'transparent',
		titleTextStyle:{color: '#990000', fontName: 'Arial', fontSize: 15, bold:true, italic:false},
		is3D: true,
		legend:{textStyle:{color: '#990000', fontName: 'Arial', fontSize: 10, bold:true, italic:false}},
		pieSliceText: 'percentage',
		slices: {  1: {offset: 0.2},
			2: {offset: 0.2},
		},
	};
	
	var chart = new google.visualization.PieChart(document.getElementById('jordanSecondTeam'));
	chart.draw(data, options);
}

function drawJordanDefensiveFirstTeam() {
	var data = google.visualization.arrayToDataTable([
		['Player', 'Times Won'],
		['Selected',     9],
		['Not Selected',     6]
	]);
	
	var options = {
		title: 'Michael Jordan\'s times selected as an All-Defensive First Team Player vs. Years Played',
		backgroundColor:'transparent',
		titleTextStyle:{color: '#990000', fontName: 'Arial', fontSize: 15, bold:true, italic:false},
		is3D: true,
		legend:{textStyle:{color: '#990000', fontName: 'Arial', fontSize: 10, bold:true, italic:false}},
		pieSliceText: 'percentage',
		slices: {  1: {offset: 0.2},
			2: {offset: 0.2},
		},
	};
	
	var chart = new google.visualization.PieChart(document.getElementById('jordanDefensiveFirstTeam'));
	chart.draw(data, options);
}

function drawJordanAllStar() {
	var data = google.visualization.arrayToDataTable([
		['Player', 'Times Won'],
		['Selected',     14],
		['Not Selected',     1]
	]);
	// Did not play in one
	var options = {
		title: 'Michael Jordan\'s times selected as an All-Star* vs. Years Played',
		backgroundColor:'transparent',
		titleTextStyle:{color: '#990000', fontName: 'Arial', fontSize: 15, bold:true, italic:false},
		is3D: true,
		legend:{textStyle:{color: '#990000', fontName: 'Arial', fontSize: 10, bold:true, italic:false}},
		pieSliceText: 'percentage',
		slices: {  1: {offset: 0.2},
			2: {offset: 0.2},
		},
	};
	var chart = new google.visualization.PieChart(document.getElementById('jordanAllStar'));
	chart.draw(data, options);
}

function drawJordanAllStarMVP() {
	var data = google.visualization.arrayToDataTable([
		['Player', 'Times Won'],
		['Selected',     3],
		['Not Selected',    11]
	]);
	
	var options = {
		title: 'Michael Jordan\'s times selected as All-Star M.V.P vs. Attempts',
		backgroundColor:'transparent',
		titleTextStyle:{color: '#990000', fontName: 'Arial', fontSize: 15, bold:true, italic:false},
		is3D: true,
		legend:{textStyle:{color: '#990000', fontName: 'Arial', fontSize: 10, bold:true, italic:false}},
		pieSliceText: 'percentage',
		slices: {  1: {offset: 0.2},
			2: {offset: 0.2},
		},
	};
	
	var chart = new google.visualization.PieChart(document.getElementById('jordanAllStarMVP'));
	chart.draw(data, options);
}






/*Wilt begins here */
function drawChart5() {
	var data = google.visualization.arrayToDataTable([
		['Teams', 'Times Won'],
		['Player\'s Team',     2],
		['Other Teams',      12]
	]);
	
	var options = {
		title: 'Wilt Chamberlain\'s Championships vs. Years Played',
		backgroundColor:'transparent',
		titleTextStyle:{color: '#990000', fontName: 'Arial', fontSize: 15, bold:true, italic:false},
		is3D: true,
		legend:{textStyle:{color: '#990000', fontName: 'Arial', fontSize: 10, bold:true, italic:false}},
		pieSliceText: 'percentage',
		slices: {  1: {offset: 0.2},
			2: {offset: 0.2},
		},
	};
	
	
	var chart = new google.visualization.PieChart(document.getElementById('piechart_3d2'));
	chart.draw(data, options);
}

function drawChart40() {
	var data = google.visualization.arrayToDataTable([
		['Teams', 'Times Won'],
		['Player\'s Team',     2],
		['Other Teams',      0]
	]);
	
	var options = {
		title: 'Wilt Chamberlain\'s Championships vs. NBA Finals Appearances',
		backgroundColor:'transparent',
		titleTextStyle:{color: '#990000', fontName: 'Arial', fontSize: 15, bold:true, italic:false},
		is3D: true,
		legend:{textStyle:{color: '#990000', fontName: 'Arial', fontSize: 10, bold:true, italic:false}},
		pieSliceText: 'percentage',
		slices: {  1: {offset: 0.2},
			2: {offset: 0.2},
		},
	};
	
	
	var chart = new google.visualization.PieChart(document.getElementById('piechart_3d37'));
	chart.draw(data, options);
}
function drawChart41() {
	var data = google.visualization.arrayToDataTable([
		['Teams', 'Times Won'],
		['Player\'s Team',     1],
		['Other Players',      0]
	]);
	
	var options = {
		title: 'Wilt Chamberlain\'s Finals M.V.P vs. NBA Finals Appearances*',
		backgroundColor:'transparent',
		titleTextStyle:{color: '#990000', fontName: 'Arial', fontSize: 15, bold:true, italic:false},
		is3D: true,
		legend:{textStyle:{color: '#990000', fontName: 'Arial', fontSize: 10, bold:true, italic:false}},
		pieSliceText: 'percentage',
		slices: {  1: {offset: 0.2},
			2: {offset: 0.2},
		},
	};
	
	
	var chart = new google.visualization.PieChart(document.getElementById('piechart_3d38'));
	chart.draw(data, options);
}
function drawChart42() {
	var data = google.visualization.arrayToDataTable([
		['Teams', 'Times Won'],
		['Player\'s Team',     4],
		['Other Players',      10]
	]);
	
	var options = {
		title: 'Wilt Chamberlain\'s Regular Season M.V.P Awards vs. Years Played',
		backgroundColor:'transparent',
		titleTextStyle:{color: '#990000', fontName: 'Arial', fontSize: 15, bold:true, italic:false},
		is3D: true,
		legend:{textStyle:{color: '#990000', fontName: 'Arial', fontSize: 10, bold:true, italic:false}},
		pieSliceText: 'percentage',
		slices: {  1: {offset: 0.2},
			2: {offset: 0.2},
		},
	};
	
	
	var chart = new google.visualization.PieChart(document.getElementById('piechart_3d39'));
	chart.draw(data, options);
}
function drawChart43() {
	var data = google.visualization.arrayToDataTable([
		['Teams', 'Times Won'],
		['Player\'s Team',     7],
		['Other Players',      7]
	]);
	
	var options = {
		title: 'Wilt Chamberlain\'s Scoring Titles vs. Years Played',
		backgroundColor:'transparent',
		titleTextStyle:{color: '#990000', fontName: 'Arial', fontSize: 15, bold:true, italic:false},
		is3D: true,
		legend:{textStyle:{color: '#990000', fontName: 'Arial', fontSize: 10, bold:true, italic:false}},
		pieSliceText: 'percentage',
		slices: {  1: {offset: 0.2},
			2: {offset: 0.2},
		},
	};
	
	
	var chart = new google.visualization.PieChart(document.getElementById('piechart_3d40'));
	chart.draw(data, options);
}
function drawChart44() {
	var data = google.visualization.arrayToDataTable([
		['Teams', 'Times Won'],
		['Player\'s Team',     11],
		['Other Players',      3]
	]);
	
	var options = {
		title: 'Wilt Chamberlain\'s Rebounding Titles vs. Years Played',
		backgroundColor:'transparent',
		titleTextStyle:{color: '#990000', fontName: 'Arial', fontSize: 15, bold:true, italic:false},
		is3D: true,
		legend:{textStyle:{color: '#990000', fontName: 'Arial', fontSize: 10, bold:true, italic:false}},
		pieSliceText: 'percentage',
		slices: {  1: {offset: 0.2},
			2: {offset: 0.2},
		},
	};
	
	
	var chart = new google.visualization.PieChart(document.getElementById('piechart_3d41'));
	chart.draw(data, options);
}
function drawChart45() {
	var data = google.visualization.arrayToDataTable([
		['Teams', 'Times Won'],
		['Player\'s Team',     1],
		['Other Players',      13]
	]);
	
	var options = {
		title: 'Wilt Chamberlain\'s Assists Titles vs. Years Played',
		backgroundColor:'transparent',
		titleTextStyle:{color: '#990000', fontName: 'Arial', fontSize: 15, bold:true, italic:false},
		is3D: true,
		legend:{textStyle:{color: '#990000', fontName: 'Arial', fontSize: 10, bold:true, italic:false}},
		pieSliceText: 'percentage',
		slices: {  1: {offset: 0.2},
			2: {offset: 0.2},
		},
	};
	
	
	var chart = new google.visualization.PieChart(document.getElementById('piechart_3d42'));
	chart.draw(data, options);
}
function drawChart46() {
	var data = google.visualization.arrayToDataTable([
		['Teams', 'Times Won'],
		['Selected',     7],
		['Not Selected',      7]
	]);
	
	var options = {
		title: 'Wilt Chamberlain selected as a NBA First Team Player vs. Years Played',
		backgroundColor:'transparent',
		titleTextStyle:{color: '#990000', fontName: 'Arial', fontSize: 15, bold:true, italic:false},
		is3D: true,
		legend:{textStyle:{color: '#990000', fontName: 'Arial', fontSize: 10, bold:true, italic:false}},
		pieSliceText: 'percentage',
		slices: {  1: {offset: 0.2},
			2: {offset: 0.2},
		},
	};
	
	var chart = new google.visualization.PieChart(document.getElementById('piechart_3d43'));
	chart.draw(data, options);
}
function drawChart47() {
	var data = google.visualization.arrayToDataTable([
		['Teams', 'Times Won'],
		['Selected',     3],
		['Not Selected',      11]
	]);
	
	var options = {
		title: 'Wilt Chamberlain selected as a NBA Second Team Player vs. Possible Attempts',
		backgroundColor:'transparent',
		titleTextStyle:{color: '#990000', fontName: 'Arial', fontSize: 15, bold:true, italic:false},
		is3D: true,
		legend:{textStyle:{color: '#990000', fontName: 'Arial', fontSize: 10, bold:true, italic:false}},
		pieSliceText: 'percentage',
		slices: {  1: {offset: 0.2},
			2: {offset: 0.2},
		},
	};
	
	var chart = new google.visualization.PieChart(document.getElementById('piechart_3d44'));
	chart.draw(data, options);
}
function drawChart48() {
	var data = google.visualization.arrayToDataTable([
		['Teams', 'Times Won'],
		['Selected',     3],
		['Not Selected',      2]
	]);
	
	var options = {
		title: 'Wilt Chamberlain selected as a NBA All-Defensive First Team Player vs. Possible Attempts**',
		backgroundColor:'transparent',
		titleTextStyle:{color: '#990000', fontName: 'Arial', fontSize: 15, bold:true, italic:false},
		is3D: true,
		legend:{textStyle:{color: '#990000', fontName: 'Arial', fontSize: 10, bold:true, italic:false}},
		pieSliceText: 'percentage',
		slices: {  1: {offset: 0.2},
			2: {offset: 0.2},
		},
	};
	
	var chart = new google.visualization.PieChart(document.getElementById('piechart_3d45'));
	chart.draw(data, options);
}
function drawChart49() {
	var data = google.visualization.arrayToDataTable([
		['Teams', 'Times Won'],
		['Selected',     13],
		['Not Selected',      1]
	]);
	
	var options = {
		title: 'Wilt Chamberlain selected as a NBA All-Star Player vs. Years Played',
		backgroundColor:'transparent',
		titleTextStyle:{color: '#990000', fontName: 'Arial', fontSize: 15, bold:true, italic:false},
		is3D: true,
		legend:{textStyle:{color: '#990000', fontName: 'Arial', fontSize: 10, bold:true, italic:false}},
		pieSliceText: 'percentage',
		slices: {  1: {offset: 0.2},
			2: {offset: 0.2},
		},
	};
	
	var chart = new google.visualization.PieChart(document.getElementById('piechart_3d46'));
	chart.draw(data, options);
}
function drawChart50() {
	var data = google.visualization.arrayToDataTable([
		['Teams', 'Times Won'],
		['Selected',     1],
		['Not Selected',      13]
	]);
	
	var options = {
		title: 'Wilt Chamberlain selected as a NBA All-Star M.V.P vs. Years Played',
		backgroundColor:'transparent',
		titleTextStyle:{color: '#990000', fontName: 'Arial', fontSize: 15, bold:true, italic:false},
		is3D: true,
		legend:{textStyle:{color: '#990000', fontName: 'Arial', fontSize: 10, bold:true, italic:false}},
		pieSliceText: 'percentage',
		slices: {  1: {offset: 0.2},
			2: {offset: 0.2},
		},
	};
	
	var chart = new google.visualization.PieChart(document.getElementById('piechart_3d47'));
	chart.draw(data, options);
}
/* */
function drawChart6() {
	var data = google.visualization.arrayToDataTable([
		['Teams', 'Times Won'],
		['Player\'s Team',     11],
		['Other Teams',      2]
	]);
	
	var options = {
		title: 'Bill Russell\'s Championships vs. Years Played',
		backgroundColor:'transparent',
		titleTextStyle:{color: '#990000', fontName: 'Arial', fontSize: 15, bold:true, italic:false},
		is3D: true,
		legend:{textStyle:{color: '#990000', fontName: 'Arial', fontSize: 10, bold:true, italic:false}},
		pieSliceText: 'percentage',
		slices: {  1: {offset: 0.2},
			2: {offset: 0.2},
		},
	};
	
	var chart = new google.visualization.PieChart(document.getElementById('piechart_3d3'));
	chart.draw(data, options);
}
function drawChart51() {
	var data = google.visualization.arrayToDataTable([
		['Teams', 'Times Won'],
		['Player\'s Team',     11],
		['Other Teams',      1]
	]);
	
	var options = {
		title: 'Bill Russell\'s Championships vs. NBA Finals Appearances',
		backgroundColor:'transparent',
		titleTextStyle:{color: '#990000', fontName: 'Arial', fontSize: 15, bold:true, italic:false},
		is3D: true,
		legend:{textStyle:{color: '#990000', fontName: 'Arial', fontSize: 10, bold:true, italic:false}},
		pieSliceText: 'percentage',
		slices: {  1: {offset: 0.2},
			2: {offset: 0.2},
		},
	};
	
	var chart = new google.visualization.PieChart(document.getElementById('piechart_3d48'));
	chart.draw(data, options);
}
function drawChart52() {
	var data = google.visualization.arrayToDataTable([
		['Teams', 'Times Won'],
		['Player',     0],
		['Other Player\'s',      1]
	]);
	
	var options = {
		title: 'Bill Russell\'s NBA Finals M.V.P vs. Possible Attempts*',
		backgroundColor:'transparent',
		titleTextStyle:{color: '#990000', fontName: 'Arial', fontSize: 15, bold:true, italic:false},
		is3D: true,
		legend:{textStyle:{color: '#990000', fontName: 'Arial', fontSize: 10, bold:true, italic:false}},
		pieSliceText: 'percentage',
		slices: {  1: {offset: 0.2},
			2: {offset: 0.2},
		},
	};
	
	var chart = new google.visualization.PieChart(document.getElementById('piechart_3d49'));
	chart.draw(data, options);
}
function drawChart53() {
	var data = google.visualization.arrayToDataTable([
		['Teams', 'Times Won'],
		['Player',     5],
		['Other Player\'s',      8]
	]);
	
	var options = {
		title: 'Bill Russell\'s Regular Season M.V.P vs. Years Played',
		backgroundColor:'transparent',
		titleTextStyle:{color: '#990000', fontName: 'Arial', fontSize: 15, bold:true, italic:false},
		is3D: true,
		legend:{textStyle:{color: '#990000', fontName: 'Arial', fontSize: 10, bold:true, italic:false}},
		pieSliceText: 'percentage',
		slices: {  1: {offset: 0.2},
			2: {offset: 0.2},
		},
	};
	
	var chart = new google.visualization.PieChart(document.getElementById('piechart_3d50'));
	chart.draw(data, options);
}
function drawChart54() {
	var data = google.visualization.arrayToDataTable([
		['Teams', 'Times Won'],
		['Player',     4],
		['Other Player\'s',     9]
	]);
	
	var options = {
		title: 'Bill Russell\'s Rebounding Titles vs. Years Played',
		backgroundColor:'transparent',
		titleTextStyle:{color: '#990000', fontName: 'Arial', fontSize: 15, bold:true, italic:false},
		is3D: true,
		legend:{textStyle:{color: '#990000', fontName: 'Arial', fontSize: 10, bold:true, italic:false}},
		pieSliceText: 'percentage',
		slices: {  1: {offset: 0.2},
			2: {offset: 0.2},
		},
	};
	
	var chart = new google.visualization.PieChart(document.getElementById('piechart_3d51'));
	chart.draw(data, options);
}
function drawChart55() {
	var data = google.visualization.arrayToDataTable([
		['Teams', 'Times Won'],
		['Selected',     3],
		['Not Selected',     10]
	]);
	
	var options = {
		title: 'Bill Russell\'s NBA First Team Player vs. Years Played',
		backgroundColor:'transparent',
		titleTextStyle:{color: '#990000', fontName: 'Arial', fontSize: 15, bold:true, italic:false},
		is3D: true,
		legend:{textStyle:{color: '#990000', fontName: 'Arial', fontSize: 10, bold:true, italic:false}},
		pieSliceText: 'percentage',
		slices: {  1: {offset: 0.2},
			2: {offset: 0.2},
		},
	};
	
	var chart = new google.visualization.PieChart(document.getElementById('piechart_3d52'));
	chart.draw(data, options);
}
function drawChart56() {
	var data = google.visualization.arrayToDataTable([
		['Teams', 'Times Won'],
		['Selected',     8],
		['Not Selected',    5]
	]);
	
	var options = {
		title: 'Bill Russell\'s NBA Second Team Player vs. Years Played',
		backgroundColor:'transparent',
		titleTextStyle:{color: '#990000', fontName: 'Arial', fontSize: 15, bold:true, italic:false},
		is3D: true,
		legend:{textStyle:{color: '#990000', fontName: 'Arial', fontSize: 10, bold:true, italic:false}},
		pieSliceText: 'percentage',
		slices: {  1: {offset: 0.2},
			2: {offset: 0.2},
		},
	};
	
	var chart = new google.visualization.PieChart(document.getElementById('piechart_3d53'));
	chart.draw(data, options);
}
function drawChart57() {
	var data = google.visualization.arrayToDataTable([
		['Teams', 'Times Won'],
		['Selected',     1],
		['Not Selected',     0]
	]);
	
	var options = {
		title: 'Bill Russell\'s NBA All-Defensive First Team vs. Possible Attempts*',
		backgroundColor:'transparent',
		titleTextStyle:{color: '#990000', fontName: 'Arial', fontSize: 15, bold:true, italic:false},
		is3D: true,
		legend:{textStyle:{color: '#990000', fontName: 'Arial', fontSize: 10, bold:true, italic:false}},
		pieSliceText: 'percentage',
		slices: {  1: {offset: 0.2},
			2: {offset: 0.2},
		},
	};
	
	var chart = new google.visualization.PieChart(document.getElementById('piechart_3d54'));
	chart.draw(data, options);
}
function drawChart58() {
	var data = google.visualization.arrayToDataTable([
		['Teams', 'Times Won'],
		['Selected',     12],
		['Not Selected',     1]
	]);
	
	var options = {
		title: 'Bill Russell selected as a NBA All-Star vs. Years Played',
		backgroundColor:'transparent',
		titleTextStyle:{color: '#990000', fontName: 'Arial', fontSize: 15, bold:true, italic:false},
		is3D: true,
		legend:{textStyle:{color: '#990000', fontName: 'Arial', fontSize: 10, bold:true, italic:false}},
		pieSliceText: 'percentage',
		slices: {  1: {offset: 0.2},
			2: {offset: 0.2},
		},
	};
	
	var chart = new google.visualization.PieChart(document.getElementById('piechart_3d55'));
	chart.draw(data, options);
}
function drawChart59() {
	var data = google.visualization.arrayToDataTable([
		['Teams', 'Times Won'],
		['Player',     1],
		['Other Players',     11]
	]);
	
	var options = {
		title: 'Bill Russell selected as a NBA All-Star M.V.P vs. Possible Attempts',
		backgroundColor:'transparent',
		titleTextStyle:{color: '#990000', fontName: 'Arial', fontSize: 15, bold:true, italic:false},
		is3D: true,
		legend:{textStyle:{color: '#990000', fontName: 'Arial', fontSize: 10, bold:true, italic:false}},
		pieSliceText: 'percentage',
		slices: {  1: {offset: 0.2},
			2: {offset: 0.2},
		},
	};
	
	var chart = new google.visualization.PieChart(document.getElementById('piechart_3d56'));
	chart.draw(data, options);
}
/* */
function drawChart7() {
	var data = google.visualization.arrayToDataTable([
		['Teams', 'Times Won'],
		['Player\'s Team',     4],
		['Other Teams',      15]
	]);
	
	var options = {
		title: 'Shaquille O\'Neal\'s Championships vs. Years Played',
		backgroundColor:'transparent',
		titleTextStyle:{color: '#990000', fontName: 'Arial', fontSize: 15, bold:true, italic:false},
		is3D: true,
		legend:{textStyle:{color: '#990000', fontName: 'Arial', fontSize: 10, bold:true, italic:false}},
		pieSliceText: 'percentage',
		slices: {  1: {offset: 0.2},
			2: {offset: 0.2},
		},
	};
	
	var chart = new google.visualization.PieChart(document.getElementById('piechart_3d4'));
	chart.draw(data, options);
}
function drawChart60() {
	var data = google.visualization.arrayToDataTable([
		['Teams', 'Times Won'],
		['Player\'s Team',     4],
		['Other Teams',      2]
	]);
	
	var options = {
		title: 'Shaquille O\'Neal\'s Championships vs. NBA Finals Appearances',
		backgroundColor:'transparent',
		titleTextStyle:{color: '#990000', fontName: 'Arial', fontSize: 15, bold:true, italic:false},
		is3D: true,
		legend:{textStyle:{color: '#990000', fontName: 'Arial', fontSize: 10, bold:true, italic:false}},
		pieSliceText: 'percentage',
		slices: {  1: {offset: 0.2},
			2: {offset: 0.2},
		},
	};
	
	var chart = new google.visualization.PieChart(document.getElementById('piechart_3d57'));
	chart.draw(data, options);
}
function drawChart61() {
	var data = google.visualization.arrayToDataTable([
		['Teams', 'Times Won'],
		['Player',     3],
		['Other Players',      3]
	]);
	
	var options = {
		title: 'Shaquille O\'Neal\'s Playoff M.V.P Awards vs. NBA Finals Appearances',
		backgroundColor:'transparent',
		titleTextStyle:{color: '#990000', fontName: 'Arial', fontSize: 15, bold:true, italic:false},
		is3D: true,
		legend:{textStyle:{color: '#990000', fontName: 'Arial', fontSize: 10, bold:true, italic:false}},
		pieSliceText: 'percentage',
		slices: {  1: {offset: 0.2},
			2: {offset: 0.2},
		},
	};
	
	var chart = new google.visualization.PieChart(document.getElementById('piechart_3d58'));
	chart.draw(data, options);
}
function drawChart62() {
	var data = google.visualization.arrayToDataTable([
		['Teams', 'Times Won'],
		['Player',     2],
		['Other Players',      17]
	]);
	
	var options = {
		title: 'Shaquille O\'Neal\'s Scoring Titles vs. Years Played',
		backgroundColor:'transparent',
		titleTextStyle:{color: '#990000', fontName: 'Arial', fontSize: 15, bold:true, italic:false},
		is3D: true,
		legend:{textStyle:{color: '#990000', fontName: 'Arial', fontSize: 10, bold:true, italic:false}},
		pieSliceText: 'percentage',
		slices: {  1: {offset: 0.2},
			2: {offset: 0.2},
		},
	};
	
	var chart = new google.visualization.PieChart(document.getElementById('piechart_3d59'));
	chart.draw(data, options);
}
function drawChart63() {
	var data = google.visualization.arrayToDataTable([
		['Teams', 'Times Won'],
		['Selected',     8],
		['Not Selected',   11]
	]);
	
	var options = {
		title: 'Shaquille O\'Neal\'s NBA First Team Player vs. Years Played',
		backgroundColor:'transparent',
		titleTextStyle:{color: '#990000', fontName: 'Arial', fontSize: 15, bold:true, italic:false},
		is3D: true,
		legend:{textStyle:{color: '#990000', fontName: 'Arial', fontSize: 10, bold:true, italic:false}},
		pieSliceText: 'percentage',
		slices: {  1: {offset: 0.2},
			2: {offset: 0.2},
		},
	};
	
	var chart = new google.visualization.PieChart(document.getElementById('piechart_3d60'));
	chart.draw(data, options);
}
function drawChart64() {
	var data = google.visualization.arrayToDataTable([
		['Teams', 'Times Won'],
		['Selected',     2],
		['Not Selected',   17]
	]);
	
	var options = {
		title: 'Shaquille O\'Neal\'s NBA Second Team Player vs. Years Played',
		backgroundColor:'transparent',
		titleTextStyle:{color: '#990000', fontName: 'Arial', fontSize: 15, bold:true, italic:false},
		is3D: true,
		legend:{textStyle:{color: '#990000', fontName: 'Arial', fontSize: 10, bold:true, italic:false}},
		pieSliceText: 'percentage',
		slices: {  1: {offset: 0.2},
			2: {offset: 0.2},
		},
	};
	
	var chart = new google.visualization.PieChart(document.getElementById('piechart_3d61'));
	chart.draw(data, options);
}
function drawChart65() {
	var data = google.visualization.arrayToDataTable([
		['Teams', 'Times Won'],
		['Selected',     4],
		['Not Selected',   15]
	]);
	
	var options = {
		title: 'Shaquille O\'Neal\'s NBA Third Team Player vs. Years Played',
		backgroundColor:'transparent',
		titleTextStyle:{color: '#990000', fontName: 'Arial', fontSize: 15, bold:true, italic:false},
		is3D: true,
		legend:{textStyle:{color: '#990000', fontName: 'Arial', fontSize: 10, bold:true, italic:false}},
		pieSliceText: 'percentage',
		slices: {  1: {offset: 0.2},
			2: {offset: 0.2},
		},
	};
	
	var chart = new google.visualization.PieChart(document.getElementById('piechart_3d62'));
	chart.draw(data, options);
}
function drawChart66() {
	var data = google.visualization.arrayToDataTable([
		['Teams', 'Times Won'],
		['Selected',     3],
		['Not Selected',   16]
	]);
	
	var options = {
		title: 'Shaquille O\'Neal\'s NBA All-Defensive Second Team vs. Years Played',
		backgroundColor:'transparent',
		titleTextStyle:{color: '#990000', fontName: 'Arial', fontSize: 15, bold:true, italic:false},
		is3D: true,
		legend:{textStyle:{color: '#990000', fontName: 'Arial', fontSize: 10, bold:true, italic:false}},
		pieSliceText: 'percentage',
		slices: {  1: {offset: 0.2},
			2: {offset: 0.2},
		},
	};
	
	var chart = new google.visualization.PieChart(document.getElementById('piechart_3d63'));
	chart.draw(data, options);
}
function drawChart67() {
	var data = google.visualization.arrayToDataTable([
		['Teams', 'Times Won'],
		['Selected',     15],
		['Not Selected',   4]
	]);
	
	var options = {
		title: 'Shaquille O\'Neal\'s NBA All-Star Player vs. Years Played',
		backgroundColor:'transparent',
		titleTextStyle:{color: '#990000', fontName: 'Arial', fontSize: 15, bold:true, italic:false},
		is3D: true,
		legend:{textStyle:{color: '#990000', fontName: 'Arial', fontSize: 10, bold:true, italic:false}},
		pieSliceText: 'percentage',
		slices: {  1: {offset: 0.2},
			2: {offset: 0.2},
		},
	};
	
	var chart = new google.visualization.PieChart(document.getElementById('piechart_3d64'));
	chart.draw(data, options);
}
function drawChart68() {
	var data = google.visualization.arrayToDataTable([
		['Teams', 'Times Won'],
		['Selected',     3],
		['Not Selected',   9]
	]);
	
	var options = {
		title: 'Shaquille O\'Neal\'s NBA All-Star M.V.P Awards vs. Possible Attempts*',
		backgroundColor:'transparent',
		titleTextStyle:{color: '#990000', fontName: 'Arial', fontSize: 15, bold:true, italic:false},
		is3D: true,
		legend:{textStyle:{color: '#990000', fontName: 'Arial', fontSize: 10, bold:true, italic:false}},
		pieSliceText: 'percentage',
		slices: {  1: {offset: 0.2},
			2: {offset: 0.2},
		},
	};
	
	var chart = new google.visualization.PieChart(document.getElementById('piechart_3d65'));
	chart.draw(data, options);
}
/* */
function drawChart8() {
	var data = google.visualization.arrayToDataTable([
		['Teams', 'Times Won'],
		['Player\'s Team',     1],
		['Other Teams',      13]
	]);
	var options = {
		title: 'Oscar Robertson\'s Championships vs. Years Played',
		backgroundColor:'transparent',
		titleTextStyle:{color: '#990000', fontName: 'Arial', fontSize: 15, bold:true, italic:false},
		is3D: true,
		legend:{textStyle:{color: '#990000', fontName: 'Arial', fontSize: 10, bold:true, italic:false}},
		pieSliceText: 'percentage',
		slices: {  1: {offset: 0.2},
			2: {offset: 0.2},
		},
	};
	
	var chart = new google.visualization.PieChart(document.getElementById('piechart_3d5'));
	chart.draw(data, options);
}
function drawChart69() {
	var data = google.visualization.arrayToDataTable([
		['Teams', 'Times Won'],
		['Player\'s Team',     1],
		['Other Teams',      1]
	]);
	
	var options = {
		title: 'Oscar Robertson\'s Championships vs. NBA Finals Appearances',
		backgroundColor:'transparent',
		titleTextStyle:{color: '#990000', fontName: 'Arial', fontSize: 15, bold:true, italic:false},
		is3D: true,
		legend:{textStyle:{color: '#990000', fontName: 'Arial', fontSize: 10, bold:true, italic:false}},
		pieSliceText: 'percentage',
		slices: {  1: {offset: 0.2},
			2: {offset: 0.2},
		},
	};
	
	var chart = new google.visualization.PieChart(document.getElementById('piechart_3d66'));
	chart.draw(data, options);
}
function drawChart70() {
	var data = google.visualization.arrayToDataTable([
		['Teams', 'Times Won'],
		['Player',     0],
		['Other Players',      2]
	]);
	
	var options = {
		title: 'Oscar Robertson\'s Playoff M.V.P Awards vs. NBA Finals Appearances',
		backgroundColor:'transparent',
		titleTextStyle:{color: '#990000', fontName: 'Arial', fontSize: 15, bold:true, italic:false},
		is3D: true,
		legend:{textStyle:{color: '#990000', fontName: 'Arial', fontSize: 10, bold:true, italic:false}},
		pieSliceText: 'percentage',
		slices: {  1: {offset: 0.2},
			2: {offset: 0.2},
		},
	};
	
	var chart = new google.visualization.PieChart(document.getElementById('piechart_3d67'));
	chart.draw(data, options);
}
function drawChart71() {
	var data = google.visualization.arrayToDataTable([
		['Teams', 'Times Won'],
		['Player',     1],
		['Other Players',      13]
	]);
	
	var options = {
		title: 'Oscar Robertson\'s Regular Season M.V.P Awards vs. Years Played',
		backgroundColor:'transparent',
		titleTextStyle:{color: '#990000', fontName: 'Arial', fontSize: 15, bold:true, italic:false},
		is3D: true,
		legend:{textStyle:{color: '#990000', fontName: 'Arial', fontSize: 10, bold:true, italic:false}},
		pieSliceText: 'percentage',
		slices: {  1: {offset: 0.2},
			2: {offset: 0.2},
		},
	};
	
	var chart = new google.visualization.PieChart(document.getElementById('piechart_3d68'));
	chart.draw(data, options);
}
function drawChart72() {
	var data = google.visualization.arrayToDataTable([
		['Teams', 'Times Won'],
		['Player',     6],
		['Other Players',      8]
	]);
	
	var options = {
		title: 'Oscar Robertson\'s Assists Titles vs. Years Played',
		backgroundColor:'transparent',
		titleTextStyle:{color: '#990000', fontName: 'Arial', fontSize: 15, bold:true, italic:false},
		is3D: true,
		legend:{textStyle:{color: '#990000', fontName: 'Arial', fontSize: 10, bold:true, italic:false}},
		pieSliceText: 'percentage',
		slices: {  1: {offset: 0.2},
			2: {offset: 0.2},
		},
	};
	
	var chart = new google.visualization.PieChart(document.getElementById('piechart_3d69'));
	chart.draw(data, options);
}
function drawChart73() {
	var data = google.visualization.arrayToDataTable([
		['Teams', 'Times Won'],
		['Selected',     9],
		['Not Selected',      5]
	]);
	
	var options = {
		title: 'Oscar Robertson\'s times selected as a NBA First Team Player vs. Years Played',
		backgroundColor:'transparent',
		titleTextStyle:{color: '#990000', fontName: 'Arial', fontSize: 15, bold:true, italic:false},
		is3D: true,
		legend:{textStyle:{color: '#990000', fontName: 'Arial', fontSize: 10, bold:true, italic:false}},
		pieSliceText: 'percentage',
		slices: {  1: {offset: 0.2},
			2: {offset: 0.2},
		},
	};
	
	var chart = new google.visualization.PieChart(document.getElementById('piechart_3d70'));
	chart.draw(data, options);
}
function drawChart74() {
	var data = google.visualization.arrayToDataTable([
		['Teams', 'Times Won'],
		['Selected',     2],
		['Not Selected',      12]
	]);
	
	var options = {
		title: 'Oscar Robertson\'s times selected as a NBA Second Team Player vs. Years Played',
		backgroundColor:'transparent',
		titleTextStyle:{color: '#990000', fontName: 'Arial', fontSize: 15, bold:true, italic:false},
		is3D: true,
		legend:{textStyle:{color: '#990000', fontName: 'Arial', fontSize: 10, bold:true, italic:false}},
		pieSliceText: 'percentage',
		slices: {  1: {offset: 0.2},
			2: {offset: 0.2},
		},
	};
	
	var chart = new google.visualization.PieChart(document.getElementById('piechart_3d71'));
	chart.draw(data, options);
}
function drawChart75() {
	var data = google.visualization.arrayToDataTable([
		['Teams', 'Times Won'],
		['Selected',     12],
		['Not Selected',      2]
	]);
	
	var options = {
		title: 'Oscar Robertson\'s times selected as an NBA All-Star vs. Years Played',
		backgroundColor:'transparent',
		titleTextStyle:{color: '#990000', fontName: 'Arial', fontSize: 15, bold:true, italic:false},
		is3D: true,
		legend:{textStyle:{color: '#990000', fontName: 'Arial', fontSize: 10, bold:true, italic:false}},
		pieSliceText: 'percentage',
		slices: {  1: {offset: 0.2},
			2: {offset: 0.2},
		},
	};
	
	var chart = new google.visualization.PieChart(document.getElementById('piechart_3d72'));
	chart.draw(data, options);
}
function drawChart76() {
	var data = google.visualization.arrayToDataTable([
		['Teams', 'Times Won'],
		['Selected',     3],
		['Not Selected',      9]
	]);
	
	var options = {
		title: 'Oscar Robertson\'s times selected as All-Star M.V.P vs. Possible Attempts',
		backgroundColor:'transparent',
		titleTextStyle:{color: '#990000', fontName: 'Arial', fontSize: 15, bold:true, italic:false},
		is3D: true,
		legend:{textStyle:{color: '#990000', fontName: 'Arial', fontSize: 10, bold:true, italic:false}},
		pieSliceText: 'percentage',
		slices: {  1: {offset: 0.2},
			2: {offset: 0.2},
		},
	};
	
	var chart = new google.visualization.PieChart(document.getElementById('piechart_3d73'));
	chart.draw(data, options);
}
/* */
function drawChart9() {
	var data = google.visualization.arrayToDataTable([
		['Teams', 'Times Won'],
		['Player\'s Team',     5],
		['Other Teams',      8]
	]);
	
	var options = {
		title: 'Magic Johnson\'s Championships vs. Years Played',
		backgroundColor:'transparent',
		titleTextStyle:{color: '#990000', fontName: 'Arial', fontSize: 15, bold:true, italic:false},
		is3D: true,
		legend:{textStyle:{color: '#990000', fontName: 'Arial', fontSize: 10, bold:true, italic:false}},
		pieSliceText: 'percentage',
		slices: {  1: {offset: 0.2},
			2: {offset: 0.2},
		},
	};
	
	var chart = new google.visualization.PieChart(document.getElementById('piechart_3d6'));
	chart.draw(data, options);
}
function drawChart77() {
	var data = google.visualization.arrayToDataTable([
		['Teams', 'Times Won'],
		['Player\'s Team',     5],
		['Other Teams',      4]
	]);
	
	var options = {
		title: 'Magic Johnson\'s Championships vs. NBA Finals Appearances',
		backgroundColor:'transparent',
		titleTextStyle:{color: '#990000', fontName: 'Arial', fontSize: 15, bold:true, italic:false},
		is3D: true,
		legend:{textStyle:{color: '#990000', fontName: 'Arial', fontSize: 10, bold:true, italic:false}},
		pieSliceText: 'percentage',
		slices: {  1: {offset: 0.2},
			2: {offset: 0.2},
		},
	};
	var chart = new google.visualization.PieChart(document.getElementById('piechart_3d74'));
	chart.draw(data, options);
}
function drawChart78() {
	var data = google.visualization.arrayToDataTable([
		['Teams', 'Times Won'],
		['Player\'s Team',     3],
		['Other Teams',      6]
	]);
	
	var options = {
		title: 'Magic Johnson\'s Playoff M.V.P Awards vs. NBA Finals Appearances',
		backgroundColor:'transparent',
		titleTextStyle:{color: '#990000', fontName: 'Arial', fontSize: 15, bold:true, italic:false},
		is3D: true,
		legend:{textStyle:{color: '#990000', fontName: 'Arial', fontSize: 10, bold:true, italic:false}},
		pieSliceText: 'percentage',
		slices: {  1: {offset: 0.2},
			2: {offset: 0.2},
		},
	};
	
	var chart = new google.visualization.PieChart(document.getElementById('piechart_3d75'));
	chart.draw(data, options);
}
function drawChart79() {
	var data = google.visualization.arrayToDataTable([
		['Teams', 'Times Won'],
		['Player\'s Team',     3],
		['Other Teams',      10]
	]);
	
	var options = {
		title: 'Magic Johnson\'s Regular Season M.V.P Awards vs. NBA Finals Appearances',
		backgroundColor:'transparent',
		titleTextStyle:{color: '#990000', fontName: 'Arial', fontSize: 15, bold:true, italic:false},
		is3D: true,
		legend:{textStyle:{color: '#990000', fontName: 'Arial', fontSize: 10, bold:true, italic:false}},
		pieSliceText: 'percentage',
		slices: {  1: {offset: 0.2},
			2: {offset: 0.2},
		},
	};
	
	var chart = new google.visualization.PieChart(document.getElementById('piechart_3d76'));
	chart.draw(data, options);
}
function drawChart80() {
	var data = google.visualization.arrayToDataTable([
		['Teams', 'Times Won'],
		['Player\'s Team',     4],
		['Other Teams',      9]
	]);
	
	var options = {
		title: 'Magic Johnson\'s Regular Assists Titles vs. Years Played',
		backgroundColor:'transparent',
		titleTextStyle:{color: '#990000', fontName: 'Arial', fontSize: 15, bold:true, italic:false},
		is3D: true,
		legend:{textStyle:{color: '#990000', fontName: 'Arial', fontSize: 10, bold:true, italic:false}},
		pieSliceText: 'percentage',
		slices: {  1: {offset: 0.2},
			2: {offset: 0.2},
		},
	};
	
	var chart = new google.visualization.PieChart(document.getElementById('piechart_3d77'));
	chart.draw(data, options);
}
function drawChart81() {
	var data = google.visualization.arrayToDataTable([
		['Teams', 'Times Won'],
		['Player\'s Team',     2],
		['Other Teams',      11]
	]);
	
	var options = {
		title: 'Magic Johnson\'s leader in Steals vs. Years Played',
		backgroundColor:'transparent',
		titleTextStyle:{color: '#990000', fontName: 'Arial', fontSize: 15, bold:true, italic:false},
		is3D: true,
		legend:{textStyle:{color: '#990000', fontName: 'Arial', fontSize: 10, bold:true, italic:false}},
		pieSliceText: 'percentage',
		slices: {  1: {offset: 0.2},
			2: {offset: 0.2},
		},
	};
	var chart = new google.visualization.PieChart(document.getElementById('piechart_3d78'));
	chart.draw(data, options);
}
function drawChart82() {
	var data = google.visualization.arrayToDataTable([
		['Teams', 'Times Won'],
		['Player\'s Team',     9],
		['Other Teams',      4]
	]);
	
	var options = {
		title: 'Magic Johnson\'s times selected as a NBA First Team Player vs. Years Played',
		backgroundColor:'transparent',
		titleTextStyle:{color: '#990000', fontName: 'Arial', fontSize: 15, bold:true, italic:false},
		is3D: true,
		legend:{textStyle:{color: '#990000', fontName: 'Arial', fontSize: 10, bold:true, italic:false}},
		pieSliceText: 'percentage',
		slices: {  1: {offset: 0.2},
			2: {offset: 0.2},
		},
	};
	
	var chart = new google.visualization.PieChart(document.getElementById('piechart_3d79'));
	chart.draw(data, options);
}
function drawChart83() {
	var data = google.visualization.arrayToDataTable([
		['Teams', 'Times Won'],
		['Player\'s Team',     1],
		['Other Teams',      12]
	]);
	
	var options = {
		title: 'Magic Johnson\'s times selected as a NBA Second Team Player vs. Years Played',
		backgroundColor:'transparent',
		titleTextStyle:{color: '#990000', fontName: 'Arial', fontSize: 15, bold:true, italic:false},
		is3D: true,
		legend:{textStyle:{color: '#990000', fontName: 'Arial', fontSize: 10, bold:true, italic:false}},
		pieSliceText: 'percentage',
		slices: {  1: {offset: 0.2},
			2: {offset: 0.2},
		},
	};
	
	var chart = new google.visualization.PieChart(document.getElementById('piechart_3d80'));
	chart.draw(data, options);
}
function drawChart84() {
	var data = google.visualization.arrayToDataTable([
		['Teams', 'Times Won'],
		['Player\'s Team',     12],
		['Other Teams',      1]
	]);
	
	var options = {
		title: 'Magic Johnson\'s times selected as an All-Star Player vs. Years Played',
		backgroundColor:'transparent',
		titleTextStyle:{color: '#990000', fontName: 'Arial', fontSize: 15, bold:true, italic:false},
		is3D: true,
		legend:{textStyle:{color: '#990000', fontName: 'Arial', fontSize: 10, bold:true, italic:false}},
		pieSliceText: 'percentage',
		slices: {  1: {offset: 0.2},
			2: {offset: 0.2},
		},
	};
	var chart = new google.visualization.PieChart(document.getElementById('piechart_3d81'));
	chart.draw(data, options);
}
function drawChart85() {
	var data = google.visualization.arrayToDataTable([
		['Teams', 'Times Won'],
		['Player',     2],
		['Other Players',      11]
	]);
	
	var options = {
		title: 'Magic Johnson\'s times selected as All-Star M.V.P vs. Possible Attempts',
		backgroundColor:'transparent',
		titleTextStyle:{color: '#990000', fontName: 'Arial', fontSize: 15, bold:true, italic:false},
		is3D: true,
		legend:{textStyle:{color: '#990000', fontName: 'Arial', fontSize: 10, bold:true, italic:false}},
		pieSliceText: 'percentage',
		slices: {  1: {offset: 0.2},
			2: {offset: 0.2},
		},
	};
	
	var chart = new google.visualization.PieChart(document.getElementById('piechart_3d82'));
	chart.draw(data, options);
}
/* */
function drawChart10() {
	var data = google.visualization.arrayToDataTable([
		['Teams', 'Times Won'],
		['Player\'s Team',     6],
		['Other Teams',      14]
	]);
	
	var options = {
		title: 'Kareem Abdul-Jabbar\'s Championships vs. Years Played',
		backgroundColor:'transparent',
		titleTextStyle:{color: '#990000', fontName: 'Arial', fontSize: 15, bold:true, italic:false},
		is3D: true,
		legend:{textStyle:{color: '#990000', fontName: 'Arial', fontSize: 10, bold:true, italic:false}},
		pieSliceText: 'percentage',
		slices: {  1: {offset: 0.2},
			2: {offset: 0.2},
		},
	};
	
	var chart = new google.visualization.PieChart(document.getElementById('piechart_3d7'));
	chart.draw(data, options);
}
function drawChart86() {
	var data = google.visualization.arrayToDataTable([
		['Teams', 'Times Won'],
		['Player\'s Team',     6],
		['Other Teams',      4]
	]);
	
	var options = {
		title: 'Kareem Abdul-Jabbar\'s Championships vs. NBA Finals Appearances',
		backgroundColor:'transparent',
		titleTextStyle:{color: '#990000', fontName: 'Arial', fontSize: 15, bold:true, italic:false},
		is3D: true,
		legend:{textStyle:{color: '#990000', fontName: 'Arial', fontSize: 10, bold:true, italic:false}},
		pieSliceText: 'percentage',
		slices: {  1: {offset: 0.2},
			2: {offset: 0.2},
		},
	};
	var chart = new google.visualization.PieChart(document.getElementById('piechart_3d83'));
	chart.draw(data, options);
}
function drawChart87() {
	var data = google.visualization.arrayToDataTable([
		['Teams', 'Times Won'],
		['Player',     2],
		['Other Players',      8]
	]);
	
	var options = {
		title: 'Kareem Abdul-Jabbar\'s Finals M.V.P Awards vs. NBA Finals Appearances',
		backgroundColor:'transparent',
		titleTextStyle:{color: '#990000', fontName: 'Arial', fontSize: 15, bold:true, italic:false},
		is3D: true,
		legend:{textStyle:{color: '#990000', fontName: 'Arial', fontSize: 10, bold:true, italic:false}},
		pieSliceText: 'percentage',
		slices: {  1: {offset: 0.2},
			2: {offset: 0.2},
		},
	};
	
	var chart = new google.visualization.PieChart(document.getElementById('piechart_3d84'));
	chart.draw(data, options);
}
function drawChart88() {
	var data = google.visualization.arrayToDataTable([
		['Teams', 'Times Won'],
		['Player',     2],
		['Other Players',      18]
	]);
	
	var options = {
		title: 'Kareem Abdul-Jabbar\'s Scoring Titles vs. Years Played',
		backgroundColor:'transparent',
		titleTextStyle:{color: '#990000', fontName: 'Arial', fontSize: 15, bold:true, italic:false},
		is3D: true,
		legend:{textStyle:{color: '#990000', fontName: 'Arial', fontSize: 10, bold:true, italic:false}},
		pieSliceText: 'percentage',
		slices: {  1: {offset: 0.2},
			2: {offset: 0.2},
		},
	};
	
	var chart = new google.visualization.PieChart(document.getElementById('piechart_3d85'));
	chart.draw(data, options);
}
function drawChart89() {
	var data = google.visualization.arrayToDataTable([
		['Teams', 'Times Won'],
		['Player',     1],
		['Other Players',      19]
	]);
	
	var options = {
		title: 'Kareem Abdul-Jabbar\'s Rebounding Titles vs. Years Played',
		backgroundColor:'transparent',
		titleTextStyle:{color: '#990000', fontName: 'Arial', fontSize: 15, bold:true, italic:false},
		is3D: true,
		legend:{textStyle:{color: '#990000', fontName: 'Arial', fontSize: 10, bold:true, italic:false}},
		pieSliceText: 'percentage',
		slices: {  1: {offset: 0.2},
			2: {offset: 0.2},
		},
	};
	
	var chart = new google.visualization.PieChart(document.getElementById('piechart_3d86'));
	chart.draw(data, options);
}
function drawChart90() {
	var data = google.visualization.arrayToDataTable([
		['Teams', 'Times Won'],
		['Player',     4],
		['Other Players',      16]
	]);
	
	var options = {
		title: 'Kareem Abdul-Jabbar\'s Blocks Leader vs. Years Played',
		backgroundColor:'transparent',
		titleTextStyle:{color: '#990000', fontName: 'Arial', fontSize: 15, bold:true, italic:false},
		is3D: true,
		legend:{textStyle:{color: '#990000', fontName: 'Arial', fontSize: 10, bold:true, italic:false}},
		pieSliceText: 'percentage',
		slices: {  1: {offset: 0.2},
			2: {offset: 0.2},
		},
	};
	
	var chart = new google.visualization.PieChart(document.getElementById('piechart_3d87'));
	chart.draw(data, options);
}
function drawChart91() {
	var data = google.visualization.arrayToDataTable([
		['Teams', 'Times Won'],
		['Selected',     10],
		['Not Selected',      10]
	]);
	
	var options = {
		title: 'Kareem Abdul-Jabbar\'s selected as a NBA First Team Player vs. Years Played',
		backgroundColor:'transparent',
		titleTextStyle:{color: '#990000', fontName: 'Arial', fontSize: 15, bold:true, italic:false},
		is3D: true,
		legend:{textStyle:{color: '#990000', fontName: 'Arial', fontSize: 10, bold:true, italic:false}},
		pieSliceText: 'percentage',
		slices: {  1: {offset: 0.2},
			2: {offset: 0.2},
		},
	};
	
	var chart = new google.visualization.PieChart(document.getElementById('piechart_3d88'));
	chart.draw(data, options);
}
function drawChart92() {
	var data = google.visualization.arrayToDataTable([
		['Teams', 'Times Won'],
		['Selected',     5],
		['Not Selected',      15]
	]);
	
	var options = {
		title: 'Kareem Abdul-Jabbar\'s selected as a NBA Second Team Player vs. Years Played',
		backgroundColor:'transparent',
		titleTextStyle:{color: '#990000', fontName: 'Arial', fontSize: 15, bold:true, italic:false},
		is3D: true,
		legend:{textStyle:{color: '#990000', fontName: 'Arial', fontSize: 10, bold:true, italic:false}},
		pieSliceText: 'percentage',
		slices: {  1: {offset: 0.2},
			2: {offset: 0.2},
		},
	};
	var chart = new google.visualization.PieChart(document.getElementById('piechart_3d89'));
	chart.draw(data, options);
}
function drawChart93() {
	var data = google.visualization.arrayToDataTable([
		['Teams', 'Times Won'],
		['Selected',     5],
		['Not Selected',      15]
	]);
	
	var options = {
		title: 'Kareem Abdul-Jabbar\'s selected as a NBA All-Defensive First Team Player vs. Years Played',
		backgroundColor:'transparent',
		titleTextStyle:{color: '#990000', fontName: 'Arial', fontSize: 15, bold:true, italic:false},
		is3D: true,
		legend:{textStyle:{color: '#990000', fontName: 'Arial', fontSize: 10, bold:true, italic:false}},
		pieSliceText: 'percentage',
		slices: {  1: {offset: 0.2},
			2: {offset: 0.2},
		},
	};
	
	var chart = new google.visualization.PieChart(document.getElementById('piechart_3d90'));
	chart.draw(data, options);
}
function drawChart94() {
	var data = google.visualization.arrayToDataTable([
		['Teams', 'Times Won'],
		['Selected',     6],
		['Not Selected',      14]
	]);
	
	var options = {
		title: 'Kareem Abdul-Jabbar\'s selected as a NBA All-Defensive Second Team Player vs. Years Played',
		backgroundColor:'transparent',
		titleTextStyle:{color: '#990000', fontName: 'Arial', fontSize: 15, bold:true, italic:false},
		is3D: true,
		legend:{textStyle:{color: '#990000', fontName: 'Arial', fontSize: 10, bold:true, italic:false}},
		pieSliceText: 'percentage',
		slices: {  1: {offset: 0.2},
			2: {offset: 0.2},
		},
	};
	
	var chart = new google.visualization.PieChart(document.getElementById('piechart_3d91'));
	chart.draw(data, options);
}
function drawChart95() {
	var data = google.visualization.arrayToDataTable([
		['Teams', 'Times Won'],
		['Selected',     19],
		['Not Selected',      1]
	]);
	
	var options = {
		title: 'Kareem Abdul-Jabbar\'s selected as a NBA All-Star Player vs. Years Played',
		backgroundColor:'transparent',
		titleTextStyle:{color: '#990000', fontName: 'Arial', fontSize: 15, bold:true, italic:false},
		is3D: true,
		legend:{textStyle:{color: '#990000', fontName: 'Arial', fontSize: 10, bold:true, italic:false}},
		pieSliceText: 'percentage',
		slices: {  1: {offset: 0.2},
			2: {offset: 0.2},
		},
	};
	
	var chart = new google.visualization.PieChart(document.getElementById('piechart_3d92'));
	chart.draw(data, options);
}
function drawChart96() {
	var data = google.visualization.arrayToDataTable([
		['Teams', 'Times Won'],
		['Player',     0],
		['Other Players',      18]
	]);
	
	var options = {
		title: 'Kareem Abdul-Jabbar\'s selected as a NBA All-Star M.V.P vs. Possible Attempts*',
		backgroundColor:'transparent',
		titleTextStyle:{color: '#990000', fontName: 'Arial', fontSize: 15, bold:true, italic:false},
		is3D: true,
		legend:{textStyle:{color: '#990000', fontName: 'Arial', fontSize: 10, bold:true, italic:false}},
		pieSliceText: 'percentage',
		slices: {  1: {offset: 0.2},
			2: {offset: 0.2},
		},
	};
	
	var chart = new google.visualization.PieChart(document.getElementById('piechart_3d93'));
	chart.draw(data, options);
}
/* */
function drawChart11() {
	var data = google.visualization.arrayToDataTable([
		['Teams', 'Times Won'],
		['Player\'s Team',     5],
		['Other Teams',      14]
	]);
	
	var options = {
		title: 'Tim Duncan\'s Championships* vs. Years Played',
		backgroundColor:'transparent',
		titleTextStyle:{color: '#990000', fontName: 'Arial', fontSize: 15, bold:true, italic:false},
		is3D: true,
		legend:{textStyle:{color: '#990000', fontName: 'Arial', fontSize: 10, bold:true, italic:false}},
		pieSliceText: 'percentage',
		slices: {  1: {offset: 0.2},
			2: {offset: 0.2},
		},
	};
	
	var chart = new google.visualization.PieChart(document.getElementById('piechart_3d8'));
	chart.draw(data, options);
}
function drawChart97() {
	var data = google.visualization.arrayToDataTable([
		['Teams', 'Times Won'],
		['Player\'s Team',     4],
		['Other Teams',      1]
	]);
	
	var options = {
		title: 'Tim Duncan\'s Championships* vs. NBA Finals Appearances',
		backgroundColor:'transparent',
		titleTextStyle:{color: '#990000', fontName: 'Arial', fontSize: 15, bold:true, italic:false},
		is3D: true,
		legend:{textStyle:{color: '#990000', fontName: 'Arial', fontSize: 10, bold:true, italic:false}},
		pieSliceText: 'percentage',
		slices: {  1: {offset: 0.2},
			2: {offset: 0.2},
		},
	};
	
	var chart = new google.visualization.PieChart(document.getElementById('piechart_3d94'));
	chart.draw(data, options);
}
function drawChart98() {
	var data = google.visualization.arrayToDataTable([
		['Teams', 'Times Won'],
		['Player',     3],
		['Other Players',      2]
	]);
	
	var options = {
		title: 'Tim Duncan\'s NBA Finals M.V.P Awards* vs. NBA Finals Appearances',
		backgroundColor:'transparent',
		titleTextStyle:{color: '#990000', fontName: 'Arial', fontSize: 15, bold:true, italic:false},
		is3D: true,
		legend:{textStyle:{color: '#990000', fontName: 'Arial', fontSize: 10, bold:true, italic:false}},
		pieSliceText: 'percentage',
		slices: {  1: {offset: 0.2},
			2: {offset: 0.2},
		},
	};
	
	var chart = new google.visualization.PieChart(document.getElementById('piechart_3d95'));
	chart.draw(data, options);
}
function drawChart99() {
	var data = google.visualization.arrayToDataTable([
		['Teams', 'Times Won'],
		['Player',     2],
		['Other Players',      17]
	]);
	
	var options = {
		title: 'Tim Duncan\'s NBA Regular Season M.V.P Awards* vs. Years Played',
		backgroundColor:'transparent',
		titleTextStyle:{color: '#990000', fontName: 'Arial', fontSize: 15, bold:true, italic:false},
		is3D: true,
		legend:{textStyle:{color: '#990000', fontName: 'Arial', fontSize: 10, bold:true, italic:false}},
		pieSliceText: 'percentage',
		slices: {  1: {offset: 0.2},
			2: {offset: 0.2},
		},
	};
	
	var chart = new google.visualization.PieChart(document.getElementById('piechart_3d96'));
	chart.draw(data, options);
}
function drawChart100() {
	var data = google.visualization.arrayToDataTable([
		['Teams', 'Times Won'],
		['Selected',     10],
		['Not Selected',      9]
	]);
	
	var options = {
		title: 'Tim Duncan\'s NBA First Team Player vs. Years Played',
		backgroundColor:'transparent',
		titleTextStyle:{color: '#990000', fontName: 'Arial', fontSize: 15, bold:true, italic:false},
		is3D: true,
		legend:{textStyle:{color: '#990000', fontName: 'Arial', fontSize: 10, bold:true, italic:false}},
		pieSliceText: 'percentage',
		slices: {  1: {offset: 0.2},
			2: {offset: 0.2},
		},
	};
	
	var chart = new google.visualization.PieChart(document.getElementById('piechart_3d97'));
	chart.draw(data, options);
}
function drawChart101() {
	var data = google.visualization.arrayToDataTable([
		['Teams', 'Times Won'],
		['Selected',     3],
		['Not Selected',      16]
	]);
	
	var options = {
		title: 'Tim Duncan\'s NBA Second Team Player vs. Years Played',
		backgroundColor:'transparent',
		titleTextStyle:{color: '#990000', fontName: 'Arial', fontSize: 15, bold:true, italic:false},
		is3D: true,
		legend:{textStyle:{color: '#990000', fontName: 'Arial', fontSize: 10, bold:true, italic:false}},
		pieSliceText: 'percentage',
		slices: {  1: {offset: 0.2},
			2: {offset: 0.2},
		},
	};
	
	var chart = new google.visualization.PieChart(document.getElementById('piechart_3d98'));
	chart.draw(data, options);
}
function drawChart102() {
	var data = google.visualization.arrayToDataTable([
		['Teams', 'Times Won'],
		['Selected',     2],
		['Not Selected',      17]
	]);
	
	var options = {
		title: 'Tim Duncan\'s NBA Third Team Player vs. Years Played',
		backgroundColor:'transparent',
		titleTextStyle:{color: '#990000', fontName: 'Arial', fontSize: 15, bold:true, italic:false},
		is3D: true,
		legend:{textStyle:{color: '#990000', fontName: 'Arial', fontSize: 10, bold:true, italic:false}},
		pieSliceText: 'percentage',
		slices: {  1: {offset: 0.2},
			2: {offset: 0.2},
		},
	};
	
	var chart = new google.visualization.PieChart(document.getElementById('piechart_3d99'));
	chart.draw(data, options);
}
function drawChart103() {
	var data = google.visualization.arrayToDataTable([
		['Teams', 'Times Won'],
		['Selected',     8],
		['Not Selected',      11]
	]);
	
	var options = {
		title: 'Tim Duncan\'s NBA All-Defensive First Team Player vs. Years Played',
		backgroundColor:'transparent',
		titleTextStyle:{color: '#990000', fontName: 'Arial', fontSize: 15, bold:true, italic:false},
		is3D: true,
		legend:{textStyle:{color: '#990000', fontName: 'Arial', fontSize: 10, bold:true, italic:false}},
		pieSliceText: 'percentage',
		slices: {  1: {offset: 0.2},
			2: {offset: 0.2},
		},
	};
	
	var chart = new google.visualization.PieChart(document.getElementById('piechart_3d100'));
	chart.draw(data, options);
}
function drawChart104() {
	var data = google.visualization.arrayToDataTable([
		['Teams', 'Times Won'],
		['Selected',     7],
		['Not Selected',      12]
	]);
	
	var options = {
		title: 'Tim Duncan\'s NBA All-Defensive Second Team Player vs. Years Played',
		backgroundColor:'transparent',
		titleTextStyle:{color: '#990000', fontName: 'Arial', fontSize: 15, bold:true, italic:false},
		is3D: true,
		legend:{textStyle:{color: '#990000', fontName: 'Arial', fontSize: 10, bold:true, italic:false}},
		pieSliceText: 'percentage',
		slices: {  1: {offset: 0.2},
			2: {offset: 0.2},
		},
	};
	
	var chart = new google.visualization.PieChart(document.getElementById('piechart_3d101'));
	chart.draw(data, options);
}
function drawChart105() {
	var data = google.visualization.arrayToDataTable([
		['Teams', 'Times Won'],
		['Selected',     15],
		['Not Selected',      4]
	]);
	
	var options = {
		title: 'Tim Duncan selected as a NBA All-Star Player vs. Years Played',
		backgroundColor:'transparent',
		titleTextStyle:{color: '#990000', fontName: 'Arial', fontSize: 15, bold:true, italic:false},
		is3D: true,
		legend:{textStyle:{color: '#990000', fontName: 'Arial', fontSize: 10, bold:true, italic:false}},
		pieSliceText: 'percentage',
		slices: {  1: {offset: 0.2},
			2: {offset: 0.2},
		},
	};
	
	var chart = new google.visualization.PieChart(document.getElementById('piechart_3d102'));
	chart.draw(data, options);
}
function drawChart106() {
	var data = google.visualization.arrayToDataTable([
		['Teams', 'Times Won'],
		['Selected',     1],
		['Not Selected',      14]
	]);
	
	var options = {
		title: 'Tim Duncan selected as a NBA All-Star M.V.P vs. Possibe Attempts',
		backgroundColor:'transparent',
		titleTextStyle:{color: '#990000', fontName: 'Arial', fontSize: 15, bold:true, italic:false},
		is3D: true,
		legend:{textStyle:{color: '#990000', fontName: 'Arial', fontSize: 10, bold:true, italic:false}},
		pieSliceText: 'percentage',
		slices: {  1: {offset: 0.2},
			2: {offset: 0.2},
		},
	};
	var chart = new google.visualization.PieChart(document.getElementById('piechart_3d103'));
	chart.draw(data, options);
}
/* */
function drawChart12() {
	var data = google.visualization.arrayToDataTable([
		['Teams', 'Times Won'],
		['Player\'s Team',     3],
		['Other Teams',      10]
	]);
	
	var options = {
		title: 'Larry Bird\'s Championships vs. Years Played',
		backgroundColor:'transparent',
		titleTextStyle:{color: '#990000', fontName: 'Arial', fontSize: 15, bold:true, italic:false},
		is3D: true,
		legend:{textStyle:{color: '#990000', fontName: 'Arial', fontSize: 10, bold:true, italic:false}},
		pieSliceText: 'percentage',
		slices: {  1: {offset: 0.2},
			2: {offset: 0.2},
		},
	};
	var chart = new google.visualization.PieChart(document.getElementById('piechart_3d9'));
	chart.draw(data, options);
}
function drawChart107() {
	var data = google.visualization.arrayToDataTable([
		['Teams', 'Times Won'],
		['Player\'s Team',     3],
		['Other Teams',      2]
	]);
	
	var options = {
		title: 'Larry Bird\'s Championships vs. NBA Finals Appearances',
		backgroundColor:'transparent',
		titleTextStyle:{color: '#990000', fontName: 'Arial', fontSize: 15, bold:true, italic:false},
		is3D: true,
		legend:{textStyle:{color: '#990000', fontName: 'Arial', fontSize: 10, bold:true, italic:false}},
		pieSliceText: 'percentage',
		slices: {  1: {offset: 0.2},
			2: {offset: 0.2},
		},
	};
	
	var chart = new google.visualization.PieChart(document.getElementById('piechart_3d104'));
	chart.draw(data, options);
}
function drawChart108() {
	var data = google.visualization.arrayToDataTable([
		['Teams', 'Times Won'],
		['Player',     2],
		['Other Players',      3]
	]);
	
	var options = {
		title: 'Larry Bird\'s NBA Finals M.V.P vs. NBA Finals Appearances',
		backgroundColor:'transparent',
		titleTextStyle:{color: '#990000', fontName: 'Arial', fontSize: 15, bold:true, italic:false},
		is3D: true,
		legend:{textStyle:{color: '#990000', fontName: 'Arial', fontSize: 10, bold:true, italic:false}},
		pieSliceText: 'percentage',
		slices: {  1: {offset: 0.2},
			2: {offset: 0.2},
		},
	};
	
	var chart = new google.visualization.PieChart(document.getElementById('piechart_3d105'));
	chart.draw(data, options);
}
function drawChart109() {
	var data = google.visualization.arrayToDataTable([
		['Teams', 'Times Won'],
		['Selected',     9],
		['Not Selected',      4]
	]);
	
	var options = {
		title: 'Larry Bird\'s NBA First Team Player vs. Years Played',
		backgroundColor:'transparent',
		titleTextStyle:{color: '#990000', fontName: 'Arial', fontSize: 15, bold:true, italic:false},
		is3D: true,
		legend:{textStyle:{color: '#990000', fontName: 'Arial', fontSize: 10, bold:true, italic:false}},
		pieSliceText: 'percentage',
		slices: {  1: {offset: 0.2},
			2: {offset: 0.2},
		},
	};
	
	var chart = new google.visualization.PieChart(document.getElementById('piechart_3d106'));
	chart.draw(data, options);
}
function drawChart110() {
	var data = google.visualization.arrayToDataTable([
		['Teams', 'Times Won'],
		['Selected',     1],
		['Not Selected',      12]
	]);
	
	var options = {
		title: 'Larry Bird\'s NBA Second Team Player vs. Years Played',
		backgroundColor:'transparent',
		titleTextStyle:{color: '#990000', fontName: 'Arial', fontSize: 15, bold:true, italic:false},
		is3D: true,
		legend:{textStyle:{color: '#990000', fontName: 'Arial', fontSize: 10, bold:true, italic:false}},
		pieSliceText: 'percentage',
		slices: {  1: {offset: 0.2},
			2: {offset: 0.2},
		},
	};
	
	var chart = new google.visualization.PieChart(document.getElementById('piechart_3d107'));
	chart.draw(data, options);
}
function drawChart111() {
	var data = google.visualization.arrayToDataTable([
		['Teams', 'Times Won'],
		['Selected',     3],
		['Not Selected',      10]
	]);
	
	var options = {
		title: 'Larry Bird\'s NBA All-Defensive Second Team Player vs. Years Played',
		backgroundColor:'transparent',
		titleTextStyle:{color: '#990000', fontName: 'Arial', fontSize: 15, bold:true, italic:false},
		is3D: true,
		legend:{textStyle:{color: '#990000', fontName: 'Arial', fontSize: 10, bold:true, italic:false}},
		pieSliceText: 'percentage',
		slices: {  1: {offset: 0.2},
			2: {offset: 0.2},
		},
	};
	
	var chart = new google.visualization.PieChart(document.getElementById('piechart_3d108'));
	chart.draw(data, options);
}
function drawChart112() {
	var data = google.visualization.arrayToDataTable([
		['Teams', 'Times Won'],
		['Selected',     12],
		['Not Selected',      1]
	]);
	
	var options = {
		title: 'Larry Bird\'s selected as a NBA All-Star vs. Years Played',
		backgroundColor:'transparent',
		titleTextStyle:{color: '#990000', fontName: 'Arial', fontSize: 15, bold:true, italic:false},
		is3D: true,
		legend:{textStyle:{color: '#990000', fontName: 'Arial', fontSize: 10, bold:true, italic:false}},
		pieSliceText: 'percentage',
		slices: {  1: {offset: 0.2},
			2: {offset: 0.2},
		},
	};
	
	var chart = new google.visualization.PieChart(document.getElementById('piechart_3d109'));
	chart.draw(data, options);
}
function drawChart113() {
	var data = google.visualization.arrayToDataTable([
		['Teams', 'Times Won'],
		['Selected',     1],
		['Not Selected',      9]
	]);
	
	var options = {
		title: 'Larry Bird\'s selected as a NBA All-Star M.V.P vs. Possible Attempts*',
		backgroundColor:'transparent',
		titleTextStyle:{color: '#990000', fontName: 'Arial', fontSize: 15, bold:true, italic:false},
		is3D: true,
		legend:{textStyle:{color: '#990000', fontName: 'Arial', fontSize: 10, bold:true, italic:false}},
		pieSliceText: 'percentage',
		slices: {  1: {offset: 0.2},
			2: {offset: 0.2},
		},
	};
	var chart = new google.visualization.PieChart(document.getElementById('piechart_3d110'));
	chart.draw(data, options);
}
/* */
function drawChart13() {
	var data = google.visualization.arrayToDataTable([
		['Teams', 'Times Won'],
		['Player\'s Team',     5],
		['Other Teams',      15]
	]);
	
	var options = {
		title: 'Kobe Bryant\'s Championships vs. Years Played',
		backgroundColor:'transparent',
		titleTextStyle:{color: '#990000', fontName: 'Arial', fontSize: 15, bold:true, italic:false},
		is3D: true,
		legend:{textStyle:{color: '#990000', fontName: 'Arial', fontSize: 10, bold:true, italic:false}},
		pieSliceText: 'percentage',
		slices: {  1: {offset: 0.2},
			2: {offset: 0.2},
		},
	};
	var chart = new google.visualization.PieChart(document.getElementById('piechart_3d10'));
	chart.draw(data, options);
}
function drawChart114() {
	var data = google.visualization.arrayToDataTable([
		['Teams', 'Times Won'],
		['Player\'s Team',     5],
		['Other Teams',      2]
	]);
	
	var options = {
		title: 'Kobe Bryant\'s Championships vs. NBA Finals Appearances',
		backgroundColor:'transparent',
		titleTextStyle:{color: '#990000', fontName: 'Arial', fontSize: 15, bold:true, italic:false},
		is3D: true,
		legend:{textStyle:{color: '#990000', fontName: 'Arial', fontSize: 10, bold:true, italic:false}},
		pieSliceText: 'percentage',
		slices: {  1: {offset: 0.2},
			2: {offset: 0.2},
		},
	};
	
	var chart = new google.visualization.PieChart(document.getElementById('piechart_3d111'));
	chart.draw(data, options);
}
function drawChart115() {
	var data = google.visualization.arrayToDataTable([
		['Teams', 'Times Won'],
		['Player\'s Team',     2],
		['Other Teams',      4]
	]);
	
	var options = {
		title: 'Kobe Bryant\'s NBA Finals M.V.P Awards vs. NBA Finals Appearances',
		backgroundColor:'transparent',
		titleTextStyle:{color: '#990000', fontName: 'Arial', fontSize: 15, bold:true, italic:false},
		is3D: true,
		legend:{textStyle:{color: '#990000', fontName: 'Arial', fontSize: 10, bold:true, italic:false}},
		pieSliceText: 'percentage',
		slices: {  1: {offset: 0.2},
			2: {offset: 0.2},
		},
	};
	
	var chart = new google.visualization.PieChart(document.getElementById('piechart_3d112'));
	chart.draw(data, options);
}
function drawChart116() {
	var data = google.visualization.arrayToDataTable([
		['Teams', 'Times Won'],
		['Player',     1],
		['Other Players',      19]
	]);
	
	var options = {
		title: 'Kobe Bryant\'s NBA Regular Season M.V.P Awards vs. Years Played',
		backgroundColor:'transparent',
		titleTextStyle:{color: '#990000', fontName: 'Arial', fontSize: 15, bold:true, italic:false},
		is3D: true,
		legend:{textStyle:{color: '#990000', fontName: 'Arial', fontSize: 10, bold:true, italic:false}},
		pieSliceText: 'percentage',
		slices: {  1: {offset: 0.2},
			2: {offset: 0.2},
		},
	};
	var chart = new google.visualization.PieChart(document.getElementById('piechart_3d113'));
	chart.draw(data, options);
}
function drawChart117() {
	var data = google.visualization.arrayToDataTable([
		['Teams', 'Times Won'],
		['Player',     2],
		['Other Players',      18]
	]);
	
	var options = {
		title: 'Kobe Bryant\'s Scoring Titles vs. Years Played',
		backgroundColor:'transparent',
		titleTextStyle:{color: '#990000', fontName: 'Arial', fontSize: 15, bold:true, italic:false},
		is3D: true,
		legend:{textStyle:{color: '#990000', fontName: 'Arial', fontSize: 10, bold:true, italic:false}},
		pieSliceText: 'percentage',
		slices: {  1: {offset: 0.2},
			2: {offset: 0.2},
		},
	};
	
	var chart = new google.visualization.PieChart(document.getElementById('piechart_3d114'));
	chart.draw(data, options);
}
function drawChart118() {
	var data = google.visualization.arrayToDataTable([
		['Teams', 'Times Won'],
		['Selected',     11],
		['Not Selected',      9]
	]);
	
	var options = {
		title: 'Kobe Bryant\'s NBA First Team Player vs. Years Played',
		backgroundColor:'transparent',
		titleTextStyle:{color: '#990000', fontName: 'Arial', fontSize: 15, bold:true, italic:false},
		is3D: true,
		legend:{textStyle:{color: '#990000', fontName: 'Arial', fontSize: 10, bold:true, italic:false}},
		pieSliceText: 'percentage',
		slices: {  1: {offset: 0.2},
			2: {offset: 0.2},
		},
	};
	
	var chart = new google.visualization.PieChart(document.getElementById('piechart_3d115'));
	chart.draw(data, options);
}
function drawChart119() {
	var data = google.visualization.arrayToDataTable([
		['Teams', 'Times Won'],
		['Selected',     2],
		['Not Selected',      18]
	]);
	
	var options = {
		title: 'Kobe Bryant\'s NBA Second Team Player vs. Years Played',
		backgroundColor:'transparent',
		titleTextStyle:{color: '#990000', fontName: 'Arial', fontSize: 15, bold:true, italic:false},
		is3D: true,
		legend:{textStyle:{color: '#990000', fontName: 'Arial', fontSize: 10, bold:true, italic:false}},
		pieSliceText: 'percentage',
		slices: {  1: {offset: 0.2},
			2: {offset: 0.2},
		},
	};
	
	var chart = new google.visualization.PieChart(document.getElementById('piechart_3d116'));
	chart.draw(data, options);
}
function drawChart120() {
	var data = google.visualization.arrayToDataTable([
		['Teams', 'Times Won'],
		['Selected',     2],
		['Not Selected',      18]
	]);
	
	var options = {
		title: 'Kobe Bryant\'s NBA Third Team Player vs. Years Played',
		backgroundColor:'transparent',
		titleTextStyle:{color: '#990000', fontName: 'Arial', fontSize: 15, bold:true, italic:false},
		is3D: true,
		legend:{textStyle:{color: '#990000', fontName: 'Arial', fontSize: 10, bold:true, italic:false}},
		pieSliceText: 'percentage',
		slices: {  1: {offset: 0.2},
			2: {offset: 0.2},
		},
	};
	var chart = new google.visualization.PieChart(document.getElementById('piechart_3d117'));
	chart.draw(data, options);
}
function drawChart121() {
	var data = google.visualization.arrayToDataTable([
		['Teams', 'Times Won'],
		['Selected',     9],
		['Not Selected',      11]
	]);
	
	var options = {
		title: 'Kobe Bryant\'s NBA All-Defensive First Team Player vs. Years Played',
		backgroundColor:'transparent',
		titleTextStyle:{color: '#990000', fontName: 'Arial', fontSize: 15, bold:true, italic:false},
		is3D: true,
		legend:{textStyle:{color: '#990000', fontName: 'Arial', fontSize: 10, bold:true, italic:false}},
		pieSliceText: 'percentage',
		slices: {  1: {offset: 0.2},
			2: {offset: 0.2},
		},
	};
	
	var chart = new google.visualization.PieChart(document.getElementById('piechart_3d118'));
	chart.draw(data, options);
}
function drawChart122() {
	var data = google.visualization.arrayToDataTable([
		['Teams', 'Times Won'],
		['Selected',     3],
		['Not Selected',      17]
	]);
	
	var options = {
		title: 'Kobe Bryant\'s NBA All-Defensive Second Team Player vs. Years Played',
		backgroundColor:'transparent',
		titleTextStyle:{color: '#990000', fontName: 'Arial', fontSize: 15, bold:true, italic:false},
		is3D: true,
		legend:{textStyle:{color: '#990000', fontName: 'Arial', fontSize: 10, bold:true, italic:false}},
		pieSliceText: 'percentage',
		slices: {  1: {offset: 0.2},
			2: {offset: 0.2},
		},
	};
	
	var chart = new google.visualization.PieChart(document.getElementById('piechart_3d119'));
	chart.draw(data, options);
}
function drawChart123() {
	var data = google.visualization.arrayToDataTable([
		['Teams', 'Times Won'],
		['Selected',     18],
		['Not Selected',      2]
	]);
	
	var options = {
		title: 'Kobe Bryant\'s selected as a NBA All-Star Player vs. Years Played',
		backgroundColor:'transparent',
		titleTextStyle:{color: '#990000', fontName: 'Arial', fontSize: 15, bold:true, italic:false},
		is3D: true,
		legend:{textStyle:{color: '#990000', fontName: 'Arial', fontSize: 10, bold:true, italic:false}},
		pieSliceText: 'percentage',
		slices: {  1: {offset: 0.2},
			2: {offset: 0.2},
		},
	};
	
	var chart = new google.visualization.PieChart(document.getElementById('piechart_3d120'));
	chart.draw(data, options);
}
function drawChart124() {
	var data = google.visualization.arrayToDataTable([
		['Teams', 'Times Won'],
		['Selected',     4],
		['Not Selected',      11]
	]);
	
	var options = {
		title: 'Kobe Bryant\'s selected as a NBA All-Star M.V.P vs. Possible Attempts*',
		backgroundColor:'transparent',
		titleTextStyle:{color: '#990000', fontName: 'Arial', fontSize: 15, bold:true, italic:false},
		is3D: true,
		legend:{textStyle:{color: '#990000', fontName: 'Arial', fontSize: 10, bold:true, italic:false}},
		pieSliceText: 'percentage',
		slices: {  1: {offset: 0.2},
			2: {offset: 0.2},
		},
	};
	
	var chart = new google.visualization.PieChart(document.getElementById('piechart_3d121'));
	chart.draw(data, options);
}
/* */
function drawChart14() {
	var data = google.visualization.arrayToDataTable([
		['Teams', 'Times Won'],
		['Player\'s Team',     1],
		['Other Teams',      13]
	]);
	
	var options = {
		title: 'Jerry West\'s Championships vs. Years Played',
		backgroundColor:'transparent',
		titleTextStyle:{color: '#990000', fontName: 'Arial', fontSize: 15, bold:true, italic:false},
		is3D: true,
		legend:{textStyle:{color: '#990000', fontName: 'Arial', fontSize: 10, bold:true, italic:false}},
		pieSliceText: 'percentage',
		slices: {  1: {offset: 0.2},
			2: {offset: 0.2},
		},
	};
	
	var chart = new google.visualization.PieChart(document.getElementById('piechart_3d11'));
	chart.draw(data, options);
}
function drawChart125() {
	var data = google.visualization.arrayToDataTable([
		['Teams', 'Times Won'],
		['Player\'s Team',     1],
		['Other Teams',      8]
	]);
	
	var options = {
		title: 'Jerry West\'s Championships vs. NBA Finals Appearances',
		backgroundColor:'transparent',
		titleTextStyle:{color: '#990000', fontName: 'Arial', fontSize: 15, bold:true, italic:false},
		is3D: true,
		legend:{textStyle:{color: '#990000', fontName: 'Arial', fontSize: 10, bold:true, italic:false}},
		pieSliceText: 'percentage',
		slices: {  1: {offset: 0.2},
			2: {offset: 0.2},
		},
	};
	
	var chart = new google.visualization.PieChart(document.getElementById('piechart_3d122'));
	chart.draw(data, options);
}
function drawChart126() {
	var data = google.visualization.arrayToDataTable([
		['Teams', 'Times Won'],
		['Player',     1],
		['Other Players',      3]
	]);
	//not until 1968-69 season playoff mvp
	var options = {
		title: 'Jerry West\'s NBA Finals M.V.P Awards vs. Possible Attempts*',
		backgroundColor:'transparent',
		titleTextStyle:{color: '#990000', fontName: 'Arial', fontSize: 15, bold:true, italic:false},
		is3D: true,
		legend:{textStyle:{color: '#990000', fontName: 'Arial', fontSize: 10, bold:true, italic:false}},
		pieSliceText: 'percentage',
		slices: {  1: {offset: 0.2},
			2: {offset: 0.2},
		},
	};
	
	var chart = new google.visualization.PieChart(document.getElementById('piechart_3d123'));
	chart.draw(data, options);
}
function drawChart127() {
	var data = google.visualization.arrayToDataTable([
		['Teams', 'Times Won'],
		['Player',     1],
		['Other Players',      13]
	]);
	
	var options = {
		title: 'Jerry West\'s Scoring Titles vs. Years Played',
		backgroundColor:'transparent',
		titleTextStyle:{color: '#990000', fontName: 'Arial', fontSize: 15, bold:true, italic:false},
		is3D: true,
		legend:{textStyle:{color: '#990000', fontName: 'Arial', fontSize: 10, bold:true, italic:false}},
		pieSliceText: 'percentage',
		slices: {  1: {offset: 0.2},
			2: {offset: 0.2},
		},
	};
	
	var chart = new google.visualization.PieChart(document.getElementById('piechart_3d124'));
	chart.draw(data, options);
}
function drawChart128() {
	var data = google.visualization.arrayToDataTable([
		['Teams', 'Times Won'],
		['Player',     1],
		['Other Players',      13]
	]);
	
	var options = {
		title: 'Jerry West\'s Assists Titles vs. Years Played',
		backgroundColor:'transparent',
		titleTextStyle:{color: '#990000', fontName: 'Arial', fontSize: 15, bold:true, italic:false},
		is3D: true,
		legend:{textStyle:{color: '#990000', fontName: 'Arial', fontSize: 10, bold:true, italic:false}},
		pieSliceText: 'percentage',
		slices: {  1: {offset: 0.2},
			2: {offset: 0.2},
		},
	};
	
	var chart = new google.visualization.PieChart(document.getElementById('piechart_3d125'));
	chart.draw(data, options);
}
function drawChart129() {
	var data = google.visualization.arrayToDataTable([
		['Teams', 'Times Won'],
		['Selected',     10],
		['Not Selected',      4]
	]);
	
	var options = {
		title: 'Jerry West\'s NBA First Team Player vs. Years Played',
		backgroundColor:'transparent',
		titleTextStyle:{color: '#990000', fontName: 'Arial', fontSize: 15, bold:true, italic:false},
		is3D: true,
		legend:{textStyle:{color: '#990000', fontName: 'Arial', fontSize: 10, bold:true, italic:false}},
		pieSliceText: 'percentage',
		slices: {  1: {offset: 0.2},
			2: {offset: 0.2},
		},
	};
	
	var chart = new google.visualization.PieChart(document.getElementById('piechart_3d126'));
	chart.draw(data, options);
}
function drawChart130() {
	var data = google.visualization.arrayToDataTable([
		['Teams', 'Times Won'],
		['Selected',     2],
		['Not Selected',      12]
	]);
	
	var options = {
		title: 'Jerry West\'s NBA Second Team Player vs. Years Played',
		backgroundColor:'transparent',
		titleTextStyle:{color: '#990000', fontName: 'Arial', fontSize: 15, bold:true, italic:false},
		is3D: true,
		legend:{textStyle:{color: '#990000', fontName: 'Arial', fontSize: 10, bold:true, italic:false}},
		pieSliceText: 'percentage',
		slices: {  1: {offset: 0.2},
			2: {offset: 0.2},
		},
	};
	
	var chart = new google.visualization.PieChart(document.getElementById('piechart_3d127'));
	chart.draw(data, options);
}
function drawChart131() {
	var data = google.visualization.arrayToDataTable([
		['Teams', 'Times Won'],
		['Selected',     4],
		['Not Selected',      10]
	]);
	
	var options = {
		title: 'Jerry West\'s NBA All-Defensive First Team Player vs. Years Played',
		backgroundColor:'transparent',
		titleTextStyle:{color: '#990000', fontName: 'Arial', fontSize: 15, bold:true, italic:false},
		is3D: true,
		legend:{textStyle:{color: '#990000', fontName: 'Arial', fontSize: 10, bold:true, italic:false}},
		pieSliceText: 'percentage',
		slices: {  1: {offset: 0.2},
			2: {offset: 0.2},
		},
	};
	
	var chart = new google.visualization.PieChart(document.getElementById('piechart_3d128'));
	chart.draw(data, options);
}
function drawChart132() {
	var data = google.visualization.arrayToDataTable([
		['Teams', 'Times Won'],
		['Selected',     1],
		['Not Selected',      13]
	]);
	
	var options = {
		title: 'Jerry West\'s NBA All-Defensive Second Team Player vs. Years Played',
		backgroundColor:'transparent',
		titleTextStyle:{color: '#990000', fontName: 'Arial', fontSize: 15, bold:true, italic:false},
		is3D: true,
		legend:{textStyle:{color: '#990000', fontName: 'Arial', fontSize: 10, bold:true, italic:false}},
		pieSliceText: 'percentage',
		slices: {  1: {offset: 0.2},
			2: {offset: 0.2},
		},
	};
	var chart = new google.visualization.PieChart(document.getElementById('piechart_3d129'));
	chart.draw(data, options);
}
function drawChart133() {
	var data = google.visualization.arrayToDataTable([
		['Teams', 'Times Won'],
		['Selected',     14],
		['Not Selected',      0]
	]);
	
	var options = {
		title: 'Jerry West\'s selected as a NBA All-Star Player vs. Years Played',
		backgroundColor:'transparent',
		titleTextStyle:{color: '#990000', fontName: 'Arial', fontSize: 15, bold:true, italic:false},
		is3D: true,
		legend:{textStyle:{color: '#990000', fontName: 'Arial', fontSize: 10, bold:true, italic:false}},
		pieSliceText: 'percentage',
		slices: {  1: {offset: 0.2},
			2: {offset: 0.2},
		},
	};
	
	var chart = new google.visualization.PieChart(document.getElementById('piechart_3d130'));
	chart.draw(data, options);
}
function drawChart134() {
	var data = google.visualization.arrayToDataTable([
		['Teams', 'Times Won'],
		['Selected',     1],
		['Not Selected',      11]
	]);
	
	var options = {
		title: 'Jerry West\'s selected as a NBA All-Star M.V.P vs. Possible Attempts*',
		backgroundColor:'transparent',
		titleTextStyle:{color: '#990000', fontName: 'Arial', fontSize: 15, bold:true, italic:false},
		is3D: true,
		legend:{textStyle:{color: '#990000', fontName: 'Arial', fontSize: 10, bold:true, italic:false}},
		pieSliceText: 'percentage',
		slices: {  1: {offset: 0.2},
			2: {offset: 0.2},
		},
	};
	
	var chart = new google.visualization.PieChart(document.getElementById('piechart_3d131'));
	chart.draw(data, options);
}
function drawChart15() {
	var data = google.visualization.arrayToDataTable([
		['Teams', 'Times Won'],
		['Player\'s Team',     0],
		['Other Teams',      14]
	]);
	
	var options = {
		title: 'Elgin Baylor\'s Championships vs. Years Played',
		backgroundColor:'transparent',
		titleTextStyle:{color: '#990000', fontName: 'Arial', fontSize: 15, bold:true, italic:false},
		is3D: true,
		legend:{textStyle:{color: '#990000', fontName: 'Arial', fontSize: 10, bold:true, italic:false}},
		pieSliceText: 'percentage',
		slices: {  1: {offset: 0.2},
			2: {offset: 0.2},
		},
	};
	
	var chart = new google.visualization.PieChart(document.getElementById('piechart_3d12'));
	chart.draw(data, options);
}
function drawChart135() {
	var data = google.visualization.arrayToDataTable([
		['Teams', 'Times Won'],
		['Selected',     10],
		['Not Selected',      4]
	]);
	
	var options = {
		title: 'Elgin Baylor\'s times NBA First Team Player vs. Years Played',
		backgroundColor:'transparent',
		titleTextStyle:{color: '#990000', fontName: 'Arial', fontSize: 15, bold:true, italic:false},
		is3D: true,
		legend:{textStyle:{color: '#990000', fontName: 'Arial', fontSize: 10, bold:true, italic:false}},
		pieSliceText: 'percentage',
		slices: {  1: {offset: 0.2},
			2: {offset: 0.2},
		},
	};
	
	var chart = new google.visualization.PieChart(document.getElementById('piechart_3d132'));
	chart.draw(data, options);
}
function drawChart136() {
	var data = google.visualization.arrayToDataTable([
		['Teams', 'Times Won'],
		['Selected',     11],
		['Not Selected',      3]
	]);
	
	var options = {
		title: 'Elgin Baylor\'s times NBA All-Star Player vs. Years Played',
		backgroundColor:'transparent',
		titleTextStyle:{color: '#990000', fontName: 'Arial', fontSize: 15, bold:true, italic:false},
		is3D: true,
		legend:{textStyle:{color: '#990000', fontName: 'Arial', fontSize: 10, bold:true, italic:false}},
		pieSliceText: 'percentage',
		slices: {  1: {offset: 0.2},
			2: {offset: 0.2},
		},
	};
	
	var chart = new google.visualization.PieChart(document.getElementById('piechart_3d133'));
	chart.draw(data, options);
}
function drawChart137() {
	var data = google.visualization.arrayToDataTable([
		['Teams', 'Times Won'],
		['Selected',     1],
		['Not Selected',      13]
	]);
	
	var options = {
		title: 'Elgin Baylor\'s times NBA All-Star M.V.P vs. Possibe Attempts',
		backgroundColor:'transparent',
		titleTextStyle:{color: '#990000', fontName: 'Arial', fontSize: 15, bold:true, italic:false},
		is3D: true,
		legend:{textStyle:{color: '#990000', fontName: 'Arial', fontSize: 10, bold:true, italic:false}},
		pieSliceText: 'percentage',
		slices: {  1: {offset: 0.2},
			2: {offset: 0.2},
		},
	};
	
	var chart = new google.visualization.PieChart(document.getElementById('piechart_3d134'));
	chart.draw(data, options);
}
function drawChart16() {
	var data = google.visualization.arrayToDataTable([
		['Teams', 'Times Won'],
		['Player\'s Team',     2],
		['Other Teams',      16]
	]);
	
	var options = {
		title: 'Hakeem Olajuwon\'s Championships vs. Years Played',
		backgroundColor:'transparent',
		titleTextStyle:{color: '#990000', fontName: 'Arial', fontSize: 15, bold:true, italic:false},
		is3D: true,
		legend:{textStyle:{color: '#990000', fontName: 'Arial', fontSize: 10, bold:true, italic:false}},
		pieSliceText: 'percentage',
		slices: {  1: {offset: 0.2},
			2: {offset: 0.2},
		},
	};
	
	var chart = new google.visualization.PieChart(document.getElementById('piechart_3d13'));
	chart.draw(data, options);
}
function drawChart138() {
	var data = google.visualization.arrayToDataTable([
		['Teams', 'Times Won'],
		['Player\'s Team',     2],
		['Other Teams',      1]
	]);
	
	var options = {
		title: 'Hakeem Olajuwon\'s Championships vs. NBA Finals Appearances',
		backgroundColor:'transparent',
		titleTextStyle:{color: '#990000', fontName: 'Arial', fontSize: 15, bold:true, italic:false},
		is3D: true,
		legend:{textStyle:{color: '#990000', fontName: 'Arial', fontSize: 10, bold:true, italic:false}},
		pieSliceText: 'percentage',
		slices: {  1: {offset: 0.2},
			2: {offset: 0.2},
		},
	};
	
	var chart = new google.visualization.PieChart(document.getElementById('piechart_3d135'));
	chart.draw(data, options);
}
function drawChart139() {
	var data = google.visualization.arrayToDataTable([
		['Teams', 'Times Won'],
		['Player',     2],
		['Other Players',      1]
	]);
	
	var options = {
		title: 'Hakeem Olajuwon\'s NBA Finals M.V.P Award vs. NBA Finals Appearances',
		backgroundColor:'transparent',
		titleTextStyle:{color: '#990000', fontName: 'Arial', fontSize: 15, bold:true, italic:false},
		is3D: true,
		legend:{textStyle:{color: '#990000', fontName: 'Arial', fontSize: 10, bold:true, italic:false}},
		pieSliceText: 'percentage',
		slices: {  1: {offset: 0.2},
			2: {offset: 0.2},
		},
	};
	
	var chart = new google.visualization.PieChart(document.getElementById('piechart_3d136'));
	chart.draw(data, options);
}
function drawChart140() {
	var data = google.visualization.arrayToDataTable([
		['Teams', 'Times Won'],
		['Player',     1],
		['Other Players',      18]
	]);
	
	var options = {
		title: 'Hakeem Olajuwon\'s NBA Regular Season M.V.P Award vs. Years Played',
		backgroundColor:'transparent',
		titleTextStyle:{color: '#990000', fontName: 'Arial', fontSize: 15, bold:true, italic:false},
		is3D: true,
		legend:{textStyle:{color: '#990000', fontName: 'Arial', fontSize: 10, bold:true, italic:false}},
		pieSliceText: 'percentage',
		slices: {  1: {offset: 0.2},
			2: {offset: 0.2},
		},
	};
	
	var chart = new google.visualization.PieChart(document.getElementById('piechart_3d137'));
	chart.draw(data, options);
}
function drawChart141() {
	var data = google.visualization.arrayToDataTable([
		['Teams', 'Times Won'],
		['Player',     2],
		['Other Players',      17]
	]);
	
	var options = {
		title: 'Hakeem Olajuwon\'s NBA Defensive Player of the Year Awards vs. Years Played',
		backgroundColor:'transparent',
		titleTextStyle:{color: '#990000', fontName: 'Arial', fontSize: 15, bold:true, italic:false},
		is3D: true,
		legend:{textStyle:{color: '#990000', fontName: 'Arial', fontSize: 10, bold:true, italic:false}},
		pieSliceText: 'percentage',
		slices: {  1: {offset: 0.2},
			2: {offset: 0.2},
		},
	};
	
	var chart = new google.visualization.PieChart(document.getElementById('piechart_3d138'));
	chart.draw(data, options);
}
function drawChart142() {
	var data = google.visualization.arrayToDataTable([
		['Teams', 'Times Won'],
		['Player',     2],
		['Other Players',      17]
	]);
	
	var options = {
		title: 'Hakeem Olajuwon\'s Rebounding Titles vs. Years Played',
		backgroundColor:'transparent',
		titleTextStyle:{color: '#990000', fontName: 'Arial', fontSize: 15, bold:true, italic:false},
		is3D: true,
		legend:{textStyle:{color: '#990000', fontName: 'Arial', fontSize: 10, bold:true, italic:false}},
		pieSliceText: 'percentage',
		slices: {  1: {offset: 0.2},
			2: {offset: 0.2},
		},
	};
	
	var chart = new google.visualization.PieChart(document.getElementById('piechart_3d139'));
	chart.draw(data, options);
}
function drawChart143() {
	var data = google.visualization.arrayToDataTable([
		['Teams', 'Times Won'],
		['Player',     3],
		['Other Players',      16]
	]);
	
	var options = {
		title: 'Hakeem Olajuwon\'s Blocking Titles vs. Years Played',
		backgroundColor:'transparent',
		titleTextStyle:{color: '#990000', fontName: 'Arial', fontSize: 15, bold:true, italic:false},
		is3D: true,
		legend:{textStyle:{color: '#990000', fontName: 'Arial', fontSize: 10, bold:true, italic:false}},
		pieSliceText: 'percentage',
		slices: {  1: {offset: 0.2},
			2: {offset: 0.2},
		},
	};
	
	var chart = new google.visualization.PieChart(document.getElementById('piechart_3d140'));
	chart.draw(data, options);
}
function drawChart144() {
	var data = google.visualization.arrayToDataTable([
		['Teams', 'Times Won'],
		['Player',     6],
		['Other Players',      13]
	]);
	
	var options = {
		title: 'Hakeem Olajuwon\'s times selected as a NBA First Team Player vs. Years Played',
		backgroundColor:'transparent',
		titleTextStyle:{color: '#990000', fontName: 'Arial', fontSize: 15, bold:true, italic:false},
		is3D: true,
		legend:{textStyle:{color: '#990000', fontName: 'Arial', fontSize: 10, bold:true, italic:false}},
		pieSliceText: 'percentage',
		slices: {  1: {offset: 0.2},
			2: {offset: 0.2},
		},
	};
	
	var chart = new google.visualization.PieChart(document.getElementById('piechart_3d141'));
	chart.draw(data, options);
}
function drawChart145() {
	var data = google.visualization.arrayToDataTable([
		['Teams', 'Times Won'],
		['Player',     3],
		['Other Players',      16]
	]);
	
	var options = {
		title: 'Hakeem Olajuwon\'s times selected as a NBA Second Team Player vs. Years Played',
		backgroundColor:'transparent',
		titleTextStyle:{color: '#990000', fontName: 'Arial', fontSize: 15, bold:true, italic:false},
		is3D: true,
		legend:{textStyle:{color: '#990000', fontName: 'Arial', fontSize: 10, bold:true, italic:false}},
		pieSliceText: 'percentage',
		slices: {  1: {offset: 0.2},
			2: {offset: 0.2},
		},
	};
	
	var chart = new google.visualization.PieChart(document.getElementById('piechart_3d142'));
	chart.draw(data, options);
}
function drawChart146() {
	var data = google.visualization.arrayToDataTable([
		['Teams', 'Times Won'],
		['Player',     3],
		['Other Players',      16]
	]);
	
	var options = {
		title: 'Hakeem Olajuwon\'s times selected as a NBA Third Team Player vs. Years Played',
		backgroundColor:'transparent',
		titleTextStyle:{color: '#990000', fontName: 'Arial', fontSize: 15, bold:true, italic:false},
		is3D: true,
		legend:{textStyle:{color: '#990000', fontName: 'Arial', fontSize: 10, bold:true, italic:false}},
		pieSliceText: 'percentage',
		slices: {  1: {offset: 0.2},
			2: {offset: 0.2},
		},
	};
	
	var chart = new google.visualization.PieChart(document.getElementById('piechart_3d143'));
	chart.draw(data, options);
}
function drawChart147() {
	var data = google.visualization.arrayToDataTable([
		['Teams', 'Times Won'],
		['Player',     5],
		['Other Players',      14]
	]);
	
	var options = {
		title: 'Hakeem Olajuwon\'s times selected as a NBA All-Defensive First Team Player vs. Years Played',
		backgroundColor:'transparent',
		titleTextStyle:{color: '#990000', fontName: 'Arial', fontSize: 15, bold:true, italic:false},
		is3D: true,
		legend:{textStyle:{color: '#990000', fontName: 'Arial', fontSize: 10, bold:true, italic:false}},
		pieSliceText: 'percentage',
		slices: {  1: {offset: 0.2},
			2: {offset: 0.2},
		},
	};
	
	var chart = new google.visualization.PieChart(document.getElementById('piechart_3d144'));
	chart.draw(data, options);
}
function drawChart148() {
	var data = google.visualization.arrayToDataTable([
		['Teams', 'Times Won'],
		['Player',     4],
		['Other Players',      15]
	]);
	
	var options = {
		title: 'Hakeem Olajuwon\'s times selected as a NBA All-Defensive Second Team Player vs. Years Played',
		backgroundColor:'transparent',
		titleTextStyle:{color: '#990000', fontName: 'Arial', fontSize: 15, bold:true, italic:false},
		is3D: true,
		legend:{textStyle:{color: '#990000', fontName: 'Arial', fontSize: 10, bold:true, italic:false}},
		pieSliceText: 'percentage',
		slices: {  1: {offset: 0.2},
			2: {offset: 0.2},
		},
	};
	
	var chart = new google.visualization.PieChart(document.getElementById('piechart_3d145'));
	chart.draw(data, options);
}
function drawChart149() {
	var data = google.visualization.arrayToDataTable([
		['Teams', 'Times Won'],
		['Player',     12],
		['Other Players',      7]
	]);
	
	var options = {
		title: 'Hakeem Olajuwon\'s times selected as a NBA All-Star Player vs. Years Played',
		backgroundColor:'transparent',
		titleTextStyle:{color: '#990000', fontName: 'Arial', fontSize: 15, bold:true, italic:false},
		is3D: true,
		legend:{textStyle:{color: '#990000', fontName: 'Arial', fontSize: 10, bold:true, italic:false}},
		pieSliceText: 'percentage',
		slices: {  1: {offset: 0.2},
			2: {offset: 0.2},
		},
	};
	var chart = new google.visualization.PieChart(document.getElementById('piechart_3d146'));
	chart.draw(data, options);
}
/* */
function drawChart17() {
	var data = google.visualization.arrayToDataTable([
		['Teams', 'Times Won'],
		['Player\'s Team',     1],
		['Other Teams',      10]
	]);
	
	var options = {
		title: 'Bob Petit\'s Championships vs. Years Played',
		backgroundColor:'transparent',
		titleTextStyle:{color: '#990000', fontName: 'Arial', fontSize: 15, bold:true, italic:false},
		is3D: true,
		legend:{textStyle:{color: '#990000', fontName: 'Arial', fontSize: 10, bold:true, italic:false}},
		pieSliceText: 'percentage',
		slices: {  1: {offset: 0.2},
			2: {offset: 0.2},
		},
	};
	
	var chart = new google.visualization.PieChart(document.getElementById('piechart_3d14'));
	chart.draw(data, options);
}
function drawChart150() {
	var data = google.visualization.arrayToDataTable([
		['Teams', 'Times Won'],
		['Player\'s Team',     1],
		['Other Teams',      3]
	]);
	
	var options = {
		title: 'Bob Petit\'s Championships vs. NBA Finals Appearances',
		backgroundColor:'transparent',
		titleTextStyle:{color: '#990000', fontName: 'Arial', fontSize: 15, bold:true, italic:false},
		is3D: true,
		legend:{textStyle:{color: '#990000', fontName: 'Arial', fontSize: 10, bold:true, italic:false}},
		pieSliceText: 'percentage',
		slices: {  1: {offset: 0.2},
			2: {offset: 0.2},
		},
	};
	
	var chart = new google.visualization.PieChart(document.getElementById('piechart_3d147'));
	chart.draw(data, options);
}
function drawChart151() {
	var data = google.visualization.arrayToDataTable([
		['Teams', 'Times Won'],
		['Player',     2],
		['Other Players',      9]
	]);
	
	var options = {
		title: 'Bob Petit\'s Regular Season M.V.P vs. Years Played',
		backgroundColor:'transparent',
		titleTextStyle:{color: '#990000', fontName: 'Arial', fontSize: 15, bold:true, italic:false},
		is3D: true,
		legend:{textStyle:{color: '#990000', fontName: 'Arial', fontSize: 10, bold:true, italic:false}},
		pieSliceText: 'percentage',
		slices: {  1: {offset: 0.2},
			2: {offset: 0.2},
		},
	};
	
	var chart = new google.visualization.PieChart(document.getElementById('piechart_3d148'));
	chart.draw(data, options);
}
function drawChart152() {
	var data = google.visualization.arrayToDataTable([
		['Teams', 'Times Won'],
		['Player',     2],
		['Other Players',      9]
	]);
	
	var options = {
		title: 'Bob Petit\'s Scoring Titles vs. Years Played',
		backgroundColor:'transparent',
		titleTextStyle:{color: '#990000', fontName: 'Arial', fontSize: 15, bold:true, italic:false},
		is3D: true,
		legend:{textStyle:{color: '#990000', fontName: 'Arial', fontSize: 10, bold:true, italic:false}},
		pieSliceText: 'percentage',
		slices: {  1: {offset: 0.2},
			2: {offset: 0.2},
		},
	};
	
	var chart = new google.visualization.PieChart(document.getElementById('piechart_3d149'));
	chart.draw(data, options);
}
function drawChart153() {
	var data = google.visualization.arrayToDataTable([
		['Teams', 'Times Won'],
		['Player',     1],
		['Other Players',      10]
	]);
	
	var options = {
		title: 'Bob Petit\'s Rebounding Titles vs. Years Played',
		backgroundColor:'transparent',
		titleTextStyle:{color: '#990000', fontName: 'Arial', fontSize: 15, bold:true, italic:false},
		is3D: true,
		legend:{textStyle:{color: '#990000', fontName: 'Arial', fontSize: 10, bold:true, italic:false}},
		pieSliceText: 'percentage',
		slices: {  1: {offset: 0.2},
			2: {offset: 0.2},
		},
	};
	
	var chart = new google.visualization.PieChart(document.getElementById('piechart_3d150'));
	chart.draw(data, options);
}
function drawChart154() {
	var data = google.visualization.arrayToDataTable([
		['Teams', 'Times Won'],
		['Selected',     10],
		['Not Selected',      1]
	]);
	
	var options = {
		title: 'Bob Petit\'s selected as a NBA First Team Player vs. Years Played',
		backgroundColor:'transparent',
		titleTextStyle:{color: '#990000', fontName: 'Arial', fontSize: 15, bold:true, italic:false},
		is3D: true,
		legend:{textStyle:{color: '#990000', fontName: 'Arial', fontSize: 10, bold:true, italic:false}},
		pieSliceText: 'percentage',
		slices: {  1: {offset: 0.2},
			2: {offset: 0.2},
		},
	};
	
	var chart = new google.visualization.PieChart(document.getElementById('piechart_3d151'));
	chart.draw(data, options);
}
function drawChart155() {
	var data = google.visualization.arrayToDataTable([
		['Teams', 'Times Won'],
		['Selected',     1],
		['Not Selected',      10]
	]);
	
	var options = {
		title: 'Bob Petit\'s selected as a NBA Second Team Player vs. Years Played',
		backgroundColor:'transparent',
		titleTextStyle:{color: '#990000', fontName: 'Arial', fontSize: 15, bold:true, italic:false},
		is3D: true,
		legend:{textStyle:{color: '#990000', fontName: 'Arial', fontSize: 10, bold:true, italic:false}},
		pieSliceText: 'percentage',
		slices: {  1: {offset: 0.2},
			2: {offset: 0.2},
		},
	};
	
	var chart = new google.visualization.PieChart(document.getElementById('piechart_3d152'));
	chart.draw(data, options);
}
function drawChart156() {
	var data = google.visualization.arrayToDataTable([
		['Teams', 'Times Won'],
		['Selected',     11],
		['Not Selected',      0]
	]);
	
	var options = {
		title: 'Bob Petit\'s selected as a NBA All-Star Player vs. Years Played',
		backgroundColor:'transparent',
		titleTextStyle:{color: '#990000', fontName: 'Arial', fontSize: 15, bold:true, italic:false},
		is3D: true,
		legend:{textStyle:{color: '#990000', fontName: 'Arial', fontSize: 10, bold:true, italic:false}},
		pieSliceText: 'percentage',
		slices: {  1: {offset: 0.2},
			2: {offset: 0.2},
		},
	};
	var chart = new google.visualization.PieChart(document.getElementById('piechart_3d153'));
	chart.draw(data, options);
}
function drawChart157() {
	var data = google.visualization.arrayToDataTable([
		['Teams', 'Times Won'],
		['Selected',     4],
		['Not Selected',      7]
	]);
	
	var options = {
		title: 'Bob Petit\'s selected as a NBA All-Star M.V.P vs. Possible Attempts',
		backgroundColor:'transparent',
		titleTextStyle:{color: '#990000', fontName: 'Arial', fontSize: 15, bold:true, italic:false},
		is3D: true,
		legend:{textStyle:{color: '#990000', fontName: 'Arial', fontSize: 10, bold:true, italic:false}},
		pieSliceText: 'percentage',
		slices: {  1: {offset: 0.2},
			2: {offset: 0.2},
		},
	};
	
	var chart = new google.visualization.PieChart(document.getElementById('piechart_3d154'));
	chart.draw(data, options);
}
/* */
function drawChart18() {
	var data = google.visualization.arrayToDataTable([
		['Teams', 'Times Won'],
		['Player\'s Team',     1],
		['Other Teams',      18]
	]);
	
	var options = {
		title: 'Moses Malone\'s Championships vs. Years Played',
		backgroundColor:'transparent',
		titleTextStyle:{color: '#990000', fontName: 'Arial', fontSize: 15, bold:true, italic:false},
		is3D: true,
		legend:{textStyle:{color: '#990000', fontName: 'Arial', fontSize: 10, bold:true, italic:false}},
		pieSliceText: 'percentage',
		slices: {  1: {offset: 0.2},
			2: {offset: 0.2},
		},
	};
	
	var chart = new google.visualization.PieChart(document.getElementById('piechart_3d15'));
	chart.draw(data, options);
}
function drawChart158() {
	var data = google.visualization.arrayToDataTable([
		['Teams', 'Times Won'],
		['Player\'s Team',     1],
		['Other Teams',      1]
	]);
	
	var options = {
		title: 'Moses Malone\'s Championships vs. NBA Finals Appearances',
		backgroundColor:'transparent',
		titleTextStyle:{color: '#990000', fontName: 'Arial', fontSize: 15, bold:true, italic:false},
		is3D: true,
		legend:{textStyle:{color: '#990000', fontName: 'Arial', fontSize: 10, bold:true, italic:false}},
		pieSliceText: 'percentage',
		slices: {  1: {offset: 0.2},
			2: {offset: 0.2},
		},
	};
	
	var chart = new google.visualization.PieChart(document.getElementById('piechart_3d155'));
	chart.draw(data, options);
}
function drawChart159() {
	var data = google.visualization.arrayToDataTable([
		['Teams', 'Times Won'],
		['Player',     1],
		['Other Player',      1]
	]);
	
	var options = {
		title: 'Moses Malone\'s NBA Finals M.V.P Awards vs. NBA Finals Appearances',
		backgroundColor:'transparent',
		titleTextStyle:{color: '#990000', fontName: 'Arial', fontSize: 15, bold:true, italic:false},
		is3D: true,
		legend:{textStyle:{color: '#990000', fontName: 'Arial', fontSize: 10, bold:true, italic:false}},
		pieSliceText: 'percentage',
		slices: {  1: {offset: 0.2},
			2: {offset: 0.2},
		},
	};
	
	var chart = new google.visualization.PieChart(document.getElementById('piechart_3d156'));
	chart.draw(data, options);
}
function drawChart160() {
	var data = google.visualization.arrayToDataTable([
		['Teams', 'Times Won'],
		['Player',     3],
		['Other Player',      19]
	]);
	
	var options = {
		title: 'Moses Malone\'s NBA Regular Season M.V.P Awards vs. Years Played',
		backgroundColor:'transparent',
		titleTextStyle:{color: '#990000', fontName: 'Arial', fontSize: 15, bold:true, italic:false},
		is3D: true,
		legend:{textStyle:{color: '#990000', fontName: 'Arial', fontSize: 10, bold:true, italic:false}},
		pieSliceText: 'percentage',
		slices: {  1: {offset: 0.2},
			2: {offset: 0.2},
		},
	};
	
	var chart = new google.visualization.PieChart(document.getElementById('piechart_3d157'));
	chart.draw(data, options);
}
function drawChart161() {
	var data = google.visualization.arrayToDataTable([
		['Teams', 'Times Won'],
		['Player',     6],
		['Other Player',      13]
	]);
	
	var options = {
		title: 'Moses Malone\'s Rebounding Titles vs. Years Played',
		backgroundColor:'transparent',
		titleTextStyle:{color: '#990000', fontName: 'Arial', fontSize: 15, bold:true, italic:false},
		is3D: true,
		legend:{textStyle:{color: '#990000', fontName: 'Arial', fontSize: 10, bold:true, italic:false}},
		pieSliceText: 'percentage',
		slices: {  1: {offset: 0.2},
			2: {offset: 0.2},
		},
	};
	
	var chart = new google.visualization.PieChart(document.getElementById('piechart_3d158'));
	chart.draw(data, options);
}
function drawChart162() {
	var data = google.visualization.arrayToDataTable([
		['Teams', 'Times Won'],
		['Selected',     4],
		['Not Selected',      15]
	]);
	
	var options = {
		title: 'Moses Malone\'s times selected as NBA First Team Player vs. Years Played',
		backgroundColor:'transparent',
		titleTextStyle:{color: '#990000', fontName: 'Arial', fontSize: 15, bold:true, italic:false},
		is3D: true,
		legend:{textStyle:{color: '#990000', fontName: 'Arial', fontSize: 10, bold:true, italic:false}},
		pieSliceText: 'percentage',
		slices: {  1: {offset: 0.2},
			2: {offset: 0.2},
		},
	};
	
	var chart = new google.visualization.PieChart(document.getElementById('piechart_3d159'));
	chart.draw(data, options);
}
function drawChart163() {
	var data = google.visualization.arrayToDataTable([
		['Teams', 'Times Won'],
		['Selected',     4],
		['Not Selected',      15]
	]);
	
	var options = {
		title: 'Moses Malone\'s times selected as NBA Second Team Player vs. Years Played',
		backgroundColor:'transparent',
		titleTextStyle:{color: '#990000', fontName: 'Arial', fontSize: 15, bold:true, italic:false},
		is3D: true,
		legend:{textStyle:{color: '#990000', fontName: 'Arial', fontSize: 10, bold:true, italic:false}},
		pieSliceText: 'percentage',
		slices: {  1: {offset: 0.2},
			2: {offset: 0.2},
		},
	};
	
	var chart = new google.visualization.PieChart(document.getElementById('piechart_3d160'));
	chart.draw(data, options);
}
function drawChart164() {
	var data = google.visualization.arrayToDataTable([
		['Teams', 'Times Won'],
		['Selected',     1],
		['Not Selected',      18]
	]);
	
	var options = {
		title: 'Moses Malone\'s times selected as NBA All-Defensive First Team Player vs. Years Played',
		backgroundColor:'transparent',
		titleTextStyle:{color: '#990000', fontName: 'Arial', fontSize: 15, bold:true, italic:false},
		is3D: true,
		legend:{textStyle:{color: '#990000', fontName: 'Arial', fontSize: 10, bold:true, italic:false}},
		pieSliceText: 'percentage',
		slices: {  1: {offset: 0.2},
			2: {offset: 0.2},
		},
	};
	
	var chart = new google.visualization.PieChart(document.getElementById('piechart_3d161'));
	chart.draw(data, options);
}
function drawChart165() {
	var data = google.visualization.arrayToDataTable([
		['Teams', 'Times Won'],
		['Selected',     1],
		['Not Selected',      18]
	]);
	
	var options = {
		title: 'Moses Malone\'s times selected as NBA All-Defensive Second Team Player vs. Years Played',
		backgroundColor:'transparent',
		titleTextStyle:{color: '#990000', fontName: 'Arial', fontSize: 15, bold:true, italic:false},
		is3D: true,
		legend:{textStyle:{color: '#990000', fontName: 'Arial', fontSize: 10, bold:true, italic:false}},
		pieSliceText: 'percentage',
		slices: {  1: {offset: 0.2},
			2: {offset: 0.2},
		},
	};
	
	var chart = new google.visualization.PieChart(document.getElementById('piechart_3d162'));
	chart.draw(data, options);
}
function drawChart166() {
	var data = google.visualization.arrayToDataTable([
		['Teams', 'Times Won'],
		['Selected',     12],
		['Not Selected',      7]
	]);
	
	var options = {
		title: 'Moses Malone\'s times selected as NBA All-Star Player vs. Years Played',
		backgroundColor:'transparent',
		titleTextStyle:{color: '#990000', fontName: 'Arial', fontSize: 15, bold:true, italic:false},
		is3D: true,
		legend:{textStyle:{color: '#990000', fontName: 'Arial', fontSize: 10, bold:true, italic:false}},
		pieSliceText: 'percentage',
		slices: {  1: {offset: 0.2},
			2: {offset: 0.2},
		},
	};
	
	var chart = new google.visualization.PieChart(document.getElementById('piechart_3d163'));
	chart.draw(data, options);
}
/* */
function drawChart19() {
	var data = google.visualization.arrayToDataTable([
		['Teams', 'Times Won'],
		['Player\'s Team',     1],
		['Other Teams',      10]
	]);
	
	var options = {
		title: 'Julius Erving\'s Championships vs. Years Played',
		backgroundColor:'transparent',
		titleTextStyle:{color: '#990000', fontName: 'Arial', fontSize: 15, bold:true, italic:false},
		is3D: true,
		legend:{textStyle:{color: '#990000', fontName: 'Arial', fontSize: 10, bold:true, italic:false}},
		pieSliceText: 'percentage',
		slices: {  1: {offset: 0.2},
			2: {offset: 0.2},
		},
	};
	
	var chart = new google.visualization.PieChart(document.getElementById('piechart_3d16'));
	chart.draw(data, options);
}
function drawChart167() {
	var data = google.visualization.arrayToDataTable([
		['Teams', 'Times Won'],
		['Player\'s Team',     1],
		['Other Teams',      3]
	]);
	
	var options = {
		title: 'Julius Erving\'s Championships vs. NBA Finals Appearances',
		backgroundColor:'transparent',
		titleTextStyle:{color: '#990000', fontName: 'Arial', fontSize: 15, bold:true, italic:false},
		is3D: true,
		legend:{textStyle:{color: '#990000', fontName: 'Arial', fontSize: 10, bold:true, italic:false}},
		pieSliceText: 'percentage',
		slices: {  1: {offset: 0.2},
			2: {offset: 0.2},
		},
	};
	
	var chart = new google.visualization.PieChart(document.getElementById('piechart_3d164'));
	chart.draw(data, options);
}
function drawChart168() {
	var data = google.visualization.arrayToDataTable([
		['Teams', 'Times Won'],
		['Player\'s Team',     1],
		['Other Teams',      10]
	]);
	
	var options = {
		title: 'Julius Erving\'s Regular Season M.V.P vs. Years Played',
		backgroundColor:'transparent',
		titleTextStyle:{color: '#990000', fontName: 'Arial', fontSize: 15, bold:true, italic:false},
		is3D: true,
		legend:{textStyle:{color: '#990000', fontName: 'Arial', fontSize: 10, bold:true, italic:false}},
		pieSliceText: 'percentage',
		slices: {  1: {offset: 0.2},
			2: {offset: 0.2},
		},
	};
	
	var chart = new google.visualization.PieChart(document.getElementById('piechart_3d165'));
	chart.draw(data, options);
}
function drawChart169() {
	var data = google.visualization.arrayToDataTable([
		['Teams', 'Times Won'],
		['Selected',     5],
		['Not Selected',      6]
	]);
	
	var options = {
		title: 'Julius Erving\'s selected as a NBA First Team Player vs. Years Played',
		backgroundColor:'transparent',
		titleTextStyle:{color: '#990000', fontName: 'Arial', fontSize: 15, bold:true, italic:false},
		is3D: true,
		legend:{textStyle:{color: '#990000', fontName: 'Arial', fontSize: 10, bold:true, italic:false}},
		pieSliceText: 'percentage',
		slices: {  1: {offset: 0.2},
			2: {offset: 0.2},
		},
	};
	
	var chart = new google.visualization.PieChart(document.getElementById('piechart_3d166'));
	chart.draw(data, options);
}
function drawChart170() {
	var data = google.visualization.arrayToDataTable([
		['Teams', 'Times Won'],
		['Selected',     2],
		['Not Selected',      9]
	]);
	
	var options = {
		title: 'Julius Erving\'s selected as a NBA Second Team Player vs. Years Played',
		backgroundColor:'transparent',
		titleTextStyle:{color: '#990000', fontName: 'Arial', fontSize: 15, bold:true, italic:false},
		is3D: true,
		legend:{textStyle:{color: '#990000', fontName: 'Arial', fontSize: 10, bold:true, italic:false}},
		pieSliceText: 'percentage',
		slices: {  1: {offset: 0.2},
			2: {offset: 0.2},
		},
	};
	
	var chart = new google.visualization.PieChart(document.getElementById('piechart_3d167'));
	chart.draw(data, options);
}
function drawChart171() {
	var data = google.visualization.arrayToDataTable([
		['Teams', 'Times Won'],
		['Selected',     11],
		['Not Selected',      0]
	]);
	
	var options = {
		title: 'Julius Erving\'s selected as a NBA All-Star Player vs. Years Played',
		backgroundColor:'transparent',
		titleTextStyle:{color: '#990000', fontName: 'Arial', fontSize: 15, bold:true, italic:false},
		is3D: true,
		legend:{textStyle:{color: '#990000', fontName: 'Arial', fontSize: 10, bold:true, italic:false}},
		pieSliceText: 'percentage',
		slices: {  1: {offset: 0.2},
			2: {offset: 0.2},
		},
	};
	
	var chart = new google.visualization.PieChart(document.getElementById('piechart_3d168'));
	chart.draw(data, options);
}
function drawChart172() {
	var data = google.visualization.arrayToDataTable([
		['Teams', 'Times Won'],
		['Selected',     2],
		['Not Selected',      9]
	]);
	
	var options = {
		title: 'Julius Erving\'s selected as a NBA All-Star M.V.P vs. Possibe Attempts',
		backgroundColor:'transparent',
		titleTextStyle:{color: '#990000', fontName: 'Arial', fontSize: 15, bold:true, italic:false},
		is3D: true,
		legend:{textStyle:{color: '#990000', fontName: 'Arial', fontSize: 10, bold:true, italic:false}},
		pieSliceText: 'percentage',
		slices: {  1: {offset: 0.2},
			2: {offset: 0.2},
		},
	};
	
	var chart = new google.visualization.PieChart(document.getElementById('piechart_3d169'));
	chart.draw(data, options);
}
/* */
function drawChart20() {
	var data = google.visualization.arrayToDataTable([
		['Teams', 'Times Won'],
		['Player\'s Team',     8],
		['Other Teams',      8]
	]);
	
	var options = {
		title: 'John Havlicek\'s Championships vs. Years Played',
		backgroundColor:'transparent',
		titleTextStyle:{color: '#990000', fontName: 'Arial', fontSize: 15, bold:true, italic:false},
		is3D: true,
		legend:{textStyle:{color: '#990000', fontName: 'Arial', fontSize: 10, bold:true, italic:false}},
		pieSliceText: 'percentage',
		slices: {  1: {offset: 0.2},
			2: {offset: 0.2},
		},
	};
	
	var chart = new google.visualization.PieChart(document.getElementById('piechart_3d17'));
	chart.draw(data, options);
}
function drawChart173() {
	var data = google.visualization.arrayToDataTable([
		['Teams', 'Times Won'],
		['Player\'s Team',     8],
		['Other Teams',      0]
	]);
	
	var options = {
		title: 'John Havlicek\'s Championships vs. NBA Finals Appearances',
		backgroundColor:'transparent',
		titleTextStyle:{color: '#990000', fontName: 'Arial', fontSize: 15, bold:true, italic:false},
		is3D: true,
		legend:{textStyle:{color: '#990000', fontName: 'Arial', fontSize: 10, bold:true, italic:false}},
		pieSliceText: 'percentage',
		slices: {  1: {offset: 0.2},
			2: {offset: 0.2},
		},
	};
	
	var chart = new google.visualization.PieChart(document.getElementById('piechart_3d170'));
	chart.draw(data, options);
}
function drawChart174() {
	var data = google.visualization.arrayToDataTable([
		['Teams', 'Times Won'],
		['Player',     1],
		['Other Players',      2]
	]);
	
	var options = {
		title: 'John Havlicek\'s NBA Finals M.V.P Awards vs. Possible Attempts*',
		backgroundColor:'transparent',
		titleTextStyle:{color: '#990000', fontName: 'Arial', fontSize: 15, bold:true, italic:false},
		is3D: true,
		legend:{textStyle:{color: '#990000', fontName: 'Arial', fontSize: 10, bold:true, italic:false}},
		pieSliceText: 'percentage',
		slices: {  1: {offset: 0.2},
			2: {offset: 0.2},
		},
	};
	
	var chart = new google.visualization.PieChart(document.getElementById('piechart_3d171'));
	chart.draw(data, options);
}
function drawChart175() {
	var data = google.visualization.arrayToDataTable([
		['Teams', 'Times Won'],
		['Selected',     4],
		['Not Selected',      12]
	]);
	
	var options = {
		title: 'John Havlicek\'s times selected as a NBA First Team Player vs. Years Played',
		backgroundColor:'transparent',
		titleTextStyle:{color: '#990000', fontName: 'Arial', fontSize: 15, bold:true, italic:false},
		is3D: true,
		legend:{textStyle:{color: '#990000', fontName: 'Arial', fontSize: 10, bold:true, italic:false}},
		pieSliceText: 'percentage',
		slices: {  1: {offset: 0.2},
			2: {offset: 0.2},
		},
	};
	
	var chart = new google.visualization.PieChart(document.getElementById('piechart_3d172'));
	chart.draw(data, options);
}
function drawChart176() {
	var data = google.visualization.arrayToDataTable([
		['Teams', 'Times Won'],
		['Selected',     7],
		['Not Selected',      9]
	]);
	
	var options = {
		title: 'John Havlicek\'s times selected as a NBA Second Team Player vs. Years Played',
		backgroundColor:'transparent',
		titleTextStyle:{color: '#990000', fontName: 'Arial', fontSize: 15, bold:true, italic:false},
		is3D: true,
		legend:{textStyle:{color: '#990000', fontName: 'Arial', fontSize: 10, bold:true, italic:false}},
		pieSliceText: 'percentage',
		slices: {  1: {offset: 0.2},
			2: {offset: 0.2},
		},
	};
	
	var chart = new google.visualization.PieChart(document.getElementById('piechart_3d173'));
	chart.draw(data, options);
}
function drawChart177() {
	var data = google.visualization.arrayToDataTable([
		['Teams', 'Times Won'],
		['Selected',     3],
		['Not Selected',      13]
	]);
	
	var options = {
		title: 'John Havlicek\'s times selected as a NBA All-Defensive First Team Player vs. Years Played',
		backgroundColor:'transparent',
		titleTextStyle:{color: '#990000', fontName: 'Arial', fontSize: 15, bold:true, italic:false},
		is3D: true,
		legend:{textStyle:{color: '#990000', fontName: 'Arial', fontSize: 10, bold:true, italic:false}},
		pieSliceText: 'percentage',
		slices: {  1: {offset: 0.2},
			2: {offset: 0.2},
		},
	};
	
	var chart = new google.visualization.PieChart(document.getElementById('piechart_3d174'));
	chart.draw(data, options);
}
function drawChart178() {
	var data = google.visualization.arrayToDataTable([
		['Teams', 'Times Won'],
		['Selected',     13],
		['Not Selected',      3]
	]);
	
	var options = {
		title: 'John Havlicek\'s times selected as a NBA All-Star Player vs. Years Played',
		backgroundColor:'transparent',
		titleTextStyle:{color: '#990000', fontName: 'Arial', fontSize: 15, bold:true, italic:false},
		is3D: true,
		legend:{textStyle:{color: '#990000', fontName: 'Arial', fontSize: 10, bold:true, italic:false}},
		pieSliceText: 'percentage',
		slices: {  1: {offset: 0.2},
			2: {offset: 0.2},
		},
	};
	
	var chart = new google.visualization.PieChart(document.getElementById('piechart_3d175'));
	chart.draw(data, options);
}
/* */
function drawChart21() {
	var data = google.visualization.arrayToDataTable([
		['Teams', 'Times Won'],
		['Player\'s Team',     0],
		['Other Teams',      19]
	]);
	
	var options = {
		title: 'Karl Malone\'s Championships vs. Years Played',
		backgroundColor:'transparent',
		titleTextStyle:{color: '#990000', fontName: 'Arial', fontSize: 15, bold:true, italic:false},
		is3D: true,
		legend:{textStyle:{color: '#990000', fontName: 'Arial', fontSize: 10, bold:true, italic:false}},
		pieSliceText: 'percentage',
		slices: {  1: {offset: 0.2},
			2: {offset: 0.2},
		},
	};
	
	var chart = new google.visualization.PieChart(document.getElementById('piechart_3d18'));
	chart.draw(data, options);
}
function drawChart179() {
	var data = google.visualization.arrayToDataTable([
		['Teams', 'Times Won'],
		['Player',     2],
		['Other Players',      17]
	]);
	
	var options = {
		title: 'Karl Malone\'s NBA Regular Season M.V.P Awards vs. Years Played',
		backgroundColor:'transparent',
		titleTextStyle:{color: '#990000', fontName: 'Arial', fontSize: 15, bold:true, italic:false},
		is3D: true,
		legend:{textStyle:{color: '#990000', fontName: 'Arial', fontSize: 10, bold:true, italic:false}},
		pieSliceText: 'percentage',
		slices: {  1: {offset: 0.2},
			2: {offset: 0.2},
		},
	};
	
	var chart = new google.visualization.PieChart(document.getElementById('piechart_3d176'));
	chart.draw(data, options);
}
function drawChart180() {
	var data = google.visualization.arrayToDataTable([
		['Teams', 'Times Won'],
		['Selected',     11],
		['Not Selected',      8]
	]);
	
	var options = {
		title: 'Karl Malone\'s NBA First Team Player vs. Years Played',
		backgroundColor:'transparent',
		titleTextStyle:{color: '#990000', fontName: 'Arial', fontSize: 15, bold:true, italic:false},
		is3D: true,
		legend:{textStyle:{color: '#990000', fontName: 'Arial', fontSize: 10, bold:true, italic:false}},
		pieSliceText: 'percentage',
		slices: {  1: {offset: 0.2},
			2: {offset: 0.2},
		},
	};
	
	var chart = new google.visualization.PieChart(document.getElementById('piechart_3d177'));
	chart.draw(data, options);
}
function drawChart181() {
	var data = google.visualization.arrayToDataTable([
		['Teams', 'Times Won'],
		['Selected',     2],
		['Not Selected',      17]
	]);
	
	var options = {
		title: 'Karl Malone\'s NBA Second Team Player vs. Years Played',
		backgroundColor:'transparent',
		titleTextStyle:{color: '#990000', fontName: 'Arial', fontSize: 15, bold:true, italic:false},
		is3D: true,
		legend:{textStyle:{color: '#990000', fontName: 'Arial', fontSize: 10, bold:true, italic:false}},
		pieSliceText: 'percentage',
		slices: {  1: {offset: 0.2},
			2: {offset: 0.2},
		},
	};
	
	var chart = new google.visualization.PieChart(document.getElementById('piechart_3d178'));
	chart.draw(data, options);
}
function drawChart182() {
	var data = google.visualization.arrayToDataTable([
		['Teams', 'Times Won'],
		['Selected',     1],
		['Not Selected',      18]
	]);
	
	var options = {
		title: 'Karl Malone\'s NBA Third Team Player vs. Years Played',
		backgroundColor:'transparent',
		titleTextStyle:{color: '#990000', fontName: 'Arial', fontSize: 15, bold:true, italic:false},
		is3D: true,
		legend:{textStyle:{color: '#990000', fontName: 'Arial', fontSize: 10, bold:true, italic:false}},
		pieSliceText: 'percentage',
		slices: {  1: {offset: 0.2},
			2: {offset: 0.2},
		},
	};
	
	var chart = new google.visualization.PieChart(document.getElementById('piechart_3d179'));
	chart.draw(data, options);
}
function drawChart183() {
	var data = google.visualization.arrayToDataTable([
		['Teams', 'Times Won'],
		['Selected',     3],
		['Not Selected',      16]
	]);
	
	var options = {
		title: 'Karl Malone\'s NBA All-Defensive First Team Player vs. Years Played',
		backgroundColor:'transparent',
		titleTextStyle:{color: '#990000', fontName: 'Arial', fontSize: 15, bold:true, italic:false},
		is3D: true,
		legend:{textStyle:{color: '#990000', fontName: 'Arial', fontSize: 10, bold:true, italic:false}},
		pieSliceText: 'percentage',
		slices: {  1: {offset: 0.2},
			2: {offset: 0.2},
		},
	};
	var chart = new google.visualization.PieChart(document.getElementById('piechart_3d180'));
	chart.draw(data, options);
}
function drawChart184() {
	var data = google.visualization.arrayToDataTable([
		['Teams', 'Times Won'],
		['Selected',     1],
		['Not Selected',      18]
	]);
	
	var options = {
		title: 'Karl Malone\'s NBA All-Defensive Second Team Player vs. Years Played',
		backgroundColor:'transparent',
		titleTextStyle:{color: '#990000', fontName: 'Arial', fontSize: 15, bold:true, italic:false},
		is3D: true,
		legend:{textStyle:{color: '#990000', fontName: 'Arial', fontSize: 10, bold:true, italic:false}},
		pieSliceText: 'percentage',
		slices: {  1: {offset: 0.2},
			2: {offset: 0.2},
		},
	};
	
	var chart = new google.visualization.PieChart(document.getElementById('piechart_3d181'));
	chart.draw(data, options);
}
function drawChart185() {
	var data = google.visualization.arrayToDataTable([
		['Teams', 'Times Won'],
		['Selected',     14],
		['Not Selected',      5]
	]);
	
	var options = {
		title: 'Karl Malone\'s NBA All-Star Player vs. Years Played',
		backgroundColor:'transparent',
		titleTextStyle:{color: '#990000', fontName: 'Arial', fontSize: 15, bold:true, italic:false},
		is3D: true,
		legend:{textStyle:{color: '#990000', fontName: 'Arial', fontSize: 10, bold:true, italic:false}},
		pieSliceText: 'percentage',
		slices: {  1: {offset: 0.2},
			2: {offset: 0.2},
		},
	};
	
	var chart = new google.visualization.PieChart(document.getElementById('piechart_3d182'));
	chart.draw(data, options);
}
function drawChart186() {
	var data = google.visualization.arrayToDataTable([
		['Teams', 'Times Won'],
		['Selected',     2],
		['Not Selected',      10]
	]);
	
	var options = {
		title: 'Karl Malone\'s NBA All-Star M.V.P vs. Possible Attempts*',
		backgroundColor:'transparent',
		titleTextStyle:{color: '#990000', fontName: 'Arial', fontSize: 15, bold:true, italic:false},
		is3D: true,
		legend:{textStyle:{color: '#990000', fontName: 'Arial', fontSize: 10, bold:true, italic:false}},
		pieSliceText: 'percentage',
		slices: {  1: {offset: 0.2},
			2: {offset: 0.2},
		},
	};
	var chart = new google.visualization.PieChart(document.getElementById('piechart_3d183'));
	chart.draw(data, options);
}
/* */
function drawChart22() {
	var data = google.visualization.arrayToDataTable([
		['Teams', 'Times Won'],
		['Player\'s Team',     2],
		['Other Teams',      11]
	]);
	
	var options = {
		title: 'Isiah Thomas\' Championships vs. Years Played',
		backgroundColor:'transparent',
		titleTextStyle:{color: '#990000', fontName: 'Arial', fontSize: 15, bold:true, italic:false},
		is3D: true,
		legend:{textStyle:{color: '#990000', fontName: 'Arial', fontSize: 10, bold:true, italic:false}},
		pieSliceText: 'percentage',
		slices: {  1: {offset: 0.2},
			2: {offset: 0.2},
		},
	};
	
	var chart = new google.visualization.PieChart(document.getElementById('piechart_3d19'));
	chart.draw(data, options);
}
function drawChart187() {
	var data = google.visualization.arrayToDataTable([
		['Teams', 'Times Won'],
		['Player\'s Team',     2],
		['Other Teams',      1]
	]);
	
	var options = {
		title: 'Isiah Thomas\' Championships vs. NBA Finals Appearances',
		backgroundColor:'transparent',
		titleTextStyle:{color: '#990000', fontName: 'Arial', fontSize: 15, bold:true, italic:false},
		is3D: true,
		legend:{textStyle:{color: '#990000', fontName: 'Arial', fontSize: 10, bold:true, italic:false}},
		pieSliceText: 'percentage',
		slices: {  1: {offset: 0.2},
			2: {offset: 0.2},
		},
	};
	
	var chart = new google.visualization.PieChart(document.getElementById('piechart_3d184'));
	chart.draw(data, options);
}
function drawChart188() {
	var data = google.visualization.arrayToDataTable([
		['Teams', 'Times Won'],
		['Player',     1],
		['Other Players',      2]
	]);
	
	var options = {
		title: 'Isiah Thomas\' NBA Finals M.V.P Awards vs. NBA Finals Appearances',
		backgroundColor:'transparent',
		titleTextStyle:{color: '#990000', fontName: 'Arial', fontSize: 15, bold:true, italic:false},
		is3D: true,
		legend:{textStyle:{color: '#990000', fontName: 'Arial', fontSize: 10, bold:true, italic:false}},
		pieSliceText: 'percentage',
		slices: {  1: {offset: 0.2},
			2: {offset: 0.2},
		},
	};
	
	var chart = new google.visualization.PieChart(document.getElementById('piechart_3d185'));
	chart.draw(data, options);
}
function drawChart189() {
	var data = google.visualization.arrayToDataTable([
		['Teams', 'Times Won'],
		['Player',     1],
		['Other Players',      12]
	]);
	
	var options = {
		title: 'Isiah Thomas\' Assists Titles vs. Years Played',
		backgroundColor:'transparent',
		titleTextStyle:{color: '#990000', fontName: 'Arial', fontSize: 15, bold:true, italic:false},
		is3D: true,
		legend:{textStyle:{color: '#990000', fontName: 'Arial', fontSize: 10, bold:true, italic:false}},
		pieSliceText: 'percentage',
		slices: {  1: {offset: 0.2},
			2: {offset: 0.2},
		},
	};
	
	var chart = new google.visualization.PieChart(document.getElementById('piechart_3d186'));
	chart.draw(data, options);
}
function drawChart190() {
	var data = google.visualization.arrayToDataTable([
		['Teams', 'Times Won'],
		['Selected',     3],
		['Not Selected',      10]
	]);
	
	var options = {
		title: 'Isiah Thomas\' times selected as a NBA First Team Player vs. Years Played',
		backgroundColor:'transparent',
		titleTextStyle:{color: '#990000', fontName: 'Arial', fontSize: 15, bold:true, italic:false},
		is3D: true,
		legend:{textStyle:{color: '#990000', fontName: 'Arial', fontSize: 10, bold:true, italic:false}},
		pieSliceText: 'percentage',
		slices: {  1: {offset: 0.2},
			2: {offset: 0.2},
		},
	};
	var chart = new google.visualization.PieChart(document.getElementById('piechart_3d187'));
	chart.draw(data, options);
}
function drawChart191() {
	var data = google.visualization.arrayToDataTable([
		['Teams', 'Times Won'],
		['Selected',     2],
		['Not Selected',      11]
	]);
	
	var options = {
		title: 'Isiah Thomas\' times selected as a NBA Second Team Player vs. Years Played',
		backgroundColor:'transparent',
		titleTextStyle:{color: '#990000', fontName: 'Arial', fontSize: 15, bold:true, italic:false},
		is3D: true,
		legend:{textStyle:{color: '#990000', fontName: 'Arial', fontSize: 10, bold:true, italic:false}},
		pieSliceText: 'percentage',
		slices: {  1: {offset: 0.2},
			2: {offset: 0.2},
		},
	};
	
	var chart = new google.visualization.PieChart(document.getElementById('piechart_3d188'));
	chart.draw(data, options);
}
function drawChart192() {
	var data = google.visualization.arrayToDataTable([
		['Teams', 'Times Won'],
		['Selected',     12],
		['Not Selected',      1]
	]);
	
	var options = {
		title: 'Isiah Thomas\' times selected as a NBA All-Star Player vs. Years Played',
		backgroundColor:'transparent',
		titleTextStyle:{color: '#990000', fontName: 'Arial', fontSize: 15, bold:true, italic:false},
		is3D: true,
		legend:{textStyle:{color: '#990000', fontName: 'Arial', fontSize: 10, bold:true, italic:false}},
		pieSliceText: 'percentage',
		slices: {  1: {offset: 0.2},
			2: {offset: 0.2},
		},
	};
	
	var chart = new google.visualization.PieChart(document.getElementById('piechart_3d189'));
	chart.draw(data, options);
}
function drawChart193() {
	var data = google.visualization.arrayToDataTable([
		['Teams', 'Times Won'],
		['Selected',     2],
		['Not Selected',      9]
	]);
	
	var options = {
		title: 'Isiah Thomas\' times selected as a NBA All-Star M.V.P vs. Possible Attempts*',
		backgroundColor:'transparent',
		titleTextStyle:{color: '#990000', fontName: 'Arial', fontSize: 15, bold:true, italic:false},
		is3D: true,
		legend:{textStyle:{color: '#990000', fontName: 'Arial', fontSize: 10, bold:true, italic:false}},
		pieSliceText: 'percentage',
		slices: {  1: {offset: 0.2},
			2: {offset: 0.2},
		},
	};
	
	var chart = new google.visualization.PieChart(document.getElementById('piechart_3d190'));
	chart.draw(data, options);
}


/*Charles Barkley Stats Begin Here */
function drawChart23() {
	var data = google.visualization.arrayToDataTable([
		['Teams', 'Times Won'],
		['Player\'s Team',     0],
		['Other Teams',      16]
	]);
	
	var options = {
		title: 'Charles Barkley\'s Championships vs. Years Played',
		backgroundColor:'transparent',
		titleTextStyle:{color: '#990000', fontName: 'Arial', fontSize: 15, bold:true, italic:false},
		is3D: true,
		legend:{textStyle:{color: '#990000', fontName: 'Arial', fontSize: 10, bold:true, italic:false}},
		pieSliceText: 'percentage',
		slices: {  1: {offset: 0.2},
			2: {offset: 0.2},
		},
	};
	
	var chart = new google.visualization.PieChart(document.getElementById('piechart_3d20'));
	chart.draw(data, options);
}
function drawChart194() {
	var data = google.visualization.arrayToDataTable([
		['Teams', 'Times Won'],
		['Player',     1],
		['Other Players',      15]
	]);
	
	var options = {
		title: 'Charles Barkley\'s NBA Regular Season M.V.P Awards vs. Years Played',
		backgroundColor:'transparent',
		titleTextStyle:{color: '#990000', fontName: 'Arial', fontSize: 15, bold:true, italic:false},
		is3D: true,
		legend:{textStyle:{color: '#990000', fontName: 'Arial', fontSize: 10, bold:true, italic:false}},
		pieSliceText: 'percentage',
		slices: {  1: {offset: 0.2},
			2: {offset: 0.2},
		},
	};
	
	var chart = new google.visualization.PieChart(document.getElementById('piechart_3d191'));
	chart.draw(data, options);
}
function drawChart195() {
	var data = google.visualization.arrayToDataTable([
		['Teams', 'Times Won'],
		['Player',     1],
		['Other Players',      15]
	]);
	
	var options = {
		title: 'Charles Barkley\'s Rebounding Titles vs. Years Played',
		backgroundColor:'transparent',
		titleTextStyle:{color: '#990000', fontName: 'Arial', fontSize: 15, bold:true, italic:false},
		is3D: true,
		legend:{textStyle:{color: '#990000', fontName: 'Arial', fontSize: 10, bold:true, italic:false}},
		pieSliceText: 'percentage',
		slices: {  1: {offset: 0.2},
			2: {offset: 0.2},
		},
	};
	var chart = new google.visualization.PieChart(document.getElementById('piechart_3d192'));
	chart.draw(data, options);
}
function drawChart196() {
	var data = google.visualization.arrayToDataTable([
		['Teams', 'Times Won'],
		['Selected',     5],
		['Not Selected',      11]
	]);
	
	var options = {
		title: 'Charles Barkley\'s selected as a NBA First Team Player vs. Years Played',
		backgroundColor:'transparent',
		titleTextStyle:{color: '#990000', fontName: 'Arial', fontSize: 15, bold:true, italic:false},
		is3D: true,
		legend:{textStyle:{color: '#990000', fontName: 'Arial', fontSize: 10, bold:true, italic:false}},
		pieSliceText: 'percentage',
		slices: {  1: {offset: 0.2},
			2: {offset: 0.2},
		},
	};
	
	var chart = new google.visualization.PieChart(document.getElementById('piechart_3d193'));
	chart.draw(data, options);
}
function drawChart197() {
	var data = google.visualization.arrayToDataTable([
		['Teams', 'Times Won'],
		['Selected',     5],
		['Not Selected',      11]
	]);
	
	var options = {
		title: 'Charles Barkley\'s selected as a NBA Second Team Player vs. Years Played',
		backgroundColor:'transparent',
		titleTextStyle:{color: '#990000', fontName: 'Arial', fontSize: 15, bold:true, italic:false},
		is3D: true,
		legend:{textStyle:{color: '#990000', fontName: 'Arial', fontSize: 10, bold:true, italic:false}},
		pieSliceText: 'percentage',
		slices: {  1: {offset: 0.2},
			2: {offset: 0.2},
		},
	};
	
	var chart = new google.visualization.PieChart(document.getElementById('piechart_3d194'));
	chart.draw(data, options);
}
function drawChart198() {
	var data = google.visualization.arrayToDataTable([
		['Teams', 'Times Won'],
		['Selected',     5],
		['Not Selected',      11]
	]);
	
	var options = {
		title: 'Charles Barkley\'s selected as a NBA Third Team Player vs. Years Played',
		backgroundColor:'transparent',
		titleTextStyle:{color: '#990000', fontName: 'Arial', fontSize: 15, bold:true, italic:false},
		is3D: true,
		legend:{textStyle:{color: '#990000', fontName: 'Arial', fontSize: 10, bold:true, italic:false}},
		pieSliceText: 'percentage',
		slices: {  1: {offset: 0.2},
			2: {offset: 0.2},
		},
	};
	
	var chart = new google.visualization.PieChart(document.getElementById('piechart_3d195'));
	chart.draw(data, options);
}
function drawChart199() {
	var data = google.visualization.arrayToDataTable([
		['Teams', 'Times Won'],
		['Selected',     11],
		['Not Selected',      5]
	]);
	
	var options = {
		title: 'Charles Barkley\'s selected as a NBA All-Star Player vs. Years Played',
		backgroundColor:'transparent',
		titleTextStyle:{color: '#990000', fontName: 'Arial', fontSize: 15, bold:true, italic:false},
		is3D: true,
		legend:{textStyle:{color: '#990000', fontName: 'Arial', fontSize: 10, bold:true, italic:false}},
		pieSliceText: 'percentage',
		slices: {  1: {offset: 0.2},
			2: {offset: 0.2},
		},
	};
	
	var chart = new google.visualization.PieChart(document.getElementById('piechart_3d196'));
	chart.draw(data, options);
}
function drawChart200() {
	var data = google.visualization.arrayToDataTable([
		['Teams', 'Times Won'],
		['Selected',     1],
		['Not Selected',      8]
	]);
	
	var options = {
		title: 'Charles Barkley\'s selected as a NBA All-Star M.V.P vs. Possible Attempts*',
		backgroundColor:'transparent',
		titleTextStyle:{color: '#990000', fontName: 'Arial', fontSize: 15, bold:true, italic:false},
		is3D: true,
		legend:{textStyle:{color: '#990000', fontName: 'Arial', fontSize: 10, bold:true, italic:false}},
		pieSliceText: 'percentage',
		slices: {  1: {offset: 0.2},
			2: {offset: 0.2},
		},
	};
	
	var chart = new google.visualization.PieChart(document.getElementById('piechart_3d197'));
	chart.draw(data, options);
}
/*Charles Barkley Stats End Here */


/*Steph Curry Stats Begin Here */
function drawChart24() {
	var data = google.visualization.arrayToDataTable([
		['Teams', 'Times Won'],
		['Player\'s Team',     1],
		['Other Teams',      6]
	]);
	
	var options = {
		title: 'Steph Curry\'s Championships vs. Years Played',
		backgroundColor:'transparent',
		titleTextStyle:{color: '#990000', fontName: 'Arial', fontSize: 15, bold:true, italic:false},
		is3D: true,
		legend:{textStyle:{color: '#990000', fontName: 'Arial', fontSize: 10, bold:true, italic:false}},
		pieSliceText: 'percentage',
		slices: {  1: {offset: 0.2},
			2: {offset: 0.2},
		},
	};
	
	var chart = new google.visualization.PieChart(document.getElementById('piechart_3d21'));
	chart.draw(data, options);
}


function drawChart201() {
	var data = google.visualization.arrayToDataTable([
		['Teams', 'Times Won'],
		['Player\'s Team',     1],
		['Other Teams',      6]
	]);
	
	var options = {
		title: 'Steph Curry\'s Championships vs. NBA Finals Appearances',
		backgroundColor:'transparent',
		titleTextStyle:{color: '#990000', fontName: 'Arial', fontSize: 15, bold:true, italic:false},
		is3D: true,
		legend:{textStyle:{color: '#990000', fontName: 'Arial', fontSize: 10, bold:true, italic:false}},
		pieSliceText: 'percentage',
		slices: {  1: {offset: 0.2},
			2: {offset: 0.2},
		},
	};
	
	var chart = new google.visualization.PieChart(document.getElementById('piechart_3d198'));
	chart.draw(data, options);
}


function drawChart202() {
	var data = google.visualization.arrayToDataTable([
		['Teams', 'Times Won'],
		['Player\'s Team',     1],
		['Other Teams',      6]
	]);
	
	var options = {
		title: 'Steph Curry\'s Regular Season M.V.P Awards vs. Years Played',
		backgroundColor:'transparent',
		titleTextStyle:{color: '#990000', fontName: 'Arial', fontSize: 15, bold:true, italic:false},
		is3D: true,
		legend:{textStyle:{color: '#990000', fontName: 'Arial', fontSize: 10, bold:true, italic:false}},
		pieSliceText: 'percentage',
		slices: {  1: {offset: 0.2},
			2: {offset: 0.2},
		},
	};
	
	var chart = new google.visualization.PieChart(document.getElementById('piechart_3d199'));
	chart.draw(data, options);
}


function drawChart203() {
	var data = google.visualization.arrayToDataTable([
		['Teams', 'Times Won'],
		['Selected',     1],
		['Not Selected',      6]
	]);
	
	var options = {
		title: 'Steph Curry\'s NBA First Team Player vs. Years Played',
		backgroundColor:'transparent',
		titleTextStyle:{color: '#990000', fontName: 'Arial', fontSize: 15, bold:true, italic:false},
		is3D: true,
		legend:{textStyle:{color: '#990000', fontName: 'Arial', fontSize: 10, bold:true, italic:false}},
		pieSliceText: 'percentage',
		slices: {  1: {offset: 0.2},
			2: {offset: 0.2},
		},
	};
	
	var chart = new google.visualization.PieChart(document.getElementById('piechart_3d200'));
	chart.draw(data, options);
}


function drawChart204() {
	var data = google.visualization.arrayToDataTable([
		['Teams', 'Times Won'],
		['Selected',     1],
		['Not Selected',      6]
	]);
	
	var options = {
		title: 'Steph Curry\'s NBA Second Team Player vs. Years Played',
		backgroundColor:'transparent',
		titleTextStyle:{color: '#990000', fontName: 'Arial', fontSize: 15, bold:true, italic:false},
		is3D: true,
		legend:{textStyle:{color: '#990000', fontName: 'Arial', fontSize: 10, bold:true, italic:false}},
		pieSliceText: 'percentage',
		slices: {  1: {offset: 0.2},
			2: {offset: 0.2},
		},
	};
	
	var chart = new google.visualization.PieChart(document.getElementById('piechart_3d201'));
	chart.draw(data, options);
}


function drawChart205() {
	var data = google.visualization.arrayToDataTable([
		['Teams', 'Times Won'],
		['Selected',     3],
		['Not Selected',      4]
	]);
	
	var options = {
		title: 'Steph Curry\'s selected as a NBA All-Star Player vs. Years Played',
		backgroundColor:'transparent',
		titleTextStyle:{color: '#990000', fontName: 'Arial', fontSize: 15, bold:true, italic:false},
		is3D: true,
		legend:{textStyle:{color: '#990000', fontName: 'Arial', fontSize: 10, bold:true, italic:false}},
		pieSliceText: 'percentage',
		slices: {  1: {offset: 0.2},
			2: {offset: 0.2},
		},
	};
	
	var chart = new google.visualization.PieChart(document.getElementById('piechart_3d202'));
	chart.draw(data, options);
}
/*Steph Curry Stats End Here */

/*Kevin Durant Stats Begin Here */

function drawChart25() {
	var data = google.visualization.arrayToDataTable([
		['Teams', 'Times Won'],
		['Player\'s Team',     0],
		['Other Teams',      9]
	]);
	
	var options = {
		title: 'Kevin Durant\'s Championships* vs. Years Played',
		backgroundColor:'transparent',
		titleTextStyle:{color: '#990000', fontName: 'Arial', fontSize: 15, bold:true, italic:false},
		is3D: true,
		legend:{textStyle:{color: '#990000', fontName: 'Arial', fontSize: 10, bold:true, italic:false}},
		pieSliceText: 'percentage',
		slices: {  1: {offset: 0.2},
			2: {offset: 0.2},
		},
	};
	var chart = new google.visualization.PieChart(document.getElementById('piechart_3d22'));
	chart.draw(data, options);
}


function drawChart206() {
	var data = google.visualization.arrayToDataTable([
		['Teams', 'Times Won'],
		['Player',     1],
		['Other Players',      8]
	]);
	
	var options = {
		title: 'Kevin Durant\'s NBA Regular Season M.V.P Awards vs. Years Played',
		backgroundColor:'transparent',
		titleTextStyle:{color: '#990000', fontName: 'Arial', fontSize: 15, bold:true, italic:false},
		is3D: true,
		legend:{textStyle:{color: '#990000', fontName: 'Arial', fontSize: 10, bold:true, italic:false}},
		pieSliceText: 'percentage',
		slices: {  1: {offset: 0.2},
			2: {offset: 0.2},
		},
	};
	
	var chart = new google.visualization.PieChart(document.getElementById('piechart_3d203'));
	chart.draw(data, options);
}


function drawChart207() {
	var data = google.visualization.arrayToDataTable([
		['Teams', 'Times Won'],
		['Player',     4],
		['Other Players',      5]
	]);
	
	var options = {
		title: 'Kevin Durant\'s Scoring Titles vs. Years Played',
		backgroundColor:'transparent',
		titleTextStyle:{color: '#990000', fontName: 'Arial', fontSize: 15, bold:true, italic:false},
		is3D: true,
		legend:{textStyle:{color: '#990000', fontName: 'Arial', fontSize: 10, bold:true, italic:false}},
		pieSliceText: 'percentage',
		slices: {  1: {offset: 0.2},
			2: {offset: 0.2},
		},
	};
	var chart = new google.visualization.PieChart(document.getElementById('piechart_3d204'));
	chart.draw(data, options);
}


function drawChart208() {
	var data = google.visualization.arrayToDataTable([
		['Teams', 'Times Won'],
		['Selected',     5],
		['Not Selected',      4]
	]);
	
	var options = {
		title: 'Kevin Durant\'s selected as NBA First Team Player vs. Years Played',
		backgroundColor:'transparent',
		titleTextStyle:{color: '#990000', fontName: 'Arial', fontSize: 15, bold:true, italic:false},
		is3D: true,
		legend:{textStyle:{color: '#990000', fontName: 'Arial', fontSize: 10, bold:true, italic:false}},
		pieSliceText: 'percentage',
		slices: {  1: {offset: 0.2},
			2: {offset: 0.2},
		},
	};
	
	var chart = new google.visualization.PieChart(document.getElementById('piechart_3d205'));
	chart.draw(data, options);
}


function drawChart209() {
	var data = google.visualization.arrayToDataTable([
		['Teams', 'Times Won'],
		['Selected',     5],
		['Not Selected',      4]
	]);
	
	var options = {
		title: 'Kevin Durant\'s selected as NBA All-Star Player vs. Years Played',
		backgroundColor:'transparent',
		titleTextStyle:{color: '#990000', fontName: 'Arial', fontSize: 15, bold:true, italic:false},
		is3D: true,
		legend:{textStyle:{color: '#990000', fontName: 'Arial', fontSize: 10, bold:true, italic:false}},
		pieSliceText: 'percentage',
		slices: {  1: {offset: 0.2},
			2: {offset: 0.2},
		},
	};
	
	var chart = new google.visualization.PieChart(document.getElementById('piechart_3d206'));
	chart.draw(data, options);
}


function drawChart210() {
	var data = google.visualization.arrayToDataTable([
		['Teams', 'Times Won'],
		['Selected',     1],
		['Not Selected',      7]
	]);
	
	var options = {
		title: 'Kevin Durant\'s selected as NBA All-Star M.V.P vs. Possible Attempts',
		backgroundColor:'transparent',
		titleTextStyle:{color: '#990000', fontName: 'Arial', fontSize: 15, bold:true, italic:false},
		is3D: true,
		legend:{textStyle:{color: '#990000', fontName: 'Arial', fontSize: 10, bold:true, italic:false}},
		pieSliceText: 'percentage',
		slices: {  1: {offset: 0.2},
			2: {offset: 0.2},
		},
	};
	
	var chart = new google.visualization.PieChart(document.getElementById('piechart_3d207'));
	chart.draw(data, options);
}
/*Kevin Durant Stats End Here */


/*Lebron James Stats Begin Here */

function drawChart26() {
	var data = google.visualization.arrayToDataTable([
		['Teams', 'Times Won'],
		['Player\'s Team',     2],
		['Other Teams',     11]
	]);
	
	var options = {
		title: 'Lebron James\' Championships* vs. Years Played',
		backgroundColor:'transparent',
		titleTextStyle:{color: 'white', fontName: 'Arial', fontSize: 15, bold:true, italic:false},
		is3D: true,
		legend:{textStyle:{color: 'white', fontName: 'Arial', fontSize: 10, bold:true, italic:false}},
		pieSliceText: 'percentage',
		slices: {  1: {offset: 0.2},
			2: {offset: 0.2},
		},
	};
	
	var chart = new google.visualization.PieChart(document.getElementById('piechart_3d23'));
	chart.draw(data, options);
}


function drawChart211() {
	var data = google.visualization.arrayToDataTable([
		['Teams', 'Times Won'],
		['Player\'s Team',     2],
		['Other Teams',     3]
	]);
	
	var options = {
		title: 'Lebron James\' Championships* vs. NBA Finals Appearances',
		backgroundColor:'transparent',
		titleTextStyle:{color: 'white', fontName: 'Arial', fontSize: 15, bold:true, italic:false},
		is3D: true,
		legend:{textStyle:{color: 'white', fontName: 'Arial', fontSize: 10, bold:true, italic:false}},
		pieSliceText: 'percentage',
		slices: {  1: {offset: 0.2},
			2: {offset: 0.2},
		},
	};
	
	var chart = new google.visualization.PieChart(document.getElementById('piechart_3d208'));
	chart.draw(data, options);
}


function drawChart212() {
	var data = google.visualization.arrayToDataTable([
		['Teams', 'Times Won'],
		['Player',     2],
		['Other Players',     3]
	]);
	
	var options = {
		title: 'Lebron James\' NBA Finals M.V.P Awards vs. NBA Finals Appearances',
		backgroundColor:'transparent',
		titleTextStyle:{color: 'white', fontName: 'Arial', fontSize: 15, bold:true, italic:false},
		is3D: true,
		legend:{textStyle:{color: 'white', fontName: 'Arial', fontSize: 10, bold:true, italic:false}},
		pieSliceText: 'percentage',
		slices: {  1: {offset: 0.2},
			2: {offset: 0.2},
		},
	};
	
	var chart = new google.visualization.PieChart(document.getElementById('piechart_3d209'));
	chart.draw(data, options);
}


function drawChart213() {
	var data = google.visualization.arrayToDataTable([
		['Teams', 'Times Won'],
		['Player',     4],
		['Other Players',     9]
	]);
	
	var options = {
		title: 'Lebron James\' NBA Regular Season M.V.P Awards vs. Years Played',
		backgroundColor:'transparent',
		titleTextStyle:{color: 'white', fontName: 'Arial', fontSize: 15, bold:true, italic:false},
		is3D: true,
		legend:{textStyle:{color: 'white', fontName: 'Arial', fontSize: 10, bold:true, italic:false}},
		pieSliceText: 'percentage',
		slices: {  1: {offset: 0.2},
			2: {offset: 0.2},
		},
	};
	
	var chart = new google.visualization.PieChart(document.getElementById('piechart_3d210'));
	chart.draw(data, options);
}


function drawChart214() {
	var data = google.visualization.arrayToDataTable([
		['Teams', 'Times Won'],
		['Player',     4],
		['Other Players',     9]
	]);
	
	var options = {
		title: 'Lebron James\' Scoring Titles vs. Years Played',
		backgroundColor:'transparent',
		titleTextStyle:{color: 'white', fontName: 'Arial', fontSize: 15, bold:true, italic:false},
		is3D: true,
		legend:{textStyle:{color: 'white', fontName: 'Arial', fontSize: 10, bold:true, italic:false}},
		pieSliceText: 'percentage',
		slices: {  1: {offset: 0.2},
			2: {offset: 0.2},
		},
	};
	
	var chart = new google.visualization.PieChart(document.getElementById('piechart_3d211'));
	chart.draw(data, options);
}


function drawChart215() {
	var data = google.visualization.arrayToDataTable([
		['Teams', 'Times Won'],
		['Selected',     9],
		['Not Selected',     4]
	]);
	
	var options = {
		title: 'Lebron James\' selected as a NBA First Team Player vs. Years Played',
		backgroundColor:'transparent',
		titleTextStyle:{color: 'white', fontName: 'Arial', fontSize: 15, bold:true, italic:false},
		is3D: true,
		legend:{textStyle:{color: 'white', fontName: 'Arial', fontSize: 10, bold:true, italic:false}},
		pieSliceText: 'percentage',
		slices: {  1: {offset: 0.2},
			2: {offset: 0.2},
		},
	};
	
	var chart = new google.visualization.PieChart(document.getElementById('piechart_3d212'));
	chart.draw(data, options);
}


function drawChart216() {
	var data = google.visualization.arrayToDataTable([
		['Teams', 'Times Won'],
		['Selected',     2],
		['Not Selected',     11]
	]);
	
	var options = {
		title: 'Lebron James\' selected as a NBA Second Team Player vs. Years Played',
		backgroundColor:'transparent',
		titleTextStyle:{color: 'white', fontName: 'Arial', fontSize: 15, bold:true, italic:false},
		is3D: true,
		legend:{textStyle:{color: 'white', fontName: 'Arial', fontSize: 10, bold:true, italic:false}},
		pieSliceText: 'percentage',
		slices: {  1: {offset: 0.2},
			2: {offset: 0.2},
		},
	};
	
	var chart = new google.visualization.PieChart(document.getElementById('piechart_3d213'));
	chart.draw(data, options);
}


function drawChart217() {
	var data = google.visualization.arrayToDataTable([
		['Teams', 'Times Won'],
		['Selected',     5],
		['Not Selected',     8]
	]);
	
	var options = {
		title: 'Lebron James\' selected as a NBA All-Defensive First Team Player vs. Years Played',
		backgroundColor:'transparent',
		titleTextStyle:{color: 'white', fontName: 'Arial', fontSize: 15, bold:true, italic:false},
		is3D: true,
		legend:{textStyle:{color: 'white', fontName: 'Arial', fontSize: 10, bold:true, italic:false}},
		pieSliceText: 'percentage',
		slices: {  1: {offset: 0.2},
			2: {offset: 0.2},
		},
	};
	
	var chart = new google.visualization.PieChart(document.getElementById('piechart_3d214'));
	chart.draw(data, options);
}


function drawChart218() {
	var data = google.visualization.arrayToDataTable([
		['Teams', 'Times Won'],
		['Selected',     1],
		['Not Selected',     12]
	]);
	
	var options = {
		title: 'Lebron James\' selected as a NBA All-Defensive Second Team Player vs. Years Played',
		backgroundColor:'transparent',
		titleTextStyle:{color: 'white', fontName: 'Arial', fontSize: 15, bold:true, italic:false},
		is3D: true,
		legend:{textStyle:{color: 'white', fontName: 'Arial', fontSize: 10, bold:true, italic:false}},
		pieSliceText: 'percentage',
		slices: {  1: {offset: 0.2},
			2: {offset: 0.2},
		},
	};
	
	var chart = new google.visualization.PieChart(document.getElementById('piechart_3d215'));
	chart.draw(data, options);
}


function drawChart219() {
	var data = google.visualization.arrayToDataTable([
		['Teams', 'Times Won'],
		['Selected',     12],
		['Not Selected',     1]
	]);
	
	var options = {
		title: 'Lebron James\' selected as a NBA All-Star Player vs. Years Played',
		backgroundColor:'transparent',
		titleTextStyle:{color: 'white', fontName: 'Arial', fontSize: 15, bold:true, italic:false},
		is3D: true,
		legend:{textStyle:{color: 'white', fontName: 'Arial', fontSize: 10, bold:true, italic:false}},
		pieSliceText: 'percentage',
		slices: {  1: {offset: 0.2},
			2: {offset: 0.2},
		},
	};
	
	var chart = new google.visualization.PieChart(document.getElementById('piechart_3d216'));
	chart.draw(data, options);
}


function drawChart220() {
	var data = google.visualization.arrayToDataTable([
		['Teams', 'Times Won'],
		['Selected',     2],
		['Not Selected',     10]
	]);
	
	var options = {
		title: 'Lebron James\' selected as a NBA All-Star M.V.P vs. Possible Attempts',
		backgroundColor:'transparent',
		titleTextStyle:{color: 'white', fontName: 'Arial', fontSize: 15, bold:true, italic:false},
		is3D: true,
		legend:{textStyle:{color: 'white', fontName: 'Arial', fontSize: 10, bold:true, italic:false}},
		pieSliceText: 'percentage',
		slices: {  1: {offset: 0.2},
			2: {offset: 0.2},
		},
	};
	
	var chart = new google.visualization.PieChart(document.getElementById('piechart_3d217'));
	chart.draw(data, options);
}
/*Lebron James Stats End Here */

/*Russell Westbrook Stats Begin Here */
function drawChart27() {
	var data = google.visualization.arrayToDataTable([
		['Teams', 'Times Won'],
		['Player\'s Team',     0],
		['Other Teams',      8]
	]);
	
	var options = {
		title: 'Russell Westbrook\'s Championships vs. Years Played',
		backgroundColor:'transparent',
		titleTextStyle:{color: '#990000', fontName: 'Arial', fontSize: 15, bold:true, italic:false},
		is3D: true,
		legend:{textStyle:{color: '#990000', fontName: 'Arial', fontSize: 10, bold:true, italic:false}},
		pieSliceText: 'percentage',
		slices: {  1: {offset: 0.2},
			2: {offset: 0.2},
		},
	};
	
	var chart = new google.visualization.PieChart(document.getElementById('piechart_3d24'));
	chart.draw(data, options);
}


function drawChart221() {
	var data = google.visualization.arrayToDataTable([
		['Teams', 'Times Won'],
		['Player\'s Team',     0],
		['Other Teams',      1]
	]);
	
	var options = {
		title: 'Russell Westbrook\'s Championships vs. NBA Finals Appearances',
		backgroundColor:'transparent',
		titleTextStyle:{color: '#990000', fontName: 'Arial', fontSize: 15, bold:true, italic:false},
		is3D: true,
		legend:{textStyle:{color: '#990000', fontName: 'Arial', fontSize: 10, bold:true, italic:false}},
		pieSliceText: 'percentage',
		slices: {  1: {offset: 0.2},
			2: {offset: 0.2},
		},
	};
	
	var chart = new google.visualization.PieChart(document.getElementById('piechart_3d218'));
	chart.draw(data, options);
}


function drawChart222() {
	var data = google.visualization.arrayToDataTable([
		['Teams', 'Times Won'],
		['Player\'s Team',     1],
		['Other Teams',      7]
	]);
	
	var options = {
		title: 'Russell Westbrook\'s Scoring Titles vs. Years Played',
		backgroundColor:'transparent',
		titleTextStyle:{color: '#990000', fontName: 'Arial', fontSize: 15, bold:true, italic:false},
		is3D: true,
		legend:{textStyle:{color: '#990000', fontName: 'Arial', fontSize: 10, bold:true, italic:false}},
		pieSliceText: 'percentage',
		slices: {  1: {offset: 0.2},
			2: {offset: 0.2},
		},
	};
	
	var chart = new google.visualization.PieChart(document.getElementById('piechart_3d219'));
	chart.draw(data, options);
}


function drawChart223() {
	var data = google.visualization.arrayToDataTable([
		['Teams', 'Times Won'],
		['Selected',     4],
		['Not Selected',      4]
	]);
	
	var options = {
		title: 'Russell Westbrook\'s selected as a NBA Second Team Player vs. Years Played',
		backgroundColor:'transparent',
		titleTextStyle:{color: '#990000', fontName: 'Arial', fontSize: 15, bold:true, italic:false},
		is3D: true,
		legend:{textStyle:{color: '#990000', fontName: 'Arial', fontSize: 10, bold:true, italic:false}},
		pieSliceText: 'percentage',
		slices: {  1: {offset: 0.2},
			2: {offset: 0.2},
		},
	};
	
	var chart = new google.visualization.PieChart(document.getElementById('piechart_3d220'));
	chart.draw(data, options);
}


function drawChart224() {
	var data = google.visualization.arrayToDataTable([
		['Teams', 'Times Won'],
		['Selected',     5],
		['Not Selected',      3]
	]);
	
	var options = {
		title: 'Russell Westbrook\'s selected as a NBA All-Star Player vs. Years Played',
		backgroundColor:'transparent',
		titleTextStyle:{color: '#990000', fontName: 'Arial', fontSize: 15, bold:true, italic:false},
		is3D: true,
		legend:{textStyle:{color: '#990000', fontName: 'Arial', fontSize: 10, bold:true, italic:false}},
		pieSliceText: 'percentage',
		slices: {  1: {offset: 0.2},
			2: {offset: 0.2},
		},
	};
	
	var chart = new google.visualization.PieChart(document.getElementById('piechart_3d221'));
	chart.draw(data, options);
}


function drawChart225() {
	var data = google.visualization.arrayToDataTable([
		['Teams', 'Times Won'],
		['Selected',     2],
		['Not Selected',      3]
	]);
	
	var options = {
		title: 'Russell Westbrook\'s selected as a NBA All-Star M.V.P vs. Possible Attempts',
		backgroundColor:'transparent',
		titleTextStyle:{color: '#990000', fontName: 'Arial', fontSize: 15, bold:true, italic:false},
		is3D: true,
		legend:{textStyle:{color: '#990000', fontName: 'Arial', fontSize: 10, bold:true, italic:false}},
		pieSliceText: 'percentage',
		slices: {  1: {offset: 0.2},
			2: {offset: 0.2},
		},
	};
	
	var chart = new google.visualization.PieChart(document.getElementById('piechart_3d222'));
	chart.draw(data, options);
}
/*Russell Westbrook Stats End */



/*Anthony Davis Stats Begin */
function drawChart28() {
	var data = google.visualization.arrayToDataTable([
		['Teams', 'Times Won'],
		['Player\'s Team',     0],
		['Other Teams',      4]
	]);
	
	var options = {
		title: 'Anthony Davis\' Championships* vs. Years Played',
		backgroundColor:'transparent',
		titleTextStyle:{color: '#990000', fontName: 'Arial', fontSize: 15, bold:true, italic:false},
		is3D: true,
		legend:{textStyle:{color: '#990000', fontName: 'Arial', fontSize: 10, bold:true, italic:false}},
		pieSliceText: 'percentage',
		slices: {  1: {offset: 0.2},
			2: {offset: 0.2},
		},
	};
	
	var chart = new google.visualization.PieChart(document.getElementById('piechart_3d25'));
	chart.draw(data, options);
}


function drawChart226() {
	var data = google.visualization.arrayToDataTable([
		['Teams', 'Times Won'],
		['Player',     2],
		['Other Players',      2]
	]);
	
	var options = {
		title: 'Anthony Davis\' Blocking Titles vs. Years Played',
		backgroundColor:'transparent',
		titleTextStyle:{color: '#990000', fontName: 'Arial', fontSize: 15, bold:true, italic:false},
		is3D: true,
		legend:{textStyle:{color: '#990000', fontName: 'Arial', fontSize: 10, bold:true, italic:false}},
		pieSliceText: 'percentage',
		slices: {  1: {offset: 0.2},
			2: {offset: 0.2},
		},
	};
	
	var chart = new google.visualization.PieChart(document.getElementById('piechart_3d223'));
	chart.draw(data, options);
}


function drawChart227() {
	var data = google.visualization.arrayToDataTable([
		['Teams', 'Times Won'],
		['Selected',     1],
		['Not Selected',      3]
	]);
	
	var options = {
		title: 'Anthony Davis\' times selected as NBA First Team Player vs. Years Played',
		backgroundColor:'transparent',
		titleTextStyle:{color: '#990000', fontName: 'Arial', fontSize: 15, bold:true, italic:false},
		is3D: true,
		legend:{textStyle:{color: '#990000', fontName: 'Arial', fontSize: 10, bold:true, italic:false}},
		pieSliceText: 'percentage',
		slices: {  1: {offset: 0.2},
			2: {offset: 0.2},
		},
	};
	
	var chart = new google.visualization.PieChart(document.getElementById('piechart_3d224'));
	chart.draw(data, options);
}


function drawChart228() {
	var data = google.visualization.arrayToDataTable([
		['Teams', 'Times Won'],
		['Selected',     1],
		['Not Selected',      3]
	]);
	
	var options = {
		title: 'Anthony Davis\' times selected as NBA Second Team Player vs. Years Played',
		backgroundColor:'transparent',
		titleTextStyle:{color: '#990000', fontName: 'Arial', fontSize: 15, bold:true, italic:false},
		is3D: true,
		legend:{textStyle:{color: '#990000', fontName: 'Arial', fontSize: 10, bold:true, italic:false}},
		pieSliceText: 'percentage',
		slices: {  1: {offset: 0.2},
			2: {offset: 0.2},
		},
	};
	
	var chart = new google.visualization.PieChart(document.getElementById('piechart_3d225'));
	chart.draw(data, options);
}


function drawChart229() {
	var data = google.visualization.arrayToDataTable([
		['Teams', 'Times Won'],
		['Selected',     3],
		['Not Selected',      1]
	]);
	
	var options = {
		title: 'Anthony Davis\' times selected as NBA All-Star Player vs. Years Played',
		backgroundColor:'transparent',
		titleTextStyle:{color: '#990000', fontName: 'Arial', fontSize: 15, bold:true, italic:false},
		is3D: true,
		legend:{textStyle:{color: '#990000', fontName: 'Arial', fontSize: 10, bold:true, italic:false}},
		pieSliceText: 'percentage',
		slices: {  1: {offset: 0.2},
			2: {offset: 0.2},
		},
	};
	
	var chart = new google.visualization.PieChart(document.getElementById('piechart_3d226'));
	chart.draw(data, options);
}	