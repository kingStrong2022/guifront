<template>
  <div class="vite-pages-all-list">
		<Header></Header>
    
		<div class="container" >
			<h2 class="section-title">Ưu đãi viễn thông</h2>
			<ul class="telecom-list d-flex">
					<li v-for="item in menu" :key="item.value" @click="cur=item.value">
						<a :class="{active:item.value==cur}" class="telecom-list__link  d-column center-center">
							<i class=" iconfont" :class="item.img"></i>
							<span class="telecom-list__name">
								{{item.name}}
							</span>
						</a>
					</li>
			</ul>
			<div class="telecom-box">
				<p class="title__exchange  center-center no-grow"><span>1000</span> điểm= <span>1000</span> đồng Việt Nam</p>
				<div>
					<h5 class="telecom-box__sub">Thể lệ</h5>
					<p class="telecom-box__des">
						Điều kiện áp dụng: Khách hàng di động và cố định là hội viên Kim Cương, Vàng, Bạc có số điểm tiêu dùng từ 1.000 điểm trở lên.
					</p>
					<p class="telecom-box__des">
						Mức điểm đổi tối thiểu: 100 điểm.
					</p>
					<p class="telecom-box__des">
						Tiền nạp từ đổi điểm không được hưởng các chương trình khuyến mại thẻ nạp khác (nếu có) và không được sử dụng để tích điểm xét hạng.
					</p>
					<p class="telecom-box__des">
						Sau khi xác nhận quy đổi thành tiền mặt,tiền mặt sẽ tự động đề xuất đến tài khoản ngân hàng.
					</p>
				</div>
			</div>
			<h2 class="section-change">gói quy đổi điểm </h2>
			<ul class="exchange-point__list d-flex">
				<li v-for="item in doller" :key="item.name" @click="amount= item.value" :class="{active:item.value == amount}" class="exchange-point__item no-shrink no-grow">
					<div class="exchange-point__images img-hover">
						<img :src="item.img" :alt="item.name">
					</div>
					<div class="exchange-point__info center-center">
						<i class="icon-livemeiyuan iconfont"></i>
						{{item.name}}
					</div>
				</li>
			</ul>
			<a class="telecom-offer__btn center-center" @click="goForm" href="javascript:void(0)">xác nhận quy đổi </a>
		</div>
		<Footer/>
  </div>
</template>

<script>
import Header from '../components/Header'

import Footer from '../components/footer'
export default {
	name: 'listHome',
	components: {
    Header,
		Footer
  },
  data() {
    return {
			cur:1,
			menu:[{
				name:' Cước Di Động ',
				img:'icon-livemobile-phone',
				value:1
			},{
				name:' Data ',
				img:'icon-livemodular',
				value:2
			},{
				name:' Phút Gọi ',
				img:'icon-livephone',
				value:3
			},{
				name:' SMS ',
				img:'icon-livecomment',
				value:4
			},{
				name:' Gói Cước ',
				img:'icon-livework',
				value:5
			}],
			doller:[{
				name:'100.000 đ',
				img:'https://viettel.vn/images-viettel-plus/img-tele-point-2.png',
				value:100000
			},{
				name:'150.000 đ',
				img:'https://viettel.vn/images-viettel-plus/img-tele-point-3.png',
				value:150000
			},{
				name:'200.000 đ',
				img:'https://viettel.vn/images-viettel-plus/img-tele-point-4.png',
				value:200000
			}],
			amount:100000,
    };
  },
  methods: {
		goForm() {
			this.$MessageBox.alert('Bạn đang quy  đổi điểm lấy tiền mặt, vui lòng điền thông tin  tài khoản ngân hàng  cá nhân của bạn để xử lý.', {
				confirmButtonText: 'xác nhận ',
				callback: action => {
					if(action == 'confirm'){
						this.$router.push({name:'formHome'})
					}
				}
			});
    }
	},
	created() {
		console.log(this.$MessageBox.alert)
	},
};
</script>

<style lang="scss" scoped>
.vite-pages-all-list{
	background: #fff;
  font-size: 16px;
  font-family: "Roboto", sans-serif;
  padding: 0px;
  margin: 0px;
  color: #252525;
  font-size: 14px;
  line-height: 1.15;

	.container{
		padding: 0px 15px;
	}
	.section-title {
    font-size: 24px;
    line-height: 32px;
		padding: 40px 0 30px;
	}
	.section-change{
		font-size: 24px;
    line-height: 32px;
		padding-bottom: 20px;
	}
	.telecom-list{
		.iconfont{
			font-size: 24px;
			line-height: 1;
		}
	}
	.telecom-list__name {
    font-size: 12px;
    line-height: 18px;	
		margin-top: 10px;
		font-size: 12px;
	}	
	.telecom-list__link{
		font-weight: 600;
		flex: 0 0 120px;
    margin: 0 8px;
    width: 120px;
		height: 118px;
		background-color: #f7f7f7;
    border: 1px solid #e7e7e7;
    border-radius: 4px;
		.iconfont{
			color: #ff3b4a;
		}
	}
	.active{
		background-color: #ee0033;
    border-color: #ee0033;
		color: #fff;
		.iconfont{
			color: #fff;
		}
	}
	.telecom-list{
		overflow-x: auto;
    margin: 0 -8px;
    padding: 10px 0 5px;
	}
	.telecom-box{
		margin: 30px auto;
    max-width: 100%;
    padding: 15px;
		background-color: #f7f7f7;
    border-radius: 4px;
    width: 100%;
	}
	.title__exchange{
		color: #ee0033;
    font-family: 'FS Magistral', sans-serif;
    font-size: 16px;
    height: 60px;
		padding: 0 15px;
		background: #fff;
		margin: 0 auto 20px;
		span{
			font-size: 24px;
			font-weight: 600;
		}
	}
	.telecom-box__sub{
		font-weight: 700;
		color: #000;
    font-family: 'FS PFBeauSansPro', sans-serif;
    font-size: 18px;
    line-height: 28px;
    margin: 0 0 8px;
	}
	.telecom-box__des{
		color: #26292b;
    font-family: 'FS PFBeauSansPro', sans-serif;
    font-size: 16px;
    line-height: 24px;
		font-weight: 400;
	}
	.exchange-point__item{
		background-color: #fff;
    border: 1px solid #e7e7e7;
    border-radius: 4px;
    cursor: pointer;
		width: 250px;
		margin: 0 8px;
	}
	.exchange-point__list{
		flex-wrap: nowrap;
    margin: 0 -8px;
    overflow-x: auto;
    overflow-y: hidden;
		
	}
	.exchange-point__images{
		height: 140px;
		border-radius: 4px 4px 0 0;
		overflow: hidden;
		img{
			height: 100%;
			object-fit: cover;
			width: 100%;
		}
	}
	.exchange-point__info{
		font-size: 14px;
		height: 52px;
		font-weight: 600;
		color: #26292b;
		.iconfont{
			font-size:22px;
			line-height: 1;
			color: #ff3b4a;
			font-weight: normal;
		}
	}
	.exchange-point__item.active {
    border: 2px solid #ee0033;
   }
		.telecom-offer__btn{
			height: 40px;
			background-color: #ee0033;
			color: #fff;
			font-size: 14px;
			text-decoration: none;
			font-weight: 600px;
			margin: 30px 0 60px;
			border-radius: 4px;
		}
		.telecom-offer__des{
			color: #44494d;
			font-family: 'FS PFBeauSansPro', sans-serif;
			font-size: 16px;
			line-height: 24px;
			text-align: center;
			padding-bottom: 60px;
			span{
				color: #ee0033;
				font-weight: 600;
			}
		}
		
}

</style>