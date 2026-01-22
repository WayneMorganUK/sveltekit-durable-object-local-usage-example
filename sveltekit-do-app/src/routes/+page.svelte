<script>
	import { getKvValues } from './getKvValues.remote'
	const data= await getKvValues()
</script>

<h2>{data.posts.text}</h2>
<h3>KV value before Durable Object call is: <code style="color:#bada55">{data.posts.kv_value_before}</code></h3>
<h3>KV value AFTER Durable Object call is: <code style="color:#bada55">{data.posts.kv_value_after}</code></h3>