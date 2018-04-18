const expect = require('chai').expect;
const CardanoCrypto = require('../../dist/index.js');

const TEST_VECTORS = [
  {
     // to create the Txin
     txid: new Uint8Array([0xaa,0xd7,0x8a,0x13,0xb5,0x0a,0x01,0x4a,0x24,0x63,0x3c,0x7d,0x44,0xfd,0x8f,0x8d,0x18,0xf6,0x7b,0xbb,0x3f,0xa9,0xcb,0xce,0xdf,0x83,0x4a,0xc8,0x99,0x75,0x9d,0xcd]),
     index: 666,
     // the expected txin
     txin: new Uint8Array([0x82, 0x00, 0xd8, 0x18, 0x58, 0x26, 0x82, 0x58, 0x20, 0xaa, 0xd7, 0x8a, 0x13, 0xb5, 0x0a, 0x01, 0x4a, 0x24, 0x63, 0x3c, 0x7d, 0x44, 0xfd, 0x8f, 0x8d, 0x18, 0xf6, 0x7b, 0xbb, 0x3f, 0xa9, 0xcb, 0xce, 0xdf, 0x83, 0x4a, 0xc8, 0x99, 0x75, 0x9d, 0xcd, 0x19, 0x02, 0x9a]),

     // to create the txout
     address: new Uint8Array([0x82, 0xd8, 0x18, 0x58, 0x29, 0x83, 0x58, 0x1c, 0x83, 0xee, 0xa1, 0xb5, 0xec, 0x8e, 0x80, 0x26, 0x65, 0x81, 0x46, 0x4a, 0xee, 0x0e, 0x2d, 0x6a, 0x45, 0xfd, 0x6d, 0x7b, 0x9e, 0x1a, 0x98, 0x3a, 0x50, 0x48, 0xcd, 0x15, 0xa1, 0x01, 0x46, 0x45, 0x01, 0x02, 0x03, 0x04, 0x05, 0x00, 0x1a, 0x9d, 0x45, 0x88, 0x4a]),
     amount: 42,
     // the expected txout
     txout: new Uint8Array([0x82, 0x82, 0xd8, 0x18, 0x58, 0x29, 0x83, 0x58, 0x1c, 0x83, 0xee, 0xa1, 0xb5, 0xec, 0x8e, 0x80, 0x26, 0x65, 0x81, 0x46, 0x4a, 0xee, 0x0e, 0x2d, 0x6a, 0x45, 0xfd, 0x6d, 0x7b, 0x9e, 0x1a, 0x98, 0x3a, 0x50, 0x48, 0xcd, 0x15, 0xa1, 0x01, 0x46, 0x45, 0x01, 0x02, 0x03, 0x04, 0x05, 0x00, 0x1a, 0x9d, 0x45, 0x88, 0x4a, 0x18, 0x2a]),

     tx: new Uint8Array([0x83, 0x9f, 0x82, 0x00, 0xd8, 0x18, 0x58, 0x26, 0x82, 0x58, 0x20, 0xaa, 0xd7, 0x8a, 0x13, 0xb5, 0x0a, 0x01, 0x4a, 0x24, 0x63, 0x3c, 0x7d, 0x44, 0xfd, 0x8f, 0x8d, 0x18, 0xf6, 0x7b, 0xbb, 0x3f, 0xa9, 0xcb, 0xce, 0xdf, 0x83, 0x4a, 0xc8, 0x99, 0x75, 0x9d, 0xcd, 0x19, 0x02, 0x9a, 0xff, 0x9f, 0x82, 0x82, 0xd8, 0x18, 0x58, 0x29, 0x83, 0x58, 0x1c, 0x83, 0xee, 0xa1, 0xb5, 0xec, 0x8e, 0x80, 0x26, 0x65, 0x81, 0x46, 0x4a, 0xee, 0x0e, 0x2d, 0x6a, 0x45, 0xfd, 0x6d, 0x7b, 0x9e, 0x1a, 0x98, 0x3a, 0x50, 0x48, 0xcd, 0x15, 0xa1, 0x01, 0x46, 0x45, 0x01, 0x02, 0x03, 0x04, 0x05, 0x00, 0x1a, 0x9d, 0x45, 0x88, 0x4a, 0x18, 0x2a, 0xff, 0xa0]),

     xprv: new Uint8Array([0x30,0x16,0x04,0x04,0x5d,0xe9,0x13,0x8b,0x8b,0x23,0xb6,0x73,0x04,0x95,0xf7,0xe3,0x4b,0x51,0x51,0xd2,0x9b,0xa3,0x45,0x6b,0xc9,0xb3,0x32,0xf6,0xf0,0x84,0xa5,0x51,0xd6,0x46,0xbc,0x30,0xcf,0x12,0x6f,0xa8,0xed,0x77,0x6c,0x05,0xa8,0x93,0x2a,0x5a,0xb3,0x5c,0x8b,0xac,0x41,0xeb,0x01,0xbb,0x9a,0x16,0xcf,0xe2,0x29,0xb9,0x4b,0x40,0x5d,0x36,0x61,0xde,0xb9,0x06,0x4f,0x2d,0x0e,0x03,0xfe,0x85,0xd6,0x80,0x70,0xb2,0xfe,0x33,0xb4,0x91,0x60,0x59,0x65,0x8e,0x28,0xac,0x7f,0x7f,0x91,0xca,0x4b,0x12]),
     xpub:      new Uint8Array([0x1c,0x0c,0x3a,0xe1,0x82,0x5e,0x90,0xb6,0xdd,0xda,0x3f,0x40,0xa1,0x22,0xc0,0x07,0xe1,0x00,0x8e,0x83,0xb2,0xe1,0x02,0xc1,0x42,0xba,0xef,0xb7,0x21,0xd7,0x2c,0x1a,0x5d,0x36,0x61,0xde,0xb9,0x06,0x4f,0x2d,0x0e,0x03,0xfe,0x85,0xd6,0x80,0x70,0xb2,0xfe,0x33,0xb4,0x91,0x60,0x59,0x65,0x8e,0x28,0xac,0x7f,0x7f,0x91,0xca,0x4b,0x12]),
     signature: new Uint8Array([0x9D,0x6D,0x91,0x1E,0x58,0x8D,0xD4,0xFB,0x77,0xCB,0x80,0xC2,0xC6,0xAD,0xBC,0x2B,0x94,0x2B,0xCE,0xA5,0xD8,0xA0,0x39,0x22,0x0D,0xDC,0xD2,0x35,0xCB,0x75,0x86,0x2C,0x0C,0x95,0xF6,0x2B,0xA1,0x11,0xE5,0x7D,0x7C,0x1A,0x22,0x1C,0xF5,0x13,0x3E,0x44,0x12,0x88,0x32,0xC1,0x49,0x35,0x4D,0x1E,0x57,0xB6,0x80,0xFE,0x57,0x2D,0x76,0x0C]),
  }
];

