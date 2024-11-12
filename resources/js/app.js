import '../css/app.css';
import './bootstrap';
import 'vuetify/styles';

import { createInertiaApp } from '@inertiajs/vue3';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { createApp, h } from 'vue';
import { ZiggyVue } from '../../vendor/tightenco/ziggy';
import { createVuetify } from 'vuetify'
import 'vuetify/styles';
import { VCard,
        VCardTitle,
        VCardSubtitle,
        VCardText,
        VCardItem,
        VAvatar,
        VTextField,
        VWindow,
        VWindowItem,
        VImg,
        VDivider,
        VBtn,
        VSpacer,
        VCardActions, 
    } from 'vuetify/components';

const appName = import.meta.env.VITE_APP_NAME || 'Laravel';
export const vuetify = createVuetify({
    theme: {
      defaultTheme: 'light',
      //
    },
    components: {
        VCard,
        VCardTitle,
        VCardSubtitle,
        VCardText,
        VCardItem,
        VAvatar,
        VTextField,
        VWindow,
        VWindowItem,
        VImg,
        VDivider,
        VBtn,
        VSpacer,
        VCardActions,
    }
  });

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) =>
        resolvePageComponent(
            `./Pages/${name}.vue`,
            import.meta.glob('./Pages/**/*.vue'),
        ),
    setup({ el, App, props, plugin }) {
        return createApp({ render: () => h(App, props) })
            .use(plugin)
            .use(vuetify)
            .use(ZiggyVue)
            .mount(el);
    },
    progress: {
        color: '#4B5563',
        showSpinner: true,
    },
});