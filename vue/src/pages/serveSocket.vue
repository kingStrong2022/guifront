<template>
  <div class="serve-socket-page">
    <Header/>	
		<div class="msg-cont">
			<ul class="d-flex msg-list " 
			v-for="(item, index) in messages"
			:key="index"
			:class="{'justify-end': isMe(item),'msg-admin':joinRoom.admin}"
			>
				<li class="msg-img no-grow no-shrink" v-if="joinRoom.admin"><img src="../assets/bot_girl.png" alt=""></li>
				<li class="msg" v-html="item.text"></li>
			</ul>
		</div>
		<div >
			<ul class="chat-message align-center">
				<li class="text-input">
					<el-input placeholder="输入信息" @keyup.enter.native="submitForm" v-model="text" autocomplete="off"></el-input>
				</li>
				<li>
					<i  class="iconfont icon-livezhifeiji"></i>
				</li>
			</ul>		
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
			}
    };
  },
  methods: {
		isMe(item){
			return this.joinRoom.username == item.username
		},
		outputMessage(message){
			this.messages.push(message)
			let arr=this.messages.filter((item,index)=>{
				if(index>=this.messages.length-20 && item.username !== 'ChatCord Bot'){
					return item
				}
			})
			localStorage.setItem(this.joinRoom.room,JSON.stringify(arr))
		},
		submitForm(){
			alert('submit')
			if(this.text){
				this.socket.emit('chatMessage', this.text);
				this.text = '';
			}
		},
		outputRoomName(){

		},
		outputUsers(users){
			this.users.push(users)
		},
    initSocket() {
        const manager = new Manager(this.socketURL);
        const socket = manager.socket("/");
        this.socket=socket;
			this.socket.on("connect",()=>{
				this.isConnect=true;
				//加入房间
				this.socket.emit('joinRoom',this.joinRoom);
				//监听进入房间人员
				this.socket.on('roomUsers', ({ room, users }) => {
					this.outputRoomName(room);
					this.outputUsers(users);
				});
				// 监听消息
				this.socket.on('message', (message) => {
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
	}
}
</style>