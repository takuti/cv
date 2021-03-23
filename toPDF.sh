#!/bin/bash

phantomjs toPDF.js './dist/index.html' public/Takuya_Kitazawa.pdf A4
cp public/Takuya_Kitazawa.pdf dist/
