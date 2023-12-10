@echo off
cls
echo Starting Dev Server...
echo Starting Server Script
cd server
start "Backend Script" yarn start
cd ..
echo Starting Config Menu
cd client
start "Frontend Script" yarn dev
cd ..
pause