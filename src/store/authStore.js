import { action, makeObservable, observable, runInAction } from "mobx";

class AuthStore {
  user = null;
  constructor() {
    makeObservable(this, {
      user: observable,
      //action
      setUser: action,
    });
  }

  setUser = (value) => {
    runInAction(() => {
      this.user = value
    });
  };
}

export default AuthStore;
