import SvgIcon from '@/components/elements/SvgIcon';
import colors from '@/styles/colors';
import { Tabs } from 'expo-router';
import React from 'react';
import { Platform } from 'react-native';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#FF0381',
        headerShown: false,
        tabBarStyle: Platform.select({
          // ios: {
          //   position: 'absolute',
          //   backgroundColor: '#F4F3F1',
          //   borderTopWidth: 0,
          // },
          default: {
            backgroundColor: '#FFFFFF',
            borderTopWidth: 0,
            boxShadow: `0px 0px 0px 1px ${colors.grayLight}`,
            borderTopLeftRadius: 30,
            borderTopRightRadius: 30,
            paddingTop: 10,
          },
        }),
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Accueil',
          tabBarIcon: ({
            color,
            focused,
          }: {
            color: string;
            focused: boolean;
          }) => (
            <SvgIcon name="home" width={24} height={24} fillColor={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="ride"
        options={{
          title: 'Voyager',
          tabBarIcon: ({ color }: { color: string }) => (
            <SvgIcon name="car" width={24} height={24} fillColor={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="message"
        options={{
          title: 'Messagerie',
          tabBarIcon: ({
            color,
            focused,
          }: {
            color: string;
            focused: boolean;
          }) => (
            <SvgIcon name="message" width={24} height={24} fillColor={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profil',
          tabBarIcon: ({ color }: { color: string }) => (
            <SvgIcon name="profile" width={24} height={24} fillColor={color} />
          ),
        }}
      />
    </Tabs>
  );
}
