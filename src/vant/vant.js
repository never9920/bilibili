import Vue from 'vue'
import {
    Button,
    NavBar,
    Field,
    Toast,
    Icon,
    Tab,
    Tabs,
    Uploader,
    Dialog,
    List,
    Divider
} from 'vant'

Vue.use(Button);
Vue.use(NavBar);
Vue.use(Field);
Vue.use(Icon);
Vue.use(Tab);
Vue.use(Tabs);
Vue.use(Uploader);
Vue.use(Dialog);
Vue.use(List);
Vue.use(Divider);

Vue.prototype.$toast = Toast