import authProvider from "../utils/authProvider";

export default function LogoutPage() {
    // todo: remove session instead if later on changed to session based auth
    authProvider.removeUsername()
    authProvider.removePassword()
    authProvider.removeDonatorId()
    authProvider.removeDonateeId()
    window.location.href = "/"
}
