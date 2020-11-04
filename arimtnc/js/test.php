<!DOCTYPE HTML>
<html lang="ko">
<!--[if lte IE 8]><html class="ie8" lang="ko"><![endif]-->
<head>
<title>큐브TV</title>
<meta charset="UTF-8">
<!--[if IE]><meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" /><![endif]-->
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<meta name="apple-mobile-web-app-title" content="">
<link rel="shortcut icon" type="image/x-icon" href="/images/favicon.ico">
<link rel="apple-touch-icon" href="/images/apple-touch-icon.png" />
<meta name="title" content="큐브TV" />
<meta name="Generator" content="큐브TV">
<meta name="Author" content="큐브TV">
<meta name="Keywords" content="큐브TV">
<meta name="Description" content="큐브TV">
<script src="/js/jquery-1.11.1.min.js"></script>
<link rel="stylesheet" href="/js/jquery-ui-1.11.2.custom/jquery-ui.css">
<script type="text/javascript" src="/js/jquery.number.js"></script>
<script src="/js/jquery-ui-1.11.2.custom/jquery-ui.js"></script>
<script src="/js/notifIt.js" type="text/javascript"></script>
<link href="/js/notifIt.css" type="text/css" rel="stylesheet">
<!--notice 스크립트끝-->
<script src="/js/common.js"></script>
<script src="/js/jquery.form.js"></script>
<style type="text/css" >
.wrap-loading { /*화면 전체를 어둡게 합니다.*/
	position: fixed;
	left:0;
	right:0;
	top:0;
	bottom:0;
	z-index:999;
	background: rgba(0, 0, 0, 0.2); /*not in ie */
 filter: progid:DXImageTransform.Microsoft.Gradient(startColorstr='#20000000', endColorstr='#20000000');    /* ie */
}
.wrap-loading div { /*로딩 이미지*/
	position: fixed;
	top:50%;
	left:50%;
	margin-left: -21px;
	margin-top: -21px;
}
.display-none { /*감추기*/
	display:none;
}
</style>
<link rel="stylesheet" href="/js/colorbox-master/example1/colorbox.css" />
<script src="/js/colorbox-master/jquery.colorbox.js"></script>
<div id="ajax_loader" class="wrap-loading display-none">
	<div><img src="/js/ajax-loader.gif"/></div>
