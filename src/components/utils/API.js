import axios from "axios";

// Export an object containing methods we'll use for accessing the Dog.Ceo API

export default {
  getClasses: function() {
    return axios.get("https://www.dnd5eapi.co/api/classes");

}
}
