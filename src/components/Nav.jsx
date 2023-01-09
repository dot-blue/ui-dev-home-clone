import "../App.css";
import logo from "../assets/logo.svg";
function Nav() {
  return (
    <div className="nav-container">
      <a href="" className="logo-icon">
        <svg
          width="56"
          height="56"
          viewBox="0 0 56 56"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          id="logo-icon"
        >
          <circle cx="28" cy="28" r="28" fill="#231F20" fill-opacity="0.77" />
          <path
            d="M23.2081 41.396C21.1201 41.396 19.2721 40.952 17.6641 40.064C16.0801 39.176 14.8321 37.952 13.9201 36.392C13.0321 34.808 12.5881 33.008 12.5881 30.992V15.584H18.2761V31.316C18.2761 32.324 18.4921 33.2 18.9241 33.944C19.3561 34.688 19.9441 35.264 20.6881 35.672C21.4561 36.056 22.2961 36.248 23.2081 36.248C24.1681 36.248 25.0081 36.056 25.7281 35.672C26.4481 35.264 27.0121 34.7 27.4201 33.98C27.8521 33.236 28.0681 32.36 28.0681 31.352V15.584H33.7561V31.028C33.7561 33.044 33.3121 34.832 32.4241 36.392C31.5361 37.952 30.3001 39.176 28.7161 40.064C27.1321 40.952 25.2961 41.396 23.2081 41.396ZM37.7135 45.56L40.4875 40.392L42.2355 39.898C42.0328 40.278 41.8048 40.5947 41.5515 40.848C41.2981 41.076 41.0068 41.19 40.6775 41.19C39.9681 41.19 39.3095 40.886 38.7015 40.278C38.0935 39.67 37.7895 38.91 37.7895 37.998C37.7895 37.01 38.1188 36.1613 38.7775 35.452C39.4615 34.7427 40.2975 34.388 41.2855 34.388C42.2228 34.388 43.0335 34.7427 43.7175 35.452C44.4268 36.136 44.7815 36.9847 44.7815 37.998C44.7815 38.4033 44.6928 38.872 44.5155 39.404C44.3635 39.936 44.0595 40.6327 43.6035 41.494L40.5635 47.118L37.7135 45.56ZM41.2095 30.17C40.1961 30.17 39.3601 29.828 38.7015 29.144C38.0681 28.46 37.7515 27.6367 37.7515 26.674C37.7515 25.6607 38.0681 24.8247 38.7015 24.166C39.3601 23.482 40.1961 23.14 41.2095 23.14C42.1975 23.14 43.0081 23.482 43.6415 24.166C44.3001 24.8247 44.6295 25.6607 44.6295 26.674C44.6295 27.6367 44.3001 28.46 43.6415 29.144C43.0081 29.828 42.1975 30.17 41.2095 30.17Z"
            fill="#F9F4DA"
          />
        </svg>
      </a>
      <div className="login-btn">
        <a href="#">
          <span>Login</span>
        </a>
      </div>
    </div>
  );
}

export default Nav;