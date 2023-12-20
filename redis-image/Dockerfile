#Use an exisiting custome image as base 
FROM alpine

# Download install dependency 
RUN apk add --update redis 

# Tell the image what to do when it starts CMD = command
CMD ["redis-server"]

