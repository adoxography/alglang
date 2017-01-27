<template>
	<div>
		<div class="box">
			<label class="label">Sources</label>
			<div class="box">
				<div class="control is-grouped">
					<alg-old-source @input="add($event)"></alg-old-source>
					<a class="button" @click="open">Add a new source</a>
				</div>
			</div>

			<ul>
				<div class="columns" v-for="(source, index) in sources">
					<input type="hidden" v-model="source.id" :name="'sources['+index+'][id]'" />
					<div class="column is-one-quarter">
						<p>{{ index + 1 }}. {{ source.short }}</p>
					</div>
					<div class="column is-8">
						<p class="control">
							<input type="text" class="input is-expanded" :name="'sources['+index+'][extraInfo]'" v-model="source.extraInfo" placeholder="chapter, page number, etc..." />
						</p>
					</div>
					<div class="column is-1">
						<a class="button" @click="remove(index)">Remove</a>
					</div>
				</div>
			</ul>
		</div>

		<alg-new-source v-show="showModal" @close="close" @input="add($event)"></alg-new-source>
	</div>
</template>

<script>
	export default {
		props: ['value'],

		data() {
			return {
				showModal: false,
				sources: [],
				initSources: []
			};
		},

		methods: {
			open() {
				this.showModal = true;
			},

			close() {
				this.showModal = false;
			},

			add(data) {
				this.sources.push({ short: data.short, id: data.id, extraInfo: "" });
			},

			remove(index) {
				this.sources.splice(index, 1);
			}
		},

		created() {
			if(this.value) {
				let sources = JSON.parse(this.value);

				sources.forEach(source => {
					this.sources.push({ short: source.short, id: source.id, extraInfo: source.pivot.extraInfo });
				});
			}
		}
	}
</script>