/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
// import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

function Section({children, title}) {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View
      // style={styles.sectionContainer}
      className="mt-8 px-2">
      <Text
        // style={[
        //   styles.sectionTitle,
        //   {
        //     color: isDarkMode ? Colors.white : Colors.black,
        //   },
        // ]}
        className="text-2xl text-black dark:text-white">
        {title}
      </Text>
      <Text
        // style={[
        //   styles.sectionDescription,
        //   {
        //     color: isDarkMode ? Colors.light : Colors.dark,
        //   },
        // ]}
        className="mt-2 text-lg text-black dark:text-white">
        {children}
      </Text>
    </View>
  );
}

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = 'bg-neutral-300 dark:bg-slate-900';

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        className={backgroundStyle}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        className={backgroundStyle}>
        <Header />
        <View className="bg-white dark:bg-black">
          <Section title="Step One">
            Edit <Text className="font-bold">App.tsx</Text> to change this
            screen and then come back to see your edits.
          </Section>
          <Section title="See Your Changes">
            <ReloadInstructions />
          </Section>
          <Section title="Debug">
            <DebugInstructions />
          </Section>
          <Section title="Learn More">
            Read the docs to discover what to do next:
          </Section>
          <LearnMoreLinks />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

// const styles = StyleSheet.create({
//   sectionContainer: {
//     marginTop: 32,
//     paddingHorizontal: 24,
//   },
//   sectionTitle: {
//     fontSize: 24,
//     fontWeight: '600',
//   },
//   sectionDescription: {
//     marginTop: 8,
//     fontSize: 18,
//     fontWeight: '400',
//   },
//   highlight: {
//     fontWeight: '700',
//   },
// });

export default App;
