#!/usr/bin/env bash
set -ex

electron-packager . --overwrite --arch x64 --platform linux,win32,darwin