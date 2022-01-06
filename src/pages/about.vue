<template>
  <div>
    <App/>
    <h1>Home</h1>
    <router-link to="/again">again</router-link>

  </div>
</template>
<route>
{
  meta: {
    layout: "second"
  }
}
</route>
<script>
export default {
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped></style>
