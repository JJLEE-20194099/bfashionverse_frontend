import { ScrollView, View } from "react-native";
import UtilitiesComponents from "./UtilitiesComponents";
import image1 from '../../../image/image1.png'
import image2 from '../../../image/image2.png'
import image3 from '../../../image/image3.png'
import image4 from '../../../image/image4.png'
import image5 from '../../../image/image5.png'
import image6 from '../../../image/image6.png'
import image7 from '../../../image/image7.png'
import image8 from '../../../image/image8.png'

const item = [
  {
    name: 'FashionSocial',
    image: image1,
    content1: "Mạng xã hội thời trang",
    content2: "Tiki Fashion Social",
  },
  {
    name: 'WearToday',
    image: image2,
    content1: "Hôm nay mặc gì?",
    content2: "What to wear today",
  },
  {
    image: image3,
    name: 'Cart',
    content1: "Tặng quà",
    content2: "Serve Gift",
  },
  {
    image: image4,
    name: 'Search',
    content1: "Tìm kiếm bằng hình ảnh",
    content2: "Image searching",
  },
  {
    image: image5,
    name: 'Cart',
    content1: "Khám phá giỏi hàng ",
    content2: "Cart Exploration",
  },
  {
    image: image6,
    name: 'MyOrder',
    content1: "Lịch sử mua hàng",
    content2: "History",
  },
  {
    name: 'MyOutfit',
    image: image7,
    content1: "Bộ đồ của tôi",
    content2: "My outfit",
  },
  {
    name: 'Reviewer',
    image: image8,
    content1: "Danh sách Reviewer",
    content2: "Reviewer list",
  },
];

export default function Utilities({ navigation }) {
  return (
    <ScrollView style={{ marginTop: 3 }}>
      {item.map((i) => (
        <UtilitiesComponents
          name={i?.name}
          key={i.content1}
          image={i.image}
          content1={i.content1}
          content2={i.content2}
          navigation={navigation}
        />
      ))}
    </ScrollView>
  );
}
