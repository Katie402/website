// 엔터키를 치면 텝키로 인식하게
function EnterFilter() {
	if(event.keyCode == 13) {
		event.keyCode = 9;
	}
}

/******************************************************************************************
* 주민번호 체크
*
* 2010.07.19 수정 (조인영)
* 00년 이후 출생자도 체크 되게 수정
*******************************************************************************************/
function juminCheck(reg1, reg2) {
	var strresidentid1 = reg1;
	var strresidentid2 = reg2;
	var strresidentid=strresidentid1+strresidentid2;
	var ck;

	if(strresidentid1.length < 6) {
		$('#error_jumin').html("<br/>"+"주민등록번호 길이가 정확하지 않습니다.!!");
		//alert ("주민등록번호 길이가 정확하지 않습니다.!!");
		return false;
	}

	if(strresidentid2.length < 7) {
		$('#error_jumin').html("<br/>"+"주민등록번호 길이가 정확하지 않습니다.!!");
		//alert ("주민등록번호 길이가 정확하지 않습니다.!!");
		return false;
	}

	var chk = 0;
	for(var i=0; i<=5; i++) {
		chk = chk+((i%8+2)*parseInt(strresidentid1.substring(i,i+1)));
	}

	for(var i=6; i<=11; i++) {
		chk = chk+((i%8+2) *parseInt(strresidentid2.substring(i-6,i-5)));
	}

	chk = 11-(chk%11);
	chk = chk%10;

	if(chk != strresidentid2.substring(6,7)) {
		$('#error_jumin').html("<br/>"+"잘못된 주민등록번호입니다.");
		//alert("잘못된 주민등록번호입니다.");
		return false;
	}

	var str19 = '19';
	var str20 = '20';
	var yy = strresidentid1.substr(0, 2); //년
	var mm = strresidentid1.substr(2, 2);//월
	var dd = strresidentid1.substr(4, 2);//일
	var yunyear;
	//주민번호 맨 뒷자리
	var first=strresidentid2.substr(0,1);

	//윤년 2월의 날짜수 지정
	if((first== 3) || (first== 4)) {
		var stryy = str20 + yy; //20??년
	} else {
		var stryy = str19 + yy; //19??년
	}

	if((stryy % 4 == 0) && (stryy % 100 != 0) || (stryy % 400 == 0)) {
		yunyear = 29;
	} else {
		yunyear = 28;
	}

	//1~12 월
	if((mm <= 0) || (mm > 12)) {
		$('#error_jumin').html("<br/>"+"생년월일이 맞지 않습니다.");
		//alert("생년월일이 맞지 않습니다.");
		return false;
	}

	//마지막날이 31일인 월체크
	if((mm == 1 || mm == 3 || mm == 5 || mm == 7 || mm == 8 || mm == 10 || mm == 12) && (dd > 31 || dd <= 0)) {
		$('#error_jumin').html("<br/>"+"생년월일이 맞지 않습니다.");
		//alert("생년월일이 맞지 않습니다.");
		return false;
	}

	//마지막날이 30일인 월체크
	if((mm == 4 || mm == 6 || mm == 9 || mm == 11) && (dd > 30 || dd <= 0)) {
		$('#error_jumin').html("<br/>"+"생년월일이 맞지 않습니다.");
		//alert("생년월일이 맞지 않습니다.");
		return false;
	}

	//윤년의 경우 2월의 마지막날 체크
	if(mm == 2 && (dd > yunyear || dd <= 0)) {
		$('#error_jumin').html("<br/>"+stryy + "생년월일이 맞지 않습니다." + yunyear);
		//alert(stryy + "생년월일이 맞지 않습니다." + yunyear);
		return false;
	}

	//주민번호 뒤자리 1이나 2,2000년 이후출생자는 3,4
	if(!((first== 1) || (first == 2) || (first== 3) || (first== 4))) {
		$('#error_jumin').html("<br/>"+"주민등록번호 뒷자리의 시작은 1~4입니다.");
		//alert("주민등록번호 뒷자리의 시작은 1~4입니다.");
		return false;
	}

	if(!CheckSocialNo(strresidentid1+''+strresidentid2)) {
		$('#error_jumin').html("<br/>"+"형식에 맞지 않는 주민번호 입니다.");
		//alert("형식에 맞지 않는 주민번호 입니다.");
		return false;
	}

	return true;
}

/******************************************************************************************

주민번호 체크 로직

******************************************************************************************/

function CheckSocialNo(socialno) {
	var i;
	var val0, val1, val2, val3, val4, val5, val6, val7, val8, val9, val10, val11, val12;
	var sum, checkno;

	if(socialno.length != 13) {
		return false;
	}

	for(i=0; i<13; i++) {
		if((socialno.charAt(i) < '0') || (socialno.charAt(i) > '9')) {
			return false;
		}
	}

	if((socialno.charAt(6) < '1') || (socialno.charAt(6) > '4')) {
		return false;
	}

	month = parseInt(socialno.charAt(2))*10 + parseInt(socialno.charAt(3));
	day = parseInt(socialno.charAt(4))*10 + parseInt(socialno.charAt(5));
	if((month == 1) || (month == 3) || (month == 5) || (month == 7) || (month == 8) || (month == 10) || (month == 12)) {
		if((day < 0) || (day > 31)) {
			return false;
		}
	}

	if((month == 2)) {
		if((day < 0) || (day > 29)) {
			return false;
		}
	}

	if((month == 4) || (month == 6) || (month == 9) || (month == 11)) {
		if((day < 0) || (day > 30)) {
			return false;
		}
	}

	val0 = parseInt(socialno.charAt(0)) * 2;
	val1 = parseInt(socialno.charAt(1)) * 3;
	val2 = parseInt(socialno.charAt(2)) * 4;
	val3 = parseInt(socialno.charAt(3)) * 5;
	val4 = parseInt(socialno.charAt(4)) * 6;
	val5 = parseInt(socialno.charAt(5)) * 7;
	val6 = parseInt(socialno.charAt(6)) * 8;
	val7 = parseInt(socialno.charAt(7)) * 9;
	val8 = parseInt(socialno.charAt(8)) * 2;
	val9 = parseInt(socialno.charAt(9)) * 3;
	val10 = parseInt(socialno.charAt(10)) * 4;
	val11 = parseInt(socialno.charAt(11)) * 5;
	val12 = parseInt(socialno.charAt(12));

	sum = val0 + val1 + val2 + val3 + val4 + val5 + val6 + val7 + val8 + val9 + val10 + val11;

	checkno = (11 - (sum % 11)) % 10;
	if(checkno == val12) {
		return true;
	} else {
		return false;
	}
}

