
interface CoordinateCartesian {
    x: number;
    y: number;
}
interface TickTextOptions {
    textHeightFactor?: number;
    textWidthFactor?: number;
}
interface TicktextOffset {
    angle: number;
    text: string | number;
    fontSize: number;
    inside: boolean;
    options?: TickTextOptions;
}

interface Ticktext extends TicktextOffset {
    startCoord: CoordinateCartesian;
}

const pi = Math.PI;

export function ticktext(startCoord: CoordinateCartesian, angle: number, text: string | number, fontSize: number, inside: boolean, options?: TickTextOptions) {

    const newAngle = angle > 180 ? -360 + angle : angle;
    
    const angleRad = newAngle * Math.PI / 180;
    const opts = options || { textHeightFactor: .7, textWidthFactor: .5 }
    const textValue = typeof text === 'string' ? text : text.toString();
    const textHeight = fontSize * opts.textHeightFactor;
    const textWidth = textValue.length * (fontSize * opts.textWidthFactor);

    const xFactor = inside ? Math.sin(angleRad) * -1 : Math.sin(angleRad) * 1;
    const yFactor = inside ? (pi - (Math.abs(angleRad))) / pi : (Math.abs(angleRad)) / pi;

    return <CoordinateCartesian>{
        x: startCoord.x + (textWidth / 2) * xFactor,
        y: startCoord.y + textHeight * yFactor
    }
}

export function ticktextOffset(angle: number, text: string | number, fontSize: number, inside: boolean, options?: TickTextOptions) {

    const angleRad = angle * Math.PI / 180;
    const opts = options || { textHeightFactor: .7, textWidthFactor: .5 }
    const textValue = typeof text === 'string' ? text : text.toString();
    const textHeight = fontSize * opts.textHeightFactor;
    const textWidth = textValue.length * (fontSize * opts.textWidthFactor);

    const xFactor = inside ? Math.sin(angleRad) * -1 : Math.sin(angleRad) * 1;
    const yFactor = inside ? (pi - (Math.abs(angleRad))) / pi : (Math.abs(angleRad)) / pi;

    return <CoordinateCartesian>{
        x: (textWidth / 2) * xFactor,
        y: textHeight * yFactor
    }
}

export default ticktext;




