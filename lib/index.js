"use strict";
var pi = Math.PI;
function ticktext(startCoord, angle, text, fontSize, inside, options) {
    var angleRad = angle * Math.PI / 180;
    var opts = options || { textHeightFactor: .7, textWidthFactor: .5 };
    var textValue = typeof text === 'string' ? text : text.toString();
    var textHeight = fontSize * opts.textHeightFactor;
    var textWidth = textValue.length * (fontSize * opts.textWidthFactor);
    var xFactor = inside ? Math.sin(angleRad) * -1 : Math.sin(angleRad) * 1;
    var yFactor = inside ? (pi - (Math.abs(angleRad))) / pi : (Math.abs(angleRad)) / pi;
    return {
        x: startCoord.x + (textWidth / 2) * xFactor,
        y: startCoord.y + textHeight * yFactor
    };
}
exports.ticktext = ticktext;
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ticktext;
//# sourceMappingURL=index.js.map