/******************************************************************************************
1. 설명: <input type=radio or type=checkbox>가 하나라도 선택이 되어 있는가
2. 사용예:


	<input type="checkbox" name="a[]" value="1" class="aa" />
	<input type="checkbox" name="a[]" value="2" class="aa" />
	<input type="checkbox" name="a[]" value="3" class="aa"/>

	<input type="radio" name="cc" value="1" />
	<input type="radio" name="cc" value="0" />

	<script>
	if(checked_box('a[]'))
		alert('선택되었습니다.')

	if(checked_box('cc'))
		alert('선택되었습니다.')
	</script>

******************************************************************************************/
function checked_box(name) {
	if($("input[name='"+name+"']:checked").length > 0) {
		return true;
	} else {
		return false;
	}
}

function checked_box_class(name) {
	if($("input[class='"+name+"']:checked").length > 0) {
		return true;
	} else {
		return false;
	}
}

/******************************************************************************************
1. 설명: 체크한 value가 무엇인가?
2. 사용예:

	<form name=aa>
		<input type=radio name=bb value=1>
		<input type=radio name=bb value=2>
		<input type=radio name=bb value=3>
	</form>

	<script>
	checked_value('bb');
	</script>

******************************************************************************************/
//인덱스값
function checked_value_idx(name) {
	return $("input[name="+name+"]:checked").index();
}

//실제 체크 한 값 (라디오 박스)
function radio_checked_value_val(name) {
	return $("input[name="+name+"]:checked").val();
}

//실제 체크 한 값 (체크 박스) 배열로 리턴한다.
function checkbox_checked_value_val(name) {
	var re = new Array();
	$("input[name='"+name+"']:checked").each(function(index) {
		re[index] = $(this).val();
	});

	return re
}

//실제 체크 한 값 (체크 박스) 배열로 리턴한다.
function checkbox_checked_value_val_class(name) {
	var re = new Array();
	$("input[class='"+name+"']:checked").each(function(index) {
		re[index] = $(this).val();
	});

	return re
}

/******************************************************************************************
1. 설명: checkbox를 자동으로 체크하고 싶은 경우(데이타수정시) 자동으로 체크되게 한다.

2010-09-30 조인영 수정

<input type="checkbox" name="a[]" value="1" />
<input type="checkbox" name="a[]" value="2" />
<input type="checkbox" name="a[]" value="3" />

<script>
	checkbox_checkval('a[]','1');
</script>

******************************************************************************************/
function checkbox_checkval(name, value) {
	$("input:checkbox[name="+name+"][value="+value+"]").prop('checked',true);
}

/******************************************************************************************
*
* 전체선택 (2010-09-30 조인영 수정)
*
* <input type="checkbox" id="checkall" onClick="checkbox_toggle('checkall','a[]')"/>
* <input type="checkbox" name="a[]" value="1" />
* <input type="checkbox" name="a[]" value="2" />
* <input type="checkbox" name="a[]" value="3" />
*******************************************************************************************/
function checkbox_toggle(checkall_id,name) {
	if($('#'+checkall_id).is(':checked')) {
		$("input[name='"+name+"']").prop('checked',true);
	} else {
		$("input[name='"+name+"']").prop('checked',false);
	}
}

/******************************************************************************************
*
* 전체선택 (2010-12-07 이윤호 수정)
*
* <input type="checkbox" id="checkall" onClick="checkbox_toggle('checkall','aaa')"/>
* <input type="checkbox" name="a[]" value="1" class="aaa"/>
* <input type="checkbox" name="a[]" value="2" class="aaa"/>
* <input type="checkbox" name="a[]" value="3" class="aaa"/>
*******************************************************************************************/
function checkbox_toggle_class(checkall_id,class_name) {
	$("."+class_name).prop('checked',$('#'+checkall_id).is(':checked'));
}

/******************************************************************************************
*
* 특정 영역 인쇄
* onClick 이벤트에 divname을 파라메타 변수로 넘겨 준다.
*******************************************************************************************/
function printSection(divname,user_css_path) {
	var sw = screen.width;
	var sh = screen.height;
	if(jQuery("#visual img").attr("width") != 0) {
		var w = jQuery("#visual img").attr("width");//새창의 폭
		var h = jQuery("#visual img").attr("height");//새창의 높이
	} else {
		var w = 640;//새창의 폭
		var h = 800;//새창의 높이
	}

	var w = 900;//새창의 폭
	var h = 800;//새창의 높이

	var xpos = (sw-w)/2; //화면 중앙에 띄우기 가로위치
	var ypos = (sh-h)/2; //화면 중앙에 띄우기 위함 세로위치

	if(!user_css_path) {
		user_css_path = '/asset/skin/default';
	}

	var rptHeader = "<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Transitional//EN\" \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd\">";
	rptHeader = rptHeader + "<html xmlns=\"http://www.w3.org/1999/xhtml\"><head><title>Print Preview</title>";
	rptHeader = rptHeader + "<meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\" />";
	rptHeader = rptHeader + "<link href=\"/asset/css/common.css\" rel=\"stylesheet\" type=\"text/css\" />";

	rptHeader = rptHeader + "<link href=\""+user_css_path+"/css/common.css\" rel=\"stylesheet\" type=\"text/css\" />";
	rptHeader = rptHeader + "<link href=\""+user_css_path+"/css/pages.css\" rel=\"stylesheet\" type=\"text/css\" />";
	rptHeader = rptHeader + "<link href=\""+user_css_path+"/css/my_pages.css\" rel=\"stylesheet\" type=\"text/css\" />";
	rptHeader = rptHeader + "<link href=\""+user_css_path+"/css/courses_pages.css\" rel=\"stylesheet\" type=\"text/css\" />";
	rptHeader = rptHeader + "<link href=\""+user_css_path+"/css/about_pages.css\" rel=\"stylesheet\" type=\"text/css\" />";

	var rptHeader = rptHeader + "</head><body>";

	var rptContent0 = document.getElementById(divname).innerHTML.replace('"','\"');

	var rptTail="<br></body></html>";
	rptContent=rptHeader + rptContent0 + rptTail;
	//rptContent=rptHeader + rptTail;

	rptWin=window.open("","rpt","width=" + w +",height="+ h +",top=" + ypos + ",left="+ xpos +",status=yes,scrollbars=yes"); //동적인 새창을 띄웁니다.
	rptWin.document.open(); //문서를 열고
	rptWin.document.write(rptContent); //기사 내용을 그곳에 뿌립니다.
	rptWin.document.close(); //문서를 닫고

	//플래시로드가 안되어서 새로고침 한번 함
	rptWin.document.location.reload();

	rptWin.print(); //윈도우 인쇄하기 대화상자 호출
	//rptWin.close(); //인쇄끝나면 새창을 닫습니다.
}

