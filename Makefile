AUTHOR := $(shell cat package.json | jq -r '.author')
VERSION := $(shell cat package.json | jq -r '.version')
NAME := $(shell cat package.json | jq -r '.name')

include .env

.PHONY: build
build:
	docker buildx build --platform=linux/amd64,linux/arm64 -t ${AUTHOR}/${NAME}:${VERSION} -t ${AUTHOR}/${NAME}:latest .
