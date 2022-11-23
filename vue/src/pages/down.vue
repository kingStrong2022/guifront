<template>
  <div class="down-app-page">
    <Header/>
		<div class="down-app">
			<h2 class="title">Đăng nhập tài khoản</h2>
			<p class="tips">2. 将订户转换为后付费时选择更多套餐：</p>
			<p class="art">充值优惠高达10%，转后付时更新更有吸引力的套餐，升级界面，提升性能</p>
			<img src="../../public/img/212.png" alt="">
			<p class="tips">2. 将订户转换为后付费时选择更多套餐：</p>
			<p class="art">充值优惠高达10%，转后付时更新更有吸引力的套餐，升级界面，提升性能</p>
			<p class="tips">2. 将订户转换为后付费时选择更多套餐：</p>
			<p class="art">充值优惠高达10%，转后付时更新更有吸引力的套餐，升级界面，提升性能</p>
			<p class="tips">2. 将订户转换为后付费时选择更多套餐：</p>
			<p class="art">充值优惠高达10%，转后付时更新更有吸引力的套餐，升级界面，提升性能</p>
			<p class="tips">2. 将订户转换为后付费时选择更多套餐：</p>
			<p class="art">充值优惠高达10%，转后付时更新更有吸引力的套餐，升级界面，提升性能</p>
			<p class="tips">2. 将订户转换为后付费时选择更多套餐：</p>
			<p class="art">充值优惠高达10%，转后付时更新更有吸引力的套餐，升级界面，提升性能</p>
			<p class="tips">2. 将订户转换为后付费时选择更多套餐：</p>
			<p class="art">充值优惠高达10%，转后付时更新更有吸引力的套餐，升级界面，提升性能</p>
		</div>
		<Footer/>
	</div>
</template>

<script>
//import { dom } from '../components/config/emoji.js';
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