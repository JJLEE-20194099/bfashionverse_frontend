import {View, Text} from 'react-native'
import SliderImageComponents from './SliderImageComponents';

export default function ProductDetailComponents() {
  return (
    <View>
      <View>
        <SliderImageComponents />
      </View>
      <View></View>
      <View>
        <Text>San pham tuong tu</Text>
      </View>
      <View>
        <Text>Thong tin</Text>
      </View>
      <View>
        <Text>Xem binh luan</Text>
      </View>
      <View>
        <Text>Kham pha them</Text>
      </View>
    </View>
  );
}
