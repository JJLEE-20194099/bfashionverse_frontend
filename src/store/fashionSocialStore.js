import { action, makeObservable, observable, runInAction } from "mobx";

class FashionSocialStore {
  videos = [
    "https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4",
    "https://ia800501.us.archive.org/11/items/popeye_i_dont_scare/popeye_i_dont_scare_512kb.mp4",
  ];
  index = 0;
  constructor() {
    makeObservable(this, {
      index: observable,
      //action
      setIndex: action,
    });
  }

  setIndex = (idx)=>{
    let i = this.index + idx
    if(i>=0 && i<=this.videos.length-1)
    runInAction(()=>{
        this.index = i
    }
    )
  }
}

export default FashionSocialStore;
