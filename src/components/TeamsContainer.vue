<template>
  <div class="container">
    <HeroAvatar :level="5" :name="RichyRich" />
    <SearchInput />
    <MyTeams />
  </div>
</template>

<script>
import HeroAvatar from "@/components/HeroAvatar.vue";
import SearchInput from "@/components/SearchInput.vue";
import MyTeams from "@/components/MyTeams.vue"

export default {
  name: 'TeamsContainer',
  components: { SearchInput, HeroAvatar, MyTeams},
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
  height: 551px  ;
  width: 600px;
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: $overflow-color;
  @media (min-width: $breakpoint-mobile) {
    border-radius: 10px;
  }
  @media (max-width: 1280px) {
    top: 40%;
    height: 500px;
    width: 560px;
    position: absolute;
    left: 50%;
    transform: translate(-50%, -50%) scale(0.8);
    transform-origin: center;
  }
  @media (max-width: 1100px) {
    top: 45%;
  }
  @media (max-width: $breakpoint-mobile) {
    position: absolute;
    top: 20%;
    left: 50%;
    transform: translate(-50%, -50%) scale(0.5);
    transform-origin: center;
    width: 60%;
    height: 60%;
  }
  @media (max-width: $breakpoint-small) {
    position: absolute;
    top: 20%;
    left: 50%;
    transform: translate(-50%, -50%) scale(0.3);
    transform-origin: center;
  }
  @media (max-width: 384px) {
    position: absolute;
    margin-top: 10px;
    height: 250px;
  }
}
</style>
