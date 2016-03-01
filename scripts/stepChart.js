function drawAveragesWithGamesPlayed() {
	var data = google.visualization.arrayToDataTable([
		['Player',  'Games Played','Minutes Per Game', 'Point Per Game', 'Field Goals Made Per Game', 'Field Goals Attempted Per Game', 'Field Goal %', '3-Points Made Per Game', '3-Points Attempted Per Game', '3-Point %', 'Free-Throws Made Per Game', 'Free-Throws Attempted Per Game', 'Free-Throw %', 'Offensive Rebounds Per Game', 'Defensive Rebounds Per Game', 'Total Rebounds Per Game', 'Assists Per Game', 'Steals Per Game', 'Blocks Per Game', 'Turnovers Per Game', 'Effective Field Goal %', 'TrueShooting %'],
		['Michael Jordan',   1072, 38.3, 30.1, 11.4, 22.9, 49.7, 0.5, 1.7, 32.7, 6.8, 8.2, 83.5, 1.6, 4.7, 6.2, 5.3, 2.3, 0.8, 2.7, 50.9, 56.9],
		['Wilt Chamberlain*',  1045, 45.8, 30.1, 12.1, 22.5, 54, 0, 0, 0, 5.8, 11.4, 51.1, 0, 0, 22.9, 4.4, 0, 0, 0, 54, 54.7],
		['Bill Russell*',  963, 42.3, 15.1, 5.9, 13.4, 44, 0, 0, 0, 3.3, 5.8, 56.1, 0, 0, 22.5, 4.3, 0, 0, 0, 44, 47.1],
		['Shaquille O\'Neal',  1207, 34.7, 23.7, 9.4, 16.1, 58.2, 0, 0, 4.5, 4.9, 9.3, 52.7, 3.5, 7.4, 10.9, 2.5, 0.6, 2.3, 2.7, 58.2, 58.6],
		['Oscar Robertson**', 1040, 42.2, 25.7, 9.1, 18.9, 48.5, 0, 0, 0, 7.4, 8.8, 83.8, 1, 3, 7.5, 9.5, 1.1, 0.1, 0, 48.5, 56.4],
		['Magic Johnson',  906, 36.7, 19.5, 6.9, 13.2, 52, 0.4, 1.2, 30.3, 5.5, 6.5, 84.8, 1.8, 5.5, 7.2, 11.2, 1.9, 0.4, 3.9, 53.3, 61],
		['Kareem Abdul-Jabbar', 1506, 36.8, 24.6, 10.2, 18.1, 55.9, 0, 0, 5.6, 4.3, 6, 72.1, 2.4, 7.6, 11.2, 3.6, 0.9, 2.6, 2.7, 55.9, 59.2],
		['Tim Duncan****',  1368, 36.2, 19.2, 7.5, 14.7, 50.6, 0, 0.1, 17.9, 4.3, 6.2, 69.7, 2.8, 8.1, 10.9, 3, 0.7, 2.2, 2.5, 50.7, 55.1],
		['Larry Bird',  897, 38.2, 24.3, 9.6, 19.3, 49.6, 0.7, 1.9, 37.6, 4.4, 5, 88.6, 2, 8, 10, 6.3, 1.7, 0.8, 3.1, 51.4, 56.5],
		['Kobe Bryant****', 1321, 36.3, 25.1, 8.7, 19.5, 44.9, 1.3, 4.1, 33, 6.3, 7.5, 83.7, 1.1, 4.1, 5.3, 4.7, 1.5, 0.5, 3, 48.3, 55.1],
		['Jerry West**',  932,39.2, 27, 9.7, 20.4, 47.4, 0, 0, 0, 7.7, 9.4, 81.4, 1, 2.8, 5.8, 6.7, 2.6, 0.7, 0, 47.4, 55],
		['Elgin Baylor*',  846, 40, 27.4, 10.3, 23.8, 43.1, 0, 0, 0, 6.8, 8.7, 78, 0, 0, 13.5, 4.3, 0, 0, 0, 43.1, 49.4],
		['Hakeem Olajuwon',  1238, 35.7, 21.8, 8.7, 17, 51.2, 0, 0.1, 20.2, 4.4, 6.2, 71.2, 3.3, 7.8, 11.1, 2.5, 1.7, 3.1, 3, 51.3, 55.3],
		['Bob Pettit*',  792, 38.8, 26.4, 9.3, 21.3, 43.6, 0, 0, 0, 7.8, 10.3, 76.1, 0, 0, 16.2, 3, 0, 0, 0, 43.6, 51.1],
		['Moses Malone',  1329, 33.9, 20.6, 7.1, 14.5, 49.1, 0, 0.1, 10, 6.4, 8.3, 76.9, 5.1, 7.1, 12.2, 1.4, 0.8, 1.3, 3.1, 49.1, 56.9],
		['Julius Erving',  836, 34.3, 22, 8.7, 17.1, 50.7, 0.1, 0.2, 26.1, 4.6, 5.9, 77.7, 2.5, 4.2, 6.7, 3.9, 1.8, 1.5, 3.1, 50.9, 55.8],
		['John Havlicek***',  1270, 36.6, 20.8, 8.3, 9.58, 43.9, 0, 0, 0, 4.2, 5.2, 81.5, 1.5, 3.5, 6.3, 4.8, 1.2, 0.3, 2.5, 43.9, 49.2],
		['Karl Malone',  1476, 37.2, 25, 9.2, 17.8, 51.6, 0.1, 0.2, 27.4, 6.6, 8.9, 74.2, 2.4, 7.7, 10.1, 3.6, 1.4, 0.8, 3.1, 51.8, 57.7],
		['Isiah Thomas',  979, 36.3, 19.2, 7.3, 16.2, 45.2, 0.4, 1.4, 29, 4.1, 5.4, 75.9, 1, 2.6, 3.6, 9.3, 1.9, 0.3, 3.8, 46.5, 51.6],
		['Charles Barkley',  1073, 36.7, 22.1, 7.9, 14.5, 54.1, 0.5, 1.9, 26.6, 5.9, 8.1, 73.5, 4, 7.7, 11.7, 3.9, 1.5, 0.8, 3.1, 55.8, 61.2],
		['Steph Curry****',  462, 34.9, 21.8, 7.7, 16.2, 47.5, 3.1, 6.9, 44.2, 3.3, 3.7, 90.2, 0.7, 3.6, 4.2, 6.9, 1.8, 0.2, 3.2, 56.9, 61.1],
		['Kevin Durant****',  612, 37.9, 27.3, 9.2, 19, 48.3, 1.7, 4.5, 37.9, 7.2, 8.2, 88.1, 0.8, 6.2, 7, 3.6, 1.2, 1, 3.2, 52.8, 60.3],
		['Lebron James****',  957, 39.1, 27.2, 9.8, 19.8, 49.6, 1.4, 4, 33.9, 6.3, 8.4, 74.4, 1.2, 6, 7.1, 6.9, 1.7, 0.8, 3.4, 53.1, 58.1],
		['Russell Westbrook****',  557, 34, 21.4, 7.5, 17.3, 43.4, 0.8, 2.8, 30.2, 5.5, 6.8, 81.6, 1.6, 3.8, 5.4, 7.4, 1.8, 0.3, 3.7, 45.8, 52.7],
		['Anthony Davis****',  246, 33.8, 20.4, 7.9, 15.1, 51.9, 0.1, 0.4, 25.0, 4.5, 5.8, 77.8, 2.6, 7.0, 9.6, 1.6, 1.3, 2.5, 1.6, 52.3, 57.5]
	]);
	
	var options = {
		title: '*Comparisons of the Top 20 NBA Players of All-Time and the Top 5 Players Today Careers',
		titleTextStyle:{color: 'white', fontSize: 15},
		vAxis: {textStyle:{color: 'white', fontSize: 15},titleTextStyle:{color: 'white', fontSize: 20}, viewWindowMode:'pretty', title: 'Accumulated Statistical Career Averages'},
		chartArea:{left:150,top:50,width:'75%',height:'75%', backgroundColor:'black',backgroundColor:{stroke:'white', strokeWidth:2}},
		isStacked: true,
		legend: {position: 'top', textStyle: {color: 'white', fontSize: 10}},
		hAxis: {titleTextStyle:{color: 'white', fontSize: 15}, title: 'Baseline Player Statistics:  GP:705,   MMP:25.59, 	PPG:10.98, 	FGMPG:4.21, 	FGAPG:9.22,	FG%:45.73, 	3PMPG:0.41,	 3PAPG:1.17, 3P%:24.67,	 FTMPG:2.22,	 FTAPG:2.94,	FT%:74.71, ORBPG:1.33, DRBPG:3.13,	TRBPG:4.77, ASTPG:2.48,    STLPG:0.85,    BLKPG:0.52,    TOVPG:1.60,    EFG%:47.62,   TS%:52.06', fontSize:20, textPosition:'none'},
		backgroundColor:'black'
	};
	
	var chart = new google.visualization.SteppedAreaChart(document.getElementById('averagesWithGamesPlayed'));
	
	chart.draw(data, options);
}

