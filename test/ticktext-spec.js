var expect = require('chai').expect;


describe('ticktext', function () {

    it('should exist', function () {
        var ticktext = require('../lib/index.js').default;
        expect(ticktext).to.not.be.undefined;
    });

    it('should return a coordinate', function () {

        var coord = {
            x: 200,
            y: 200
        };
        var angle = 90;
        var text = '000';
        var fontSize = 12;
        var inside = true;

        var ticktext = require('../lib/index.js').default;
        var test = ticktext(coord, angle, text, fontSize, inside);

        expect(test).to.eql({
            x: 191,
            y: 204.2
        });
    });
});

describe('ticktextOffset', function () {

    it('should exist', function () {
        var ticktextOffset = require('../lib/index.js').ticktextOffset;
        expect(ticktextOffset).to.not.be.undefined;
    });

    it('should return a coordinate', function () {

        var angle = 90;
        var text = '000';
        var fontSize = 12;
        var inside = true;

        var ticktextOffset = require('../lib/index.js').ticktextOffset;
        var test = ticktextOffset(angle, text, fontSize, inside);

        expect(test).to.eql({
            x: -9,
            y: 4.199999999999999
        });
    });
});