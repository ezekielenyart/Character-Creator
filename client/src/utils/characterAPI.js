import axios from "axios";

export default {
    getCharacters: function(userId){
        return axios.get("/api/getCharacters/"+userId)
        
    },

    getCharacter: function(id){
        return axios.get("api/character/"+id)
    },

    createCharacter: function(id, data){
        return axios.post("api/createCharacter", {
            userId: id,
            characterData: data
        })
    },

    updateCharacter: function(id, data){
        return axios.put("/api/updateCharacter", {
            id: id,
            characterData: data
        })

    },

    deleteCharacter: function(id){
        return axios.delete("/api/deleteCharacter/"+id)
    }

}