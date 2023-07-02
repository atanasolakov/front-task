<template>
  <div class="search-container">
    <div class="input-container">
    <h1>Search Teams</h1>
    <input type="text" class="custom-input" placeholder="Search for a team" v-model="searchText"
           @keydown.up.prevent ='moveFocusUp'
           @keydown.down.prevent ='moveFocusDown'/>
    </div>
    <div>
      <div  v-show="searchText !== '' && filtered.length === 0" class="no-results">
        <img  src="../assets/no-results.svg"/>
        <p>No Teams Found</p>
      </div>
      <div  class="overflow" :style="searchText !== '' && filtered.length === 0 ? 'display: none' : ''">
      <div v-for="team in filtered"
            :key="team.id"
            tabindex="-1"
            :class="{ highlighted: team.id === focusedItemId }"
            @mouseover="handleMouseOver(team.id)">
        <div class="team-container">
          <img src="../assets/team-placeholder.png" class="team-symbol" />
          <div class="info-container">
            <div class="leagues">
              <div>{{team.leagues[0]}},</div>
              <div>{{team.leagues[1]}}</div>
            </div>
            <div class="abb">
              <div class="name">{{team.name}}</div>
              <img class="stadium-image" src="../assets/stadium.svg">
              <div class="stadium">{{team.stadium}}</div>
            </div>
          </div>
          <button @click="toggleFollow(team.id)" :class="{ 'followed': isFollowed(team.id) }">
            {{ isFollowed(team.id) ? 'Following' : 'Follow' }}
          </button>
        </div>
      </div>
      </div>
    </div>
  </div>
</template>

<script>

import axios from "axios";
import { mapGetters } from 'vuex';
export default {
  name: 'SearchInput',
  data() {
    return {
      activeTab: 1,
      teamsList: [],
      searchText: '',
      focusedItemId: null,
    }

  },
  computed: {
    ...mapGetters(['followedTeams']),
    filtered() {
      if (this.searchText === '') {
        return [];
      } else {
        const searchLowerCase = this.searchText.toLowerCase();
        return this.teamsList.filter(team => {
          const nameMatches = team.name.toLowerCase().includes(searchLowerCase);
          const stadiumMatches = team.stadium.toLowerCase().includes(searchLowerCase);
          const leagueMatches = team.leagues.some(league => league.toLowerCase().includes(searchLowerCase));
          return nameMatches || stadiumMatches || leagueMatches;
        });
      }
    },
  },

  mounted() {
    this.fetchData();
  },
  methods: {
    handleMouseOver(teamId) {
      this.focusedItemId = teamId;
    },
    fetchData() {
      axios.get('https://run.mocky.io/v3/ef80523b-0474-4104-8fe6-fe92f8360b28')
          .then(response => {
            this.teamsList = response.data;
            this.$store.dispatch('setTeams', this.teamsList);
          })
          .catch(error => {
            console.error(error);
          });
    },
    toggleFollow(teamId) {
      this.$store.dispatch('followTeam', teamId);
    },
    moveFocusUp() {
      const currentIndex = this.filtered.findIndex(team => team.id === this.focusedItemId);
      if (currentIndex > 0) {
        this.focusedItemId = this.filtered[currentIndex - 1].id;
      }
    },
    moveFocusDown() {
      const currentIndex = this.filtered.findIndex(team => team.id === this.focusedItemId);
      if (currentIndex < this.filtered.length - 1) {
        this.focusedItemId = this.filtered[currentIndex + 1].id;
      }
    },
    isFollowed(teamId) {
      return this.followedTeams.some(team => team.id === teamId);
    },
  },
}

</script>


<style lang="scss" scoped>

@import "../styles/variables";

.search-container {
  border-top: 0.625rem solid $border-color;
  height: fit-content;
  background-color: $background-color;
}

.input-container {
  padding-bottom: 1.25rem;
}

.team-container {
  height: 3.125rem;
  display: flex;
  padding-left: 0.625rem;
  -moz-text-size-adjust: auto;
}

.team-symbol {
  padding: 0.3125rem;
  width: 1.75rem;
  height: 1.75rem;
  border-radius: 1.25rem;
  background-color: $input-background;
}

.info-container {
  padding-top: 0.3125rem;
  padding-left: 0.625rem;
  display: flex;
  flex-direction: column;
}

.leagues {
  display: flex;
  font-size: 0.6875rem;
  color: $static-color;
  gap: 0.625rem;
  @media (max-width: $breakpoint-small) {
  font-size: 0.5rem ;
}
}

.abb {
  display: flex;
  gap: 0.3125rem;
}

.stadium {
  font-size: 0.6875rem;
  padding-top: 0.3125rem;
  padding-left: 0.3125rem;
  @media (max-width: $breakpoint-small) {
    font-size: 0.5rem ;
  }
}

.name {
  font-size: 0.875rem;
  @media (max-width: $breakpoint-small) {
    font-size: 0.5rem ;
  }
}

.highlighted {
  background-color: $input-background;
}

.followed {
  background-color: $background-color;
  width: 6.625rem;
  color: $secondary-color;
}

.no-results {
  overflow: hidden;
  padding-top: 1.25rem;
  padding-bottom: 1.25rem;
  @media (max-width: $breakpoint-mobile) {
    padding-top: 0;
    padding-bottom: 0;
  }
}
.stadium-image {
  @media (max-width: $breakpoint-small) {
    font-size: 0.5rem ;
  }
}
</style>
