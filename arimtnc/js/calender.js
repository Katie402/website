


var today = new Date();
var todayY = today.getFullYear();
var todayM = today.getMonth() + 1;
var todayD = today.getDate();



function kCalendar(id, date) {
	var kCalendar = document.getElementById(id);
	
	if( typeof( date ) !== 'undefined' ) {
		date = date.split('-');
		date[1] = date[1] - 1;
		date = new Date(date[0], date[1], date[2]);
	} else {
		var date = new Date();
	}
	
	var currentYear = date.getFullYear();
	//년도를 구함

	var currentMonth = date.getMonth() + 1;
	//연을 구함. 월은 0부터 시작하므로 +1, 12월은 11을 출력
	
	var currentDate = date.getDate();
	//오늘 일자.
	
	date.setDate(1);
	var currentDay = date.getDay();
	//이번달 1일의 요일은 출력. 0은 일요일 6은 토요일
	
	var dateString = new Array('sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat');
	var lastDate = new Array(31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31);
	if( (currentYear % 4 === 0 && currentYear % 100 !== 0) || currentYear % 400 === 0 )
		lastDate[1] = 29;
	//각 달의 마지막 일을 계산, 윤년의 경우 년도가 4의 배수이고 100의 배수가 아닐 때 혹은 400의 배수일 때 2월달이 29일 임.
	
	var currentLastDate = lastDate[currentMonth-1];
	var week = Math.ceil( ( currentDay + currentLastDate ) / 7 );
	//총 몇 주인지 구함.
	
	if(currentMonth != 1)
		var prevDate = currentYear + '-' + ( currentMonth - 1 ) + '-' + currentDate;
	else
		var prevDate = ( currentYear - 1 ) + '-' + 12 + '-' + currentDate;
	//만약 이번달이 1월이라면 1년 전 12월로 출력.
	
	if(currentMonth != 12) 
		var nextDate = currentYear + '-' + ( currentMonth + 1 ) + '-' + currentDate;
	else
		var nextDate = ( currentYear + 1 ) + '-' + 1 + '-' + currentDate;
	//만약 이번달이 12월이라면 1년 후 1월로 출력.

	
	if( currentMonth < 10 )
		var currentMonth = '0' + currentMonth;
	//10월 이하라면 앞에 0을 붙여준다.
	
	var calendar = '';
	
	calendar += '<div class="cal_header">';
	calendar += '			<span class="left"><a href="#!" class="button " onclick="kCalendar(\'' +  id + '\', \'' + prevDate + '\')"><img src="/img/sub/cal_left.png" alt ="달력 이전달"></a></span>';
	calendar += '			<span class="date">' + currentYear + '년 ' + currentMonth + '월</span>';
	calendar += '			<span class="right"><a href="#!" class="button " onclick="kCalendar(\'' + id + '\', \'' + nextDate + '\')"><img src="/img/sub/cal_right.png" alt ="달력 다음달"></a></span>';
	calendar += '		</div>';
	calendar += '		<div class="cal_table"><table border="0" cellspacing="0" cellpadding="0">';
	calendar += '			<caption>' + currentYear + '년 ' + currentMonth + '월 달력</caption>';
	calendar += '			<thead>';
//	calendar += '				<tr class="month_tit">';
//	calendar += '				  <th scope="row" colspan=7 class="month">'+ currentMonth +'월</th>';
//	calendar += '				</tr>';
	calendar += '				<tr>';
	calendar += '				  <th class="sun" scope="row">일</th>';
	calendar += '				  <th class="mon" scope="row">월</th>';
	calendar += '				  <th class="tue" scope="row">화</th>';
	calendar += '				  <th class="wed" scope="row">수</th>';
	calendar += '				  <th class="thu" scope="row">목</th>';
	calendar += '				  <th class="fri" scope="row">금</th>';
	calendar += '				  <th class="sat" scope="row">토</th>';
	calendar += '				</tr>';
	calendar += '			</thead>';
	calendar += '			<tbody>';
	
	var dateNum = 1 - currentDay;
	

	for(var i = 0; i < week; i++) {
		calendar += '			<tr>';
		for(var j = 0; j < 7; j++, dateNum++) {
			if( dateNum < 1 || dateNum > currentLastDate ) {
				calendar += '				<td class="' + dateString[j] + '"> </td>';
				continue;
			}
			
			if( dateNum == todayD && currentMonth == todayM && currentYear == todayY ){
				calendar += '				<td class="' + dateString[j] + ' today"><a href="/agent/agent_schview.php"><p class="tri on">' + dateNum + '</p><div class="cal_txt"><p>11:00</p><p>16:00</p><p>18:00</p></div></a></td>';
			}else{
				calendar += '				<td class="' + dateString[j] + '"><a href="#!"><p class="tri">' + dateNum + '</p></a></td>';
			}
			
		}
		calendar += '			</tr>';
	}
	
	calendar += '			</tbody>';
	calendar += '		</table> </div>';
	
	kCalendar.innerHTML = calendar;
}