function drawAveragesWithoutGamesPlayed() {
	var data = google.visualization.arrayToDataTable([
		['Player',  'Minutes Per Game', 'Point Per Game', 'Field Goals Made Per Game', 'Field Goals Attempted Per Game', 'Field Goal %', '3-Points Made Per Game', '3-Points Attempted Per Game', '3-Point %', 'Free-Throws Made Per Game', 'Free-Throws Attempted Per Game', 'Free-Throw %', 'Offensive Rebounds Per Game', 'Defensive Rebounds Per Game', 'Total Rebounds Per Game', 'Assists Per Game', 'Steals Per Game', 'Blocks Per Game', 'Turnovers Per Game', 'Effective Field Goal %', 'TrueShooting %'],
		['Michael Jordan',    38.3, 30.1, 11.4, 22.9, 49.7, 0.5, 1.7, 32.7, 6.8, 8.2, 83.5, 1.6, 4.7, 6.2, 5.3, 2.3, 0.8, 2.7, 50.9, 56.9],
		['Wilt Chamberlain*',   45.8, 30.1, 12.1, 22.5, 54, 0, 0, 0, 5.8, 11.4, 51.1, 0, 0, 22.9, 4.4, 0, 0, 0, 54, 54.7],
		['Bill Russell*',   42.3, 15.1, 5.9, 13.4, 44, 0, 0, 0, 3.3, 5.8, 56.1, 0, 0, 22.5, 4.3, 0, 0, 0, 44, 47.1],
		['Shaquille O\'Neal',   34.7, 23.7, 9.4, 16.1, 58.2, 0, 0, 4.5, 4.9, 9.3, 52.7, 3.5, 7.4, 10.9, 2.5, 0.6, 2.3, 2.7, 58.2, 58.6],
		['Oscar Robertson**',  42.2, 25.7, 9.1, 18.9, 48.5, 0, 0, 0, 7.4, 8.8, 83.8, 1, 3, 7.5, 9.5, 1.1, 0.1, 0, 48.5, 56.4],
		['Magic Johnson',   36.7, 19.5, 6.9, 13.2, 52, 0.4, 1.2, 30.3, 5.5, 6.5, 84.8, 1.8, 5.5, 7.2, 11.2, 1.9, 0.4, 3.9, 53.3, 61],
		['Kareem Abdul-Jabbar',  36.8, 24.6, 10.2, 18.1, 55.9, 0, 0, 5.6, 4.3, 6, 72.1, 2.4, 7.6, 11.2, 3.6, 0.9, 2.6, 2.7, 55.9, 59.2],
		['Tim Duncan****',   36.2, 19.2, 7.5, 14.7, 50.6, 0, 0.1, 17.9, 4.3, 6.2, 69.7, 2.8, 8.1, 10.9, 3, 0.7, 2.2, 2.5, 50.7, 55.1],
		['Larry Bird',   38.2, 24.3, 9.6, 19.3, 49.6, 0.7, 1.9, 37.6, 4.4, 5, 88.6, 2, 8, 10, 6.3, 1.7, 0.8, 3.1, 51.4, 56.5],
		['Kobe Bryant****',  36.3, 25.1, 8.7, 19.5, 44.9, 1.3, 4.1, 33, 6.3, 7.5, 83.7, 1.1, 4.1, 5.3, 4.7, 1.5, 0.5, 3, 48.3, 55.1],
		['Jerry West**',  39.2, 27, 9.7, 20.4, 47.4, 0, 0, 0, 7.7, 9.4, 81.4, 1, 2.8, 5.8, 6.7, 2.6, 0.7, 0, 47.4, 55],
		['Elgin Baylor*',   40, 27.4, 10.3, 23.8, 43.1, 0, 0, 0, 6.8, 8.7, 78, 0, 0, 13.5, 4.3, 0, 0, 0, 43.1, 49.4],
		['Hakeem Olajuwon',   35.7, 21.8, 8.7, 17, 51.2, 0, 0.1, 20.2, 4.4, 6.2, 71.2, 3.3, 7.8, 11.1, 2.5, 1.7, 3.1, 3, 51.3, 55.3],
		['Bob Pettit*',   38.8, 26.4, 9.3, 21.3, 43.6, 0, 0, 0, 7.8, 10.3, 76.1, 0, 0, 16.2, 3, 0, 0, 0, 43.6, 51.1],
		['Moses Malone',   33.9, 20.6, 7.1, 14.5, 49.1, 0, 0.1, 10, 6.4, 8.3, 76.9, 5.1, 7.1, 12.2, 1.4, 0.8, 1.3, 3.1, 49.1, 56.9],
		['Julius Erving',   34.3, 22, 8.7, 17.1, 50.7, 0.1, 0.2, 26.1, 4.6, 5.9, 77.7, 2.5, 4.2, 6.7, 3.9, 1.8, 1.5, 3.1, 50.9, 55.8],
		['John Havlicek***',   36.6, 20.8, 8.3, 9.58, 43.9, 0, 0, 0, 4.2, 5.2, 81.5, 1.5, 3.5, 6.3, 4.8, 1.2, 0.3, 2.5, 43.9, 49.2],
		['Karl Malone',   37.2, 25, 9.2, 17.8, 51.6, 0.1, 0.2, 27.4, 6.6, 8.9, 74.2, 2.4, 7.7, 10.1, 3.6, 1.4, 0.8, 3.1, 51.8, 57.7],
		['Isiah Thomas',   36.3, 19.2, 7.3, 16.2, 45.2, 0.4, 1.4, 29, 4.1, 5.4, 75.9, 1, 2.6, 3.6, 9.3, 1.9, 0.3, 3.8, 46.5, 51.6],
		['Charles Barkley',   36.7, 22.1, 7.9, 14.5, 54.1, 0.5, 1.9, 26.6, 5.9, 8.1, 73.5, 4, 7.7, 11.7, 3.9, 1.5, 0.8, 3.1, 55.8, 61.2],
		['Steph Curry****',   34.9, 21.8, 7.7, 16.2, 47.5, 3.1, 6.9, 44.2, 3.3, 3.7, 90.2, 0.7, 3.6, 4.2, 6.9, 1.8, 0.2, 3.2, 56.9, 61.1],
		['Kevin Durant****',  37.9, 27.3, 9.2, 19, 48.3, 1.7, 4.5, 37.9, 7.2, 8.2, 88.1, 0.8, 6.2, 7, 3.6, 1.2, 1, 3.2, 52.8, 60.3],
		['Lebron James****',   39.1, 27.2, 9.8, 19.8, 49.6, 1.4, 4, 33.9, 6.3, 8.4, 74.4, 1.2, 6, 7.1, 6.9, 1.7, 0.8, 3.4, 53.1, 58.1],
		['Russell Westbrook****',  34, 21.4, 7.5, 17.3, 43.4, 0.8, 2.8, 30.2, 5.5, 6.8, 81.6, 1.6, 3.8, 5.4, 7.4, 1.8, 0.3, 3.7, 45.8, 52.7],
		['Anthony Davis****',   33.8, 20.4, 7.9, 15.1, 51.9, 0.1, 0.4, 25.0, 4.5, 5.8, 77.8, 2.6, 7.0, 9.6, 1.6, 1.3, 2.5, 1.6, 52.3, 57.5]
	]);
	
	var options = {
		title: '*Comparisons of the Top 20 NBA Players of All-Time and the Top 5 Players Today Careers',
		titleTextStyle:{color: 'white', fontSize: 15},
		vAxis: {textStyle:{color: 'white', fontSize: 15},titleTextStyle:{color: 'white', fontSize: 20}, viewWindowMode:'pretty', title: 'Accumulated Statistical Career Averages'},
		chartArea:{left:150,top:50,width:'75%',height:'75%', backgroundColor:'black',backgroundColor:{stroke:'white', strokeWidth:2}},
		isStacked: true,
		legend: {position: 'top', textStyle: {color: 'white', fontSize: 10}},
		hAxis: {titleTextStyle:{color: 'white', fontSize: 15}, title: 'Baseline Player Statistics:  GP:705,   MMP:25.59, 	PPG:10.98, 	FGMPG:4.21, 	FGAPG:9.22,	FG%:45.73, 	3PMPG:0.41,	 3PAPG:1.17, 3P%:24.67,	 FTMPG:2.22,	 FTAPG:2.94,	FT%:74.71, ORBPG:1.33, DRBPG:3.13,	TRBPG:4.77, ASTPG:2.48,    STLPG:0.85,    BLKPG:0.52,    TOVPG:1.60,    EFG%:47.62,   TS%:52.06', fontSize:20, textPosition:'none'},
		backgroundColor:'black'
	};
	
	var chart = new google.visualization.SteppedAreaChart(document.getElementById('averagesWithoutGamesPlayed'));
	
	chart.draw(data, options);
}

