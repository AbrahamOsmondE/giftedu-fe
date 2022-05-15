import authProvider from "../utils/authProvider";

export default function LogoutPage() {
    // todo: remove session instead if later on changed to session based auth
    authProvider.removeUsername("username")
    authProvider.removePassword("password")
    window.location.href = "/"
}
