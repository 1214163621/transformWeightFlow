FROM nginx
MAINTAINER zouzou
RUN rm /etc/nginx/conf.d/default.conf
ADD default.conf /etc/nginx/conf.d/
COPY dist/ /usr/share/nginx/html/
EXPOSE 8000
ENTRYPOINT nginx -g "daemon off;"