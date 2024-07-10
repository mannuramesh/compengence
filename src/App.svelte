
<script lang="ts">
  import { Router, Route, Link } from "svelte-routing";
  import Home from "../src/pages/+Home.svelte";
  import Post from "../src/routes/post/[id].svelte";
</script>

<Router>
  <main>
    <Route path="/" component={Home} />
    <Route path="/post/:id" component={Post} />
  </main>
</Router>