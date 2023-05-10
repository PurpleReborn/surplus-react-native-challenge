import {StyleSheet} from 'react-native';
import React from 'react';
import {Column, Row, View} from 'native-base';
import CustomText from '../../../components/CustomText';
import colors from '../../../themes/colors';

const Item = ({
  title,
  desc,
  descColor,
}: {
  title: string;
  desc?: string;
  descColor?: string;
}) => {
  return (
    <Row space={'14px'} alignItems={'center'}>
      <View
        w={'20px'}
        h={'20px'}
        borderRadius={'20px'}
        bgColor={'yellow.400'}
      />
      <Column>
        <CustomText
          text={title}
          size={14}
          style={{fontWeight: '500'}}
          color={colors.green}
        />
        <CustomText
          text={desc}
          size={14}
          style={{fontWeight: '500'}}
          color={descColor ? descColor : 'gray'}
        />
      </Column>
    </Row>
  );
};

const ItemBalance = () => {
  return (
    <Row
      justifyContent={'space-between'}
      mx={'14px'}
      my={'24px'}
      py={'14px'}
      px={'32px'}
      bgColor={'gray.100'}
      borderRadius={'10px'}>
      <Item title="Rp 10.000" desc="Surplus Pay" />
      <View mx={'10px'} w={'2px'} backgroundColor={colors.grey} />
      <Item title="3 Voucher" desc="Tersedia" descColor={colors.green} />
    </Row>
  );
};

export default ItemBalance;

const styles = StyleSheet.create({});
