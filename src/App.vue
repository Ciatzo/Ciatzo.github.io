
<script setup>
import BigName from '@/components/HomeComponents/BigName.vue';
import IndexList from '@/components/HomeComponents/IndexList.vue';
import TagLine from './components/HomeComponents/TagLine.vue';
import CustomCursor from './components/CustomCursor.vue';
import { useRoute } from "vue-router";
import { watch } from 'vue';
import { useRouteStore } from "./stores/routeStore"


// export default {
//   name: 'App',
//   components: {
//     BigName,
//     IndexList,
//     TagLine,
//     watch,
//     CustomCursor
//   }
// }

const routeStore = useRouteStore();
const route = useRoute();

watch(route, (newVal, oldVal) => {
  routeStore.currentRoutePath = newVal.path;
});
</script>

<template>
  <div class="page-wrapper">
    <div class="outline">
      <div class="view-wrapper">
        <div class="name-container">
          <BigName />
        </div>
        <div class="tagline-container">
          <TagLine />
        </div>
        <div class="index-container">
          <IndexList />
        </div>
        <div class="routes-wrapper">
          <RouterView v-slot="{ Component }">
            <transition name="fade" mode="out-in">
              <component :is="Component" />
            </transition>
          </RouterView>
        </div>
        <CustomCursor />
      </div>
    </div>
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

.view-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .name-container {
    display: flex;
    justify-content: start;
    width: 95%;

    @media screen and (max-width: 768px) {
      margin-top: -9rem;
    }

    @media screen and (max-width: 375px) {
      margin-top: -2rem;
    }
  }

  .tagline-container {
    display: flex;
    justify-content: start;
    text-align: left;
    width: 95%;

    @media screen and (max-width: 768px) {
      margin-top: -9rem;
    }

    @media screen and (max-width: 375px) {
      margin-top: -2rem;
    }
  }

  .index-container {
    display: flex;
    justify-content: start;
    width: 95%;
  }
}

.routes-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #dddddd;
}
</style>