function documentprint(obj) {
	obj.print();
}

/******************************************************************************************
*
* 영역 별로 토글 기능
* onClick="web_toggle($('#student-billing-history-content'))"
*******************************************************************************************/
function webArea_toggle(jobj) {
	jobj.slideToggle("slow");
}

/******************************************************************************************
*
* 자동으로 rowspan 계산
*
* 사용예
* tableRowSpanning2($('table#테이블오브젝트명'), 1);
*
* 반드시 뒤에서 부터 호출한다.

*******************************************************************************************/

function tableRowSpanning(Table, spanning_row_index) {
	var RowspanTd = false;
	var RowspanText = false;
	var RowspanCount = 0;
	var Rows = $('tbody tr', Table);

	$.each(Rows, function() {
		var This = $('td', this)[spanning_row_index];

		if(spanning_row_index == 1) {
			var text = $(This).find(':text').val();
		} else if(spanning_row_index == 0) {
			var text = $(This).find(':checkbox').val();
		} else {
			var text = $(This).text();
		}

		if(RowspanTd == false) {
			RowspanTd = This;
			RowspanText = text;
			RowspanCount = 1;
		} else if(RowspanText != text) {
			$(RowspanTd).attr('rowSpan', RowspanCount);

			RowspanTd = This;
			RowspanText = text;
			RowspanCount = 1;
		} else {
			$(This).remove();
			RowspanCount++;
		}
	});

	$(RowspanTd).attr('rowSpan', RowspanCount);
}//end function

/******************************************************************************************
*
* 통화 표시
* $('#charge_amt').html(charged_amt);
* $('#charge_amt').formatCurrency({useHtml:true});
*
* 관련 링크 : http://bendewey.wordpress.com/2008/11/11/jquery-formatcurrency-plugin/
*******************************************************************************************/
(function($) {
	$.fn.formatCurrency = function(settings) {
		settings = jQuery.extend({
			name: "formatCurrency",
			useHtml: false,
			symbol: '',
			global: true
		}, settings);

		return this.each(function() {
			var num = "0";
			num = $(this)[settings.useHtml ? 'html' : 'val']();
			num = num.replace(/\$|\,/g, '');

			if(isNaN(num)) {
				num = "0";
			}

			sign = (num == (num = Math.abs(num)));
			num = Math.floor(num * 100 + 0.50000000001);
			cents = num % 100;
			num = Math.floor(num / 100).toString();

			if(cents < 10) {
				cents = "0" + cents;
			}

			for(var i=0; i<Math.floor((num.length - (1 + i)) / 3); i++) {
				num = num.substring(0, num.length - (4 * i + 3)) + ',' + num.substring(num.length - (4 * i + 3));
			}

			//$(this)[settings.useHtml ? 'html' : 'val'](((sign) ? '' : '-') + settings.symbol + num + '.' + cents);
			$(this)[settings.useHtml ? 'html' : 'val'](((sign) ? '' : '-') + settings.symbol + num);
		});
	};

	// Remove all non numbers from text
	$.fn.toNumber = function(settings) {
		settings = jQuery.extend({
			name: "toNumber",
			useHtml: false,
			global: true
		}, settings);

		return this.each(function() {
			var method = settings.useHtml ? 'html' : 'val';
			$(this)[method]($(this)[method]().replace(/[^\d\.]/g, ''));
		});
	};
})(jQuery);

/******************************************************************************************
*
* iframe 부모창에서 iframe의 height 조절
*
* 사용 예 : <iframe src="url" onload="resize_iframe(this)" frameborder="0" style="width:100%; height:0px; "></iframe>
*
*******************************************************************************************/
function resize_iframe(obj) {
	var src_height = $(obj).contents().height();
	$(obj).height(src_height);
}

/******************************************************************************************
*
* iframe에서 부모창의 iframe의 height 조절
*
* 사용 예 : iframe 창 <div id="student-info"></div> <a href="resize_parent_iframe('#student-info','#student-info');"></a>
* 부모창 <iframe id="student-info"></iframe>
*******************************************************************************************/
function resize_parent_iframe(child_id, parent_id) {
	var src_height = $(child_id).height() + 30; // +30 은 패딩 값 같은거 떄문에?
	$(parent_id,parent.document).height(src_height);
}

/******************************************************************************************
*
* 공통 팝업창
*
*******************************************************************************************/
function CommonPopup(url,name,width,height,scroll,resizable,middle) {
	var optsrt;

	if(!scroll) {
		scroll = 0;
	}

	if(!resizable) {
		resizable = 0;
	}

	if(!middle) {
		var res_w = 0;
		var res_h = 0;
	} else {
		var res_w = (screen.availWidth - width) / 2;
		var res_h = (screen.availHeight - height) / 2;
	}

	if(width == 0 && height == 0) {
		optstr="fullscreen=yes,scrollbars="+scroll+",left=0,top=0,channelmode=1";
	} else {
		optstr="height="+height+",width="+width+",location=0,menubar=0,resizable="+resizable+",scrollbars="+scroll+",status=0,titlebar=0,toolbar=0,screeny=0,left="+res_w+",top="+res_h;
	}
	window.open(url, name, optstr);
}

