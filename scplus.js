class ScPlus {
    getInfo() {
        return {
            id: 'scplus',
            name: 'Scratch Plus',
            blocks: [
                {
                    opcode: 'StrictEquals',
                    blockType: Scratch.BlockType.BOOLEAN,
                    text: '严格等于：[str1] = [str2]',
                    arguments: {
                        str1: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: 'A'
                        },
                        str2: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: 'a'
                        }
                    }
                },
                {
                    opcode: 'GetUnicodeNumber',
                    blockType: Scratch.BlockType.REPORTER,
                    text: '[char] 的Unicode编码',
                    arguments: {
                        char: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: 'A'
                        }
                    }
                },
                {
                    opcode: 'GetUnicodeChar',
                    blockType: Scratch.BlockType.REPORTER,
                    text: '[number] 对应的Unicode字符',
                    arguments: {
                        number: {
                            type: Scratch.ArgumentType.NUMBER,
                            defaultValue: '65'
                        }
                    }
                },
                {
                    opcode: 'ShowText',
                    blockType: Scratch.BlockType.COMMAND,
                    text: '(Beta)显示 [text] 以字体 [font] , 颜色 [color] 在 [x], [y]',
                    arguments: {
                        text: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: 'Hello World'
                        },
                        font: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: 'bold 30px solid'
                        },
                        color: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: 'white'
                        },
                        x: {
                            type: Scratch.ArgumentType.NUMBER,
                            defaultValue: 240
                        },
                        y: {
                            type: Scratch.ArgumentType.NUMBER,
                            defaultValue: 180
                        }
                    }
                }
            ]
        };
    }
    StrictEquals(args) {
        return args.str1 == args.str2;
    };
    GetUnicodeNumber(args) {
        return args.char.charCodeAt(0);
    };
    GetUnicodeChar(args) {
        return String.fromCharCode(args.number);
    };
    ShowText(args) {
        var doc_id = document.getElementById("canvas");
        var context = doc_id.getContext("2d");
        context.font = args.font;
        context.fillStyle = args.color;
        context.fillText(args.text, args.x, args.y);
    }
}
Scratch.extensions.register(new ScPlus());