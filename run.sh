docker rm my-running-haproxy -f
docker build -t my-haproxy .
docker run -it --rm --name haproxy-syntax-check my-haproxy haproxy -c -f /usr/local/etc/haproxy/haproxy.cfg
docker run -d -p 80:80 -p 8404:8404 --name my-running-haproxy my-haproxy