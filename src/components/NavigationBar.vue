<template>
  <nav class="navbar is-primary">
    <div class="navbar-brand">
      <a class="navbar-item is-size-5">
        Vue-modoro
      </a>
    </div>
    <div class="navbar-menu">
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
      links: [
        { text: "Home", to: { name: "home" } },
        { text: "About", to: { name: "about" }}
      ]
    };
  }
};
</script>
