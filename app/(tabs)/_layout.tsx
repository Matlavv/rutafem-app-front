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
                    default: {
                        position: 'absolute',
                        bottom: 10,
                        left: 20,
                        right: 20,
                        backgroundColor: '#FFFFFF',
                        borderWidth: 1,
                        borderColor: colors.grayLight,
                        borderRadius: 30,
                        height: 60,
                        paddingTop: 3,
                        paddingBottom: 8,
                        elevation: 5,
                        shadowColor: '#000',
                        shadowOffset: {
                            width: 0,
                            height: 2,
                        },
                        shadowOpacity: 0.25,
                        shadowRadius: 3.84,
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
                            width={28}
                            height={28}
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
                            width={28}
                            height={28}
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
                            width={28}
                            height={28}
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
                            width={28}
                            height={28}
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
                            width={28}
                            height={28}
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
