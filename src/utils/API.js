import axios from "axios"

export default {
    getRandomPerson: function () {
        return axios.get("https://randomuser.me/api/?inc=name,email,picture&results=50&nat=us")
    }
}