import { makeObservable, observable } from 'mobx';

class AuthService {

  authToken = null
  isLoggedIn = false

  constructor() {
    const authToken = localStorage.getItem("authToken")
    makeObservable(this, {
      authToken: observable,
      isLoggedIn: observable
    })

    this.authToken = authToken
    this.isLoggedIn = !!authToken
  }

  setAuth(authToken) {
    this.authToken = authToken
    this.isLoggedIn = true
    localStorage.setItem("authToken", authToken)
    // set cookie or localStorage
  }

  clear(){
    this.authToken = null
    this.isLoggedIn = false
    localStorage.removeItem("authToken");
  }
};

export default new AuthService;

