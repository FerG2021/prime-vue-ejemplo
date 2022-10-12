import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from "./router/index.js";

// PrimeVue
import PrimeVue from 'primevue/config';

// PrimeVue Components
import 'primevue/resources/themes/saga-blue/theme.css'        //theme
import 'primevue/resources/primevue.min.css'                  //core css
import 'primeicons/primeicons.css'                            //icons
// toast
import Toast from 'primevue/toast'
import ToastService from 'primevue/toastservice'

// modal confirmacion
import ConfirmDialog from 'primevue/confirmdialog';
import ConfirmationService from 'primevue/confirmationservice';

// modal dinamico
import DynamicDialog from 'primevue/dynamicdialog'
import DialogService from 'primevue/dialogservice';

// modal
import Dialog from 'primevue/dialog';

// tabla y componentes
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import ColumnGroup from 'primevue/columngroup';     //optional for column grouping
import Row from 'primevue/row';                     //optional for row

// Dropdown (Select)
import Dropdown from 'primevue/dropdown';

// InputNumber
import InputNumber from 'primevue/inputnumber';

// Switch
import InputSwitch from 'primevue/inputswitch';

//Tag
import Tag from 'primevue/tag';

// Button
import Button from 'primevue/button'

// InputText
import InputText from 'primevue/inputtext'

import Modal from './components/modal_confirmacion/index.vue'



createApp(App)
    .component('Button', Button)
    .component('InputText', InputText)
    .component('Toast', Toast)
    .component('ConfirmDialog', ConfirmDialog)
    .component('DynamicDialog', DynamicDialog)
    .component('Modal', Modal)
    .component('Dialog', Dialog)
    .component('DataTable', DataTable)
    .component('Column', Column)
    .component('ColumnGroup', ColumnGroup)
    .component('Row', Row)
    .component('Dropdown', Dropdown)
    .component('InputNumber', InputNumber)
    .component('InputSwitch', InputSwitch)
    .component('Tag', Tag)
    .use(router)
    .use(PrimeVue, {
        locale: {
            accept: 'Aceptar',
            reject: 'Rechazar',
            //...
        }})
    .use(ToastService)
    .use(ConfirmationService)
    .use(DialogService)
    .mount('#app')
