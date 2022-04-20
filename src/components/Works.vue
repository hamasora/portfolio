<template>
	<section class="justify-center wr-content" id="works">
		<div class="wr-container">
			<h2 class="mt-4 mb-4">Works</h2>
			<p class="ml-4 mb-4">これまで開発してきた事例の一部をご紹介。</p>
			<div class="wr-container-row">
				<v-row
					align-content="center"
					dense
				>
					<v-col
						v-for="item in items"
						:key="item.title"
						cols="12"
					>
						<v-card
							outlined
							elevation="0"
						>
							<v-card-text>
								<div>{{ item.date }}</div>
								<v-divider></v-divider>
								<p class="text-h6 mt-2 mb-2 text-black">{{ item.title }}</p>
								<p class="ml-2 mb-2"><span class="mgl-1">内容： </span>{{ item.content }}</p><!-- class="text--primary"-->
								<p class="ml-2 mb-2">担当業務： {{ item.responsive }}</p>
								<p class="ml-2 mb-2">使用言語： {{ item.lang }}</p>
							</v-card-text>
						</v-card>
					</v-col>
				</v-row>
			</div>
		</div>
	</section>
</template>
<script>
	//import $ from "jquery";
	
	export default {
		name: 'Works',

		data: () => ({
			items: [
				{
					date: '2019年2月～2019年4月',
					title: 'リハビリテーションシステム開発サブリーダー',
					content: '某病院のリハビリテーション業務・評価入力をExcelからシステムに起こす。また、入力内容を一覧で管理し且つ印刷できる。',
					responsive: 'コーディング、テスト、運営',
					lang: 'VB.net、CrystalReport、PostgreSQL'
				},
				{
					date: '2019年8月～2019年11月',
					title: '賞与計算システム移植・改修',
					content: 'Accessで作成された既存の賞与計算システムをVB.netに移植。移植に伴い、効率化できる部分を提案・改善。',
					responsive: '設計、コーディング、テスト、運営/保守',
					lang: 'VB.net、Access、CrystralReport、PostgreSQL'
				},
				{
					date: '2021年1月～2021年4月',
					title: '顔認証システム開発',
					content: 'Pythonを使用した顔認証システムを独自開発。顔分析から一致率計算、勤怠情報の掃き出し・管理までを1人称で行う。',
					responsive: '設計、コーディング、テスト',
					lang: 'VB.net、Python、PostgreSQL'
				},
				{
					date: '2021年5月～2021年7月',
					title: '研修会管理システムの開発',
					content: '内部・外部で受けた研修を個人で入力できるよう開発。また、役職者が統計・管理するシステム、及び人事資料として使用するために可視化（グラフ・リスト）できるよう組み込み。',
					responsive: '設計、コーディング、テスト、運営/保守',
					lang: 'VB.net、PostgreSQL'
				},
				{
					date: '2022年1月～2022年3月',
					title: '学生服サイト新規開発',
					content: 'シンプルかつモダンなデザインのご要望を重視したWebサイトを作成。',
					responsive: '設計、デザイン、コーディング、テスト、運営/保守',
					lang: 'HTML/CSS、Vue.js、Vueify、GitHub'
				},
			],
		}),
		/*
		mounted() {
			//ボタンがクリックされたら
			$(".openbtn1").click(function () {
				$(this).toggleClass('active');	//ボタン自身に activeクラスを付与し
				$("#g-nav").toggleClass('panelactive');	//ナビゲーションにpanelactiveクラスを付与
			});
			//ナビゲーションのリンクがクリックされたら
			$("#g-nav a").click(function () {
				$(".openbtn1").removeClass('active');	//ボタンの activeクラスを除去し
				$("#g-nav").removeClass('panelactive');	//ナビゲーションのpanelactiveクラスも除去
			});
		}
		*/
	}
</script>
<style lang="scss" scoped>
	@charset "utf-8";

	/* Vuetify設定 */
	.text-h6 {
		font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
		margin: 0px;
	}
	.col-category {
		padding: 12px 12px 2px;
	}


	/* SkillWorks全体 */
	.wr-content {
		background: -moz-linear-gradient(top, #C7D0D8, #3A75A0);
		background: -webkit-linear-gradient(top, #C7D0D8, #3A75A0);
		background: linear-gradient(to bottom, #C7D0D8, #3A75A0);
		padding: 64px 16px;
		min-height: 90vh;
	}

	.wr-container {
		max-width: 1280px;
		margin: 0 auto;
	}

	.wr-container-row {
		max-width: 960px;
		margin: 0 auto;
	}

	.mgl-1 {
		margin-right: 28px;
	}

	h2, h3, strong {
		font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
	}

	h3 {
		font-size: 28px;
	}
</style>