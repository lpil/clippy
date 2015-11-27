'use strict';

import router from './router';

const action = router(window.location.href);
if (action) { require(action)(); }
