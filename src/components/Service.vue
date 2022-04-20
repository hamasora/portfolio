<template>
	<section class="justify-center sv-content" id="service">
		<div class="sv-container-row">
			<h2 class="mt-4 mb-10">Service</h2>
			<v-row
				justify="center"
				align-content="center"
			>
				<v-col
					v-for="menu in menus"
					:key="menu.title"
					cols="12"
					sm="4"
				>
					<v-card>
						<v-img
							:src=menu.src
							class="align-end"
							height="260"
						>
							<v-card-title class="white--text">{{ menu.title }}</v-card-title>
						</v-img>
						<v-card-actions>
							<v-btn
								text
								color="teal accent-4"
								@click="menu.show = !menu.show"
							>{{ menu.show ? '閉じる ↑' : '詳細 ↓'}}</v-btn>
						</v-card-actions>

						<v-expand-transition>
							<div v-show="menu.show">
								<v-divider class="mt-2"></v-divider>
								<v-card-text>
									<p>{{ menu.subtext }}</p>
									<v-btn
										color="teal accent-4"
										text
									>
										{{ menu.lang }}
									</v-btn>
								</v-card-text>
							</div>
						</v-expand-transition>
					</v-card>
				</v-col>
			</v-row>
		</div>
	</section>
</template>
<script>
	export default {
		name: 'Service',

		data: () => ({
			menus: [
				{
					title: 'デスクトップアプリケーション開発',
					src: require('../assets/service/windows-gui.jpg'),
					subtext: 'Windows上で動作する業務・管理システム開発が可能です。お客様の要望を最大限取り入れた、唯一無二のオリジナルシステムを開発致します。',
					lang: 'VB.net',
					show: false,
				},
				{
					title: '業務効率化ツール',
					src: require('../assets/service/business-opti.jpg'),
					subtext: 'OSに依存しないマルチな業務効率化ツール開発が可能です。毎日毎月繰り返す単純且つ手間な作業の改善策・ツール開発をご提案致します。',
					lang: 'VB.net、 Python',
					show: false,
				},
				{
					title: 'Webサービス',
					src: require('../assets/service/web-service.jpg'),
					subtext: '会社/個人HP、またはWebアプリの開発も可能です。デザインから構成、コーディングまで全て承っております。',
					lang: 'HTML/CSS、 Vue.js、 Vuetify',
					show: false,
				},
			],
		}),
	}
</script>
<style lang="scss" scoped>
	@charset "utf-8";

	.v-card--reveal {
		bottom: 0;
		opacity: 1 !important;
		position: absolute;
		width: 100%;
	}

	.sv-content {
		padding: 64px 32px;
		min-height: 80vh;
		background: -moz-linear-gradient(top, #C7D0D8, #3A75A0);
		background: -webkit-linear-gradient(top, #C7D0D8, #3A75A0);
		background: linear-gradient(to bottom, #C7D0D8, #3A75A0);
	}

	.sv-container-row {
		max-width: 1280px;
		margin: 0 auto;
	}
</style>