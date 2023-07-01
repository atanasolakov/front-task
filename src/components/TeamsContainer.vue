<template>
  <div class="container">
    <TeamsNavigation :name="'RichyRich'"/>
    <HeroAvatar :level="5" />
    <SearchInput />
    <MyTeams />
  </div>
</template>

<script>
import TeamsNavigation from "@/components/TeamsNavigation.vue";
import HeroAvatar from "@/components/HeroAvatar.vue";
import SearchInput from "@/components/SearchInput.vue";
import MyTeams from "@/components/MyTeams.vue"

export default {
  name: 'TeamsContainer',
  components: {SearchInput, HeroAvatar, TeamsNavigation, MyTeams},
  props: {

  },
  data() {
    return {
    };
  },
}
</script>

<style lang="scss" scoped>
@import "../styles/variables";

.container {
  height: fit-content  ;
  width: 600px;
  border: 1px solid $border-color;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: $overflow-color;
  @media (max-width: 768px) {
    width: 80%;
    height: 60%;
  }
  @media (max-width: 1280px) {
    top: 50%;
  }
  @media (max-width: 1100px) {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(0.8);
    transform-origin: center;
  }
  @media (max-width: 768px) {
    position: absolute;
    top: 20%;
    left: 50%;
    transform: translate(-50%, -50%) scale(0.5);
    transform-origin: center;
    width: 60%;
  }
  @media (max-width: 480px) {
    position: absolute;
    top: 20%;
    left: 50%;
    transform: translate(-50%, -50%) scale(0.3);
    transform-origin: center;
  }
  @media (max-width: 384px) {
    position: absolute;
    top: 20%;
    left: 50%;
    transform: translate(-50%, -50%) scale(0.25);
    transform-origin: center;
  }
}
</style>
