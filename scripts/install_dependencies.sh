#!/bin/bash
cd /var/www/my-nodejs-app
rm -f  package-lock.json
npm install express body-parser express-session session-file-store method-override
