<template>
  <div class="avatar-container">
    <img src="../assets/avatar.png" width="60" height="60">
    <div class="level-text">Level {{level}} </div>
    <div class="tabs">
      <li @click="toggleTab(1)" :class="activeTab === 1 ? 'active' : ''">My teams</li>
      <li @click="toggleTab(2)" :class="activeTab === 2 ? 'active' : ''">About</li>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HeroAvatar',
  props: {
    level: Number,
  },
  data() {
    return {
      activeTab: 1,
    }
  },
  methods: {
    toggleTab(tab) {
      this.activeTab = tab;
    },
  }
}
</script>

<style lang="scss" scoped >

@import "../styles/variables";

.avatar-container {
  height: 150px;
  background-color: $primary-color;
  border-bottom: 2px solid $border-color;
  align-items: center;
  display: flex;
  justify-content: center;
  flex-direction: column;
}

.level-text {
  color: $background-color;
  font-size: 10px;
  border: 1px solid $border-color-secondary;
  border-radius: 20px;
  padding: 3px;
  background: $border-color-secondary;
}

.tabs {
  height: 39px;
  background-color: $primary-color;
  display: flex;
  justify-content: center;
  list-style-type: none;
  gap: 10%;
  align-items: center;
  width: 100%;
}

.active {
  color: #FFFFFF;
  border-bottom: 3px solid $secondary-color;
}

</style>
