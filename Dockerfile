FROM nginx

MAINTAINER Jane

COPY default.conf /usr/local/nginx/conf.d/default.conf

COPY /dist /usr/local/nginx/html/

EXPOSE 8080

CMD ["nginx", "-g", "daemon off"]
