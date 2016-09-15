FROM alpine:3.4

# Install nginx and tooling we need
RUN apk update && \
    apk add nginx curl unzip && \
    rm -rf /var/cache/apk/*

# Use consul-template to re-write our Nginx virtualhost config
RUN curl -Lo /tmp/consul_template_0.15.0_linux_amd64.zip https://releases.hashicorp.com/consul-template/0.15.0/consul-template_0.15.0_linux_amd64.zip && \
    unzip /tmp/consul_template_0.15.0_linux_amd64.zip && \
    mv consul-template /bin

# Get ContainerPilot release
ENV CONTAINERPILOT_VERSION 2.4.1
RUN export CP_SHA1=198d96c8d7bfafb1ab6df96653c29701510b833c && \
    curl -Lso /tmp/containerpilot.tar.gz "https://github.com/joyent/containerpilot/releases/download/${CONTAINERPILOT_VERSION}/containerpilot-${CONTAINERPILOT_VERSION}.tar.gz" && \
    echo "${CP_SHA1}  /tmp/containerpilot.tar.gz" | sha1sum -c && \
    tar zxf /tmp/containerpilot.tar.gz -C /bin && \
    rm /tmp/containerpilot.tar.gz

COPY containerpilot.json /etc/containerpilot/
COPY reload-nginx.sh /bin/
COPY index.html /usr/share/nginx/html/
COPY nginx.conf /etc/nginx/nginx.conf
COPY nginx.conf.ctmpl /etc/containerpilot/

EXPOSE 80
