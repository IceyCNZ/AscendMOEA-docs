@ECHO OFF

set SPHINXBUILD=sphinx-build
set SOURCEDIR=source
set BUILDDIR=_build

if "%1"=="" (
  set TARGET=html
) else (
  set TARGET=%1
)

%SPHINXBUILD% -M %TARGET% %SOURCEDIR% %BUILDDIR% %SPHINXOPTS% %O%
