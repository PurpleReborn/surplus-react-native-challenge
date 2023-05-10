import React from 'react';
import TestRenderer from 'react-test-renderer';
import {TouchableOpacity} from 'react-native';
import CustomButton from '..';

describe('CustomButton', () => {
  const onPressMock = jest.fn();
  const text = 'Press me!';
  const tree = TestRenderer.create(
    <CustomButton text={text} onPress={onPressMock} />,
  );

  it('renders correctly', () => {
    expect(tree.toJSON()).toMatchSnapshot();
  });

  it('contains a TouchableOpacity', () => {
    const touchableNodes = tree.root.findAllByType(TouchableOpacity);
    expect(touchableNodes).toHaveLength(1);
  });

  it('disables TouchableOpacity when disabled prop is true', () => {
    const disabledTree = TestRenderer.create(
      <CustomButton text={text} disabled={true} onPress={onPressMock} />,
    );
    const touchableNodes = disabledTree.root.findAllByType(TouchableOpacity);
    expect(touchableNodes[0].props.disabled).toBe(true);
  });

  it('calls onPress function when TouchableOpacity is pressed', () => {
    const touchableNodes = tree.root.findAllByType(TouchableOpacity);
    touchableNodes[0].props.onPress();
    expect(onPressMock).toHaveBeenCalled();
  });
});
