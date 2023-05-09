import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const CustomText = ({
  text,
  size,
  color,
  mb,
  mt,
  style,
}: {
  text?: string | null;
  size?: number;
  color?: string;
  mb?: number;
  mt?: number;
  style?: any;
}) => {
  return (
    <Text
      style={{
        fontSize: size ? size : 18,
        color: color ? color : 'black',
        marginBottom: mb ? mb : 0,
        marginTop: mt ? mt : 0,
        ...style,
      }}>
      {text}
    </Text>
  );
};

export default CustomText;

const styles = StyleSheet.create({});
