#!/bin/bash

git pull
npm run build
systemctl reload nginx 
