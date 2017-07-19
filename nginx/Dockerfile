FROM alpine:3.4

# Install nginx and tooling we need
RUN apk update && \
    apk add nginx curl unzip && \
    rm -rf /var/cache/apk/*

# Use consul-template to re-write our Nginx virtualhost config
RUN curl -Lo /tmp/consul_template_0.19.0_linux_amd64.zip https://releases.hashicorp.com/consul-template/0.19.0/consul-template_0.19.0_linux_amd64.zip && \
    unzip /tmp/consul_template_0.19.0_linux_amd64.zip && \
    mv consul-template /bin

# Install ContainerPilot
ENV CONTAINERPILOT_VER 3.0.0
ENV CONTAINERPILOT /etc/containerpilot.json5

RUN export CONTAINERPILOT_CHECKSUM=6da4a4ab3dd92d8fd009cdb81a4d4002a90c8b7c \
    && curl -Lso /tmp/containerpilot.tar.gz \
         "https://github.com/joyent/containerpilot/releases/download/${CONTAINERPILOT_VER}/containerpilot-${CONTAINERPILOT_VER}.tar.gz" \
    && echo "${CONTAINERPILOT_CHECKSUM}  /tmp/containerpilot.tar.gz" | sha1sum -c \
    && tar zxf /tmp/containerpilot.tar.gz -C /bin \
    && rm /tmp/containerpilot.tar.gz

# COPY ContainerPilot configuration
COPY containerpilot.json5 /etc/containerpilot.json5
ENV CONTAINERPILOT=/etc/containerpilot.json5

COPY reload-nginx.sh /bin/
COPY index.html /usr/share/nginx/html/
COPY style.css /usr/share/nginx/html/
COPY nginx.conf /etc/nginx/nginx.conf
COPY nginx.conf.ctmpl /etc/containerpilot/

EXPOSE 80
CMD ["/bin/containerpilot"]
