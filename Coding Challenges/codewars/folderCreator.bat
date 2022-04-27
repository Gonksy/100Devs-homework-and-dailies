@echo off
setlocal enableDelayedExpansion
FOR /l %%N in (1,1,31) do (
    set "NUM=00%%N"
    set "DIRNAME=cw_!NUM:~-2!_5_2022"
    md !DIRNAME!
    echo.>"!DIRNAME!\app.js"
)