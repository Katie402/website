//문자발송하기
function sms_send_model(ftel,totel,content){
  // 메시지 발송 부분.. (함수로 구현하여 클릭 시 발송 되도록 할 수도 있습니다. 재사용가능.)
	_mnq.push(['_send', {
		msg:content, // ex)메시지 ※ 수정
		phone:totel, // ex)01011112222 ※ 수정 (여러건 발송시 : 0100000000\r\n0110002222\r\n010...)
		callback:ftel, // ex)021112222 ※ 수정
		reservation:"", // 예약시간 (2013-05-05 13:03), 없으면 즉시발송
		encode:"", // 한글이 깨질경우 설정( ex. ISO-8859-1>UTF-8 )
		image:"" // 미사용..
	}]);
}
