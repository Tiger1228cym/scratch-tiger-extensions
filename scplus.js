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
    }
}
Scratch.extensions.register(new ScPlus());