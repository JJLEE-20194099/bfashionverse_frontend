import CartStore from "./cartStore";
import FashionSocialStore from "./fashionSocialStore";
import HomeStore from "./homeStore";
import ModelStore from "./modelStore";

class RootStore {
    constructor() {
        this.cartStore = new CartStore(this)
        this.modelStore = new ModelStore(this)
        this.fashionSocialStore = new FashionSocialStore(this)
        this.homeStore = new HomeStore(this)
    }
}

export default RootStore;
