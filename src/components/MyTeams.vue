<template>
  <div class="my-teams-container">
    <h1>My teams</h1>
    <div v-for="team in followedTeams" :key="team.id">
      <div class="team">
        <img src="../assets/team-placeholder.png" class="team-symbol" />
        <span class="team-name"> {{team.name}} </span>
      </div>
    </div>
    <textarea v-show="followedTeams.length === 0" type="text"
     disabled class="custom-text-area" placeholder="You aren't following any teams yet."/>
  </div>
</template>

<script>

import {mapGetters} from "vuex";

export default {
  name: 'TeamsContainer',
  computed: mapGetters(["followedTeams"]),
}

</script>

<style lang="scss" scoped>

@import "../styles/variables";

.my-teams-container {
  border-top: 10px solid $border-color;
  background-color: $background-color;
  padding-bottom: 10px;
  overflow: scroll;
  height: 180px;
  @media (max-width: 960px) {
    height: 100px;
  }
}

.custom-text-area::placeholder {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  font-size: 12px;
  width: 100%;
  color: $static-color;
}

.team-symbol {
  padding: 5px;
  width: 28px;
  height: 28px;
  border-radius: 20px;
  background-color: $input-background;
}

.team {
  display: flex;
  margin-right: auto;
  align-items: center;
  padding-left: 10px;
}
.team-name {
  padding-left: 10px;
}

</style>
