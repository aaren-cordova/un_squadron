for /R %%i in (*.css *.js) do "C:/Program Files/7-Zip/7z.exe" a -tgzip "%%i.gz" "%%i" -mx9
