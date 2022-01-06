<template>
  <TheNav />
  <div>
    <img src="@/assets/logo.png" alt="why are you running" />
    <h1>Welcome to the home view</h1>
    <router-link to="/about">about</router-link>
    <TheFooter />
  </div>
</template>

<script>
export default {
  setup() {}
};
</script>
<style lang="scss" scoped></style>