/******************************************************************************************
*
* Base64 encode
*
*******************************************************************************************/
var Base64 = {
	// private property
	_keyStr : "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",

	// public method for encoding
	encode : function (input) {
		var output = "";
		var chr1, chr2, chr3, enc1, enc2, enc3, enc4;
		var i = 0;

		input = Base64._utf8_encode(input);

		while(i < input.length) {
			chr1 = input.charCodeAt(i++);
			chr2 = input.charCodeAt(i++);
			chr3 = input.charCodeAt(i++);

			enc1 = chr1 >> 2;
			enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
			enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
			enc4 = chr3 & 63;

			if(isNaN(chr2)) {
				enc3 = enc4 = 64;
			} else if(isNaN(chr3)) {
				enc4 = 64;
			}

			output = output + this._keyStr.charAt(enc1) + this._keyStr.charAt(enc2) + this._keyStr.charAt(enc3) + this._keyStr.charAt(enc4);
		}

		return output;
	},

	// public method for decoding
	decode : function (input) {
		var output = "";
		var chr1, chr2, chr3;
		var enc1, enc2, enc3, enc4;
		var i = 0;

		input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");

		while(i < input.length) {
			enc1 = this._keyStr.indexOf(input.charAt(i++));
			enc2 = this._keyStr.indexOf(input.charAt(i++));
			enc3 = this._keyStr.indexOf(input.charAt(i++));
			enc4 = this._keyStr.indexOf(input.charAt(i++));

			chr1 = (enc1 << 2) | (enc2 >> 4);
			chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
			chr3 = ((enc3 & 3) << 6) | enc4;

			output = output + String.fromCharCode(chr1);

			if(enc3 != 64) {
				output = output + String.fromCharCode(chr2);
			}

			if(enc4 != 64) {
				output = output + String.fromCharCode(chr3);
			}
		}

		output = Base64._utf8_decode(output);

		return output;
	},

	// private method for UTF-8 encoding
	_utf8_encode : function (string) {
		string = string.replace(/\r\n/g,"\n");
		var utftext = "";

		for(var n=0; n<string.length; n++) {
			var c = string.charCodeAt(n);

			if(c < 128) {
				utftext += String.fromCharCode(c);
			} else if((c > 127) && (c < 2048)) {
				utftext += String.fromCharCode((c >> 6) | 192);
				utftext += String.fromCharCode((c & 63) | 128);
			} else {
				utftext += String.fromCharCode((c >> 12) | 224);
				utftext += String.fromCharCode(((c >> 6) & 63) | 128);
				utftext += String.fromCharCode((c & 63) | 128);
			}
		}
		return utftext;
	},

	// private method for UTF-8 decoding
	_utf8_decode : function (utftext) {
		var string = "";
		var i = 0;
		var c = c1 = c2 = 0;

		while(i < utftext.length) {
			c = utftext.charCodeAt(i);

			if(c < 128) {
				string += String.fromCharCode(c);
				i++;
			} else if((c > 191) && (c < 224)) {
				c2 = utftext.charCodeAt(i+1);
				string += String.fromCharCode(((c & 31) << 6) | (c2 & 63));
				i += 2;
			} else {
				c2 = utftext.charCodeAt(i+1);
				c3 = utftext.charCodeAt(i+2);
				string += String.fromCharCode(((c & 15) << 12) | ((c2 & 63) << 6) | (c3 & 63));
				i += 3;
			}
		}
		return string;
	}
}

/*******************************************************************************************************
* 현재 url 의 get 변수를 가지고 온다.
*
* ciy202@pagoda21.com
* 2011.06.29
*
********************************************************************************************************/
//Get방식의 변수(query)값을 가져온다.
function GetSearchQuery(strName) {
	var oLocation = location.href;

	if(oLocation.indexOf('?') > 0) {
		var strUri = oLocation.split('?');
		var strParam = strUri[1].split('&');

		for(var i=0; i<strParam.length; i++) {
			if(strParam[i].indexOf('=') > 0) {
				var strQuery = strParam[i].split('=');

				// 0에는 parameter 이름, 1에는 값이 저장된다.
				if(strQuery[0] == strName) {
					return strQuery[1];
				}
			}
		}
	}

	// 찾고자하는 변수가 없는 경우 빈문자열 반환한다.
	return "";
}

/*******************************************************************************************
*
* 파일 확장자 체크
* 2011.10.04
*********************************************************************************************/
function getFileType(filePath) {
	var index = -1;
		index = filePath.lastIndexOf('.');

	var type = "";

	if(index != -1) {
		type = filePath.substring(index+1, filePath.len);
	} else {
		type = "";
	}

	return type;
}

/*
 * 숫자 체크
 */
//eval(function(p,a,c,k,e,d) {e=function(c) {return(c<a?"":e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)) {while(c--) {d[e(c)]=k[c]||e(c)}k=[function(e) {return d[e]}];e=function() {return'\\w+'};c=1};while(c--) {if(k[c]) {p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c])}}return p}('(2($) {$.c.f=2(p) {p=$.d({g:"!@#$%^&*()+=[]\\\\\\\';,/{}|\\":<>?~`.- ",4:"",9:""},p);7 3.b(2() {5(p.G)p.4+="Q";5(p.w)p.4+="n";s=p.9.z(\'\');x(i=0;i<s.y;i++)5(p.g.h(s[i])!=-1)s[i]="\\\\"+s[i];p.9=s.O(\'|\');6 l=N M(p.9,\'E\');6 a=p.g+p.4;a=a.H(l,\'\');$(3).J(2(e) {5(!e.r)k=o.q(e.K);L k=o.q(e.r);5(a.h(k)!=-1)e.j();5(e.u&&k==\'v\')e.j()});$(3).B(\'D\',2() {7 F})})};$.c.I=2(p) {6 8="n";8+=8.P();p=$.d({4:8},p);7 3.b(2() {$(3).f(p)})};$.c.t=2(p) {6 m="A";p=$.d({4:m},p);7 3.b(2() {$(3).f(p)})}})(C);',53,53,'||function|this|nchars|if|var|return|az|allow|ch|each|fn|extend||alphanumeric|ichars|indexOf||preventDefault||reg|nm|abcdefghijklmnopqrstuvwxyz|String||fromCharCode|charCode||alpha|ctrlKey||allcaps|for|length|split|1234567890|bind|jQuery|contextmenu|gi|false|nocaps|replace|numeric|keypress|which|else|RegExp|new|join|toUpperCase|ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('|'),0,{}));

/************************************************************************
*
* sms byte체크
*
************************************************************************/

