<template>
  <v-navigation-drawer v-model="drawer" app>
    <v-list dense>
      <template v-for="(item, index) in items">
        <v-list-item :key="index" @click="item.children && (item.open = !item.open)">
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
          <v-list-item-action>
            <v-icon v-if="item.children">{{ item.open ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
          </v-list-item-action>
        </v-list-item>
        <v-list-item-group v-if="item.children && item.open">
          <v-list-item v-for="(child, index) in item.children" :key="index" @click="navigate(child.route)">
            <v-list-item-action>
              <v-icon>{{ child.icon }}</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>{{ child.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </template>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  data() {
    return {
      drawer: true,
      items: [
        {
          title: 'Home',
          icon: 'mdi-home',
          route: '/',
        },
        {
          title: 'Nested Menu',
          icon: 'mdi-menu',
          children: [
            {
              title: 'Child 1',
              icon: 'mdi-circle',
              route: '/child-1',
            },
            {
              title: 'Child 2',
              icon: 'mdi-circle',
              route: '/child-2',
            },
          ],
        },
      ],
    };
  },
  methods: {
    navigate(route) {
      this.$router.push(route);
      this.drawer = false;
    },
  },
};
</script>
