#!/bin/bash
cd /var/www/my-nodejs-app
rm -fr /var/www/my-nodejs-app/
npm install express body-parser express-session session-file-store method-override
