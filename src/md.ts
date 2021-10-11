import { color } from './colors';

import { Colors, Effects } from './model'

export interface IOptions {
    bold?: boolean;
    italic?: boolean;
    mono?: boolean;
    link?: string;
    font?: Colors;
    background?: Colors;
    effects?: [Effects];
}

export function markdown(text: string, options: IOptions) {
    let result = text;
    if (options) {
        if (options.bold) {
            result = color(`**${result}**`, { font: 'yellow', effects: ['bright'] });
        }
        if (options.italic) {
            result = color(`_${result}_`, { font: 'magenta', effects: ['italic'] });
        }
        if (options.mono) {
            result = color(`\`${result}\``, { font: 'green' });
        }
        if (options.link) {
            result = `[${result}](${color(options.link, { font: 'blue', effects: ['underscore'] })})`;
        }
    }
    return result;
}
