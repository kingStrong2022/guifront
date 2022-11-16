<template>
  <div class="chat-components">
	<div class="live-container container-pc d-flex">
		<div ref="livevideo" class="live-video">
			<slot></slot>
		</div>
		<div class="live-chat">
			<div ref="chathead" class="chat-head align-center">
				<svg t="1668394839252" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2684" width="32" height="32"><path d="M266.024819 553.999556c-42.324968 0-76.759221-34.435277-76.759221-76.763314 0-42.324968 34.434254-76.759221 76.759221-76.759221s76.759221 34.434254 76.759221 76.759221C342.78404 519.564279 308.35081 553.999556 266.024819 553.999556zM266.024819 437.656805c-21.824051 0-39.579437 17.755386-39.579437 39.579437 0 21.827121 17.755386 39.58353 39.579437 39.58353s39.579437-17.757432 39.579437-39.58353C305.604256 455.412191 287.84887 437.656805 266.024819 437.656805z" p-id="2685"></path><path d="M521.82067 553.999556c-42.324968 0-76.759221-34.435277-76.759221-76.763314 0-42.324968 34.434254-76.759221 76.759221-76.759221s76.759221 34.434254 76.759221 76.759221C598.579891 519.564279 564.146661 553.999556 521.82067 553.999556zM521.82067 437.656805c-21.824051 0-39.579437 17.755386-39.579437 39.579437 0 21.827121 17.755386 39.58353 39.579437 39.58353s39.58046-17.757432 39.58046-39.58353C561.40113 455.412191 543.645744 437.656805 521.82067 437.656805z" p-id="2686"></path><path d="M772.168438 553.999556c-42.327014 0-76.763314-34.435277-76.763314-76.763314 0-42.324968 34.435277-76.759221 76.763314-76.759221 42.324968 0 76.759221 34.434254 76.759221 76.759221C848.927659 519.564279 814.493405 553.999556 772.168438 553.999556zM772.168438 437.656805c-21.826098 0-39.584554 17.755386-39.584554 39.579437 0 21.827121 17.758456 39.58353 39.584554 39.58353 21.824051 0 39.58046-17.757432 39.58046-39.58353C811.748898 455.412191 793.992489 437.656805 772.168438 437.656805z" p-id="2687"></path><path d="M287.374056 905.644405c-3.447519 0-6.933923-0.958838-10.048867-2.963495-8.631588-5.559623-11.122315-17.062608-5.562692-25.694195 17.160845-26.643823 50.127677-44.535309 97.987708-53.179177 32.118512-5.801123 59.942207-5.307889 63.439868-5.214768l431.729815 0c35.307134 0 64.031339-28.725228 64.031339-64.032362L928.951227 227.848335c0-35.307134-28.724205-64.031339-64.031339-64.031339L173.274392 163.816996c-35.307134 0-64.031339 28.724205-64.031339 64.031339l0 526.71105c0 33.039487 24.747637 60.429301 57.565067 63.711044 2.136663 0.212848 4.314259 0.321318 6.466272 0.321318l51.903114 0c10.266831 0 18.590404 8.322549 18.590404 18.58938s-8.322549 18.58938-18.590404 18.58938l-51.903114 0c-3.37998 0-6.798846-0.169869-10.161431-0.50449-24.855084-2.485611-47.832402-14.06125-64.702628-32.595372-16.989953-18.665105-26.347065-42.85504-26.347065-68.112284L72.063269 227.848335c0-55.80805 45.403073-101.211123 101.211123-101.211123l691.645496 0c55.80805 0 101.2101 45.403073 101.2101 101.211123l0 526.71105c0 55.80805-45.402049 101.211123-101.2101 101.211123L432.639534 855.770508l-0.293689-0.00921c-0.24764-0.007163-26.750247-0.725524-56.611346 4.746094-25.412786 4.65502-58.657958 14.784728-72.715115 36.609803C299.466466 902.634862 293.482171 905.644405 287.374056 905.644405z" p-id="2688"></path></svg>
				<span class="head-title">{{joinRoom.room}}</span>
			</div>
			<div class="live-config">
				<ul class="live-list" ref="livelist">
					<li  class="d-flex live-item"
					v-for="(item, index) in messages"
					:key="index"
					:class="{'live-item-me': isMe(item)}"
					>
						<p class="user-img">
							<img :src="item.avatarUrl" alt="">
						</p>
						<div class="live-cont">
							<p class="user-msg align-center">
								<span class="username">{{isMe(item) ?'我' : item.username}}</span>
								<span class="live-time">{{item.time}}</span>
							</p>
							<div class="user-content  align-center" v-html="item.text">
								
							</div>
						</div>
					</li>
				</ul>
				<div class="send-containt">
					<form @submit.prevent="submitForm">
						<input type="text" ref="textinput" v-model.trim="text" class="message-input" :placeholder="joinRoom.disable ? '你已经被就禁言' : ''"  :disabled="joinRoom.disable"/>
						<p @click="showFaceFn" class="face-btn">
							<svg t="1668476601850" class="icon" viewBox="0 0 1025 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2728" width="20" height="20"><path d="M512.016 1024C229.232 1024 0.016 794.784 0.016 512 0.016 229.216 229.232 0 512.016 0 794.784 0 1024 229.216 1024 512 1024 794.784 794.784 1024 512.016 1024ZM512.016 64C264.976 64 64.016 264.96 64.016 512 64.016 759.024 264.976 960 512.016 960 759.04 960 960 759.024 960 512 960 264.96 759.04 64 512.016 64ZM510.336 833.456C509.056 833.456 507.744 833.488 506.448 833.488 310.992 833.488 229.024 657.12 225.616 649.552 218.336 633.424 225.488 614.496 241.584 607.216 257.712 599.968 276.576 607.088 283.888 623.088 286.64 629.12 352.928 769.488 506.576 769.488 507.584 769.488 508.576 769.456 509.584 769.456 672.896 767.552 738.368 624.768 739.024 623.344 746.176 607.216 765.024 599.872 781.264 607.152 797.392 614.336 804.672 633.248 797.456 649.408 794.176 656.8 714.208 831.056 510.336 833.456ZM671.504 479.84C636.224 479.84 607.664 451.232 607.664 415.984 607.664 380.768 636.224 352.176 671.504 352.176 706.768 352.176 735.344 380.768 735.344 415.984 735.344 451.232 706.768 479.84 671.504 479.84ZM351.504 479.84C316.224 479.84 287.664 451.232 287.664 415.984 287.664 380.768 316.224 352.176 351.504 352.176 386.768 352.176 415.344 380.768 415.344 415.984 415.344 451.232 386.768 479.84 351.504 479.84Z" p-id="2729"></path></svg>
						</p>
						<div class="expression" v-show="showFace && !joinRoom.disable">
							<ul class="expression-list d-flex" >
								<li v-for="item in expressions" :key="item.title" @click.stop="pickerExpression(item)">
									<img :src="EMOJI_BASE_URL+item.url" alt="">
								</li>
							</ul>
						</div>
						
					</form>
					
				</div>
			</div>
			
		</div>
	</div>
  </div>
