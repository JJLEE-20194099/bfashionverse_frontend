import { action, makeObservable, observable, runInAction } from "mobx";
import { postRequest, postRequestJson } from "../hooks/api";

class FashionSocialStore {
  videos = [
    "https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4",
    "https://ia800501.us.archive.org/11/items/popeye_i_dont_scare/popeye_i_dont_scare_512kb.mp4",
  ];
  index = 0;
  data = [];
  isLoading = false;
  limit = 3;
  constructor() {
    makeObservable(this, {
      index: observable,
      data: observable,
      isLoading: observable,
      //action
      setIndex: action,
      reactPost: action,
      clearData: action
    });
  }
  setLoading = async (value) => {
    runInAction(() => {
      this.isLoading = value;
    });
  };
  clearData = ()=>{
    runInAction(()=>{
      this.data = []
    })
  }
  fetchData = async () => {
    try {
      this.setLoading(true);
      data = await postRequestJson("post/list/main-feed", {
        page: this.data.length / this.limit,
        limit: this.limit,
      });
      if (data) {
        runInAction(() => {
          this.data = [...this.data,...data.postList];
          this.isLoading = false;
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  setIndex = (idx) => {
    let i = this.index + idx;
    if (i >= 0 && i <= this.videos.length - 1)
      runInAction(() => {
        this.index = i;
      });
  };
  reactPost = (id, action) => {
    try {
      postRequestJson("post/react-post", {
        postId: id,
        reactionStatus: action,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export default FashionSocialStore;
