<script>
import firebase from 'firebase'
import 'firebase/auth'
import 'firebase/firestore'

var firebaseConfig = {
  apiKey: "AIzaSyAQTLOSJ9z72SnWqx-4zOoC2faT4to1Qxw",
  authDomain: "vue-blog-authentication.firebaseapp.com",
  projectId: "vue-blog-authentication",
  storageBucket: "vue-blog-authentication.appspot.com",
  messagingSenderId: "844968348016",
  appId: "1:844968348016:web:1ff0665fd2cf988e53a7b5"
};
firebase.initializeApp(firebaseConfig)

const db = firebase.firestore()
const auth = firebase.auth()
//Post

const post = db.collection('post')
export {
    db,
    auth,
    post
}
</script>