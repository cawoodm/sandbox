@ECHO OFF
SETLOCAL

SET port=80
IF NOT "%1" == "" SET mport=%1

SET mroot=%CD%
IF NOT "%2" == "" SET mroot=%2

START C:\marc\Prg\Mongoose\mongoose.exe -p %mport% -r %mroot%
ECHO %ERRORLEVEL%
ENDLOCAL