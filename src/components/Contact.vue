<template>
	<section class="justify-center ct-content" id="contact">
		<div class="ct-container-row">
			<h2 class="mt-4 mb-10">Contact</h2>
			<v-row
				justify="center"
				align-content="center"
			>
				<v-col cols="12" md="8" class="text-center">
					<p>システム開発・HP作成等のご依頼を承っております。下記メールよりお気軽にご連絡ください。</p>
					<a href="mailto:sorasystem220405@gmail.com">sorasystem220405@gmail.com</a>
					<p class="subtitle-2 mt-2">※日によっては返信が遅れる場合がございます。ご了承ください。</p>
				</v-col>
			</v-row>
		</div>
	</section>
</template>
<script>
	export default {
		name: 'Contact',

		data: () => ({
			
		}),
	}
</script>
<style lang="scss" scoped>
	@charset "utf-8";

	.ct-content {
		padding: 64px 32px;
	}

	.ct-container-row {
		max-width: 1280px;
		margin: 0 auto;
	}
</style>