function sms_text_check(text,total) {
	// text : 문자 필드명, total : 총 문자길이
	var content = $('#'+text).val();
	var len = $('#'+text).val().length;
	var count = 0;
	var one_ch="";
	var total2 = 0;

	for(i=0; i<len; i++) {
		one_ch = $('#'+text).val().charAt(i); //한문자만 추출

		if(escape(one_ch).length > 4) {
			count = count + 2; //한글
			if(count <= total) {
				total2 = i;
			}
		} else {
			count = count + 1; //영문
			if(count <= total) {
				total2 = i;
			}
		}
	}

	if(count > total) {
		$('#sms_status_msg').html('MMS <span id="sms_byte">0</span>/ '+total+' Byte');
		$('#sms_byte').html(count);
		$('#sms_alert_msg').html('*) 90byte 이상으로 입력 시, MMS로 전환됩니다.');
		$('#sms_type').val('mms');
	} else {
		$('#sms_status_msg').html('SMS <span id="sms_byte">0</span>/ '+total+' Byte');
		$('#sms_byte').html(count);
		$('#sms_alert_msg').html('');
		$('#sms_type').val('sms');
	}
}

/*
 * Iframe 자동 조절
 */
function doIframe() {
	o = document.getElementsByTagName('iframe');

	for(var i=0; i<o.length; i++) {
		if(/\bautoHeight\b/.test(o[i].className)) {
			setHeight(o[i]);
			addEvent(o[i],'load', doIframe);
		}
	}
}

function setHeight(e) {
	if(e.contentDocument) {
		e.height = e.contentDocument.body.offsetHeight + 35; //높이 조절
	} else {
		e.height = e.contentWindow.document.body.scrollHeight;
	}
}

function addEvent(obj, evType, fn) {
	if(obj.addEventListener) {
		obj.addEventListener(evType, fn,false);
		return true;
	} else if(obj.attachEvent) {
		var r = obj.attachEvent("on"+evType, fn);
		return r;
	} else {
		return false;
	}
}

if(document.getElementById && document.createTextNode) {
	addEvent(window,'load', doIframe);
}

/*********************************************************************
 *
 * 스크립트를 이용해서 현재 도메인 알아오기
 *
 *********************************************************************/
function rtnDomainName(url) {
	url = url.split('//');
	url = url[1].substr(0,url[1].indexOf('/'));

	return url;
}

/*********************************************************************
 *
 * 이메일 유효성 체크
 *
 *********************************************************************/
function validateEmail(email) {
	var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test(email);
}

/*********************************************************************
 *
 * 숫자만 입력
 *
 * $(".numeric").numeric();
 *
 *********************************************************************/
jQuery.fn.numeric = function() {
	return this.each(function() {
		$(this).keydown(function(e) {
			var key = e.charCode || e.keyCode || 0;
			// allow backspace, tab, delete, arrows, numbers and keypad numbers ONLY
			return (
				key == 8 ||
				key == 9 ||
				key == 46 ||
				(key >= 37 && key <= 40) ||
				(key >= 48 && key <= 57) ||
				(key >= 96 && key <= 105)
			);
		});
	});
};

/*********************************************************************
 *
 * 페북 링크 공유하기
 *
 * 이 기능을 사용하기 위해서는 해당 페이지에
 * <html xmlns:og="http://ogp.me/ns#" xmlns:fb="http://www.facebook.com/2008/fbml">
 * 위와 같은 태그를 삽입한다.
 *
 *
 *********************************************************************/
function share_facebook(alink,atitle) {
	var encode_url = encodeURIComponent(alink);

	//페북 공유하기 링크 추가
	window.open('http://www.facebook.com/sharer.php?u='+encode_url+'&t='+atitle);
}

/*********************************************************************
 *
 * SNS 공유하기
 *
 *********************************************************************/
function sendSns(sns, url, txt) {
	var o;
	var _url = encodeURIComponent(url);
	var _txt = encodeURIComponent(txt);
	var _br = encodeURIComponent('\r\n');

	switch(sns) {
		case 'facebook':
			o = {
				method:'popup',
				url:'http://www.facebook.com/sharer/sharer.php?u=' + _url
			};
			break;
		case 'twitter':
			o = {
				method:'popup',
				url:'http://twitter.com/intent/tweet?text=' + _txt + '&url=' + _url
			};
			break;
		case 'me2day':
			o = {
				method:'popup',
				url:'http://me2day.net/posts/new?new_post[body]=' + _txt + _br + _url + '&new_post[tags]=epiloum'
			};
			break;
		case 'kakaotalk':
			o = {
				method:'web2app',
				param:'sendurl?msg=' + _txt + '&url=' + _url + '&type=link&apiver=2.0.1&appver=2.0&appid=dev.epiloum.net&appname=' + encodeURIComponent('Epiloum 개발노트'),
				a_store:'itms-apps://itunes.apple.com/app/id362057947?mt=8',
				g_store:'market://details?id=com.kakao.talk',
				a_proto:'kakaolink://',
				g_proto:'scheme=kakaolink;package=com.kakao.talk'
			};
			break;
		case 'kakaostory':
			o = {
				method:'web2app',
				param:'posting?post=' + _txt + _br + _url + '&apiver=1.0&appver=2.0&appid=dev.epiloum.net&appname=' + encodeURIComponent('Epiloum 개발노트'),
				a_store:'itms-apps://itunes.apple.com/app/id486244601?mt=8',
				g_store:'market://details?id=com.kakao.story',
				a_proto:'storylink://',
				g_proto:'scheme=kakaolink;package=com.kakao.story'
			};
			break;
		case 'band':
			o = {
				method:'web2app',
				param:'create/post?text=' + _txt + _br + _url,
				a_store:'itms-apps://itunes.apple.com/app/id542613198?mt=8',
				g_store:'market://details?id=com.nhn.android.band',
				a_proto:'bandapp://',
				g_proto:'scheme=bandapp;package=com.nhn.android.band'
			};
			break;
		default:
			alert('지원하지 않는 SNS입니다.');
			return false;
	}

	switch(o.method) {
		case 'popup':
			window.open(o.url);
			break;
		case 'web2app':
			if(navigator.userAgent.match(/android/i)) {
				// Android
				setTimeout(function() { location.href = 'intent://' + o.param + '#Intent;' + o.g_proto + ';end'}, 100);
			} else if(navigator.userAgent.match(/(iphone)|(ipod)|(ipad)/i)) {
				// Apple
				setTimeout(function() { location.href = o.a_store; }, 200);
				setTimeout(function() { location.href = o.a_proto + o.param }, 100);
			} else {
				alert('이 기능은 모바일에서만 사용할 수 있습니다.');
			}
			break;
	}
}
/************************************************************************
 input Box 에 숫자만 입력하는지 체크

 2013.03.26 파일을 하나로 합침
*************************************************************************/

