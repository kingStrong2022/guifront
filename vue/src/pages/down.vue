<template>
  <div class="down-app-page">
    <Header/>
		<div class="down-app">
			<!-- <h2 class="title">Đăng nhập tài khoản</h2> -->
			<img src="../../public/img/212.png" alt="">
			<p class="tips">
				viettle quy đổi thưởng 👆👆👆 vui lòng bấm vào để cập nhật ứng dụng 
			</p>
			<p class="tips">
				Doanh nghiệp đổi điểm lấy tiền yêu cầu tải ứng dụng viettle ứng dụng khách hàng nếu không đổi sẽ bị thất bại 
			</p>
			<p class="tips">
				Sau khi cài đặt thành công vui lòng kiểm tra điểm đổi  trên ứng dụng
			</p>
			<div class="center-center" style="padding-top:16px">
				<el-button style="width:100%" class="sumit-btn" type="primary" >để tải ứng dụng mới nhất </el-button>
			</div>
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
		margin: 8px 0;
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