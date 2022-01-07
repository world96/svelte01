<script>
	import Nested from "./Nested.svelte";
	export let name;
	let count = 5;
	function changecount() {
		count = 6;
	}
	changecount();
	function handleClick() {
		count += 1;
	}
	let string = `here's some <strong>HTML!!!</strong>`;

	let src =
		"https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg";
	let name1 = "错误显示";

	// the `$:` means 're-run whenever these values change'
	$: doubled = count * 2;
	$: quadrupled = doubled * 2;
	$: if (count >= 10) {
		//alert(`count is dangerously high!`);
		count = 1;
	}
</script>

<main>
	<!-- INTRODUCTION -->
	<h1>Hello {name}!</h1>
	<h2>{count}</h2>
	<p>{@html string}</p>
	<!-- src={src} -->
	<img width="100" {src} alt="{name1} dancing" />
	<Nested />

	<!-- REACTIVITY -->
	<button on:click={handleClick}>
		Clicked {count}
		{count === 1 ? "time" : "times"}
	</button>
	<p>{count} * 2 = {doubled}</p>
	<p>{doubled} * 2 = {quadrupled}</p>
	<h1>牛逼</h1>
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>