</template>

<script>
import { EMOJI_BASE_URL } from './config/config.js';
import { expressions,avatarList,randomAvatar,dom } from './config/emoji.js';
import { Manager } from 'socket.io-client';
import axios from 'axios'

export default {
  name: 'ChatComponents',
  data() {
	return {
		socketURL:process.env.VUE_APP_SERVER,
		isConnect:false,
		users:[],
		messages:[],
		text:'',
		EMOJI_BASE_URL,
		expressions,
		showFace:false,
		avatarList,
		joinRoom:{
			room:'Live chat',
			username:'',//accountId
			webName:'',//username
			disable:false
		}
	}
  },
  props: {
	token: {
		type: String,
		default: ''
	}
  },
  methods: {
	randomAvatar,
	showFaceFn(){
		if(this.joinRoom.disable){
			return
		}
		this.showFace = !this.showFace
	},
	isMe(item){
		return this.joinRoom.username == item.username
	},
	pickerExpression(item){
        this.text+=item.title;
		this.showFace=false;
		this.$refs.textinput.focus();
      },
	submitForm(){
		if(this.text){
			this.socket.emit('chatMessage', this.text);
			this.text = '';
		}
	},
	async vaidToken(){
		let data={}
		
		await this.$http.get('https://api.janestreet.cc/jeecg-boot/fund/user').then((res)=>{
			data=res.data
		}).catch(()=>{
			data={}
		})
		return data
	},
	initHttp(){
		const  http=axios.create({
				headers: {'X-Access-Token': this.token}
			})
			this.$http=http;
			dom.addClass(document.querySelector('html'),'live-room-html')
			
	},
	outputRoomName(){

	},
	outputMessage(message){
		const reg = /\[(.*?)\]/gm;
		this.expressions.forEach((element) => {
			message.text = message.text.replace(reg, (match) => {
				if (element.title === match) {
				return `<img style="height: 25px;" src="${this.EMOJI_BASE_URL+element.url}" />`;
				}
				return match;
			});
		});
		this.messages.push(message)
		let arr=this.messages.filter((item,index)=>{
			if(index>=this.messages.length-20 && item.username !== 'ChatCord Bot'){
				return item
			}
		})
		localStorage.setItem(this.joinRoom.room,JSON.stringify(arr))
	},
	outputUsers(users){
		this.users.push(users)
	},
	countHeight(){
		let resAll=this.$refs
		console.log(resAll.livevideo.clientHeight*1)
		let height = resAll.livevideo.clientHeight*1 +resAll.chathead.clientHeight*1 
		let  winHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight
		resAll.livelist.style.height = winHeight - height + 'px'
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
					let $dome=this.$refs.livelist;
					if($dome){
						$dome.scrollTop = $dome.scrollHeight;
					}
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
  async mounted(){
	this.initHttp();
	this.countHeight();
	let data = await this.vaidToken();
	
	if(data.code !== 200) return
	let {username,disable,accountId}=data.result
	this.joinRoom.username=accountId;
	this.joinRoom.webName=username;
	if(disable !== undefined){
		this.joinRoom.disable=disable
	}
	let msg=localStorage.getItem(this.joinRoom.room)
	this.messages=msg ?JSON.parse(msg):[];	
	this.initSocket();
   },
   beforeDestroy(){
	dom.removeClass(document.querySelector('html'),'live-room-html')
      if(this.socket){
        this.socket.close()
      }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
.chat-components{
	color: #333;
	font-size: 16px
}
.d-flex{
	display: flex;
}
.center-center{
  display: flex;
  align-items: center;
  justify-content: center;
}
.align-center{
	display: flex;
	align-items: center;
  }
.border-transparent{
	border-color: transparent !important;
}
.pr-0{
	padding-right: 0 !important;
}
.px-0{
	padding-right: 0 !important;
	padding-left: 0 !important;
}
ul,li,ol{
	list-style: none;
}
.no-grow{
	flex-grow: 0 !important;
}
.no-shrink{
	flex-shrink: 0 !important;
}
.container-pc	{
	width: 1020px;
	margin: 0 auto;
	.live-chat{
		width: 312px;
	}
	
}
.live-chat{
	border: 1px solid #e0e3eb;
	border-radius: 4px;
}
.chat-head{
	padding: 0px 8px;
	height: 48px;
	box-shadow: 0 2px 4px #999;
}
.head-title{
	font-size: 18px;
	font-weight: 400;
	padding: 0 13px;
}
.live-item{
	padding: 8px 4px;
}
.user-img,.live-cont{
	padding: 0px 4px;
}
.user-img{
	img{
		max-width: 24px;
		border-radius: 2px
	}
}
.live-list{
	padding-bottom: 34px;
	height: 378px;
    overflow-y: auto;
}
.username{
	font-weight: 700;
    margin-right: 4px;
	color: #2962ff;
	overflow:hidden;
	text-overflow:ellipsis;
	white-space:nowrap;
	max-width: 104px;
	display: inline-block;
}
.live-time{
	font-size: 14px;
	color: #8b8e95;
}
.live-item{
	border-bottom: 1px solid #e0e3eb;
	margin: 0 2px
}
.user-content,.live-time,.user-content{
 text-align-last: left
}
.user-content{
	padding-top:4px; 
}
.live-list > li:last-child{
	border-bottom: none;
}
.live-config{
	position: relative;
}
.send-containt{
	position: absolute;
	left: 0px;
	right: 0px;
	bottom: 0px;
	background: #fff;
	padding: 2px;
}
.message-input{
	background-color: #fff;
    border: 1px solid #b2b5be;
    color: #434651;
    font-size: 14px;
    height:30px;
    padding: 7px 26px 7px 8px;
    width:100%;
}
.live-video{
	flex: 1;
	background: #000;
	img{
		max-width: 100%;
	}
}
.dplayer{
	height: 100%;
}
@media (max-width: 560px){
	.live-chat,.container-pc{
		width: 100% !important;
	}
	.container-pc{
		flex-direction: column;
	}
	.send-containt{
		position: fixed;
	}
	.live-video{
		flex-basis:234px;
		flex-grow: 0 !important;
		flex-shrink: 0 !important;
	}
}
.face-btn{
	position: absolute;
    right: 8px;
    top: 7px;
}
.expression{
	height: 200px;
	overflow-y: auto;
}
.expression-list{
	flex-wrap: wrap;
	&>li{
		width: 30px;
		height: 30px;
		padding: 5px;
		flex-shrink: 0;
	}
	img{
		width: 100%;
		height: 100%;
		display: block;
	}
}
</style>
<style  lang="stylus">
.leve-room-name{
	text-overflow:ellipsis;
    white-space: nowrap;
    max-width: 104px;
    display: inline-block;
	overflow: hidden;
}
.live-room-html{
	*{
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}
}

</style>