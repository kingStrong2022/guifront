<template>
  <div>
    <h1 @click="$router.push('/live')">聊天室</h1>
    <h1 @click="$router.push('/list')">viettel.vn 页面</h1>
		<el-button>默认按钮</el-button>
  <el-button type="primary">主要按钮</el-button>
	</div>
</template>

<script>
export default {
	name: 'IndexHome',
  data() {
    return {
      
    };
  },
  methods: {
    loadDashBoard() {
      
    },
  },
};
</script>

<style>
</style>