let mkTest = (i) => {
    const { txid, index, txin, address, amount, txout, tx, xprv, xpub, signature} = TEST_VECTORS[i];
    const cfg = CardanoCrypto.Config.defaultConfig();

    describe('Test ' + i, function() {
        it('create a TxIn', function() {
            expect(CardanoCrypto.Tx.newTxIn(txid, index))
                .deep.equal(txin);
        });

        it('create a TxOut', function() {
            expect(CardanoCrypto.Tx.newTxOut(address, amount))
                .deep.equal(txout);
        });

        it('create a Tx', function() {
            let txtmp = CardanoCrypto.Tx.create();
            txtmp = CardanoCrypto.Tx.addInput(txtmp, txin);
            txtmp = CardanoCrypto.Tx.addOutput(txtmp, txout);
            expect(txtmp).deep.equal(tx);
        });

        it('sign a Tx', function() {
            expect(CardanoCrypto.Tx.sign(cfg, tx, xprv))
                .deep.equal(signature);
        });
        it('verify a TX signature', function() {
            expect(CardanoCrypto.Tx.verify(cfg, tx, xpub, signature))
                .equal(true);
        });
    });
}

describe('Create Transactions', function() {
    for (let i = 0; i < TEST_VECTORS.length; i++) {
        mkTest(i);
    }
});
