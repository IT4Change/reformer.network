#!/usr/bin/env bash
echo "master_sha-$(git rev-parse HEAD | cut -c 1-7)"
