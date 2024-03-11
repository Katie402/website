<div class="sub_visual">		
	<div class="container">	
		<h2>Oppa Dak Menu</h2>
		<p>
			오븐에빠진닭은 100% 국내산 닭을 사용하여 건강하게 <br>
			맛있는 오븐구이 치킨메뉴를 개발합니다.
		</p>
	</div>
</div>
<div class="sub_gnb">
	<div class="conainer">	
		<a href="#!" class="mobile_sel"></a>
		<ul>
			<li><a href="/menu/menu_new.php">신메뉴</a></li>
			<?
						$num = 1;
						$sql_code2 = "select * from tbl_code where code_gubun = 'cate' and depth = '1' and status = 'Y' order by onum desc";
						$result_code2 = mysqli_query($connect, $sql_code2);
						while($row_code2 = mysqli_fetch_array($result_code2)){
						?>
							
							<!--<li><a href="/product/product.php?code_no=<?=$row_code2['code_no']?>" <?if($row_code2['code_no']==substr($code_no,0,1))echo" class='on' ";?> ><?=$row_code2['code_name']?></a></li>-->

						<li>
							<a href="/menu/menu.php?code_no=<?=$row_code2['code_no']?>" <?if($row_code2['code_no'] == $code_val) echo " class='on' ";?> >
								<?=$row_code2['code_name']?>
							</a>
						</li>
							
						<?
							$num++;
							}?>
		</ul>
	</div>
</div>

