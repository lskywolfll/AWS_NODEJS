# AWS_NODEJS

anything port can use you in your docker file and nodejs, only think in the host always is '0.0.0.0' for use public ip in the host server

### AWS PORT

when you want to expose other ports tcp( how http.... (80,443)) for own, you need to added the port in the security policy in the ec2 ex: port 3000 tcp or port 6565

### How do run image in docker ?

docker run --name prueba -d -p 3000:5555

NT: in my dockerfile exposes in port 5555 for this use port in container port `hostport:containerport`
NT: in my ec2 security policy added port 3000 for use tcp
