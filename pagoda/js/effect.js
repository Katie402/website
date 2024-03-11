//이미지 로딩 효과
var effect;
effect = {
	gap : 200,
	call : function(pos){
		var items,
			ex,
			items_top,
			action_top,
			ex_top,
			before_item_top;

		action_top = (pos + $(window).outerHeight()) - effect.gap;

		ex = $('.action');
		items = $('.effect').not(ex);
		if(items.length > 0){
			$.each(items, function(index){
				var this_class;

				items_top = $(this).offset().top;
				this_class = $(this).attr('class');
				ex_top = 0;
				if(this_class.indexOf('type-top') > -1){
					ex_top = -100;
				}else if(this_class.indexOf('type-scale') > -1){
					ex_top = -450;
				}else if(this_class.indexOf('type-bottom') > -1){
					ex_top = 100;
				}

				action_top += ex_top;

				if(action_top >= items_top){
					$(this).addClass('action');
					before_item_top = items_top;
				}
			});
		}
	}
}

$(window).on('scroll load', function(){
	var pos;
	pos = $(this).scrollTop();
	effect.call(pos);
});