//eval(function(p,a,c,k,e,d) {e=function(c) {return(c<a?"":e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)) {while(c--) {d[e(c)]=k[c]||e(c)}k=[function(e) {return d[e]}];e=function() {return'\\w+'};c=1};while(c--) {if(k[c]) {p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c])}}return p}('(2($) {$.c.f=2(p) {p=$.d({g:"!@#$%^&*()+=[]\\\\\\\';,/{}|\\":<>?~`.- ",4:"",9:""},p);7 3.b(2() {5(p.G)p.4+="Q";5(p.w)p.4+="n";s=p.9.z(\'\');x(i=0;i<s.y;i++)5(p.g.h(s[i])!=-1)s[i]="\\\\"+s[i];p.9=s.O(\'|\');6 l=N M(p.9,\'E\');6 a=p.g+p.4;a=a.H(l,\'\');$(3).J(2(e) {5(!e.r)k=o.q(e.K);L k=o.q(e.r);5(a.h(k)!=-1)e.j();5(e.u&&k==\'v\')e.j()});$(3).B(\'D\',2() {7 F})})};$.c.I=2(p) {6 8="n";8+=8.P();p=$.d({4:8},p);7 3.b(2() {$(3).f(p)})};$.c.t=2(p) {6 m="A";p=$.d({4:m},p);7 3.b(2() {$(3).f(p)})}})(C);',53,53,'||function|this|nchars|if|var|return|az|allow|ch|each|fn|extend||alphanumeric|ichars|indexOf||preventDefault||reg|nm|abcdefghijklmnopqrstuvwxyz|String||fromCharCode|charCode||alpha|ctrlKey||allcaps|for|length|split|1234567890|bind|jQuery|contextmenu|gi|false|nocaps|replace|numeric|keypress|which|else|RegExp|new|join|toUpperCase|ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('|'),0,{}));

/************************************************************************
*************************************************************************
@Name :			BackToTop - jQuery Plugin
@Revison :		1.0
@Date : 		12/2011
@Author:		ALPIXEL AGENCY - (www.myjqueryplugins.com - www.alpixel.fr)
@Support:		FF, IE7, IE8, MAC Firefox, MAC Safari
@License :		Open Source - MIT License : http://www.opensource.org/licenses/mit-license.php

**************************************************************************
*************************************************************************/
//eval(function(p,a,c,k,e,r) {e=function(c) {return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)) {while(c--)r[e(c)]=k[c]||e(c);k=[function(e) {return r[e]}];e=function() {return'\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('(4($) {$.3={l:{g:\'N J I\',f:G,n:A,r:\'z\',d:\'9\'},i:4(5) {1=$.x({},$.3.l,5),$.3.m();c(1.f)$(w).F(4() {c($(u).q()!=0) {k(1.d) {8\'p\':2.v(\'7\');6;8\'9\':2.y(\'7\');6;s:2.o()}}B{k(1.d) {8\'p\':2.C(\'7\');6;8\'9\':2.D(\'7\');6;s:2.E()}}});$(\'#3\').t(4(e) {e.H();$(\'b,j\').K({q:0},1.n,1.r)})},m:4() {2=$(\'<a />\',{L:\'3\',M:\'#b\',j:\'<h>\'+1.g+\'</h>\'}).O(\'b\');c(!1.f)2.o()}};3=4(5) {$.3.i(5)}})(P);',52,52,'|opts|divBack|BackToTop|function|options|break|fast|case|slide||body|if|appearMethod||autoShow|text|span|init|html|switch|defaults|_constructLink|timeEffect|show|fade|scrollTop|effectScroll|default|click|this|fadeIn|window|extend|slideDown|linear|500|else|fadeOut|slideUp|hide|scroll|true|preventDefault|top|to|animate|id|href|Back|prependTo|jQuery'.split('|'),0,{}))

/*********************************************************************
 *
 * 글자 수 제한
 *
 *
 *********************************************************************/
 function memo_text_check(text_id,total,txt_byte_id) {
	//text : 문자 필드명, total : 총 문자길이
	if($('#'+text_id).length > 0) {
		var content = $('#'+text_id).val();
		var len = $('#'+text_id).val().length;
	} else {
		var content = '';
		var len = 0;
	}

	var count = 0;
	var one_ch = "";
	var total2 = 0;

	for(i=0; i<len; i++) {
		one_ch = $('#'+text_id).val().charAt(i); //한문자만 추출

		if(escape(one_ch).length > 4) {
			count = count + 2; //한글
			if(count <= 80) {
				total2 = i;
			}
		} else {
			count = count + 1; //영문
			if(count <= 80) {
				total2 = i;
			}
		}
	}

	if(count > total) {
		//넘은 경우
		alert(total+'Byte 이상 쓰실 수 없습니다.');
	} else {
		$('#'+txt_byte_id).html(count);
	}
}

/*********************************************************************
 *
 * 이중 submit 변경
 *
 *********************************************************************/

jQuery.fn.preventDoubleSubmit = function() {
	jQuery(this).submit(function() {
		if(this.beenSubmitted) {
			return false;
		} else {
			this.beenSubmitted = true;
		}
	});
};

/*********************************************************************
 *
 * 글자수 체크 (문자열길이체크)
 *
 *********************************************************************/
function getByteLength(input) {
	var byteLength = 0;
	for(var inx=0; inx<input.value.length; inx++) {
		var oneChar = escape(input.value.charAt(inx));
		if(oneChar.length == 1) {
			byteLength++;
		} else if(oneChar.indexOf("%u") != -1) {
			byteLength += 2;
		} else if(oneChar.indexOf("%") != -1) {
			byteLength += oneChar.length / 3;
		}
	}
	return byteLength;
}

function getStrCuts(str, max) {//25자이상글자자르기
	ns = str.substr(0, max);
	if(ns.length != str.length) {
		ns = ns + "";
	}
	return ns;
}

