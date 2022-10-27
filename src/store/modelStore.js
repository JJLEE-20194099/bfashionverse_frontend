import { action, computed, makeObservable, observable, runInAction } from "mobx";

class ModelStore {
    isModelComment = false
    isModelNews = false
    constructor() {
        makeObservable(this, {
            isModelComment: observable,
            isModelNews: observable,
            //action 
            openModelComment: action,
            closeModelComment: action,
            openModelNews: action,
            closeModelNews: action
        });
    }
    openModelComment = ()=>{
        runInAction(()=>{
            this.isModelComment = true
        })
    }
    closeModelComment = ()=>{
        runInAction(()=>{
            this.isModelComment = false
        })
    }
    openModelNews = ()=>{
        runInAction(()=>{
            this.isModelNews = true
        })
    }
    closeModelNews = ()=>{
        runInAction(()=>{
            this.isModelNews = false
        })
    }
}

export default ModelStore;
