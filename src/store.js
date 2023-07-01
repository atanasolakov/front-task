import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        teams: []
    },
    mutations: {
        SET_TEAMS(state, teams) {
            state.teams = teams;
        },
        TOGGLE(state, teamId) {
            state.teams = state.teams.map(team => {
                if (team.id === teamId) {
                    return {
                        ...team,
                        is_following: !team.is_following
                    };
                }
                return team;
            });
        }
    },
    actions: {
        setTeams({ commit }, teams) {
            commit('SET_TEAMS', teams);
        },
        followTeam({ commit }, teamId) {
            commit('TOGGLE', teamId);
        }
    },
    getters: {
        followedTeams(state) {
            return state.teams.filter(team => team.is_following);
        }
    }
});

export default store;
