import { UserAuth } from "../context/AuthContext"

const Navbar = () => {
  const { currentUser, logout } = UserAuth();

  const handleLogout = async () => {
    try {
      await logout();
    } catch(error) {
      console.log(error)
    }
  }

  return (
    <div className="navbar fixed z-10 bg-neutral text-neutral-content">
      <div className="containerWrap flex justify-between">
        <a className="btn btn-ghost normal-case text-xl">唤醒神兽 - 神兽论坛</a>
        {currentUser ? <button onClick={handleLogout}>登出账号</button> : ""}
      </div>
    </div>
  )
}

export default Navbar