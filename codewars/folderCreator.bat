@echo off
setlocal enableDelayedExpansion
FOR /l %%N in (16,1,30) do (
    set "NUM=00%%N"
    set "DIRNAME=cw_!NUM:~-2!_4_2022"
    md !DIRNAME!
    echo.>"!DIRNAME!\app.js"
)