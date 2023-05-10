import {StyleSheet, Dimensions} from 'react-native';
import React from 'react';
import CustomText from '../../../components/CustomText';
import {Row, View} from 'native-base';
import colors from '../../../themes/colors';

const WIDTH = Dimensions.get('screen').width;

const ItemFavorit = ({item}: {item: any}) => {
  return (
    <View bgColor={'white'} mr={'10px'} w={WIDTH / 2}>
      <View
        w={WIDTH / 2}
        h={'160px'}
        bgColor={colors.greenDisabled}
        mr={'10px'}
        borderTopLeftRadius={'10px'}
        borderTopRightRadius={'10px'}
      />
      <View
        borderBottomRightRadius={'10px'}
        borderBottomLeftRadius={'10px'}
        borderBottomWidth={1}
        borderRightWidth={1}
        borderLeftWidth={1}
        p={'12px'}
        borderColor={colors.grey}>
        <CustomText text={'Hampir habis!'} size={12} color={'red'} mb={6} />
        <CustomText
          text={'Cake'}
          size={14}
          style={{fontWeight: '500'}}
          color={'black'}
        />
        <CustomText
          text={'Ambil hari ini, 18.00 - 22.00'}
          size={12}
          color={'grey'}
        />
        <Row mt={'10px'} alignItems={'center'}>
          <CustomText
            text={'50%'}
            size={13}
            color={'red'}
            style={styles.discountPrice}
          />
          <CustomText
            text={'20.000'}
            size={13}
            color={'grey'}
            style={{textDecorationLine: 'line-through', marginHorizontal: 6}}
          />
          <CustomText
            text={'10.000'}
            size={14}
            color={'black'}
            style={{fontWeight: '500'}}
          />
        </Row>
      </View>
    </View>
  );
};

export default ItemFavorit;

const styles = StyleSheet.create({
  discountPrice: {
    backgroundColor: colors.red100,
    alignSelf: 'flex-start',
    borderRadius: 10,
    paddingHorizontal: 4,
    paddingVertical: 2,
  },
});
