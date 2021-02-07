<template>
  <div id="app">
    <keep-alive>
      <router-view v-if="$route.meta.keep"/>
    </keep-alive>
    <router-view v-if="!$route.meta.keep"></router-view>
  </div>
</template>

<style>
body {
  box-sizing: border-box;
}
</style>
