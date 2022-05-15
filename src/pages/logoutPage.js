export default function LogoutPage() {
    // todo: remove session instead if later on changed to session based auth
    localStorage.removeItem("username")
    localStorage.removeItem("password")
    window.location.href = "/"
}
