import AuthStore from "./authStore";
import CartStore from "./cartStore";
import FashionSocialStore from "./fashionSocialStore";
import HomeStore from "./homeStore";
import ModelStore from "./modelStore";
import MyOutfitStore from "./myOutfitStore";

class RootStore {
    constructor() {
        this.cartStore = new CartStore(this)
        this.modelStore = new ModelStore(this)
        this.fashionSocialStore = new FashionSocialStore(this)
        this.homeStore = new HomeStore(this)
        this.myOutfitStore = new MyOutfitStore(this)
        this.authStore = new AuthStore(this)
    }
}

export default RootStore;
