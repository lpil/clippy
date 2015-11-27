'use strict';

import router from './router';

const controller = router(window.location.href);
if (controller) { require(`controllers/${controller}`).call(); }
