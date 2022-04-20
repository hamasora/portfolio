<template>
	<v-app>
		<Header />

		<router-view />

		<Footer />
	</v-app>
</template>
<script>
	import Header from './components/Header.vue'
	import Footer from './components/Footer.vue'

	export default {
		data: () => ({
			
		}),

		components: {
			Header,
			Footer,
		},
  }
</script>
<style lang="scss" scoped>

</style>