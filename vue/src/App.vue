<template>
	<div id="app">
	<Chat>
	<template v-slot>
	<div id="dplayer"></div>
	</template>
	</Chat>		
	</div>
</template>

<script>
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
		url: 'http://www.sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4',

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
