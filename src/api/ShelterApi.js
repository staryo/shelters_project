import axios from "axios";

export default class ShelterApi {
    restURL = "https://retoolapi.dev/HQMl0a/shelters";

    async getShelters(callback) {
        const sheltersArray = await axios.get(
            `${this.restURL}`
        );
        return callback(sheltersArray.data);
    }

}