import { action, makeObservable, observable, runInAction } from "mobx";
import { getRequest, postRequest } from "../hooks/api";
class MyOutfitStore {
  isLoading = false;
  data = [];
  image = [];
  constructor() {
    makeObservable(this, {
      isLoading: observable,
      data: observable,
      image: observable,

      //action
      fetchData: action,
      addImage: action,
      clearImage: action,
      createPost: action,
      clearData: action
    });
  }
  setLoading = async (value) => {
    runInAction(() => {
      this.isLoading = value;
    });
  };
  fetchData = async (id) => {
    try {
      this.setLoading(true);
      if(id){
          let formData = new FormData()
          formData.append('userId',id)
          data = await postRequest('post/userId',formData)
      }
      else{
          data = await getRequest("post/token");
      }
      if (data) {
        runInAction(() => {
          this.data = [...data.postList];
          this.isLoading = false;
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
  addImage = (file) => {
    runInAction(() => {
      this.image = [...this.image, file];
    });
  };
  clearImage = () => {
    runInAction(() => {
      this.image = [];
    });
  };
  createPost = async (description) => {
    // this.image.map(e=>console.log(e.uri))
    try {
      let data = new FormData();
      this.image.forEach((element,idx) => {
        data.append(`image-${idx+1}`, element.uri);
      });
      let text = JSON.stringify({
        itemListId: ["635a4a2ce8abe3f014ee0dbd", "635a4a7de8abe3f014ee0dc3"],
        description: description,
      });
      data.append("newPostDtoString", text);
      await postRequest("post/create", data);
    } catch (err) {
      console.log(err);
    }
  };
  clearData = ()=>{
    runInAction(()=>{
        this.data = []
    })
  }
}

export default MyOutfitStore;
