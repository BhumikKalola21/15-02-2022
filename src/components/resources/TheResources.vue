<template>
  <base-card>
    <base-button
      @click="setSelectedTab('stored-resource')"
      :mode="storedResButtonmode"
      >Stored Resource
    </base-button>
    <base-button
      @click="setSelectedTab('add-resource')"
      :mode="addResButtonmode"
      >Add Resource
    </base-button>
    <keep-alive>
      <component :is="selectTab"></component>
    </keep-alive>
  </base-card>
</template>

<script>
import storedResource from './storedResource.vue';
import addResource from './AddResource.vue';
export default {
  components: {
    storedResource,
    addResource,
  },
  data() {
    return {
      selectTab: 'stored-resource',
      reserveData: [
        {
          id: 'w3school',
          title: 'Learn basic about vue',
          resource: 'how to implement basic things in vue',
          link: 'https://www.w3schools.com/',
        },
        {
          id: 'Google',
          title: 'Learn basic component in  vue',
          resource: 'what is  compoenent in vue',
          link: 'https://www.google.co.in/',
        },
      ],
    };
  },
  provide() {
    return {
      resource: this.reserveData,
      addResource: this.addResource,
      deleteResource: this.removeResource
    };
  },
  computed: {
    storedResButtonmode() {
      return this.selectTab === 'stored-resource' ? null : 'flat';
    },
    addResButtonmode() {
      return this.selectTab === 'add-resource' ? null : 'flat';
    },
  },

  methods: {
    setSelectedTab(tab) {
      this.selectTab = tab;
    },
    addResource(title, description, url) {
      const newResource = {
        id: new Date().toISOString(),
        title: title,
        description: description,
        link: url,
      };
      this.reserveData.unshift(newResource);
      this.selectTab = 'stored-resource';
    },
    removeResource(resId) {
      const resIndex = this.reserveData.findIndex(res => res.id === resId);
      this.reserveData.splice(resIndex, 1);
    },
  },
};
</script>
