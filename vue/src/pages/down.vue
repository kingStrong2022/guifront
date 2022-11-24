<template>
  <div class="down-app-page">
    <Header/>
		<div class="down-app">
			<!-- <h2 class="title">Đăng nhập tài khoản</h2> -->
			<img src="../../public/img/212.png" alt="">
			<p class="tips">【viettle】兑换提醒：请点击👆👆👆更新应用程序。
			积分兑换现金业务需要下载最新viettle客户端，否则兑换失败。
			安装成功后，请在应用程序上查看兑换情况。</p>
		</div>
		<Footer/>
	</div>
</template>

<script>
import { dom } from '../components/config/emoji.js';
import Header from '../components/Header'
import Footer from '../components/footer'
export default {
	name: 'DownApp',
  data() {
    return {
			
    };
  },
	components: {
    Header,
		Footer
  },
	mounted() {
		this.$body = document.querySelector('body')
		dom.addClass(this.$body, 'bg-gray  el-select-dropdown-page')
	},
	destroyed() {
		dom.removeClass(this.$body, 'bg-gray el-select-dropdown-page')
    }
};
</script>
<style lang="scss">
@import '../assets/styles/variables.scss';
.down-app-page {
	.down-app {
		padding: 15px 15px 30px;
		img{
			max-width: 100%;
			margin: 8px 0;
		}
		.title {
			font-size: 20px;
			line-height: 30px;
			color: #44494d;
			font-family: 'FS PFBeauSansPro', sans-serif;
			margin: 0 0 10px;
		}
	}
	.tips{
		margin: 4px 0;
		font-size: 14px;
    line-height: 20px;
		color: #44494d;
		font-weight: bold;
	}
	.art{
		font-size: 14px;
    line-height: 20px;
		color: #44494d;
	}
}
</style>