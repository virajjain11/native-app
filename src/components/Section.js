import {View, Text, useColorScheme} from 'react-native';
import React from 'react';

const Section = ({children, title}) => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View className="mt-8 px-2">
      <Text className="text-2xl text-black dark:text-white">{title}</Text>
      <Text className="mt-2 text-lg text-black dark:text-white">
        {children}
      </Text>
    </View>
  );
};

export default Section;
