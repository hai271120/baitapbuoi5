import {getitemlocalStorage} from '../utils.js'
class CreatePost extends HTMLElement{
    constructor() {
      super();
      this._shadowDom = this.attachShadow({ mode: 'open' })
    }
    connectedCallback(){
      this._shadowDom.innerHTML =`
      <style>
          ${style}
      </style>
      <form id='create-post'>
          <textarea id='content' rows='4'></textarea>
          <button>Post</button>
      </form>
      `
      const createPost = this._shadowDom.getElementById('create-post')
  
      createPost.addEventListener('submit', async (e) =>{
          e.preventDefault()
          
          let content = this._shadowDom.getElementById('content').value;

          if (content){
              const post = {
                  createdAt: new Date(),
                  content: content,
                  createdName: getItemLocalStorage('currentUser').name,
                  isShow: true,
              }

              firebase.firestore().collection('posts').add(post);
              alert('Posted thang cong !')
              this._shadowDom.querySelector('#content').value=''
          } 
      }) 
      
  }
}

const style = `
form{
    margin-top: 20px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
}
#content{
    width: 100vw;
    height: 50vh;
    margin-bottom: 10px;
}
button {
    height: 5vh;
    width: 50vw;
    border: none;
    background-color: yellow;
    color: #544a4a;
}
button:hover{
    background-color: #dbcab4;
}
`
window.customElements.define('create-post', CreatePost)
  