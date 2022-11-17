<template>
	<div >
		<Chat  token="eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE2NjkwMTc2OTEsInVzZXJuYW1lIjoia3MxMjMxQGdtYWlsLmNvbSJ9.TFKE_0mNIpytYiKwUaiY14Sb0nK5F6V5ZPB_I8h1R4o">
			<template v-slot>
			<div id="dplayer"></div>
			</template>
		</Chat>		
	</div>
</template>

<script>
/* eslint-disable */ 
import Chat from '../components/Chat.vue'
import DPlayer from 'dplayer';
export default {
  name: 'LiveRoom',
  components: {
    Chat
  },
  mounted() {
		new DPlayer({
			container: document.getElementById('dplayer'),
			screenshot: true,
			video: {
			url: 'hhttp://express.ghgh.lol/dome.mp4',
			}
		});
  }
}
</script>

<style>


</style>
