<template>
  <div class="about">
    <v-list
      class="pt-0"
      flat
    >
      <div 
        v-for="task in tasks"
        :key="task.id"
      >
        <v-list-item
          class="pl-0"
        >
          <template v-slot:default="{ active }">
            <v-list-item
              @click="task.done = !task.done"
            >
              <v-list-item-action>
                <v-checkbox
                  :input-value="task.done"
                >
                </v-checkbox>
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title
                  :class="{ 'text-decoration-line-through' : task.done }"
                >
                  {{ task.title }}
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-icon
              v-if="!active"
              color="grey lighten-1"
              @click="task.important"
            >
              mdi-star-outline
            </v-icon>

            <v-icon
              v-else
              color="yellow darken-3"
            >
              mdi-star
            </v-icon>
            <v-icon @click="deleteTask(task.id)">
              mdi-delete
            </v-icon>
          </template>
          <v-divider></v-divider>
        </v-list-item>
      </div>
      
    </v-list>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      tasks: [
        {
          id: 1,
          title: 'Wake up',
          important: false,
          done: false,
        },
        {
          id: 2,
          title: 'eat',
          important: false,
          done: false,
        },
        {
          id: 3,
          title: 'chych',
          important: false,
          done: false,
        },
      ],
    }
  },
  methods: {
    deleteTask(id) {
      
    }
  }
}
</script>


<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>