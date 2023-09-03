FROM quay.io/sampandey001/secktor
RUN git clone https://github.com/X-Notiya/- /root/X-Notiya
WORKDIR /root/X-Notiya/
RUN npm install npm@latest
RUN yarn install --network-concurrency 1
EXPOSE 8000
CMD ["npm", "start"]
