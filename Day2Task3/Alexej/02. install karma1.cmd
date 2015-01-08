@ECHO OFF

%~d0
CD "%~dp0"

SET PATH=%PATH%;%systemdrive%\chocolatey\bin
SET PATH=%PATH%;%ALLUSERSPROFILE%\chocolatey\bin
SET PATH=%PATH%;C:\Program Files\nodejs

SET proxyProtocoll=http://
SET proxyServer=pxvip02.intranet.commerzbank.com:8080

echo ** Please enter your username for the proxy settings.
echo ** (without domain prefix), e.g. eh2ho2k
echo ** !! no 'ztb\' !!!
set /p username=Username: %=%

echo ** Please enter your password. It won't be stored!
set /p password=Password: %=%

echo Your proxy settings:
echo %proxyProtocoll%%username%:XXX@%proxyServer%
SET proxySettings=%proxyProtocoll%%username%:%password%@%proxyServer%

rem could avoid troubles
CALL npm config set strict-ssl false
CALL npm config set registry "http://registry.npmjs.org/"

@echo .
@echo ** Note for all modules:
@echo ** We stick to a specific version to avoid unexpected breaking changes,
@echo ** the given version was the latest one when this file was created!

@echo .
@echo ** Downloading and installing Karma and Dependencies

CALL npm install karma --global --save-dev --proxy %proxySettings%
pause