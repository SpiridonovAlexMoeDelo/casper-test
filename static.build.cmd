@echo off

set phantomPath=c:\phantomjs\
set casperPath=c:\casperjs\
set srcDir=%CD%

set screenshotsFolder="%srcDir%\screenshots\"
cd /d %screenshotsFolder%
del *.* /F /Q

cd %srcDir%

%phantomPath%phantomjs.exe "%casperPath%\bin\bootstrap.js" --casper-path=%casperPath% --cli test %srcDir%\test.js