import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "@fortawesome/fontawesome-free/js/all";
import PrimeVue from "primevue/config";

import "primevue/resources/themes/saga-blue/theme.css"
import "primevue/resources/primevue.min.css"
import "primeicons/primeicons.css"
import DataTable from "primevue/datatable";
import Column from "primevue/column";
import ColumnGroup from "primevue/columngroup"; 

const app = createApp(App)
app.use(store)
app.use(router)
app.use(PrimeVue)

app.component("DataTable", DataTable);
app.component("Column", Column);
app.component("ColumnGroup", ColumnGroup);

app.mount("#app");
