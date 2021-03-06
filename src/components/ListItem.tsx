import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

import { palette, typography } from 'app/styles';

import { Image, FastImageSource } from './Image';
import { StyledSwitch } from './StyledSwitch';

interface Props {
  title: string;
  source: FastImageSource;
  onPress?: () => void;
  switchValue?: boolean;
  onSwitchValueChange?: (value: boolean) => void;
  iconWidth?: number;
  iconHeight?: number;
}

export const ListItem = ({
  title,
  source,
  onSwitchValueChange,
  switchValue,
  iconWidth,
  iconHeight,
  onPress,
}: Props) => {
  const [switchValueState, setSwitchValueState] = useState(false);

  const isSwitch = () => onSwitchValueChange && typeof switchValue === 'boolean';

  const onSwitchPress = () => {
    setSwitchValueState(!switchValueState);
    onSwitchValueChange(!switchValueState);
  };

  useEffect(() => {
    if (isSwitch()) {
      setSwitchValueState(switchValue);
    }
  }, []);

  const handleOnItemPress = () => {
    !!onPress && onPress();
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.touchableOpacityContainer} onPress={handleOnItemPress}>
        <View style={styles.imageContainer}>
          <Image
            source={source}
            style={[
              styles.image,
              typeof iconWidth === 'number' && { width: iconWidth },
              typeof iconHeight === 'number' && { height: iconHeight },
            ]}
          />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.title}>{title}</Text>
        </View>
      </TouchableOpacity>
      {isSwitch() && (
        <View>
          <StyledSwitch onValueChange={onSwitchPress} value={switchValueState} />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    paddingVertical: 8,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  touchableOpacityContainer: {
    flexDirection: 'row',
  },
  textContainer: {
    paddingLeft: 20,
  },
  title: {
    ...typography.caption,
    color: palette.textBlack,
  },
  image: {
    width: 19,
    height: 19,
  },
  imageContainer: {
    width: 21,
    height: 21,
  },
});
