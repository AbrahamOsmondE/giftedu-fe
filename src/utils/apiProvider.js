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

async function getDonateeDetails(id) {
    const response = await axios.get(`${config.backendUrl}/donee_api/${id}`)
    return response;
}

async function getAllChildren() {
    const response = await axios.get(`${config.backendUrl}/child_api`)
    return response;
}

async function postChild(name,description, photoBase64, cost, donee_id){
    const response = await axios.post(`${config.backendUrl}/child_api`, {
        name: name,
        description: description,
        photo: photoBase64,
        subscription_cost: cost,
        donee_id: donee_id
    })
    return response;
}

async function getSubscription(donator_id) {
    const response = await axios.get(`${config.backendUrl}/subscription_api/donator/${donator_id}`)
    return response;
}

async function postUpdate(title, text, child_id) {
    const response = await axios.post(`${config.backendUrl}/post_api`, {
        title: title,
        text: text,
        child_id: child_id,
    })
    return response;
}

async function getChild(child_id) {
    const response = await axios.get(`${config.backendUrl}/child_api/${child_id}`)
    return response;
}

async function postSubscription(donator_id, child_id) {
    const response = await axios.post(`${config.backendUrl}/subscription_api`, {
        donator_id: donator_id,
        child_id: child_id,
    })
    return response;
}

export default {
    getDonatorFromName,
    postDonator,
    getDonateeFromName,
    postDonatee,
    getDonateeDetails,
    getAllChildren,
    postChild,
    getSubscription,
    postUpdate,
    getChild,
    postSubscription,
}