<script setup lang="ts">
import deMenu from './index.vue';
import { MenuOption } from './type';

const menuList: MenuOption[] = [
  {
    id: 1,
    pid: 0,
    title: 'Title1',
    icon: '👆',
    children: [
      {
        id: 2,
        pid: 1, 
        title: 'Title1-1',
        icon: '🐷'
      },
      {
        id: 3,
        pid: 1, 
        title: 'Title1-2',
        icon: '🐖',
        children: [
          {
            id: 6,
            pid: 3,
            title: 'Title1-2-1',
            icon: '🐕'
          }
        ]
      }
    ]
  },
  {
    id: 4,
    pid: 0,
    title: 'Title2',
    icon: '🐅'
  },
  {
    id: 5,
    pid: 0,
    title: 'Title3',
    icon: '🐎'
  }
];

</script>

<template>
  <de-menu :menu-list="menuList" />
</template>

<style>
</style>
