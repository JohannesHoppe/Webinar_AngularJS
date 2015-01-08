$Env:PATH=$Env:PATH + ";" + $Env:systemdrive + "\chocolatey\bin"
$Env:PATH=$Env:PATH + ";" + $Env:ALLUSERSPROFILE + "\chocolatey\bin"
$Env:PATH=$Env:PATH + ";" + "C:\Program Files\nodejs"

echo $Env:PATH

$proxyProtocoll="http://"
$proxyServer="pxvip02.intranet.commerzbank.com:8080"

echo "** Please enter your username for the proxy settings."
echo "** (without domain prefix), e.g. eh2ho2k"
echo "** !! no 'ztb\' !!!"
$userName = Read-Host 'What is your username?'
echo "** Please enter your password. It won't be stored!"
$password = Read-Host 'What is your password?' -AsSecureString

$proxySettings= $proxyProtocoll + $username + ":" + $password + "@" + $proxyServer
echo $proxySettings
#could avoid troubles
npm config set strict-ssl false
npm config set registry "http://registry.npmjs.org/"

echo "."
echo "** Note for all modules:"
echo "** We stick to a specific version to avoid unexpected breaking changes,"
echo "** the given version was the latest one when this file was created!"

echo "."
echo "** Downloading and installing Karma and Dependencies"
npm install --save-dev --proxy $proxySettings
