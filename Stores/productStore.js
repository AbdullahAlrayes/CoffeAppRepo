import { decorate, observable, action } from "mobx";
import list from "../Components/CoffeList/list";

class ProductStore {
  constructor() {
    this.items = list;
    this.currentShop = this.items[0];
    this.loading = true;
    this.orders = [];
  }

  loadProduct = productName => {
    const product = this.items.find(product => product.name === productName);
    this.loading = false;
    return product;
  };

  addItem = (drink, option) => {
    const index = this.orders.findIndex(
      order => order.drink === drink && order.option === option
    );
    if (index >= 0) {
      this.orders[index].quantity += 1;
    } else {
      const newItem = {
        drink: drink,
        option: option,
        quantity: 1
      };

      this.orders.push(newItem);
    }
  };
}

decorate(ProductStore, {
  items: observable,
  currentShop: observable,
  loading: observable,
  orders: observable,
  loadProduct: action,
  addItem: action
});

export default new ProductStore();
