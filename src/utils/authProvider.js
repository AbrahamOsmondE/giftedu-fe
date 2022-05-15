function setUsername(username) {
    localStorage.setItem("username", username)
}

function setPassword(pass) {
    localStorage.setItem("password", pass)
}

function setDonatorId(donatorId) {
    localStorage.setItem("donatorId", donatorId)
}

function setDonateeId(donateeId) {
    localStorage.setItem("donateeId", donateeId)
}

function removeUsername() {
    localStorage.removeItem("username")
}

function removePassword() {
    localStorage.removeItem("password")
}

function removeDonatorId() {
    localStorage.removeItem("donatorId")
}

function removeDonateeId() {
    localStorage.removeItem("donateeId")
}

function getUsername() {
    return localStorage.getItem("username")
}

function getDonatorId() {
    return localStorage.getItem("donatorId")
}

function getDonateeId() {
    return localStorage.getItem("donateeId")
}

export default {
    setUsername,
    setPassword,
    setDonatorId,
    setDonateeId,
    removeUsername,
    removePassword,
    removeDonatorId,
    removeDonateeId,
    getUsername,
    getDonatorId,
    getDonateeId,
}