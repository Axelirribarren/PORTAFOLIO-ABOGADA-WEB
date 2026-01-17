@echo off
echo Starting Install...
call npm install
if %errorlevel% neq 0 exit /b %errorlevel%
echo Starting Build...
call npm run build
if %errorlevel% neq 0 exit /b %errorlevel%
echo Build Complete.
