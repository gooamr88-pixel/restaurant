#!/usr/bin/env bash
# Pull the latest main and restart the site. Run on the VPS:
#   bash /var/www/luzna/deploy/update.sh
set -euo pipefail

cd /var/www/luzna
git pull --ff-only origin main
npm ci
npm run build
pm2 reload luzna-restaurant --update-env
echo "Deployed $(git rev-parse --short HEAD)"
