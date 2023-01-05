class Internet {
    getInfo() {
        return {
            id: 'internet',
            name: 'Internet',
            blocks: [
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
            ]
        };
    }

    get(args) {
        return fetch(args.URL)
            .then(r => r.text())
            .catch(() => '');
    };
    open(args) {
        window.open(args.URL);
    }
}

Scratch.extensions.register(new Internet());