</div>
<form name="frm" id="frm" action="/AdmMaster/ajax/program_proc.ajax.php" method=post enctype="multipart/form-data" >
	<table width=800 border=1 style="font-size:9pt">
		<tr>
			<td width=150> 프로그램분류 </td>
			<td width=650>				<input type=radio name="classification" class="classification" value="B">
				버라이어티								<input type=radio name="classification" class="classification" value="M">
				음악				</td>
		</tr>
		<tr>
			<td width=150> 방영상태 </td>
			<td width=650>				<input type=radio name="pstatus" class="pstatus" value="E">
				종영								<input type=radio name="pstatus" class="pstatus" value="I">
				방송중								<input type=radio name="pstatus" class="pstatus" value="P">
				방송예정				</td>
		</tr>
		<tr>
			<td width=150> 방송등급 </td>
			<td width=650>				<input type=radio name="pgrade" class="pgrade" value="0">
				전체								<input type=radio name="pgrade" class="pgrade" value="7">
				7세이상								<input type=radio name="pgrade" class="pgrade" value="12">
				12세이상								<input type=radio name="pgrade" class="pgrade" value="15">
				15세이상								<input type=radio name="pgrade" class="pgrade" value="19">
				19세이상				</td>
		</tr>
		<tr>
			<td width=150> 방송시간(본방) </td>
			<td width=650><select name="ptime1_1[]" class="ptime1_1">
					<option value="">선택</option>
					<option value="월요일">월요일</option>
					<option value="화요일">화요일</option>
					<option value="수요일">수요일</option>
					<option value="목요일">목요일</option>
					<option value="금요일">금요일</option>
					<option value="토요일">토요일</option>
					<option value="일요일">일요일</option>
				</select>
				~
				<select name="ptime1_2[]" class="ptime1_2">
					<option value="">선택</option>
					<option value="월요일">월요일</option>
					<option value="화요일">화요일</option>
					<option value="수요일">수요일</option>
					<option value="목요일">목요일</option>
					<option value="금요일">금요일</option>
					<option value="토요일">토요일</option>
					<option value="일요일">일요일</option>
				</select>
				<select name="ptime1_3[]" class="ptime1_3">
					<option value="">선택</option>
					<option value="오전">오전</option>
					<option value="오후">오후</option>
				</select>
				<input name="ptime1_4[]" type="text" class="ptime1_4" style="width:30px;"  maxlength=2/>
				시
				<input name="ptime1_5[]" type="text" class="ptime1_5" style="width:30px;"  maxlength=2/>
				분 </td>
		</tr>
		<tr>
			<td width=150> 방송시간(재방) </td>
			<td width=650 colspan=3  class="re_prog"><div class="re_prog_list">
					<select name="ptime2_1[]" class="ptime2_1">
						<option value="">선택</option>
						<option value="월요일">월요일</option>
						<option value="화요일">화요일</option>
						<option value="수요일">수요일</option>
						<option value="목요일">목요일</option>
						<option value="금요일">금요일</option>
						<option value="토요일">토요일</option>
						<option value="일요일">일요일</option>
					</select>
					~
					<select name="ptime2_2[]" class="ptime2_2">
						<option value="">선택</option>
						<option value="월요일">월요일</option>
						<option value="화요일">화요일</option>
						<option value="수요일">수요일</option>
						<option value="목요일">목요일</option>
						<option value="금요일">금요일</option>
						<option value="토요일">토요일</option>
						<option value="일요일">일요일</option>
					</select>
					<select name="ptime2_3[]" class="ptime2_3">
						<option value="">선택</option>
						<option value="오전">오전</option>
						<option value="오후">오후</option>
					</select>
					<input name="ptime2_4[]" type="text" class="ptime2_4" style="width:30px;" maxlength=2/>
					시
					<input name="ptime2_5[]" type="text" class="ptime2_5" style="width:30px;" maxlength=2/>
					분 <span class="btn_prog">
					<input type=button class="p_btn_plus"  value="+">
					<input type=button class="p_btn_minus" value="-">
					</span> </div></td>
		</tr>
		<tr>
			<td width=150> 대표이미지 </td>
			<td width=650><input name="image" type="file" class="searchbox " style="width:400;" onchange="javascript:check_ext(this);"/></td>
		</tr>
		<tr>
			<td height="25" align="center" bgcolor="F2F2F2" ><font color="#000000"><b>국문 프로그램 제목 </b></font></td>
			<td height="23" colspan="2" align="left" bgcolor="#FFFFFF" ><input name="subject_kr" type="text" class="searchbox " style="width:100%;" /></td>
		</tr>
		<tr>
			<td height="25" align="center" bgcolor="F2F2F2" ><font color="#000000"><b>영문 프로그램 제목 </b></font></td>
			<td height="23" colspan="2" align="left" bgcolor="#FFFFFF" ><input name="subject_en" type="text" class="searchbox " style="width:100%;" /></td>
		</tr>
		<tr>
			<td height="25" align="center" bgcolor="F2F2F2" ><b><font color="#000000">추천프로그램 설정</font></b></td>
			<td height="23" colspan="2" align="left" bgcolor="#FFFFFF" ><span class="nvtheree">
				<input name="isBest" type="radio" value="Y">
				</span>추천프로그램으로 <b>설정</b>&nbsp;&nbsp; <span class="nvtheree">
				<input name="isBest" type="radio" value="N" checked>
				</span>설정안함</td>
		</tr>
		<tr>
			<td height="25" align="center" bgcolor="F2F2F2" ><font color="#000000"><b>프로그램 노출 </b></font></td>
			<td height="23" colspan="2" align="left" bgcolor="#FFFFFF" ><span class="nvtheree">
				<input name="isVisible" type="radio" value="Y" checked>
				</span>프로그램 <b>노출</b>&nbsp;&nbsp; <span class="nvtheree">
				<input name="isVisible" type="radio" value="N">
				</span>프로그램 닫기 </td>
		</tr>
        <tr>
          <td width="130" height="25" align="center" bgcolor="F2F2F2" ><b><font color="#000000">출연자정보</font></b></td>
          <td height="23" colspan="2" align="left" bgcolor="#FFFFFF" ><textarea name="appearance"  class="searchbox " style="width:100%; height:70px"></textarea></td>
        </tr>
        <tr>
          <td width="130" height="25" align="center" bgcolor="F2F2F2" ><b><font color="#000000">프로그램 소개</font></b></td>
          <td height="23" colspan="2" align="left" bgcolor="#FFFFFF" >
			<script type="text/javascript" src="/smarteditor/js/HuskyEZCreator.js" charset="utf-8"></script>
			<textarea name="description" id="description" style="width:100%; height:40px; display:none;"></textarea>
			<script>
				var oEditors = [];

				// 추가 글꼴 목록
				//var aAdditionalFontSet = [["MS UI Gothic", "MS UI Gothic"], ["Comic Sans MS", "Comic Sans MS"],["TEST","TEST"]];

				nhn.husky.EZCreator.createInIFrame({
				oAppRef: oEditors,
				elPlaceHolder: "description",
				sSkinURI: "/smarteditor/SmartEditor2Skin.html",	
				htParams : {
					bUseToolbar : true,				// 툴바 사용 여부 (true:사용/ false:사용하지 않음)
					bUseVerticalResizer : true,		// 입력창 크기 조절바 사용 여부 (true:사용/ false:사용하지 않음)
					bUseModeChanger : true,			// 모드 탭(Editor | HTML | TEXT) 사용 여부 (true:사용/ false:사용하지 않음)
					//aAdditionalFontList : aAdditionalFontSet,		// 추가 글꼴 목록
					fOnBeforeUnload : function(){
						//alert("완료!");
					}
				}, //boolean
				fOnAppLoad : function(){
					//예제 코드
					//oEditors.getById["ir1"].exec("PASTE_HTML", ["로딩이 완료된 후에 본문에 삽입되는 text입니다."]);
				},
				fCreator: "createSEditor2"
				});
			</script>
		  </td>
        </tr>
	</table>
	<br>
	<table width=800 border=0 style="font-size:9pt">
		<tr>
			<td>
			<div style="text-align:center"><input type=button value="등록" onclick="javascript:send_it();"></div>
			</td>
		</tr>
	</table>
