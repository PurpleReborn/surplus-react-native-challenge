import {StyleSheet, TextInput} from 'react-native';
import React from 'react';
import colors from '../../themes/colors';

const CustomInput = ({
  placeholder,
  value,
  onChangeText,
  secureTextEntry,
}: {
  placeholder: string;
  value?: string;
  onChangeText?: ((text: string) => void) | undefined;
  secureTextEntry?: boolean;
}) => {
  return (
    <TextInput
      style={{
        borderWidth: 1,
        borderColor: colors.grey,
        paddingHorizontal: 12,
        height: 52,
        borderRadius: 6,
        fontSize: 16,
      }}
      multiline={false}
      placeholder={placeholder}
      value={value}
      onChangeText={onChangeText}
      secureTextEntry={secureTextEntry}
    />
  );
};

export default CustomInput;

const styles = StyleSheet.create({});
