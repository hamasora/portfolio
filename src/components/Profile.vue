<template>
	<section class="justify-center pf-content" id="profile">
		<div class="pf-container-row">
			<h2 class="mt-4">Profile</h2>
			<v-card
				elevation=0
				max-height="600"
				class="pf-card"
			>
				<v-row
					justify="center"
					align-content="center"
				>
					<v-col cols="12" md="4">
						<v-avatar
							size="260"
							class="profile"
						>
							<v-img src="../../src/assets/j-lifestyle.png"></v-img>
						</v-avatar>
					</v-col>
					<v-col cols="12" md="6">
						<v-card-title class="mt-8">濱砂 空</v-card-title>
						<v-card-subtitle>Sora Hamasuna</v-card-subtitle>
						<v-divider></v-divider>
						<v-card-text>宮崎県出身兼在住のプログラマー。<br>
							お客様の要望を最優先に取り入れた、唯一無二の完全オリジナルシステム開発が最大の特徴。本業で培ったWindowsデスクトップアプリケーション開発を軸に、お客様の業務効率化を改善・ご提案致します。
						</v-card-text>
					</v-col>
				</v-row>
			</v-card>
		</div>
	</section>
</template>
<script>
	export default {
		name: 'Profile',

		data: () => ({
			
		}),
	}
</script>
<style lang="scss" scoped>
	@charset "utf-8";

	.pf-content {
		min-height: 80vh;
		padding: 64px 32px;
	}

	.pf-container-row {
		max-width: 1280px;
		margin: 0 auto;
	}

	.pf-card {
		margin-top: 128px;
	}
</style>