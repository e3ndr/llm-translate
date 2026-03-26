FROM node:alpine
WORKDIR /home/container

COPY ./build /home/container/build
COPY ./node_modules /home/container/node_modules
COPY ./package.json /home/container
COPY ./package-lock.json /home/container

# Entrypoint
CMD ["npm", "run", "serve"]

EXPOSE 3000/tcp