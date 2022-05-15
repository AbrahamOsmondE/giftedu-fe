import axios, { AxiosResponse } from 'axios';
import { config } from '../config'

async function getDonatorFromName(username){
    const response = await axios.get(`${config.backendUrl}/donator_api/get_id/${username}`)
    return response;
}

async function getDonateeFromName(username){
    const response = await axios.get(`${config.backendUrl}/donee_api/get_id/${username}`)
    return response;
}

export default {
    getDonatorFromName,
    getDonateeFromName,
}