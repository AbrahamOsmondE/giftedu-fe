import axios from 'axios';
import { config } from '../config'

async function getDonatorFromName(username) {
    const response = await axios.get(`${config.backendUrl}/donator_api/get_id/${username}`)
    return response;
}

async function postDonator(username, phoneNumber, photoBase64) {
    const response = await axios.post(`${config.backendUrl}/donator_api`, {
        name: username,
        phone_number: phoneNumber,
        photo: photoBase64
    })
    return response;
}

async function getDonateeFromName(username) {
    const response = await axios.get(`${config.backendUrl}/donee_api/get_id/${username}`)
    return response;
}

async function postDonatee(username, phoneNumber, photoBase64, description) {
    const response = await axios.post(`${config.backendUrl}/donee_api`, {
        name: username,
        phone_number: phoneNumber,
        photo: photoBase64,
        description: description,
    })
    return response;
}

async function getAllChildren() {
    const response = await axios.get(`${config.backendUrl}/child_api`)
    return response;
}

export default {
    getDonatorFromName,
    postDonator,
    getDonateeFromName,
    postDonatee,
    getAllChildren,
}