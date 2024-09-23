@ECHO OFF
CHCP 65001

@REM MDN
IF "%1"=="ins:mdn" (
    COPY "src\mdn\MDNTheme.user.css" "G:\Portables\MDNTheme\MDNTheme.user.css"
)

@REM Typora
IF "%1"=="build:typ" (
    LessC "src\typora\github.user.less" "src\typora\github.user.css"
)
IF "%1"=="ins:typ" (
	DEV build:typ
    COPY /Y "src\typora\github.user.css" "C:\Users\东东\AppData\Roaming\Typora\themes\github.user.css"
)
