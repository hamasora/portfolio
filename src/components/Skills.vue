<template>
	<section class="justify-center sw-content" id="skills">
		<div class="sw-container-row">
			<h2 class="mt-4 mb-10">Skills</h2>
			<v-row
				align-content="center"
				v-for="item in items"
				:key="item.category"
			>
				<v-col cols="12" class="col-category">
					<h3>{{ item.category }}</h3>
				</v-col>
				<v-col
					v-for="skill in item.skills"
					:key="skill.lang"
					cols="12"
					md="4"
				>
					<v-card
						outlined
						elevation="0"
						class="pl-2 pr-2 text-center"
					>
						<p class="text-h6">{{ skill.lang }}</p>
						<v-row>
							<v-col cols="9">
								<v-progress-linear
									color="blue-grey"
									height="5"
									buffer-value="10"
									:value=skill.ratio
									stream
								></v-progress-linear>
							</v-col>
							<v-col cols="3">
								<strong>{{ skill.ratio }}%</strong>
							</v-col>
						</v-row>
					</v-card>
				</v-col>
			</v-row>
		</div>
	</section>
</template>
<script>
	//import $ from "jquery";
	
	export default {
		name: 'Skills',

		data: () => ({
			items: [
				{category: '習得言語',
					skills: [
						{lang: 'VB.net', ratio: '90'},
						{lang: 'HTML/CSS', ratio: '60'},
						{lang: 'Vue.js/Vuetify', ratio: '50'},
						{lang: 'Python', ratio: '50'},
						{lang: 'JavaScript', ratio: '30'},
						{lang: 'C#.net', ratio: '20'},
					]
				},
				{category: '使用DB',
					skills: [
						{lang: 'PostgreSQL', ratio: '90'},
						{lang: 'MySQL', ratio: '40'},
						{lang: 'SQLServer', ratio: '20'},
					]
				},
				{category: 'その他',
					skills: [
						{lang: 'Git/GitHub', ratio: '70'},
						{lang: 'Raspberry Pi', ratio: '50'},
						{lang: 'Linux', ratio: '50'},
					]
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

	.col-2 {
		padding-top: 8px;
	}
	.col-3 {
		padding-top: 8px;
	}
	.col-category {
		padding: 12px 12px 2px;
	}
	
	.v-progress-linear {
		margin: 4px 0px;
	}


	/* SkillWorks全体 */
	.sw-content {
		padding: 64px 16px;
		min-height: 80vh;
	}

	.sw-container-row {
		max-width: 1280px;
		margin: 0 auto;
	}

	h2, h3, strong {
		font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
	}

	h3 {
		font-size: 28px;
	}
</style>