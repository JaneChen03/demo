FROM node:10-slim

ENV SASS_BINARY_SITE=https://npm.taobao.org/mirrors/node-sass/
ENV PHANTOMJS_CDNURL=https://npm.taobao.org/mirrors/phantomjs/


COPY ./package.json /drone/
COPY ./yarn.lock /drone/
COPY ./yarn.lock /drone/

RUN yarn config set registry https://registry.npm.taobao.org/
RUN yarn install
