<template>
	<header>
		<button type="button" class="btn js-btn">
			<span class="btn-line"></span>
		</button>
		<nav>
			<ul class="menu">
				<li
					v-for="menu in menuItems"
					:key="menu.title"
					class="menu-list"
				>
					<a :href="menu.url">{{ menu.title }}</a>
				</li>
			</ul>
		</nav>
	</header>
</template>

<script>
	import $ from "jquery";
	
	export default {
		name: 'Header',

		data: () => ({
			menuItems: [
				{title: 'Top', url: '/'},
				{title: 'Profile', url: '#profile'},
				{title: 'Service', url: '#service'},
				//{title: 'Skill & Works', url: '#skillworks'},
				{title: 'Skills', url: '#skills'},
				{title: 'Works', url: '#works'},
				{title: 'Blog', url: '#blog'},
				{title: 'Contact', url: '#contact'},
			],
		}),
		mounted() {
			//ボタンがクリックされたら
			$(function () {
				$('.js-btn').on('click', function () {        // js-btnクラスをクリックすると、
					$('.menu , .btn-line').toggleClass('open'); // メニューとバーガーの線にopenクラスをつけ外しする
				})
			});
		}
	}
</script>

<style lang="scss" scoped>
	@charset "utf-8";

	header {
		width: 100%;
		min-height: 65px;
		background-color: #3a75a0;
	}

	ul {
		display: flex;
		list-style: none;
		justify-content: center;
		padding: 20px 10px;
	}

	li a {
		//display: block;
		text-decoration: none;
		padding: 15px 25px;
		color: #fff;
		font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
	}

	li a:hover {
		background-color: rgba(#fff, 0.2);
		transition: 0.5s;
	}

	button {
		margin: 0;
		padding: 0;
		outline: 0;
		border: 0;
		border-radius: 0;
		background: transparent;
		color: inherit;
		vertical-align: middle;
		text-align: inherit;
		font: inherit;
		-webkit-appearance: none;
		appearance: none;
	}
	/**************** 以下、ハンバーガーボタンのスタイリング ****************/
	.btn {
		/* ボタンの配置位置  */
		position: fixed;
		top: 16px;
		right: 16px;
		/* 最前面に */
		z-index: 999;
		/* ボタンの大きさ  */
		width: 40px;
		height: 40px;
	}
	/***** 真ん中のバーガー線 *****/
	.btn-line {
		display: block;
		/* バーガー線の位置基準として設定 */
		position: relative;
		/* 線の長さと高さ */
		width: 100%;
		height: 4px;
		/* バーガー線の色 */
		background-color: #d6d5d5;
		transition: .2s;
	}
	/***** 上下のバーガー線 *****/
	.btn-line::before , .btn-line::after {
		content: "";
		/* 基準線と同じ大きさと色 */
		position: absolute;
		width: 100%;
		height: 100%;
		background-color: #d6d5d5;
		transition: .5s;
	}
	.btn-line::before {
		/* 上の線の位置 */
		transform: translateY(-16px);
	}
	.btn-line::after {
		/* 下の線の位置 */
		transform: translateY(16px);
	}
	/***** メニューオープン時 *****/
	.btn-line.open {
		/* 真ん中の線を透明に */
		background-color: transparent;
	}
	.btn-line.open::before , .btn-line.open::after {
		content: "";
		background-color: #333;
		transition: .2s;
	}
	.btn-line.open::before {
		/* 上の線を傾ける */
		transform: rotate(45deg);
	}
	.btn-line.open::after {
		/* 上の線を傾ける */
		transform: rotate(-45deg);
	}
	/**************** ここまで、ハンバーガーボタンのスタイリング ****************/
	/**************** 以下、メニューのスタイリング ****************/
	.menu {
		/* メニューを縦に */
		display: flex;
		flex-direction: column;
		position: fixed;
		/* メニューの位置マイナス指定で画面外に */
		right: -100%;
		width: 100%;
		height: 100vh;
		z-index: 1;
		color: #fff;
		background-color: rgba(58, 117, 160, 0.7);
		transition: .3s;
		overflow: auto;
		-webkit-overflow-scrolling: touch;
	}
	/***** メニューオープン時位置0にして画面内に *****/
	.menu.open {
		//position: fixed;
		right: 0;
	}
	.menu-list {
		margin: 10px 0px;
	}
	/* 600px以上はハンバーガーボタン非表示、ヘッダー固定 */
	@media screen and (min-width: 600px) {
		.btn {
			display: none;
		}
		.menu {
			/* メニューを横に */
			display: flex;
			flex-direction: row;
			position: fixed;
			top: 0;
			right: 0;
			width: 100%;
			height: 65px;
		}
		.menu-list {
			margin: 0px;
		}
	}
</style>