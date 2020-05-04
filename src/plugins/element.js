import Vue from 'vue'
import {
Button,
Menu,
MenuItem,
Submenu,
MenuItemGroup,
Row,
Col,
Container,
Header,
Aside,
Footer,
Main,
Tooltip,
Radio,
RadioGroup,
RadioButton,
Collapse,
Avatar,
Link,
Divider,
Dialog,
Drawer,
ColorPicker,
Form,
FormItem,
Input,
Tag,
Message,
MessageBox,
} from 'element-ui'
// import lang from 'element-ui/lib/locale/lang/en'
// import locale from 'element-ui/lib/locale1'
// locale.use(lang)

Vue.use(Button)
Vue.use(Menu)
Vue.use(MenuItem)
Vue.use(Submenu)
Vue.use(MenuItemGroup)
Vue.use(Row)
Vue.use(Col)
Vue.use(Container)
Vue.use(Header)
Vue.use(Footer)
Vue.use(Main)
Vue.use(Aside)
Vue.use(Tooltip)
Vue.use(Radio)
Vue.use(RadioGroup)
Vue.use(RadioButton)
Vue.use(Collapse)
Vue.use(Avatar)
Vue.use(Link)
Vue.use(Divider)
Vue.use(Dialog)
Vue.use(Drawer)
Vue.use(ColorPicker)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
Vue.use(Tag)

// Use 'Vue.use(MessageBox)' occur error
Vue.component(MessageBox)
Vue.component(Message)

Vue.prototype.$msgbox = MessageBox
Vue.prototype.$alert = MessageBox.alert
Vue.prototype.$confirm = MessageBox.confirm
Vue.prototype.$prompt = MessageBox.prompt
Vue.prototype.$message = Message
