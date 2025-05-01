import { DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { Text } from 'react-native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import { useColorScheme } from 'react-native';
import 'react-native-reanimated';
import '../global.css';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

const customTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#FFFFFF',
  },
};

export default function RootLayout() {
  const colorScheme = useColorScheme();

  const [loaded] = useFonts({
    Inter: require('@/assets/fonts/inter/Inter-Regular.ttf'),
    InterBold: require('@/assets/fonts/inter/Inter-Bold.ttf'),
    InterSemiBold: require('@/assets/fonts/inter/Inter-SemiBold.ttf'),
    InterMedium: require('@/assets/fonts/inter/Inter-Medium.ttf'),
    InterLight: require('@/assets/fonts/inter/Inter-Light.ttf'),
    InterThin: require('@/assets/fonts/inter/Inter-Thin.ttf'),
  });


  // Set the default font family for all Text components
  const originalRender = Text.render;
  Text.render = function render(props: any) {
    props = {
      ...props,
      style: [
        { fontFamily: 'Inter' },
        props.style,
      ],
    };

    return originalRender.apply(this, [props]);
  };


  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <ThemeProvider value={customTheme}>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="(tabs)" />
        <Stack.Screen name="+not-found" />
      </Stack>
      <StatusBar style="light" />
    </ThemeProvider>
  );
}