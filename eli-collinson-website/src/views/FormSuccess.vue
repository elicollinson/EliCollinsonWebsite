<template>
  <div>
    <h1>Thank you for reaching out. I will follow up with you shortly!</h1>
    <router-link to="/">
      <button class="btn btn-secondary">Back to home</button>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'FormSuccess'
}
</script>

<style scoped>
h1 {
  margin-bottom: 2rem;
}

</style>
