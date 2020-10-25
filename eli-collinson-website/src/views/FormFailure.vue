<template>
  <div>
    <h1>Oops, looks like something went wrong!</h1>
    <router-link to="/contactMe/">
      <button class="btn btn-secondary">Back to form</button>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'FormFailure'

}
</script>

<style scoped>
h1 {
  margin-bottom: 2rem;
}
</style>
