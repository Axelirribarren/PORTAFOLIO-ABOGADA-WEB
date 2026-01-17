@echo off
if exist package-lock.json del package-lock.json
if exist mi-proyecto (
    xcopy "mi-proyecto\*" . /s /e /y
    rmdir /s /q mi-proyecto
    echo Moved files successfully.
) else (
    echo mi-proyecto not found.
)
