import { View, Text } from 'react-native'
import { useState} from 'react'
import { Checkbox, Image, Button } from 'native-base'
import { FontAwesome5 } from "@expo/vector-icons"; 
import { useStore } from '../../../utils/context';

export default function CartComponents(props) {
  const {cartStore: {setIsSelect,setQuantity,getTotal,deleteItem}} = useStore()
  const [check, setCheck] = useState()
  const [quality, setQuality] = useState(props.quantity)
  const handleCheck = (value)=>{
    setCheck(value); 
    setIsSelect(props.id,value)
    getTotal()
  }
  return (
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        padding: 10,
        justifyContent: "space-between",
        backgroundColor: "white",
        marginTop: 2,
        marginBottom: 2,
        borderRadius: 10,
      }}
    >
      <Checkbox
        accessibilityLabel="This is a dummy checkbox"
        value={check}
        defaultIsChecked={props.isSelect}
        onChange={(value) => {handleCheck(value);}}
      />
      <Image
        source={{
          uri: "https://cdnmedia.thethaovanhoa.vn/Upload/leenEplQKY7jsunvYUYgg/files/2022/03/saint6.jpg",
        }}
        alt="Alternate Text"
        width={"40%"}
        height={100}
        borderRadius={10}
        // size={30}
      />

      <View style={{ width: "50%", paddingTop: 5 }}>
        <View>
          <Text style={{ fontFamily: "Quicksand_500Medium" }}>
            {props.name.length>65?props.name.slice(
              0,
              65
            ):props.name}
          </Text>
          <Text style={{ fontFamily: "Quicksand_700Bold", color: "red", fontSize: 16 }}>
            {props.price} đ
          </Text>
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Button
              size={6}
              variant="ghost"
              backgroundColor={"lightgray"}
              _text={{ color: "black" }}
              onPress={() => {
                if(quality >1){
                    setQuality((prevState) => prevState - 1);
                    setQuantity(props.id, quality - 1);
                    getTotal();
                }
              }}
            >
              -
            </Button>
            <Text style={{ padding: 10 }}>{quality}</Text>
            <Button
              size={6}
              variant="ghost"
              backgroundColor={"lightgray"}
              _text={{ color: "black" }}
              onPress={() => {
                setQuality(prevState => prevState +1);
                setQuantity(props.id, quality + 1);
                getTotal();
              }}
            >
              +
            </Button>
          </View>
          <Button variant="ghost" onPress={()=>{deleteItem(props.id);getTotal()}}>
            <FontAwesome5 name="trash-alt" size={20} color="gray" />
          </Button>
        </View>
      </View>
    </View>
  );
}
