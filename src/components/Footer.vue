<template>
	<v-footer color="#3A75A0">
		<v-row
			justify="center"
			align-content="center"
			class="text-center"
		>
			<v-col cols="12">
				© 2022 SoraSystem
			</v-col>
		</v-row>
	</v-footer>
</template>
<script>
	export default {
		name: 'Footer',

		data: () => ({

		}),
	}
</script>
<style lang="scss" scoped>
	@charset "utf-8";

	.col-12 {
		padding: 0px;
	}

	footer {
		height: 40px;
	}
</style>