import { action, makeObservable, observable, runInAction } from "mobx";
import { fakeServer } from "../views/screens/fakeServer";
class HomeStore {
  isfetch = true;
  data = [];
  constructor() {
    makeObservable(this, {
      data: observable,

      //action
      fetchData: action,
    });
  }
  fetchData = async () => {
    if (this.isfetch) {
      try {
        this.isfetch = false;
        data = await fakeServer(this.data.length);
        runInAction(() => {
          this.data = [...this.data, ...data];
        });
        this.isfetch = true;
      } catch (error) {
        console.log(error);
      }
    }
  };
}

export default HomeStore;
