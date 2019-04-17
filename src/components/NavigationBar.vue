<template>
  <nav class="navbar is-primary" role="navigation">
    <div class="navbar-brand">
      <a class="navbar-item is-size-5">
        Vue-modoro
      </a>
      <a
        role="button"
        class="navbar-burger burger"
        @click="showMenu = !showMenu"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div
      class="navbar-menu has-background-primary"
      :class="showMenu ? 'is-active' : ''"
    >
      <div class="navbar-end">
        <router-link
          v-for="link in links"
          :key="link.text"
          active-class="has-text-weight-semibold"
          class="navbar-item"
          tag="a"
          :to="link.to"
        >
          <a>{{ link.text }}</a>
        </router-link>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      showMenu: false,
      links: [
        { text: "Tasks", to: { name: "home" } },
        { text: "About", to: { name: "about" } }
      ]
    };
  }
};
</script>
