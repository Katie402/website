(function($){
	var tree = {
		items : $('.treeMenu li'),
		items_obj : $('.treeMenu li > .collaps'),
		linked : $('.treeMenu li>a'),
		urlField : $('.htmlURL'),
		collaps : '<em class="collaps"></em>',
		folder : '<em class="folder"></em>',
		no_folder : '<em class="no_folder"></em>',
		message : '<div class="message"></div>'
	}

	var tree_set = function(){
		tree.items.each(function(){
			href_ = $(this).find('> a').attr('href');
			if(href_ == '#' && $(this).find('ul').length < 1){
				$(this).addClass('no_work');
			}

			if($(this).find('> ul').length > 0){
				$(this).prepend(tree.folder);
				$(this).prepend(tree.collaps);
			}else{
				$(this).prepend(tree.no_folder);
			}
		});
	}

	var tree_evt = function(obj){
		if(obj.parent().attr('class') == 'active'){
			obj.parent().removeClass('active');
		}else{
			obj.parent().addClass('active');
		}
	}

	$(document).on('click','.treeMenu li > .collaps',function(){
		tree_evt($(this));
	});

	tree.linked.bind('click',function(){
		tree.items.find('> a.active').removeClass('active');
		$(this).addClass('active');

		if($(this).attr('href') == '#'){
			if($(this).parent().find('> ul').length > 0){
				tree.urlField.text('The directory menu.');
				$('#wrap').append(tree.message);
				$('.message').text('하위메뉴를 선택해주세요.').fadeIn(500).delay(700).fadeOut(500,function(){
					$(this).remove();
				});
			}else{
				alert('The working pages.');
				tree.urlField.text('The working pages.');
			}
			return false;
		}else{
			tree.urlField.text($(this).attr('href'));
		}
	});

	tree_set();
}) (jQuery);