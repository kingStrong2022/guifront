<template>
 <div class="footer">
			<div class="logo-fotter">
				<img src="https://viettel.vn/images/logo-footer.png">
			</div>
			<p class="logo-fotter">VIETTEL 电信的官方在线购物网站。</p>
			<div class="logo-fotter">
				<p>
					管理机构：Viettel Telecommunications Corporation (Viettel Telecom) - 军工分公司 - 电信集团。
					企业代码：0100109106-011 河内计划投资厅2005年7月18日首次发布，2018年12月18日第15次修订。
					内容负责人：Cao Anh Son先生
				</p>
			</div>
			<div data-v-12135119="" class="infobellow_group d-flex">
				<div data-v-12135119="" class="bocongthuong ">
					<a data-v-12135119="" href="http://online.gov.vn/Home/WebDetails/78377">
						<img data-v-12135119="" src="https://viettel.vn/images_content/bocongthuong.png"></a></div>
					<div data-v-12135119="" class="infobellow  d-column">
						<ul class="link-social d-flex">
						<li>
							<a href="https://www.facebook.com/Vietteltelecom/" target="_blank">
								<img src="https://viettel.vn/images/icon-fb.png"></a></li>
						<li>
							<a href="https://www.youtube.com/user/Viettelchannels" target="_blank">
								<img src="https://viettel.vn/images/icon-yt.png"></a></li>
						<li>
							<a href="http://zalo.me/1814378069399742003" target="_blank">
								<img src="https://viettel.vn/images/zalo.png"></a></li>
					</ul>
          <p class="bocongthuong-copy"> Viettel Telecom 2015。保留所有权利。</p> 
				</div>
			</div>
		</div>
</template>

<script>
export default {
  name: 'FootComponents',
}
</script>



<style  lang="scss" scoped>
	.footer{
			font-size: 13px;
			padding: 10px 0px 10px;
			background: #f2f2f2;
			color: #000000;
			padding: 15px;
		}
		.logo-fotter{
			margin-bottom: 15px;
		}
		.link-social{
			li{
				padding: 0 5px;
			}
			img{
				width: 24px;
			}
		}
		.bocongthuong-copy{
			padding-left: 5px;
		}
		.infobellow_group {
			justify-content: space-between;
		}
</style>