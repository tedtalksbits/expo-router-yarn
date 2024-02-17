import { Drawer } from 'expo-router/drawer';
import React from 'react';

export default function DrawerLayout() {
  return (
    <Drawer>
      <Drawer.Screen
        name='index'
        options={{
          title: 'Home',
          drawerLabel: 'Home',
        }}
      />
      <Drawer.Screen
        name='news'
        options={{
          title: 'News',
          drawerLabel: 'News',
        }}
      />
      <Drawer.Screen
        name='(tabs)'
        options={{
          title: 'Leads',
          drawerLabel: 'Leads',
        }}
      />
      <Drawer.Screen
        name='settings'
        options={{
          title: 'Settings',
          drawerLabel: 'Settings',
        }}
      />
    </Drawer>
  );
}
