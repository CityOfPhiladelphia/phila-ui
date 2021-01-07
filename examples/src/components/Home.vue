<template>
  <div class="container">
    <div class="content">
      <ul>
        <li
          v-for="(category, catKey) in getExamplesList()"
          :key="catKey"
        >
          {{ catKey }}
          <ul>
            <li
              v-for="(component, componentName) in category"
              :key="componentName"
            >
              {{ componentName }}
              <ul :key="componentName">
                <li
                  v-for="example in component"
                  :key="example.name"
                >
                  <router-link :to="{ name: `${example.name}` }">
                    {{ example.label }}
                  </router-link>
                </li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Home',
  mounted () {
  },
  methods: {
    getExamplesList () {
      let list = {};
      this.$router.options.routes.forEach(route => {
        if (route.name === "examples") {
          route.children.forEach(example => {
            let exampleCategory = example.meta.category || 'Other';

            if (!list[exampleCategory]) {
              list[exampleCategory] = {};
            }

            if (!list[exampleCategory][example.meta.component]) {
              list[exampleCategory][example.meta.component] = [];
            }

            list[exampleCategory][example.meta.component].push({
              name: example.name,
              label: example.meta.label,
              category: example.meta.category,
            });

          });
        }
      });
      return list;
    },
  },
};
</script>