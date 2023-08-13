import {createApp, h, provide} from 'vue'
import 'maz-ui/css/main.css'
import './style.css'
import App from './App.vue'
import {DefaultApolloClient} from "@vue/apollo-composable";
import {apolloClient} from "@/shared/apollo/index.js";
import {router} from "@/shared/router/indexRouter.js";
import {library} from '@fortawesome/fontawesome-svg-core'
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
import {faBookmark, faCirclePlus, faHouse, faMagnifyingGlass, faUser} from "@fortawesome/free-solid-svg-icons";
import MazBtn from 'maz-ui/components/MazBtn'
import MazInput from 'maz-ui/components/MazInput'


library.add(faHouse, faUser, faMagnifyingGlass, faBookmark, faCirclePlus)


const app = createApp({
    setup() {
        provide(DefaultApolloClient, apolloClient)
    },
    render: () => h(App)
})

app
    .use(router)
    .component('MazBtn', MazBtn)
    .component('MazInput', MazInput)
    .component('font-awesome-icon', FontAwesomeIcon)
    .mount('#app')