function kCalendar1(id, date) {
	var kCalendar1 = document.getElementById(id);
	
	if( typeof( date ) !== 'undefined' ) {
		date = date.split('-');
		date[1] = date[1] - 1;
		date = new Date(date[0], date[1], date[2]);
	} else {
		var date = new Date();
	}
	
	var currentYear = date.getFullYear();
	//년도를 구함

	var currentMonth = date.getMonth() + 1;
	//연을 구함. 월은 0부터 시작하므로 +1, 12월은 11을 출력
	
	var currentDate = date.getDate();
	//오늘 일자.
	
	date.setDate(1);
	var currentDay = date.getDay();
	//이번달 1일의 요일은 출력. 0은 일요일 6은 토요일
	
	var dateString = new Array('sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat');
	var lastDate = new Array(31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31);
	if( (currentYear % 4 === 0 && currentYear % 100 !== 0) || currentYear % 400 === 0 )
		lastDate[1] = 29;
	//각 달의 마지막 일을 계산, 윤년의 경우 년도가 4의 배수이고 100의 배수가 아닐 때 혹은 400의 배수일 때 2월달이 29일 임.
	
	var currentLastDate = lastDate[currentMonth-1];
	var week = Math.ceil( ( currentDay + currentLastDate ) / 7 );
	//총 몇 주인지 구함.
	
	if(currentMonth != 1)
		var prevDate = currentYear + '-' + ( currentMonth - 1 ) + '-' + currentDate;
	else
		var prevDate = ( currentYear - 1 ) + '-' + 12 + '-' + currentDate;
	//만약 이번달이 1월이라면 1년 전 12월로 출력.
	
	if(currentMonth != 12) 
		var nextDate = currentYear + '-' + ( currentMonth + 1 ) + '-' + currentDate;
	else
		var nextDate = ( currentYear + 1 ) + '-' + 1 + '-' + currentDate;
	//만약 이번달이 12월이라면 1년 후 1월로 출력.

	
	if( currentMonth < 10 )
		var currentMonth = '0' + currentMonth;
	//10월 이하라면 앞에 0을 붙여준다.
	
	var calendar = '';
	
	calendar += '<div class="cal_header">';
	calendar += '			<span class="left"><a href="#!" class="button " onclick="kCalendar1(\'' +  id + '\', \'' + prevDate + '\')"><</a></span>';
	calendar += '			<span class="date">' + currentYear + '. ' + currentMonth + '.</span>';
	calendar += '			<span class="right"><a href="#!" class="button " onclick="kCalendar1(\'' + id + '\', \'' + nextDate + '\')">></a></span>';
	calendar += '		</div>';
	calendar += '		<div class="cal_table"><table border="0" cellspacing="0" cellpadding="0">';
	calendar += '			<caption>' + currentYear + '년 ' + currentMonth + '월 달력</caption>';
	calendar += '			<thead>';
	calendar += '				<tr class="month_tit">';
	calendar += '				  <th scope="row" colspan=7 class="month">'+ currentMonth +'월</th>';
	calendar += '				</tr>';
	calendar += '				<tr>';
	calendar += '				  <th class="sun" scope="row">일</th>';
	calendar += '				  <th class="mon" scope="row">월</th>';
	calendar += '				  <th class="tue" scope="row">화</th>';
	calendar += '				  <th class="wed" scope="row">수</th>';
	calendar += '				  <th class="thu" scope="row">목</th>';
	calendar += '				  <th class="fri" scope="row">금</th>';
	calendar += '				  <th class="sat" scope="row">토</th>';
	calendar += '				</tr>';
	calendar += '			</thead>';
	calendar += '			<tbody>';
	
	var dateNum = 1 - currentDay;
	

	for(var i = 0; i < week; i++) {
		calendar += '			<tr>';
		for(var j = 0; j < 7; j++, dateNum++) {
			if( dateNum < 1 || dateNum > currentLastDate ) {
				calendar += '				<td class="' + dateString[j] + '"> </td>';
				continue;
			}

			if( dateNum < 10 )
			{
				var dateNum2 = '0' + dateNum;
			} else {
				var dateNum2 = dateNum;
			}
			
			if( dateNum == todayD && currentMonth == todayM && currentYear == todayY ){
				calendar += '				<td class="' + dateString[j] + ' dates dates_'+dateNum+' dates_'+currentYear +'-'+ currentMonth+'-'+dateNum2+' today"><a href="javascript:chk_date(\''+currentYear +'-'+ currentMonth+'-'+dateNum2+'\')">' + dateNum + '</a></td>';
			}else{
				calendar += '				<td class="' + dateString[j] + ' dates dates_'+dateNum+' dates_'+currentYear +'-'+ currentMonth+'-'+dateNum2+'"><a href="javascript:chk_date(\''+currentYear +'-'+ currentMonth+'-'+dateNum2+'\')">' + dateNum + '</a></td>';
			}
			
		}
		calendar += '			</tr>';
	}
	
	calendar += '			</tbody>';
	calendar += '		</table> </div>';
	
	kCalendar1.innerHTML = calendar;

	if (document.getElementById("s_date").value != "" && document.getElementById("e_date").value != "" )
	{
		for (i=0; i<=(date_diff(document.getElementById("e_date").value, document.getElementById("s_date").value)); i++)
		{
			$(".dates_"+fnDateAdd(document.getElementById("s_date").value,"d",i)).addClass("today");

		}
	}

}

