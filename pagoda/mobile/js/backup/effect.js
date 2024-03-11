/********************************************************************
Publishing : Kim min hyeok
Beginning : 2019-11-01
Final : 2019-11-01
*********************************************************************/
var effect;

effect = {
	play : false,
	gap : 150,
	set : function(ex){
		var delay;

		if(ex){
			$.each(ex, function(index){
				delay = 0.2 * index;
				$(this).css({
					'-ms-transition-delay' : delay+'s',
					'-webkit-transition-delay' : delay+'s',
					'transition-delay' : delay+'s',
				});
			});

			effect.call($(window).scrollTop());
		}

		effect.play = true;
	},
	call : function(pos){
		var items,
			ex,
			items_top,
			action_top,
			ex_top,
			before_item_top;

		console.log(1);
		action_top = (pos + $(window).outerHeight()) - effect.gap;

		ex = $('.action');
		items = $('.effect').not(ex);
		if(items.length > 0){
			$.each(items, function(index){
				var this_class;

				items_top = $(this).offset().top;
				this_class = $(this).attr('class');
				ex_top = 0;
				if(this_class.indexOf('type-top') > -1 || this_class.indexOf('type-scale') > -1){
					ex_top = (this_class.indexOf('type-scale-out') > -1) ? 50 : ex_top - 120;
				}else if(this_class.indexOf('type-bottom') > -1){
					ex_top = 100;
				}

				action_top += ex_top;

				console.log(action_top+' - '+items_top);
				if(action_top >= items_top){
					$(this).addClass('action');
					before_item_top = items_top;
				}
			});
		}
	}
}

$(window).on('load', function(){
	var pos;

	if(effect.play){
		pos = $(this).scrollTop();
		effect.call(pos);
	}
});

$(window).on('scroll', function(){
	var pos;

	if(effect.play){
		pos = $(this).scrollTop();
		effect.call(pos);
	}
});
