import axios from "axios";

// Export an object containing methods we'll use for accessing the Dog.Ceo API

export default {
    getClasses: function () {
        return axios.get("https://www.dnd5eapi.co/api/classes");
    },

    getSpells: function () {
        return axios.get("https://www.dnd5eapi.co/api/spells");
    },

    getClass: function (className) {
        return axios.get("https://www.dnd5eapi.co/api/classes/" + className);
    },

    getRaces: function () {
        return axios.get("https://www.dnd5eapi.co/api/races/");
    },

    getRace: function (raceIndex) {
        return axios.get("https://www.dnd5eapi.co/api/races/" + raceIndex);
    }


}
