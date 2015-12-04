'use strict';

import router from './router';

const app = router(window.location.href);
if (app) { app.call(); }
