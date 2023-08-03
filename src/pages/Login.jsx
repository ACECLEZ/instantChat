import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

const Login = () => {
  const navigate = useNavigate();
  const { currentUser, signinWithGoogle } = UserAuth();

  const handleLogin = async () => {
    try {
      await signinWithGoogle();
    } catch(error) {
      console.log(error)
    }
  }

  useEffect(() => {
    if(currentUser) {
      navigate("/chat")
    }
  }, [currentUser]);

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">欢迎来到</h1>
          <h1 className="text-5xl font-bold">你问我答 - 神兽论坛 🎉🎉🎉</h1>
          <p className="py-6">
          加入论谈，发表你对神兽的独特见解，互相帮助解答疑问:D
          </p>
          <p className="py-6">
          🚨讨论区禁止任何挑衅、粗俗、煽动情绪的字眼和内容，也禁止恶意中伤、诽谤和人身攻击的言论。
          </p>
          <button onClick={handleLogin} className="btn">Google 登录</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
