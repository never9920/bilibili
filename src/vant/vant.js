import Vue from 'vue'
import {
    Button,
    NavBar,
    Field,
    Toast,
    Icon,
    Tab,
    Tabs
} from 'vant'

Vue.use(Button);
Vue.use(NavBar);
Vue.use(Field);
Vue.use(Icon);
Vue.use(Tab);
Vue.use(Tabs);

Vue.prototype.$toast = Toast