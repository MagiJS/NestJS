FROM oven/bun:1.1.7 

COPY --from=node:20.13.1 /usr/local/bin/node /usr/local/bin/node
COPY --from=node:20.13.1 /usr/local/lib/node_modules /usr/local/lib/node_modules

RUN ln -fs /usr/local/lib/node_modules/npm/bin/npm-cli.js /usr/local/bin/npm
RUN ln -fs /usr/local/lib/node_modules/npm/bin/npm-cli.js /usr/local/bin/npx

USER bun
WORKDIR /home/bun/app
CMD ["/bin/bash"]
