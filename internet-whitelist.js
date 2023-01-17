whitelist = [1, 858, 947];
userid = -1;
error = "";

class InternetWhiteList {
    getInfo() {
        return {
            id: 'internet',
            name: 'Internet Whitelist',
            blocks: [
                {
                    opcode: 'setup',
                    blockType: Scratch.BlockType.COMMAND,
                    text: '初始化扩展',
                    arguments: {}
                },
                {
                    // 来源：Turbowarp的Fetch
                    opcode: 'get',
                    blockType: Scratch.BlockType.REPORTER,
                    text: '获取 [URL] (来源: Turbowarp Fetch)',
                    arguments: {
                        URL: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: 'https://extensions.turbowarp.org/hello.txt'
                        }
                    }
                },
                {
                    opcode: 'open',
                    blockType: Scratch.BlockType.COMMAND,
                    text: '打开 [URL]',
                    arguments: {
                        URL: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: 'https://www.baidu.com/'
                        }
                    }
                },
                {
                    opcode: 'getError',
                    blockType: Scratch.BlockType.REPORTER,
                    text: '获取错误',
                    arguments: {}
                }
            ]
        };
    }

    setup(args) {
        
    };
    get(args) {
        if (userid in whitelist) {
            return fetch(args.URL)
                .then(r => r.text())
                .catch(() => '');
        } else {
            error =  "无权限使用";
            return -1;
        }
    };
    open(args) {
        if (userid in whitelist) {
            window.open(args.URL);
        } else {
            error =  "无权限使用";
        }
    }
    getError(args) {
        return error;
    }
}

Scratch.extensions.register(new InternetWhiteList());