</form>
<script>
	function send_it()
	{
		oEditors.getById["description"].exec("UPDATE_CONTENTS_FIELD", []);
		var frm = document.frm;
		if ($(".classification").is(":checked") == false)
		{
			alert_("프로그램 분류를 선택하셔야 합니다.");
			return;
		}
		if ($(".pstatus").is(":checked") == false)
		{
			alert_("방영상태를 선택하셔야 합니다.");
			return;
		}
		if ($(".pgrade").is(":checked") == false)
		{
			alert_("방송등급을 선택하셔야 합니다.");
			return;
		}

		for (i = 0; i < $(".ptime1_1").length; i++)
		{
			if ($(".ptime1_1:eq("+i+") option:selected").val() == "")
			{
				alert_("시작요일을 선택해주셔야 합니다.");
				return;
			}
			if ($(".ptime1_3:eq("+i+") option:selected").val() == "")
			{
				alert_("오전오후를 선택해주셔야 합니다.");
				return;
			}
			if (trim($(".ptime1_4:eq("+i+")").val()) == "")
			{
				alert_("시간대를 입력해주셔야 합니다.");
				return;
			}
			if (trim($(".ptime1_4:eq("+i+")").val()) == "")
			{
				alert_("분을 입력해주셔야 합니다.");
				return;
			}
		}
		for (i = 0; i < $(".ptime2_1").length; i++)
		{
			if ($(".ptime2_1:eq("+i+") option:selected").val() == "")
			{
				alert_("시작요일을 선택해주셔야 합니다.");
				return;
			}
			if ($(".ptime2_3:eq("+i+") option:selected").val() == "")
			{
				alert_("오전오후를 선택해주셔야 합니다.");
				return;
			}
			if (trim($(".ptime2_4:eq("+i+")").val()) == "")
			{
				alert_("시간대를 입력해주셔야 합니다.");
				return;
			}
			if (trim($(".ptime2_4:eq("+i+")").val()) == "")
			{
				alert_("분을 입력해주셔야 합니다.");
				return;
			}
		}
		if (frm.image.value == "")
		{
			alert_("대표 이미지를 선택해주셔야 합니다.");
			frm.image.focus();
			return;
		}
		if (frm.subject_kr.value == "")
		{
			alert_("국문 프로그램 제목을 입력해주셔야 합니다.");
			frm.subject_kr.focus();
			return;
		}
		if (frm.subject_en.value == "")
		{
			alert_("영문 프로그램 제목을 입력해주셔야 합니다.");
			frm.subject_en.focus();
			return;
		}
		if (frm.appearance.value == "")
		{
			alert_("출연자를 입력해주셔야 합니다.");
			frm.appearance.focus();
			return;
		}
		if (frm.description.value.length < 10)
		{
			alert_("프로그램소개를 입력해주셔야 합니다.");
			frm.description.focus();
			return;
		}
		$("#frm").submit();
	}

			$( "body" ).on( "click", ".p_btn_plus", function() {
				$('.re_prog_list:eq(0)').clone().appendTo('.re_prog');
				var cnt = $('.re_prog_list').length - 1;
				$('.ptime2_4:eq('+cnt+')').val("");
				$('.ptime2_5:eq('+cnt+')').val("");
				
			});
			$( "body" ).on( "click", ".p_btn_minus", function() {
				if ($('.re_prog_list').length > 1)
				{
					$('.re_prog_list:eq('+$(this).index(".p_btn_minus")+')').remove();
				}
			});

			function click_prog_btn(str)
				{
					if (str == "+")
					{
						$('.re_prog_list:eq(0)').clone().appendTo('.re_prog');
					} else {
						var cnt = $('.re_prog_list').length-1;
						alert(cnt);
						$('.re_prog_list:eq('+cnt+')').remove();
					}
				}

	$(function(){
		$("#frm").ajaxForm({
			url: "/AdmMaster/ajax/program_proc.ajax.php",
			type: "POST",
			data: "user_id="+$("#user_id").val(),
			error : function(request, status, error) {
			 //통신 에러 발생시 처리
				alert_("code : " + request.status + "\r\nmessage : " + request.reponseText);
				$("#ajax_loader").addClass("display-none");
			}
			, success : function(response, status, request) {
				if (response == "FN")
				{
					alert_("허용되지 않은 확장자입니다.");
					return;
				} else if (response == "OK") {
					alert_("정상적으로 회원에 접수되었습니다.");
					setTimeout(function() {
						location.href="member_join_ok.php";
					}, 1500);
					return;
				} else {
					alert(response);
					alert_("오류가 발생하였습니다!!");
					return;
				}
			}
		});
	});
			</script> 

