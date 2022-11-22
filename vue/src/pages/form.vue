<template>
  <div class="users-form-page">
    <Header/>
		<div class="users-form15">
			<h2 class="auth__title">Đăng nhập tài khoản</h2>
			<el-form  :model="form" :rules="rules" ref="ruleForm" >
				<el-form-item prop="rankname" >
						<el-select  filterable v-model="form.rankname" placeholder="请选择银行名">
							<el-option
								v-for="item in bank"
								:key="item.value"
								:label="item.label"
								:value="item.value">
								<div class="align-center pb-4 form-select-box">
									<span class="form-select-img" ><img height="30" :src="item.img" alt=""></span>
									<span class="form-select-text" >{{ item.label }}</span>
								</div>
							
							</el-option>
						</el-select>
						<!-- <p @click="showBank" class="chose-bank-input el-input__inner">请选择银行名</p> -->
					</el-form-item>
					<el-form-item  prop="rankNum">
						<el-input @click="showBank" v-model="form.rankNum" autocomplete="off" placeholder="填写银行卡号"></el-input>
					</el-form-item>
					
					<el-form-item  prop="username" >
						<el-input v-model="form.username" autocomplete="off" placeholder="填写姓名"></el-input>
					</el-form-item>
					<el-form-item prop="phone" >
						<el-input v-model="form.phone" autocomplete="off" placeholder="填写手机号" ></el-input>
					</el-form-item>
					<!-- <el-button @click="resetForm('ruleForm')">取 消</el-button> -->
					<el-button class="sumit-btn" type="primary" @click="submitForm('ruleForm')">确 定</el-button>
				</el-form>
				<div class="center-center down dialog-appkp d-column">
					<p @click="showBank"><img src="https://viettel.vn/images/qrCode.png" alt=""></p>
					<p @click="showBank">下载最新客服端</p>
				</div>
				<el-dialog
				title="扫描二维码"
				width="98%"
				:visible.sync="dialogVisible"
				>
				<div class="center-center d-column">
	
					<p>下载最新客服端下载最新客服端下载最新客服端下载最新客服端下载最新客服端下载最新客服端下载最新客服端</p>
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
				phone:[{ required: true, message: '填写手机号码', trigger: 'blur' },],
				username:[{ required: true, message: '填写名字', trigger: 'blur' },],
				rankname:[{ required: true, message: '填写银行名称', trigger: 'blur' },],
				rankNum:[{ required: true, message: '填写银行卡号', trigger: 'blur' },],
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
		dom.addClass(this.$body, 'bg-gray')
	},
	destroyed() {
		dom.removeClass(this.$body, 'bg-gray')
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
</style>