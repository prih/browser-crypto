var crypto;
var bip39;
var bitcoinjs;
var ethereumjs;
var ethereumjsTx;

crypto = require('crypto');
bip39 = require('bip39');
bitcoinjs = require('bitcoinjs-lib');
ethereumjs = require('ethereumjs-util');
ethereumjsTx = require('ethereumjs-tx');

exports.crypto = crypto;
exports.bip39 = bip39;
exports.bitcoinjs = bitcoinjs;
exports.bip32 = bitcoinjs.bip32;
exports.ethereumjs = ethereumjs;
exports.ethereumjsTx = ethereumjsTx;
