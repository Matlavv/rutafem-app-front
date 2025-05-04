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
                tabBarInactiveTintColor: '#000000',
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
                    tabBarIcon: ({ color, focused }: { color: string; focused: boolean }) => (
                        <SvgIcon
                            name="home"
                            width={24}
                            height={24}
                            fillColor={focused ? color : '#FFFFFF'}
                            strokeColor={focused ? '#FF0381' : '#000'}
                            strokeWidth={focused ? 0 : 1}
                        />
                    ),
                }}
            />
            <Tabs.Screen
                name="ride"
                options={{
                    title: 'Trajets',
                    tabBarIcon: ({ color, focused }: { color: string; focused: boolean }) => (
                        <SvgIcon
                            name="car"
                            width={24}
                            height={24}
                            fillColor={focused ? color : '#FFFFFF'}
                            strokeColor={focused ? '#FF0381' : '#000'}
                            strokeWidth={focused ? 0 : 1}
                        />
                    ),
                }}
            />
            <Tabs.Screen
                name="create"
                options={{
                    title: 'Créer',
                    tabBarIcon: ({ color, focused }: { color: string; focused: boolean }) => (
                        <SvgIcon
                            name="addRide"
                            width={24}
                            height={24}
                            fillColor={focused ? color : '#FFFFFF'}
                            strokeColor={focused ? '#FF0381' : '#000'}
                            strokeWidth={focused ? 0 : 1}
                        />
                    ),
                }}
            />
            <Tabs.Screen
                name="message"
                options={{
                    title: 'Messagerie',
                    tabBarIcon: ({ color, focused }: { color: string; focused: boolean }) => (
                        <SvgIcon
                            name="message"
                            width={24}
                            height={24}
                            fillColor={focused ? color : '#FFFFFF'}
                            strokeColor={focused ? '#FF0381' : '#000'}
                            strokeWidth={focused ? 0 : 1}
                        />
                    ),
                }}
            />

            <Tabs.Screen
                name="account"
                options={{
                    title: 'Profil',
                    tabBarIcon: ({ color, focused }: { color: string; focused: boolean }) => (
                        <SvgIcon
                            name="profile"
                            width={24}
                            height={24}
                            fillColor={focused ? color : '#FFFFFF'}
                            strokeColor={focused ? '#FF0381' : '#000'}
                            strokeWidth={focused ? 0 : 1}
                        />
                    ),
                }}
            />
        </Tabs>
    );
}
