import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const CustomText = ({
  text,
  size,
  color,
  mb,
}: {
  text?: string | null;
  size?: number;
  color?: string;
  mb?: number;
}) => {
  return (
    <Text
      style={{
        fontSize: size ? size : 18,
        color: color ? color : 'black',
        marginBottom: mb ? mb : 0,
      }}>
      {text}
    </Text>
  );
};

export default CustomText;

const styles = StyleSheet.create({});
