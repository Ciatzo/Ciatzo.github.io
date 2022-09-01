
<script setup>
import BigName from '@/components/HomeComponents/BigName.vue';
import TagLine from './components/HomeComponents/TagLine.vue';
import Navbar from './components/NavBar.vue';
import CustomCursor from './components/CustomCursor.vue';
import { useRoute } from "vue-router";
import { watch } from 'vue';
import { useRouteStore } from "./stores/routeStore"

const routeStore = useRouteStore();
const route = useRoute();

watch(route, (newVal, oldVal) => {
  routeStore.currentRoutePath = newVal.path;
});
</script>

<template>
  <div class="page-wrapper">
    <div class="outline">

      <div class="row">
        <div class="column">
          <div class="name-container">
            <BigName />
          </div>
          <div class="tagline-container">
            <TagLine />
          </div>
          <div class="index-container">
            <Navbar/>
          </div>
        </div>
        <div class="column">
          <div class="routes-wrapper">
            <RouterView v-slot="{ Component }">
              <transition name="fade" mode="out-in">
                <component :is="Component" />
              </transition>
            </RouterView>
          </div>
        </div>
      </div>

    </div>
    <CustomCursor />
  </div>
</template>


<style lang="scss" >
.page-wrapper {
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow: hidden;
}

body {
  overflow: hidden;
}

.outline {
  border: 2px solid #ddd;
  margin: 25px;
  height: 100%;
}

.row {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  height: 100%;
  column-gap: 2em;
}

.column {
  display: flex;
  flex-direction: column;
  flex-basis: 100%;
  flex: 1;
}

.name-container {
  display: flex;
  justify-content: start;
  margin-left: 15px;
}

.tagline-container {
  display: flex;
  justify-content: start;
  text-align: left;
  margin-left: 15px;

  width: 95%;
}

.index-container {
  display: flex;
  justify-content: start;
  width: 95%;
}


.routes-wrapper {
  position: relative;
  display: flex;
  justify-content: right;
  align-items: center;
  height: 100%;
  width: 95%;
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #dddddd;
}
</style>
