<template>
	<section class="justify-center bl-content" id="blog">
		<div class="bl-container-row">
			<h2 class="mt-4 mb-10">Blog</h2>
			<v-row
				justify="center"
				align-content="center"
			>
				<v-col
					v-for="item in items"
					:key="item.title"
					cols="12"
					md="4"
					sm="6"
				>
					<div class="img-large">
						<a :href=item.link target="_blank">
							<img :src=item.src>
						</a>
					</div>
				</v-col>
			</v-row>
		</div>
	</section>
</template>
<script>
	export default {
		name: 'Blog',

		data: () => ({
			items: [
				{
					title: 'ソラブログ',
					link: 'https://www.sorablog.work/',
					src: require('../assets/blog/sorablog.jpg')
				},
				{
					title: 'j-lifestyle日記',
					link: 'https://www.j-lifestyle.work/',
					src: require('../assets/blog/j-lifestyle.jpg')
				},
			],
		}),
	}
</script>
<style lang="scss" scoped>
	@charset "utf-8";

	.bl-content {
		padding: 64px 32px;
		min-height: 60vh;
		background-color: #eceef0;
	}

	.bl-container-row {
		max-width: 1280px;
		margin: 0 auto;
	}

	/* 画像拡大 */
	.img-large {
		overflow: hidden;
		width: 300px;
		height: 240px;
		margin: 0 auto;

		@include display_pc {
			width: 360px;
		}
	}
	.img-large img {
		width: 300px;
		display: block;
		transition: 0.5s;

		@include display_pc {
			width: 360px;
		}
	}
	.img-large img:hover {
		transform: scale(1.1, 1.1);
	}
</style>