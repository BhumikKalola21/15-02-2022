import { createApp } from 'vue';
import baseCard from './components/UI/baseCard.vue'
import BaseButton from './components/UI/BaseButton.vue'
import BaseDialogue from './components/UI/BaseDialogue.vue'
import App from './App.vue';
const app = createApp(App);
app.component('base-card', baseCard)
app.component('base-button', BaseButton)
app.component('base-dialogue',BaseDialogue)
app.mount('#app');
