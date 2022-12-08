<template>
  <div class="serve-socket-page" :class="{'admin-menu':joinRoom.admin}">
    <Header/>
		<div v-if="isConnect">
			<ul class="online-user d-column" v-if="joinRoom.admin">
				<li class="center-center"
				:class="{'active':item.username === toUser.username}"
				v-for="(item, index) in otherUser"
				:key="index"
				@click="choseToUser(item)"
				>
				<el-badge
				:hidden="item.message.filter(v => !v.read).length == 0"
				:value="item.message.filter(v => !v.read).length"
				class="item">
					<i class="iconfont icon-liveuser"></i>
				</el-badge>

				</li>
			</ul>
			<div class="msg-cont">
				<ul class="d-flex msg-list "
				v-for="(item, index) in curMsg"
				:key="index"
				:class="{'justify-end': isMe(item),'msg-admin':!isMe(item)}"
				>
					<li class="msg-img no-grow no-shrink" v-if="item.admin"><a href="https://chat.livechats.chat/?channelId=Wtd31Y&language=en"><img src="../assets/bot_girl.png" alt=""></a></li>
					<li class="msg" v-html="item.text"></li>
				</ul>
			</div>
			<div >
				<ul class="chat-message align-center">
					<li class="text-input">
						<el-input placeholder="输入信息" @keyup.enter.native="submitForm" v-model="text" autocomplete="off"></el-input>
					</li>
					<li>
						<i @click="submitForm" class="iconfont icon-livezhifeiji"></i>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
import { Manager } from 'socket.io-client';
import Header from '../components/Header'
import { v4 as uuidv4 } from 'uuid';
const username = localStorage.getItem('accountId') || uuidv4();
localStorage.setItem('accountId', username);
export default {
	name: 'ServeSocketHome',
	components: {
    Header
  },
  data() {
    return {
			socketURL:process.env.VUE_APP_SERVER,
      isConnect:false,
			text:'',
			users: [],
			messages:[],
			joinRoom:{
				room:'serve chat',
				username,//accountId
				webName:'',//username
				disable:false,
				admin:this.$route.query.admin ? 1 : 0,
			},
			toUser:{

			}
    };
  },
	computed:{
		otherUser(){
			return this.users.filter(item=>item.username !== this.joinRoom.username)
		},
		curMsg(){
			let msg=[]
			let doc = this.users.find(item=> {
				if(item.username == this.toUser.username){
					return true
				}
				return false
			})
			if(doc){
				msg =doc.message || []
			}
			return msg
		},
	},
  methods: {
		isMe(item){
			return this.joinRoom.username == item.username
		},
		outputMessage(message){
			if(message.username == 'ChatCord Bot') return
			message.read=0
			if(message.username == this.toUser.username){
				message.read=1
			}
			this.users.forEach(v =>{
				if(v.username == message.username){

					v.message.push(message)
					console.log(v)
					return false
				}
			})
		},
		submitForm(){
			if(!this.toUser.id){
				if(this.joinRoom.admin){
					this.$MessageBox('请在左侧栏选择用户回复');
					return
				}
				this.$MessageBox('没有客服在线');
				return false
			}
			if(this.text){
				//toUser => id username
				if(!this.toUser.id) return
				let talk={toSocket:this.toUser,text:this.text}
				this.socket.emit('chatAdminMsg',talk );
				if(this.toUser.id){
					this.toUser.message.push({
						...this.joinRoom,
						text:this.text,
						read:1
					})
				}
				this.text = '';
			}
		},
		outputRoomName(){

		},
		choseToUser(item){
			item.message.forEach(v=>{
				v.read=1
			})
			this.toUser = item
		},
		outputUsers(users){

			users.forEach(v =>{
				let obj=this.users.find(item=>item.username == v.username)
				if(obj){
					v.message = obj.message
				}
			})
			this.users=users
			if(!this.users.find(item=>item.username === this.toUser.username)){
				this.toUser={}
			}
			if(!this.joinRoom.admin){
				let idx= this.users.findIndex(item=>item.admin)
				this.toUser = this.users[idx] || {}
			}
		},
    initSocket() {
        const manager = new Manager(this.socketURL);
        const socket = manager.socket("/");
        this.socket=socket;
				const loading = this.$loading({
          lock: true,
          text: '链接中....',
          spinner: 'el-icon-loading',
          background: 'rgba(0, 0, 0, 0.7)'
        });
			this.socket.on("connect",()=>{
				this.isConnect=true;
				loading.close();
				//加入房间
				this.socket.emit('joinRoom',this.joinRoom);
				//监听进入房间人员
				this.socket.on('roomUsers', ({ room, users }) => {
					this.outputRoomName(room);
					this.outputUsers(users);
				});
				// 监听消息

				this.socket.on('adminMsg', (message) => {
					this.outputMessage(message);
					// Scroll down
					this.$nextTick(() => {

					});
				});
				//禁用
				this.socket.on('handleDisable', (users) => {
					if(users.username === this.joinRoom.username){
						this.joinRoom.disable=users.disable
					}
				});
			})
		}
  },
	mounted() {
		this.initSocket();
	},
	beforeDestroy(){
      if(this.socket){
        this.socket.close()
      }
    }
};
</script>

<style lang="scss">
@import '../assets/styles/variables.scss';
$bp44: 44px;
.serve-socket-page{
	padding-bottom: $bp44;
	.bot-girl{
		display: none	;
	}
	.active{
		color: #fff;
		background-color: $primary;
	}
	.icon-livezhifeiji{
		color: $primary;
		font-size: 22px;
		margin-left: 15px;
	}
	.chat-message{
		padding: 2px 15px;
		position: fixed;
		height: $bp44;
		left: 0;
		bottom: 0;
		width: 100%;
		background: #fff;
		box-shadow: 0 5px 10px rgb(129 126 126 / 31%);
	}
	.text-input{
		flex: 1;
	}
	.el-input__inner{
		border: none !important;
	}
	.msg-img{
		height: 30px;
		width: 30px;
		img{
			width: 100%;
			height: 100%;
		}
	}
	.msg-cont{
		padding: 10px;
	}
	.msg{
		//flex: 1;
		margin-left: 10px;
	}
	.msg-list{
		margin-bottom: 7px !important;
		.msg{
			border-radius: 10px;
			padding: 10px 13px !important;
			background: $primary;
			color: #fff;
		}
	}
	.msg-admin{
		.msg{
			background-color: #E7E7E7 !important;
			color: #333;
		}

	}
	.justify-end{
		justify-content: end;
		flex-direction: row-reverse;
		.msg{
			margin-left: 0;
			margin-right: 10px;
		}
	}
	.online-user{
		position: fixed;
		left: 0 ;
		top: 40px;
		bottom: 44px;
		box-shadow: 0 5px 10px rgb(129 126 126 / 31%);
		width: 56px;
		li{
			margin: 4px 0;
			height: 40px;
		}
		.iconfont{

			font-size: 20px;
		}
	}

}
.admin-menu{
	.msg-cont{
		padding-left: 64px;
	}
}
.kefu{
	width: 100%;
	height: calc(100vh - 44px);
	border: 0;
}
</style>
