<template>
  <div>
    <h3>我是{{ myname }}</h3>
  </div>
</template>

<script>
export default {
  name: 'User',

  data() {
    return {
      myname: 'User'
    };
  },

};
</script>

<style lang="scss" scoped></style>