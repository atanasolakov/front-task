<template>
  <div>
   <div class="nav">
     <img src="../assets/arrow-left.svg" class="img-arrow"  width="16px" height="15px" />
     <img src="../assets/logo.svg" class="img-logo" width="32.72px" height="18.04px" />
     <span class="name">RichyRich</span>
     <img src="../assets/notification.svg" width="20" height="20" class="notification">
   </div>
   <div class="avatar-container">
     <div class="large-devices">
     <img src="../assets/avatar.png" width="60" height="60">
       <span class="name-large-devices">RichyRich</span>
     </div>
     <div class="level-text">Level {{level}}</div>
     <div class="tabs">
      <li @click="toggleTab(1)" :class="activeTab === 1 ? 'active' : ''">My teams</li>
      <li @click="toggleTab(2)" :class="activeTab === 2 ? 'active' : ''">About</li>
    </div>
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

.nav {
  display: flex;
  height: 55px;
  border-bottom: 1px solid $border-color;
  align-items: center;
  background-color: $text-color;
  position: relative;
  @media (min-width: $breakpoint-mobile) {
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
    border-bottom: none;
    background-color: $primary-color;
    display: none;
  }
}

.name {
  color: $background-color ;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  font-family: "Montserrat", sans-serif;
  font-weight: bold;
  font-style: italic;
}

.notification {
  margin-left: auto;
  padding-right: 1rem;
}

.avatar-container {
  height: 150px;
  background-color: $primary-color;
  border-bottom: 1px solid $border-color;
  align-items: center;
  display: flex;
  justify-content: center;
  flex-direction: column;
  @media (min-width: $breakpoint-mobile) {
    height: 200px;
    border-radius: 10px 10px 0 0;
    .large-devices {
      display: flex;
      margin-right: auto;
      padding-left: 45px;
      font-family: "Montserrat", sans-serif;
      font-weight: bold;
      font-style: italic;
    }
    .name-large-devices {
      align-self: center;
      padding-left: 5px;
      color: $background-color ;
    }
    .level-text {
      margin-right: auto;
      padding-left: 55px;
    }
    .tabs {
      align-items: end;
    }
  }
  @media (max-width: 767px) {
    .name-large-devices {
      display: none;
    }
  }
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