<div id="layer" style="display:none;border:5px solid;position:fixed;width:300px;height:460px;left:50%;margin-left:-155px;top:50%;margin-top:-235px;overflow:hidden;-webkit-overflow-scrolling:touch;"> <img src="//i1.daumcdn.net/localimg/localimages/07/postcode/320/close.png" id="btnCloseLayer" style="cursor:pointer;position:absolute;right:-3px;top:-3px;z-index:1" onclick="closeDaumPostcode()" alt="닫기 버튼"> </div>
<script src="http://dmaps.daum.net/map_js_init/postcode.v2.js"></script> 
<script>
    // 우편번호 찾기 화면을 넣을 element
    var element_layer = document.getElementById('layer');

    function closeDaumPostcode() {
        // iframe을 넣은 element를 안보이게 한다.
        element_layer.style.display = 'none';
    }

    function execDaumPostcode() {
        new daum.Postcode({
            oncomplete: function(data) {
                // 검색결과 항목을 클릭했을때 실행할 코드를 작성하는 부분.

                // 각 주소의 노출 규칙에 따라 주소를 조합한다.
                // 내려오는 변수가 값이 없는 경우엔 공백('')값을 가지므로, 이를 참고하여 분기 한다.
                var fullAddr = data.address; // 최종 주소 변수
                var extraAddr = ''; // 조합형 주소 변수

                // 기본 주소가 도로명 타입일때 조합한다.
                if(data.addressType === 'R'){
                    //법정동명이 있을 경우 추가한다.
                    if(data.bname !== ''){
                        extraAddr += data.bname;
                    }
                    // 건물명이 있을 경우 추가한다.
                    if(data.buildingName !== ''){
                        extraAddr += (extraAddr !== '' ? ', ' + data.buildingName : data.buildingName);
                    }
                    // 조합형주소의 유무에 따라 양쪽에 괄호를 추가하여 최종 주소를 만든다.
                    fullAddr += (extraAddr !== '' ? ' ('+ extraAddr +')' : '');
                }

                // 우편번호와 주소 및 영문주소 정보를 해당 필드에 넣는다.
                document.getElementById('zip').value = data.postcode1+'-'+data.postcode2;
                document.getElementById('addr1').value = fullAddr;
                document.getElementById('addr2').focus();

                // iframe을 넣은 element를 안보이게 한다.
                element_layer.style.display = 'none';
            },
            width : '100%',
            height : '100%'
        }).embed(element_layer);

        // iframe을 넣은 element를 보이게 한다.
        element_layer.style.display = 'block';
    }
</script> 
