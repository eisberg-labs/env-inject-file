#!/usr/bin/env node

var nomnom = require("nomnom"),
    envInjectFile = require("../env-inject-file");

var options = {
    in: {
        position: 1,
        help: "Input file",
        type: "string",
        required: true
    },
    out: {
        position: 2,
        help: "Output file",
        type: "string",
        list: true
    }
};

var options = nomnom.options(options)
    .script("env-inject-file")
    .parse();

envInjectFile(options);