/*
 * 카운트 다운
 *
 * 반드시
 * <script language="javascript" type="text/javascript" src="/asset/js/jquery.timer.js"></script>
 * 를 같이 포함시켜 줍니다.
 *
 */
var CountDownTimer = function(chh,cmi,css,cmm,cdd,cyy,flag,dstr) {
	var $form, // Form used to change the countdown time
		incrementTime = 70,
		currentTime = 0,
		currentDday = 0;

	updateTimer = function() {
		var ta = formatTime(currentTime, flag);

		//시분초가 합산 필드
		$('#countDownhhmmss').html(ta); //남은 시간 세팅

		if(currentDday > 0) {
			$('#countDowndday').html(currentDday+dstr); //Dday 세팅

			$('#countDowndday1').html(currentDday); //Dday 세팅
		} else {
			$('#countDowndday').hide();
		}

		var tta = ta.split(':');
		var thhv1 = parseInt(parseInt(tta[0])/10);
		var thhv2 = parseInt(tta[0])%10;

		var tmmv1 = parseInt(parseInt(tta[1])/10);
		var tmmv2 = parseInt(tta[1])%10;

		var tssv1 = parseInt(parseInt(tta[2])/10);
		var tssv2 = parseInt(tta[2])%10;

		var tmsv1 = parseInt(parseInt(tta[3])/10);
		var tmsv2 = parseInt(tta[3])%10;

		//시분초 구분 필드
		$('#countDownthh1').html(thhv1);
		$('#countDownthh2').html(thhv2);
		$('#countDowntmm1').html(tmmv1);
		$('#countDowntmm2').html(tmmv2);
		$('#countDowntss1').html(tssv1);
		$('#countDowntss2').html(tssv2);

		//시분초 별도 필드
		$('#countDownthh').html(String(thhv1)+String(thhv2));
		$('#countDowntmm').html(String(tmmv1)+String(tmmv2));
		$('#countDowntss').html(String(tssv1)+String(tssv2));
		$('#countDowntms').html(String(tmsv1)+String(tmsv2));

		if(currentTime == 0) {
			CountDownTimer.Timer.stop();
			timerComplete();
			//resetCountdown();
			return;
		}
		currentTime -= incrementTime / 10;
		if(currentTime < 0) {
			currentTime = 0;
		}
	};

	timerComplete = function() {
		//callback 함수
		//alert('Example 2: Countdown timer complete!');
	};

	init = function() {
		//초기 시간을 세팅한다.
		var now = parseInt(mktime());
		var dday = parseInt(mktime(chh,cmi,css,cmm,cdd,cyy));
		var diff = 0;
		var dd = 0;

		diff = dday - now;

		dd = Math.floor(diff/86400); //남은 날짜 Dday
		vctime = diff - (Math.floor(diff/86400) * 86400); //남은 시간

		vctime = vctime * 100;
		currentTime = vctime;
		currentDday = dd;

		CountDownTimer.Timer = $.timer(updateTimer, incrementTime, true);
	};

	resetCountdown = function() {
		//var newTime = parseInt($form.find('input[type=text]').val()) * 100;
		//if(newTime > 0) {currentTime = newTime;}
		//this.Timer.stop().once();
		//CountDownTimer.Timer.stop();
	};

	formatTime = function(time,flag) {
		var hour = parseInt(time /360000),
			min = parseInt((time - (hour * 360000))/ 6000),
			sec = parseInt((time - (hour * 360000) - (min *6000)) / 100),
			hundredths = pad(time - (sec * 100) - (min * 6000) - (hour * 360000), 2);

		if(flag == 1) {
			return (hour > 0 ? pad(hour, 2) : "00") + ":" + (min > 0 ? pad(min, 2) : "00") + ":" + pad(sec, 2) + ":" + hundredths;
		} else {
			return (hour > 0 ? pad(hour, 2) : "00") + ":" + (min > 0 ? pad(min, 2) : "00") + ":" + pad(sec, 2);
		}
	};

	pad = function(number, length) {
		var str = '' + number;
		while(str.length < length) {
			str = '0' + str;
		}
		return str;
	};

	mktime = function () {
		// discuss at: http://phpjs.org/functions/mktime/
		// original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
		// improved by: baris ozdil
		// improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
		// improved by: FGFEmperor
		// improved by: Brett Zamir (http://brett-zamir.me)
		// input by: gabriel paderni
		// input by: Yannoo
		// input by: jakes
		// input by: 3D-GRAF
		// input by: Chris
		// bugfixed by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
		// bugfixed by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
		// bugfixed by: Marc Palau
		// bugfixed by: Brett Zamir (http://brett-zamir.me)
		// revised by: Theriault
		// note: The return values of the following examples are
		// note: received only if your system's timezone is UTC.
		// example 1: mktime(14, 10, 2, 2, 1, 2008);
		// returns 1: 1201875002
		// example 2: mktime(0, 0, 0, 0, 1, 2008);
		// returns 2: 1196467200
		// example 3: make = mktime();
		// example 3: td = new Date();
		// example 3: real = Math.floor(td.getTime() / 1000);
		// example 3: diff = (real - make);
		// example 3: diff < 5
		// returns 3: true
		// example 4: mktime(0, 0, 0, 13, 1, 1997)
		// returns 4: 883612800
		// example 5: mktime(0, 0, 0, 1, 1, 1998)
		// returns 5: 883612800
		// example 6: mktime(0, 0, 0, 1, 1, 98)
		// returns 6: 883612800
		// example 7: mktime(23, 59, 59, 13, 0, 2010)
		// returns 7: 1293839999
		// example 8: mktime(0, 0, -1, 1, 1, 1970)
		// returns 8: -1

		var d = new Date(),
			r = arguments,
			i = 0,
			e = ['Hours', 'Minutes', 'Seconds', 'Month', 'Date', 'FullYear'];

		for(i=0; i<e.length; i++) {
			if(typeof r[i] === 'undefined') {
				r[i] = d['get' + e[i]]();
				r[i] += (i === 3); // +1 to fix JS months.
			} else {
				r[i] = parseInt(r[i], 10);
				if(isNaN(r[i])) {
					return false;
				}
			}
		}

		// Map years 0-69 to 2000-2069 and years 70-100 to 1970-2000.
		r[5] += (r[5] >= 0 ? (r[5] <= 69 ? 2e3 : (r[5] <= 100 ? 1900 : 0)) : 0);

		// Set year, month (-1 to fix JS months), and date.
		// !This must come before the call to setHours!
		d.setFullYear(r[5], r[3] - 1, r[4]);

		// Set hours, minutes, and seconds.
		d.setHours(r[0], r[1], r[2]);

		// Divide milliseconds by 1000 to return seconds and drop decimal.
		// Add 1 second if negative or it'll be off from PHP by 1 second.
		return (d.getTime() / 1e3 >> 0) - (d.getTime() < 0);
	};

	$(init);
};

