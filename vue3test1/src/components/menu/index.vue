<script setup lang="ts">
import deMenu from './index.vue';
import { MenuOption } from './type';

interface Props {
  menuList: MenuOption[];
  pid?: string | number;
  pIndex?: number;
}

const props = withDefaults(defineProps<Props>(), {
  menuList: () => [],
  pid: 0,
  pIndex: 0
});

// const emit = defineEmits<{
//   (e: 'change', id: number): void
//   (e: 'update', value: string): void
// }>();

</script>

<template>
  <ul class="de-menu">
    <template v-for="(menuItem, index) in props.menuList" :key="menuItem.id">
      <!-- <div>{{index}} -- {{props.pid}} -- {{props.pIndex}} -- {{menuItem.id}} -- {{menuItem.pid}}</div> -->
      <!-- sub-menu 带子集菜单的菜单包装，里面才是可点击的菜单。
           当菜单收起来的时候，第一层的 sub-menu 只展示 icon 不展示 title 和 子集列表，子集列表只有在鼠标hover时展示在tooltip里面。
           如果子集菜单内部还有子集菜单，就在展开的tooltip里面开启折叠面板组件 -->
      <li class="de-sub-menu" v-if="menuItem.children">
        <div class="de-sub-menu__title">
          <i class="de-menu-icon">{{menuItem.icon}}</i>
          <span>{{menuItem.title}}</span>
          <i class="de-menu-icon">v</i>
        </div>
        <de-menu :menuList="menuItem.children" :pid="menuItem.pid" :pIndex="index" />
      </li>
      <!-- menu-item 单独的菜单。当菜单收起来的时候，第一层的 menu-item 只展示 icon 不展示 title， title在鼠标hover时展示在tooltip里面 -->
      <li class="de-menu-item" v-else :title="menuItem.pid === 0 ? menuItem.title : ''">
        <i class="de-menu-icon">{{menuItem.icon}}</i>
        <span>{{menuItem.title}}</span>
      </li>
    </template>
  </ul>
</template>

<style scoped>

</style>