function chk_date(str_date)
{
	//alert($(".dates").length);
	$(".dates").removeClass("today");
	var arr_date = str_date.split('-');

	if (document.getElementById("s_date").value == document.getElementById("e_date").value)
	{
		document.getElementById("s_date").value = str_date;
	} else if (document.getElementById("s_date").value == "") 
	{
		document.getElementById("s_date").value = str_date;
		$(".dates_"+parseInt(arr_date[2])).addClass("today");
	} else if (document.getElementById("s_date").value <= str_date)
	{
		document.getElementById("e_date").value = str_date;
	} else {
		document.getElementById("s_date").value = str_date;
	}
	if (document.getElementById("s_date").value != "" && document.getElementById("e_date").value == "" )
	{
		$(".dates_"+str_date).addClass("today");
	} else if (document.getElementById("s_date").value != "" && document.getElementById("e_date").value != "" ) {
		for (i=0; i<=(date_diff(document.getElementById("e_date").value, document.getElementById("s_date").value)); i++)
		{
			$(".dates_"+fnDateAdd(document.getElementById("s_date").value,"d",i)).addClass("today");

		}
	}
	//alert(fnDateAdd(document.getElementById("s_date").value,"d",1));
}


function kCalendar3(id, date) {
	var kCalendar3 = document.getElementById(id);
	
	if( typeof( date ) !== 'undefined' ) {
		date = date.split('-');
		date[1] = date[1] - 1;
		date = new Date(date[0], date[1], date[2]);
	} else {
		var date = new Date();
	}
	
	var currentYear = date.getFullYear();
	//년도를 구함

	var currentMonth = date.getMonth() + 1;
	//연을 구함. 월은 0부터 시작하므로 +1, 12월은 11을 출력
	
	var currentDate = date.getDate();
	//오늘 일자.
	
	date.setDate(1);
	var currentDay = date.getDay();
	//이번달 1일의 요일은 출력. 0은 일요일 6은 토요일
	
	var dateString = new Array('sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat');
	var lastDate = new Array(31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31);
	if( (currentYear % 4 === 0 && currentYear % 100 !== 0) || currentYear % 400 === 0 )
		lastDate[1] = 29;
	//각 달의 마지막 일을 계산, 윤년의 경우 년도가 4의 배수이고 100의 배수가 아닐 때 혹은 400의 배수일 때 2월달이 29일 임.
	
	var currentLastDate = lastDate[currentMonth-1];
	var week = Math.ceil( ( currentDay + currentLastDate ) / 7 );
	//총 몇 주인지 구함.
	
	if(currentMonth != 1)
		var prevDate = currentYear + '-' + ( currentMonth - 1 ) + '-' + currentDate;
	else
		var prevDate = ( currentYear - 1 ) + '-' + 12 + '-' + currentDate;
	//만약 이번달이 1월이라면 1년 전 12월로 출력.
	
	if(currentMonth != 12) 
		var nextDate = currentYear + '-' + ( currentMonth + 1 ) + '-' + currentDate;
	else
		var nextDate = ( currentYear + 1 ) + '-' + 1 + '-' + currentDate;
	//만약 이번달이 12월이라면 1년 후 1월로 출력.

	
	if( currentMonth < 10 )
		var currentMonth = '0' + currentMonth;
	//10월 이하라면 앞에 0을 붙여준다.
	
	var calendar = '';
	
	calendar += '<div class="cal_header">';
	calendar += '			<span class="left"><a href="#!" class="button " onclick="kCalendar3(\'' +  id + '\', \'' + prevDate + '\')"><</a></span>';
	calendar += '			<span class="date">' + currentYear + '. ' + currentMonth + '.</span>';
	calendar += '			<span class="right"><a href="#!" class="button " onclick="kCalendar3(\'' + id + '\', \'' + nextDate + '\')">></a></span>';
	calendar += '		</div>';
	calendar += '		<div class="cal_table"><table border="0" cellspacing="0" cellpadding="0">';
	calendar += '			<caption>' + currentYear + '년 ' + currentMonth + '월 달력</caption>';
	calendar += '			<thead>';
	calendar += '				<tr class="month_tit">';
	calendar += '				  <th scope="row" colspan=7 class="month">'+ currentMonth +'월</th>';
	calendar += '				</tr>';
	calendar += '				<tr>';
	calendar += '				  <th class="sun" scope="row">일</th>';
	calendar += '				  <th class="mon" scope="row">월</th>';
	calendar += '				  <th class="tue" scope="row">화</th>';
	calendar += '				  <th class="wed" scope="row">수</th>';
	calendar += '				  <th class="thu" scope="row">목</th>';
	calendar += '				  <th class="fri" scope="row">금</th>';
	calendar += '				  <th class="sat" scope="row">토</th>';
	calendar += '				</tr>';
	calendar += '			</thead>';
	calendar += '			<tbody>';
	
	var dateNum = 1 - currentDay;
	

	for(var i = 0; i < week; i++) {
		calendar += '			<tr>';
		for(var j = 0; j < 7; j++, dateNum++) {
			if( dateNum < 1 || dateNum > currentLastDate ) {
				calendar += '				<td class="' + dateString[j] + '"> </td>';
				continue;
			}
			
			if( dateNum < 10 )
			{
				var dateNum2 = '0' + dateNum;
			} else {
				var dateNum2 = dateNum;
			}
			
			if( dateNum == todayD && currentMonth == todayM && currentYear == todayY ){
				calendar += '				<td class="' + dateString[j] + ' dates dates_'+dateNum+' dates_'+currentYear +'-'+ currentMonth+'-'+dateNum2+' today"><a href="javascript:cal_date(\''+currentYear +'-'+ currentMonth+'-'+dateNum2+'\')">' + dateNum + '</a></td>';
			}else{
				calendar += '				<td class="' + dateString[j] + ' dates dates_'+dateNum+' dates_'+currentYear +'-'+ currentMonth+'-'+dateNum2+'"><a href="javascript:cal_date(\''+currentYear +'-'+ currentMonth+'-'+dateNum2+'\')">' + dateNum + '</a></td>';
			}
			
		}
		calendar += '			</tr>';
	}
	
	calendar += '			</tbody>';
	calendar += '		</table> </div>';
	
	kCalendar3.innerHTML = calendar;
}
