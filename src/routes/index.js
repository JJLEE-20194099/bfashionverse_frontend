import HomeImage from "../image/HomeImage.svg";
import CategoriesImage from "../image/CategoriesImage.svg";
import SearchImage from "../image/SearchImage.svg";
import AccountImage from "../image/AccountImage.svg";
import UtilitiesImage from "../image/UtilitiesImage.svg";
import Account from "../views/screens/Account";
import Categories from "../views/screens/Categories";
import Home from "../views/screens/Home";
import Search from "../views/screens/Search";
import Utilities from "../views/screens/Utilities";
import FashionSocial from "../views/screens/FashionSocial";
import WearToday from "../views/screens/WearTody";
import SocialDetail from "../views/screens/SocialDetail";
import MyOutfit from "../views/screens/MyOutfit";
import Reviewer from "../views/screens/Reviewer";
import ProductDetail from "../views/screens/ProductDetail";
import Cart from "../views/screens/Cart";
import OrderConfirmation from "../views/screens/OrderConfirmation.jsx";
import MyOrder from "../views/screens/MyOrder";
import PaymentMethods from "../views/screens/PaymentMethods";
import DeliveryAddress from "../views/screens/DeliveryAddress";
import Auth from "../views/screens/Auth";
import AuthPassword from "../views/screens/Auth/AuthPassword";
import EditImage from "../views/screens/EditImage";
import MyPostCreate from "../views/screens/MyPostCreate";
import InputKeyboard from "../test/InputKeyboard";

export const router = [
  {
    name: "Home",
    component: Home,
    icon: HomeImage,
  },
  {
    name: "Categories",
    component: Categories,
    icon: CategoriesImage,
  },
  {
    name: "Search",
    component: Search,
    icon: SearchImage,
  },
  {
    name: "Account",
    component: Account,
    icon: AccountImage,
  },
  {
    name: "Utilities",
    component: Utilities,
    icon: UtilitiesImage,
  }
];

export const screens = [
  {
    name: "FashionSocial",
    component: FashionSocial,
  },
  {
    name: "Cart",
    component: Cart,
  },
  {
    name: "WearToday",
    component: WearToday,
  },
  {
    name: "MyOutfit",
    component: MyOutfit,
  },
  {
    name: "Reviewer",
    component: Reviewer,
  },
  {
    name: "OrderConfirmation",
    component: OrderConfirmation,
  },
  {
    name: "MyOrder",
    component: MyOrder,
  },
  {
    name: "PaymentMethods",
    component: PaymentMethods,
  },
  {
    name: "DeliveryAddress",
    component: DeliveryAddress,
  },
  {
    name: 'AuthPassword',
    component: AuthPassword
  },
  {
    name: 'MyPostCreate',
    component: MyPostCreate
  }
];


export const screensTransparent = [
  {
    name: "ProductDetail",
    component: ProductDetail,
  },
  {
    name: 'Auth',
    component: Auth
  },
  {
    name: "SocialDetail",
    component: SocialDetail,
  },
  {
    name: 'EditImage',
    component: EditImage
  }
]