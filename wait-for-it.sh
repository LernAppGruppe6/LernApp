#!/usr/bin/env bash

# See https://github.com/nickjj/wait-until

command="${1}"
timeout="${2}"
status="${3}"

echo "Waiting for \"${command}\" ..."

i=1
until eval "${command}"
do
    ((i++))
    eval "${status}"
    if [ "${i}" -gt "${timeout}" ]; then
        echo "command was never successful, aborting due to ${timeout}s timeout!"
        exit 1
    fi

    sleep 1
done