function drawAveragesComparedToBaseline() {
	var data = google.visualization.arrayToDataTable([
		['Player',  'Minutes Per Game', 'Point Per Game', 'Field Goals Made Per Game', 'Field Goals Attempted Per Game', 'Field Goal %', '3-Points Made Per Game', '3-Points Attempted Per Game', '3-Point %', 'Free-Throws Made Per Game', 'Free-Throws Attempted Per Game', 'Free-Throw %', 'Offensive Rebounds Per Game', 'Defensive Rebounds Per Game', 'Total Rebounds Per Game', 'Assists Per Game', 'Steals Per Game', 'Blocks Per Game', 'Turnovers Per Game', 'Effective Field Goal %', 'TrueShooting %'],
		['Michael Jordan',    12.71, 19.12, 7.19, 13.68, 3.97, 0.09, 0.53, 8.03, 4.58, 5.26, 8.79, 0.27, 1.57, 1.43, 2.82, 1.45, 0.28, 1.10, 3.28, 4.84],
		['Wilt Chamberlain*',  20.71, 19.12, 7.89, 13.28, 8.27, 0, 0, 0, 3.58, 8.46, -23.61, 0, 0, 18.13, 1.92, 0, 0, 0, 6.38, 2.64],
		['Bill Russell*',  16.71, 4.12, 1.69, 4.18, -1.73, 0, 0, 0, 1.08, 2.86, -18.61, 0, 0, 17.73, 1.82, 0, 0, 0, -3.62, -4.96],
		['Shaquille O\'Neal',  9.11, 12.72, 5.19, 6.88, 12.47, -0.41, -1.17, -20.17, 2.68, 6.36, -22.01, 2.17, 4.27, 6.13, 0.02, -0.25, 1.79, 1.10, 10.58, 6.54],
		['Oscar Robertson**',  16.61, 14.72, 4.89, 9.68, 2.77, 0, 0, 0, 5.18, 5.86, 9.09, -0.33, -0.13, 2.73, 7.02, 0.25, -0.41, 0, 0.88, 4.34],
		['Magic Johnson',  11.11, 8.52, 2.69, 3.98, 6.27, -0.01, 0.03, 5.63, 3.28, 3.56, 10.09, 0.47, 2.37, 2.43, 8.72, 1.05, -0.11, 2.30, 5.68, 8.94],
		['Kareem Abdul-Jabbar',  11.21, 13.62, 5.99, 8.88, 10.17, -0.41, -1.17, -19.07, 2.08, 3.06, -2.61, 1.07, 4.47, 6.43, 1.12, 0.05, 2.09, 1.10, 8.28, 7.14],
		['Tim Duncan****',  8.61, 8.22, 3.29, 5.48, 4.87, -0.41, -1.07, -6.77, 2.08, 3.26, -5.01, 1.47, 4.97, 6.13, 0.52, -0.15, 1.69, 0.90, 3.08, 3.04],
		['Larry Bird',  12.81, 13.32, 5.39, 10.08, 3.87, 0.29, 0.73, 12.93, 2.18, 2.06, 13.89, 0.67, 4.87, 5.23, 3.82, 0.85, 0.29, 1.50, 3.78, 4.44],
		['Kobe Bryant****',  10.71, 14.12, 4.49, 10.28, -0.83, 0.89, 2.93, 8.33, 4.08, 4.56, 8.99, -0.23, 0.97, 0.53, 2.22, 0.65, -0.01, 1.40, 0.68, 3.04],
		['Jerry West**',  13.61, 16.02, 5.49, 11.18, 1.67, 0, 0, 0, 5.48, 6.46, 6.69, -0.33, -0.33, 1.03, 4.22, 1.75, 0.19, 0, -0.22, 2.94],
		['Elgin Baylor*',  14.41, 16.42, 6.09, 14.58, -2.63, 0, 0, 0, 4.58, 5.76, 3.29, 0, 0, 8.73, 1.82, 0, 0, 0, -4.52, -2.66],
		['Hakeem Olajuwon',  10.11, 10.82, 4.49, 7.78, 5.47, -0.41, -1.07, -4.47, 2.18, 3.26, -3.51, 1.97, 4.67, 6.33, 0.02, 0.85, 2.59, 1.40, 3.68, 3.24],
		['Bob Pettit*',  13.21, 15.42, 5.09, 12.08, -2.13, 0, 0, 0, 5.58, 7.36, 1.39, 0, 0, 11.43, 0.52, 0, 0, 0, -4.02, -0.96],
		['Moses Malone',  8.31, 9.62, 2.89, 5.28, 3.37, -0.41, -1.07, -14.67, 4.18, 5.36, 2.19, 3.77, 3.97, 7.43, -1.08, -0.05, 0.79, 1.50, 1.48, 4.84],
		['Julius Erving',  8.71, 11.02, 4.49, 7.88, 4.97, -0.31, -0.97, 1.43, 2.38, 2.96, 2.99, 1.17, 1.07, 1.93, 1.42, 0.95, 0.99, 1.50, 3.28, 3.74],
		['John Havlicek***',  11.01, 9.82, 4.09, 9.58, -1.83, 0, 0, 0, 1.98, 2.26, 6.79, 0.17, 0.37, 1.53, 2.32, 0.35, -0.21, 0.90, -3.72, -2.86],
		['Karl Malone',  11.61, 14.02, 4.99, 8.58,5.87, -0.31, -0.97, 2.73, 4.83, 5.96, -0.51, 1.07, 4.57, 5.33, 1.12, 0.55, 0.29, 1.50, 4.18, 5.64],
		['Isiah Thomas',  10.71, 8.22, 3.09, 6.98, -0.53, -0.01, 0.23, 4.33, 1.88, 2.46, 1.19, -0.33, -0.53, -1.17, 6.82, 1.05, -0.21, 2.20, -1.12, -0.46],
		['Charles Barkley',  11.11, 11.12, 3.69, 5.28, 8.37, 0.09, 0.73, 1.93, 3.68, 5.16, -1.21, 2.67, 4.57, 6.93, 1.42, 0.65, 0.29, 1.50, 8.18, 9.14],
		['Steph Curry****',  9.31, 10.82, 3.49, 6.98, 1.77, 2.69, 5.73, 19.53, 1.08, 0.76, 15.49, -0.63, 0.47, -0.57, 4.42, 0.95, -0.31, 1.60, 9.28, 9.04],
		['Kevin Durant****',  12.31, 16.32, 4.99, 9.78, 2.57, 1.29, 3.33, 13.23, 4.98, 5.26, 13.39, -0.53, 3.07, 2.23, 1.12, 0.35, 0.49, 1.60, 5.18, 8.24],
		['Lebron James****',  13.51, 16.22, 5.59, 10.58, 3.87, 0.99, 2.83, 9.23, 4.08, 5.46, -0.31, -0.13, 2.87, 2.33, 4.42, 0.85, 0.29, 1.80, 5.48, 6.04],
		['Russell Westbrook****',  8.41, 10.42, 3.29, 8.08, -2.33, 0.39, 1.63, 5.53, 3.28, 3.86, 7.09, 0.27, 0.67, 0.63, 4.92, 0.95, -0.21, 2.10, -1.82, 0.64],
		['Anthony Davis****',  9.42, 3.69, 5.88, 6.17, -0.31, -0.31, -0.77, 0.33, 2.28, 2.86, 3.09, 1.27, 3.87, 4.83, -0.88, 0.45, 1.98, 0, 4.68, 5.44]
	]);
	
	var options = {
		title: '*Comparisons of the Top 20 NBA Players of All-Time and the Top 5 Players Today Careers',
		titleTextStyle:{color: 'white', fontSize: 15},
		vAxis: {textStyle:{color: 'white', fontSize: 15},titleTextStyle:{color: 'white', fontSize: 15}, viewWindowMode:'pretty', title: 'Accumulated Statistical Career Averages'},
		chartArea:{left:150,top:50,width:'75%',height:'75%', backgroundColor:'black',backgroundColor:{stroke:'white', strokeWidth:2}},
		isStacked: true,
		legend: {position: 'top', textStyle: {color: 'white', fontSize: 10}},
		hAxis: {titleTextStyle:{color: 'white', fontSize: 15}, title: 'Baseline Player Statistics:  GP:705,   MMP:25.59, 	PPG:10.98, 	FGMPG:4.21, 	FGAPG:9.22,	FG%:45.73, 	3PMPG:0.41,	 3PAPG:1.17, 3P%:24.67,	 FTMPG:2.22,	 FTAPG:2.94,	FT%:74.71, ORBPG:1.33, DRBPG:3.13,	TRBPG:4.77, ASTPG:2.48,    STLPG:0.85,    BLKPG:0.52,    TOVPG:1.60,    EFG%:47.62,   TS%:52.06', fontSize:20, textPosition:'none'},
		backgroundColor:'black'
	};
	
	var chart = new google.visualization.SteppedAreaChart(document.getElementById('averagesComparedToBaselineChart'));
	
	chart.draw(data, options);
}