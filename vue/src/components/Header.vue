<template>
  <div class="header-box">
				<ul @click="goIndex" class="header js-header align-center">
				<li @click="goIndex" class="icon-box no-grow no-shrink"><i class=" iconfont icon-livemenu"></i></li>
				<li @click="goIndex" class="logo-box icon-box center-center p-relative">
					<img src="https://viettel.vn/viettelshop/logo_viettel.png" alt="logo viettel Telecom" >
					<i class=" iconfont icon-liveuser"></i>
				</li>
				<li class="icon-box no-grow no-shrink"><i class=" iconfont icon-livesearch"></i></li>
				</ul>
				<p class="bot-girl"><a href="https://chat.livechats.chat/?channelId=Wtd31Y&language=en"><img src="../assets/bot_girl.png" alt="" /></a></p>
		</div>
<!--	 @click="goServe"-->
</template>

<script>
import { dom } from '../components/config/emoji.js';
export default {
  name: 'HeadComponents',
  data() {
		return {
			isConnect:false,
		}
  },
	methods: {
		goServe(){
			this.$router.push('/serve')
		},
		goIndex(){
			this.$router.push('/')
		},
		loadDashBoard() {
			let scrollHeight = document.documentElement.scrollTop || document.body.scrollTop || window.pageYOffset
				let header = document.querySelector('.js-header')
				if(!header) return
				if(scrollHeight > 4){
					dom.addClass(header, 'header--fixed')
				}else{
					dom.removeClass(header, 'header--fixed')
				}
    },

	},
	mounted() {
		document.addEventListener('scroll',this.loadDashBoard)
	},
	destroyed() {
      document.removeEventListener('scroll', this.loadDashBoard)
      this.orderInterval && clearInterval(this.orderInterval)
    }
}
</script>



<style  lang="scss" scoped>
	.header-box,.header{
		height: 46px;
	}
	.header{
		background: #fff;

    transition: 0.7s all;
		padding: 10px 15px;
		.icon-box{
			width:24px;
			i{
				font-size: 24px;
				line-height: 1
			}
		}
		.logo-box{
			flex: 1
		}
		.icon-liveuser{
			font-size: 18px;
			position: absolute;
			top: 50%;
			right:20px;
			transform: translateY(-50%);
		}
	}
	.bot-girl{
		position: fixed;
    right: 24px;
    bottom: 25px;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    z-index: 12;
		img{
			width: 64px;
			height: 64px;
		}
	}
	.header--fixed{
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		z-index: 999;
		box-shadow: 0 5px 10px rgb(129 126 126 / 31%);
	}
</style>
