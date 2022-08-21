import { Image, StyleSheet } from "react-native"
import HomeImage from '../image/HomeImage.svg'
import CategoriesImage from '../image/CategoriesImage.svg'
import SearchImage from '../image/SearchImage.svg'
import AccountImage from '../image/AccountImage.svg'
import UtilitiesImage from '../image/UtilitiesImage.svg'

import Account from "../views/screens/Account"
import Categories from "../views/screens/Categories"
import Home from "../views/screens/Home"
import Search from "../views/screens/Search"
import Utilities from "../views/screens/Utilities"
import FashionSocial from "../views/screens/FashionSocial"
import WearToday from "../views/screens/WearTody"

export const router = [
    {
        name: "Home",
        component: Home,
        icon: HomeImage
    },
    {
        name: "Categories",
        component: Categories,
        icon: CategoriesImage
    },
    {
        name: "Search",
        component: Search,
        icon: SearchImage
    },
    {
        name: "Account",
        component: Account,
        icon: AccountImage
    },
    {
        name: "Utilities",
        component: Utilities,
        icon: UtilitiesImage
    },
]


export const screens = [{
    name: 'FashionSocial',
    component: FashionSocial
},
    {
        name: 'WearToday',
        component: WearToday
    }
]