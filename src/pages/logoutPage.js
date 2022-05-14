export default function LogoutPage() {
    // todo: remove session instead if later on changed to session based auth
    sessionStorage.removeItem("email")
    sessionStorage.removeItem("password")
    window.location.href = "/"
}
