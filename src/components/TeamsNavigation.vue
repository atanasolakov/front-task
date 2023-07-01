<template>
  <div class="nav">
    <img src="../assets/arrow-left.svg"  width="16px" height="15px" />
    <img src="../assets/logo.svg"  width="32.72px" height="18.04px" />
    <span class="name">{{name}}</span>
    <img src="../assets/notification.svg" width="20" height="20" class="notification">
  </div>
</template>

<script>
export default {
  name: 'TeamsNavigation',
  props: {
    name: String
  },
  data() {
    return {
    };
  }
}
</script>

<style lang="scss" scoped>

@import "../styles/variables";


.nav {
  display: flex;
  height: 55px;
  border-bottom: 1px solid $border-color;
  align-items: center;
  background-color: $text-color;
  position: relative;
}

.name {
  color: $background-color ;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}

.notification {
  margin-left: auto;
  padding-right: 1rem;
}
</style>