/*
 * 비밀번호 유효성 체크
 */
function CehckPassWord(ObjUserID, ObjUserPassWord) {
	if(ObjUserPassWord.value.length < 6) {
		alert("비밀번호는 문자, 숫자, 특수문자의 조합으로 6~16자리로 입력해주세요.");
		return false;
	} // if

	if(!ObjUserPassWord.value.match(/([a-zA-Z0-9].*[!,@,#,$,%,^,&,*,?,_,~])|([!,@,#,$,%,^,&,*,?,_,~].*[a-zA-Z0-9])/)) {
		alert("비밀번호는 문자, 숫자, 특수문자의 조합으로 6~16자리로 입력해주세요.");
		return false;
	} // if

	if(ObjUserID.value.indexOf(ObjUserPassWord) > -1) {
		alert("비밀번호에 아이디를 사용할 수 없습니다.");
		return false;
	} // if

	var SamePass_0 = 0; //동일문자 카운트
	var SamePass_1 = 0; //연속성(+) 카운드
	var SamePass_2 = 0; //연속성(-) 카운드

	var chr_pass_0;
	var chr_pass_1;

	for(var i=0; i<ObjUserPassWord.value.length; i++) {
		chr_pass_0 = ObjUserPassWord.value.charAt(i);
		chr_pass_1 = ObjUserPassWord.value.charAt(i+1);

		//동일문자 카운트
		if(chr_pass_0 == chr_pass_1) {
			SamePass_0 = SamePass_0 + 1;
		} // if

		//연속성(+) 카운드
		if(chr_pass_0.charCodeAt(0) - chr_pass_1.charCodeAt(0) == 1) {
			SamePass_1 = SamePass_1 + 1;
		} // if

		//연속성(-) 카운드
		if(chr_pass_0.charCodeAt(0) - chr_pass_1.charCodeAt(0) == -1) {
			SamePass_2 = SamePass_2 + 1;
		} // if
	} // for

	if(SamePass_0 > 1) {
		alert("동일문자를 3번 이상 사용할 수 없습니다.");
		return false;
	} // if

	if(SamePass_1 > 1 || SamePass_2 > 1) {
		alert("연속된 문자열(123 또는 321, abc, cba 등)을\n 3자 이상 사용 할 수 없습니다.");
		return false;
	} // if

	return true;
} // function

/*
 * 아이프레임 자동 높이 조절
 */
function autoIfmResize(i) {
	var iframeHeight =
	(i).contentWindow.document.body.scrollHeight;
	(i).height = iframeHeight+20;
}

/*
 * 따라다니는 하단 배너 닫기
 */
function bottom_layer_close(id) {
	document.getElementById(id).style.display = 'none';
}

/*
 * 플로팅 배너 (공통)
 *
 * example
 *
 * 플로팅 배너
	$("#floating_150309_jang").floatingjs({
			width:200,
			height:200,
			top:670,
			left:180,
			callback: {
				loaded: function(number) {
				},
				start: function(number) {
					// Do something awesome!
					// Passes slide number at start of animation
				},
				complete: function(number) {
				}
			}
	});

	클래스 선언하는 경우, 닫기 기능 실행
	class="floatingjs-close"
 *
 */
(function() {
	(function($, window, document) {
		var Plugin, defaults, pluginName;
		pluginName = "floatingjs";
		defaults = {
			width: 940,
			height: 528,
			top:670,
			left:200,
			start: 1,
			fixed: false,
			callback: {
				loaded: function() {},
				start: function() {},
				complete: function() {}
			}
		};

		Plugin = (function() {
			function Plugin(element, options) {
				this.element = element;
				this.options = $.extend(true, {}, defaults, options);
				this._defaults = defaults;
				this._name = pluginName;
				this.init();
			}

			return Plugin;
		})();

		Plugin.prototype.init = function() {
			var $element, b_width,t_height,
			_this = this;
			$element = $(this.element); //현재 실행하는 객체
			this.data = $.data(this);

			//위치 지정
			b_width = $(document.body).width(); //페이지 전체크기
			t_height = $(document.body).scrollTop(); //상단 높이

			width = b_width/2 - this.options.left;
			height = t_height + this.options.top; //상단부터 띄워야 하는 높이

			//$element.css({top:height, left:width, display:'none'});
			//파고다인강 레이어 크기에 맞게 고정
			$element.css({top:height, left:-(this.options.left), display:'none'});

			//현재 위치
			//var currentPosition = parseInt($element.css("top"));
			var currentPosition = parseInt(this.options.top);

		 	$element.show();

		 	//클래스로 선언해서 클릭하는 경우에
		 	$(".floatingjs-close", $element).click(function(e) {
		 		$element.hide();
			});

			$(window).bind("scroll", function() {
				//위치 다시 계산
				var position = $(window).scrollTop(); // 현재 스크롤바의 위치값을 반환합니다.
				$element.stop().animate({"top":position+currentPosition+"px"},1000);
			});

			return this.options.callback.loaded();
		};

		return $.fn[pluginName] = function(options) {
			return this.each(function() {
				if(!$.data(this, "plugin_" + pluginName)) {
					return $.data(this, "plugin_" + pluginName, new Plugin(this, options));
				}
			});
		};
	})(jQuery, window, document);
}).call(this);

//구글 현재 페이지 접속자 수 불러오기
function google_analytics_activeusers(str) {
	$.post("/boutique/google_analytics/p_activeusers", {str : str}, function(data) {
		if(data > 9) {
			$('#inone_num').html(data+'명이');
		} else {
			$('#inone_num').html('11명이');
		}
	});
}

//구글 현재 페이지 접속자 수 불러오기
function m_google_analytics_activeusers(str) {
	$.post("/boutique/google_analytics/m_activeusers", {str : str}, function(data) {
		//alert(data);
	});
}
