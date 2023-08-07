<template>
  <div>
    <h3>我是{{ myname }}</h3>
  </div>
</template>

<script>
export default {
  name: 'Home',

  data() {
    return {
      myname: 'Home'
    };
  },

};
</script>

<style lang="scss" scoped></style>