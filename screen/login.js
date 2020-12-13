const style = `
  .login-container {
    width: 100vw;
    height: 100vh;
    background: url('data:image/jpeg;base64,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');
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    justify-content: flex-end;
  }
  #login-form{
    width: 30%;
    background: #fff;
    height: 100vh;
    padding: 0px 20px;
  }
  h1{
    text-align: center;
    color: #333;
  }
  button {
    background: #1565C0;
    color: #fff;
    padding: 10px 15px;
    border-radius: 5px;
  }
`
import { redirect } from '../index.js'
import { getDataFromDoc, getDataFromDocs ,savetolocalStorage} from '../utils.js'
class loginSceen extends HTMLElement{
  constructor() {
    super()
    this._shadowRoot = this.attachShadow({mode: 'open'})
  }
  connectedCallback() {
    this._shadowRoot.innerHTML = `
      <style>
        ${style}
      </style>
      <div class="login-container">
        <form id="login-form">
          <h1>CI Project</h1>
          <input-wrapper id="email" type="text" placeholder="Email"></input-wrapper>
          <input-wrapper id="password" type="password" placeholder="Password"></input-wrapper>
          <button>Login</button>
          <a id="redirect">Don't have an account ? login</a>
        </form>
      </div>
    `
    const loginForm = this._shadowRoot.getElementById('login-form')
    loginForm.addEventListener('submit', async(e) => {
      e.preventDefault()
      const email = this._shadowRoot.getElementById('email').value
      const password = this._shadowRoot.getElementById('password').value
      let isValid = true
      if (email.trim() === '') {
        isValid = false
        this.setError('email', 'Please input email')
      }
      if (password.trim() === '') {
        isValid = false
        this.setError('password', 'Please input password')
      }
      if (!isValid) {
        return
      }
      const user = await firebase.firestore()
      .collection('users')
      .where('email', '==', email)
      .where('password', '==', CryptoJS.MD5(password).toString())
      .get()
      if(user.empty) {
        alert('Sai email/ password')
      } else {
        savetolocalStorage('currentUser',getDataFromDocs(user)[0])
        redirect('story')
  
      }
    })
    this._shadowRoot.getElementById('redirect')
    .addEventListener('click', () => {
      redirect('register')
    })
  }
  setError(id, message) {
    this._shadowRoot.getElementById(id)
    .setAttribute('error', message)
  }
}
window.customElements.define('login-screen', loginSceen)
