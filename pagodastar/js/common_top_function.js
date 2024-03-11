/*********************************************************************
 *
 * 팝업 관련 스크립트
 *
 *********************************************************************/
function close_layer_pop(popup_id,flag,time) {
	if(!time) {
		time = 24;
	}

	if(flag) {
		setPoupCookie("pop_cookie"+popup_id, "done", time);
	}
	document.getElementById("div_layer_popup"+popup_id).style.display = "none";
}

function setPoupCookie(name, value, expirehours) {
	var todayDate = new Date();
	todayDate.setHours(todayDate.getHours() + expirehours);
	document.cookie = name + "=" + escape(value) + "; path=/; expires=" + todayDate.toGMTString() + ";"
}

//공통 모달 팝업 호출
function pop_modal_open(did, vtop, pix, vleft) {
	if(!vtop) {
		vtop = 150; //기본값은 150;
	}

	if(!vleft) {
		vleft = 0; //기본값은 0;
	}

	if(!pix) {
		pix = false; //기본값은 false;
	}

	$('.modal').show();

	//위치 지정
	var b_width = $(document.body,top).width(); //페이지 전체크기
	var t_height = $(document.body,top).scrollTop(); //상단 높이

	var div_width = parseInt($("#"+did).css('width')) / 2;

	var width = b_width/2 - div_width;
	width = width + vleft;
	var height = t_height + vtop; //상단부터 띄워야 하는 높이

	$("#"+did).css({top:height,left:width,display:'none',margin:'0'});

	//var currentPosition = parseInt($("#"+did).css("top"));
	var position = $(window).scrollTop()+vtop; // 현재 스크롤바의 위치값을 반환합니다.
	//var position = 0;

	$("#"+did).css('top',position+"px");	// 처음 로딩 될때 스크롤 상태이면 화면 중간에나오게 수정
	$("#"+did).show();
	//console.log('currentPosition:'+$("#"+did).css('top'));
}

//모달 창 닫기
function pop_modal_close(did) {
	// 모달창에 iframe 가 있으면 초기화
	var obj = $("#"+did).find('iframe');
	if(typeof obj == 'object') {
		$(obj).attr('src','about:Blank');
	}

	$('.modal').hide();
	$("#"+did).stop();
	$('#'+did).hide();
}

/******************************************************************************************
*
* Cookie 관련 함수
*
*******************************************************************************************/
function Set_Cookie(name, value, expires, path, domain, secure) {
	// set time, it's in milliseconds
	var today = new Date();
	today.setTime(today.getTime());

	/*
	if the expires variable is set, make the correct
	expires time, the current script below will set
	it for x number of days, to make it for hours,
	delete * 24, for minutes, delete * 60 * 24
	*/

	if(expires) {
		expires = expires * 1000 * 60 * 60 * 24;
	}

	var expires_date = new Date(today.getTime() + (expires));

	document.cookie = name + "=" +escape(value) + ((expires) ? ";expires=" + expires_date.toGMTString() : "") + ((path) ? ";path=" + path : "") + ((domain) ? ";domain=" + domain : "") + ((secure) ? ";secure" : "");
}

//this fixes an issue with the old method, ambiguous values
//with this test document.cookie.indexOf(name + "=");
function Get_Cookie(check_name) {
	// first we'll split this cookie up into name/value pairs
	// note: document.cookie only returns name=value, not the other components
	var a_all_cookies = document.cookie.split(';');
	var a_temp_cookie = '';
	var cookie_name = '';
	var cookie_value = '';
	var b_cookie_found = false; // set boolean t/f default f

	for(i=0; i<a_all_cookies.length; i++) {
		// now we'll split apart each name=value pair
		a_temp_cookie = a_all_cookies[i].split('=');

		// and trim left/right whitespace while we're at it
		cookie_name = a_temp_cookie[0].replace(/^\s+|\s+$/g, '');

		// if the extracted name matches passed check_name
		if(cookie_name == check_name) {
			b_cookie_found = true;
			// we need to handle case where cookie has no value but exists (no = sign, that is):
			if(a_temp_cookie.length > 1) {
				cookie_value = unescape(a_temp_cookie[1].replace(/^\s+|\s+$/g, ''));
			}
			// note that in cases where cookie is initialized but no value, null is returned
			return cookie_value;
			break;
		}
		a_temp_cookie = null;
		cookie_name = '';
	}

	if(!b_cookie_found) {
		return null;
	}
}

//this deletes the cookie when called
function Delete_Cookie(name, path, domain) {
	if(Get_Cookie(name)) {
		document.cookie = name + "=" + ((path) ? ";path=" + path : "") + ((domain) ? ";domain=" + domain : "") + ";expires=Thu, 01-Jan-1970 00:00:01 GMT";
	}
}
