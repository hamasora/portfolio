<template>
	<article class="justify-center text-center" id="top">
		<v-row
			class="top-content"
			justify="center"
			align-content="center"
			style="margin: 0px;"
		>
			<v-col cols="12">
				<h1>SoraSystem</h1>
				<div class="scrolldown2"><span>Scroll</span></div>
			</v-col>
		</v-row>
	</article>
</template>

<script>
	export default {
		name: 'Top',
		
		data: () => ({

		}),
	}
</script>

<style lang="scss" scoped>
	@charset "utf-8";

	/* TOP */
	.top-content {
		position: relative;
		min-height: 78vh;
		background: -moz-linear-gradient(top, #3A75A0, #C7D0D8);
		background: -webkit-linear-gradient(top, #3A75A0, #C7D0D8);
		background: linear-gradient(to bottom, #3A75A0, #C7D0D8);
		color: #fff;
		margin: 0 auto;
		
		@include display_pc {
			min-height: 93vh;
		}
	}

	.v-row {
		margin: 0px;
	}

	/*========= スクロールダウン ===============*/
	/*スクロールダウン全体の場所*/
	.scrolldown2 {
		/*描画位置※位置は適宜調整してください*/
		position: absolute;
		bottom: 10px;
		left: 50%;
	}

	/*Scrollテキストの描写*/
	.scrolldown2 span {
		/*描画位置*/
		position: absolute;
		left: 10px;
		bottom: 10px;
		/*テキストの形状*/
		color: #eee;
		font-size: 0.7rem;
		letter-spacing: 0.05em;
		/*縦書き設定*/
		-ms-writing-mode: tb-rl;
		-webkit-writing-mode: vertical-rl;
		writing-mode: vertical-rl;
	}

	/* 丸の描写 */
	.scrolldown2:before {
		content: "";
		/*描画位置*/
		position: absolute;
		bottom: 0;
		left: -4px;
		/*丸の形状*/
		width: 10px;
		height: 10px;
		border-radius: 50%;
		background: #eee;
		/*丸の動き1.6秒かけて透過し、永遠にループ*/
		animation: circlemove 1.6s ease-in-out infinite, cirlemovehide 1.6s ease-out infinite;
	}

	/*下からの距離が変化して丸の全体が上から下に動く*/
	@keyframes circlemove {
		0% {bottom: 45px;}
		100% {bottom: -5px;}
	}
	/*上から下にかけて丸が透過→不透明→透過する*/
	@keyframes cirlemovehide {
		0% {opacity: 0}
		50% {opacity: 1;}
		80% {opacity: 0.9;}
		100% {opacity: 0;}
	}

	/* 線の描写 */
	.scrolldown2:after {
		content: "";
		/*描画位置*/
		position: absolute;
		bottom: 0;
		left: 0;
		/*線の形状*/
		width: 2px;
		height: 50px;
		background: #eee;
	}
</style>