<template>
	<div  class="marg-b" >
		<div class="f-banner">
			<img :src="n" :key="index" v-for="(n,index) in data"/>
		</div>
	</div>
</template>

<script>
	export default{
		name: 'banner',
		props: ['data']
	}
</script>

<style scoped>
 .f-banner{
	display: flex;
 }
 img{
	width: 50%;
 }
</style>
