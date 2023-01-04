import {
  action,
  computed,
  makeObservable,
  observable,
  runInAction,
} from "mobx";
import { postRequest, postRequestJson } from "../hooks/api";
import uuid from 'react-native-uuid';
class ModelStore {
  isModelComment = false;
  isModelNews = false;
  isModelInput = false;
  idPost = null;
  dataComment = [];
  loading = true;
  constructor() {
    makeObservable(this, {
      isModelComment: observable,
      isModelNews: observable,
      isModelInput: observable,
      idPost: observable,
      dataComment: observable,
      //action
      openModelComment: action,
      closeModelComment: action,
      openModelNews: action,
      closeModelNews: action,
      openModelInput: action,
      closeModelInput: action,
      postComment: action,
      reactReply: action,
      setIdPost: action,
      getDataComment: action,
    });
  }
  openModelComment = () => {
    runInAction(() => {
      this.isModelComment = true;
    });
  };
  closeModelComment = () => {
    runInAction(() => {
      this.isModelComment = false;
    });
  };
  openModelNews = () => {
    runInAction(() => {
      this.isModelNews = true;
    });
  };
  closeModelNews = () => {
    runInAction(() => {
      this.isModelNews = false;
    });
  };
  openModelInput = () => {
    runInAction(() => {
      this.isModelInput = true;
    });
  };
  closeModelInput = () => {
    runInAction(() => {
      this.isModelInput = false;
    });
  };
  postComment = async (id, content) => {
    try {
      let data = new FormData();
      data.append(
        "commentDtoStr",
        JSON.stringify({
          postId: id,
          content: content,
        })
      );
      runInAction(() => {
        this.dataComment = [
          { _id: uuid.v4(), selfComment: content },
          ...this.dataComment,
        ];
      });
      await postRequest("post/comment-post", data);
    } catch (error) {
      console.log(error);
    }
  };
  reactReply = (id, action, parentId) => {
    try {
      postRequestJson("post/react-reply", {
        postId: id,
        reactionStatus: action,
        parentCommentId: parentId,
      });
    } catch (error) {
      console.log(error);
    }
  };
  setIdPost = (id) => {
    runInAction(() => {
      this.idPost = id;
    });
  };

  getDataComment = async () => {
    runInAction(() => {
      this.loading = true;
    });
    try {
      let data = await postRequestJson("reaction/list-react", {
        id: this.idPost,
        type: "post",
      });
      console.log('data')
      data = data.allReactions.filter((dt) => dt.reactionStatus == "Comment");
      runInAction(() => {
        this.loading = false;
        this.dataComment = [...data];
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export default ModelStore;
