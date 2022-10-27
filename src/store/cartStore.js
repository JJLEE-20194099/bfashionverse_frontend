import { action, makeObservable, observable, runInAction } from "mobx";

class CartStore {
    total = 0
    order = [

    ]
    constructor() {
        makeObservable(this, {
            total: observable,
            order: observable,
            //action
            setQuantity: action,
            setIsSelect: action,
            getTotal: action,
            deleteItem: action,
            addItem: action,
        });
    }

    addItem = (id, name, price)=>{
        let item = this.order.find(o=>o.id==id)
        if(!item){
            runInAction(()=>{
                this.order = [...this.order, {id, name, price, isSelect: false, quantity: 1}]
            }) 
        }
    }
    setQuantity = (id, quantity)=>{
        runInAction(()=>{
            let order = this.order.find(o => o.id == id)
            order.quantity = quantity
        })
    }
    setIsSelect = (id, isSelect) => {
        runInAction(() => {
            let order = this.order.find(o => o.id == id)
            order.isSelect = isSelect
        })
    }
    getTotal = ()=> {
        let tt = this.order.reduce((sum, current) => current.isSelect ? sum + current.price * current.quantity : sum, 0)
        runInAction(() => {
            this.total = tt
        })
    }
    deleteItem = (id)=>{
        runInAction(()=>{
            this.order = this.order.filter(o => o.id!=id)
        })
    }
}

export default CartStore;
