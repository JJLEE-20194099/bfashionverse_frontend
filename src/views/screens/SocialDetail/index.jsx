import React from 'react'
import { Text } from 'react-native';
import ImageDetailComponents from '../../../components/ImageDetailComponents';

export default function SocialDetail() {
  return (
    <ImageDetailComponents
      imgs={[
        {
          uri: "https://icdn.dantri.com.vn/thumb_w/770/2022/02/28/rose-2-1646032942820.png",
          dissection: 'Thanh pho buon khong phai thanh pho khong co em ma co em se khong duoc gap lai'
        },
        {
          uri: "https://icdn.dantri.com.vn/thumb_w/770/2022/02/28/rose-2-1646032942820.png",
          dissection: 'Ngày trôi qua chẳng êm đềm Dây đàn buông lơi chẳng còn cất lên Nắng như hững hờ đường về chợt thờ ơ'
        },
        {
          uri: "https://icdn.dantri.com.vn/thumb_w/770/2022/02/28/rose-2-1646032942820.png",
          dissection: 'Phố xa vẫn thì thầm bên tai những khúc ca bình yên'
        },
        {
          uri: "https://icdn.dantri.com.vn/thumb_w/770/2022/02/28/rose-2-1646032942820.png",
          dissection: 'Để em với giấc mộng hiền tạm quên đi hết mọi muộn phiền theo làn mây'
        },
      ]}
    />
  );
}
