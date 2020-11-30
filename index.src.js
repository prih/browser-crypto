var crypto;
var bip39;
var bitcoinjs;
var ethereumjs;
var ethereumjsTx;
var secp256k1;

crypto = require('crypto');
bip39 = require('bip39');
bitcoinjs = require('bitcoinjs-lib');
ethereumjs = require('ethereumjs-util');
ethereumjsTx = require('ethereumjs-tx');
secp256k1 = require('tiny-secp256k1');

exports.crypto = crypto;
exports.bip39 = bip39;
exports.bitcoinjs = bitcoinjs;
exports.bip32 = bitcoinjs.bip32;
exports.ethereumjs = ethereumjs;
exports.ethereumjsTx = ethereumjsTx;
exports.secp256k1 = secp256k1;
