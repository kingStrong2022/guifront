<template>
	<div id="app">
		<!-- <Chat  token="eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE2NjkwMTc2OTEsInVzZXJuYW1lIjoia3MxMjMxQGdtYWlsLmNvbSJ9.TFKE_0mNIpytYiKwUaiY14Sb0nK5F6V5ZPB_I8h1R4o">
			<template v-slot>
			<div id="dplayer"></div>
			</template>
		</Chat>		 -->
	<router-view />
	</div>
</template>

<script>
/* eslint-disable */ 
import Chat from './components/Chat.vue'
import DPlayer from 'dplayer';
export default {
  name: 'App',
  components: {
    Chat
  },
  mounted() {
	new DPlayer({
		container: document.getElementById('dplayer'),
		screenshot: true,
		video: {
		url: 'http://localhost:6422/dome.mp4',
		}
	});
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

</style>
