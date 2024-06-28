import {defineConfig} from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
    title: "Yggdrasil Gateway",
    description: "Yggdrasil Gateway",
    lastUpdated: true,
    themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        nav: [
            {text: 'Home', link: '/'},
            {text: '安装', link: '/install/'}
        ],

        sidebar: {
            '/install/': [
                {
                    link: '/install/', text: '安装 Yggdrasil Gateway',
                    items: [
                        {link: '/install/using-docker', text: '通过 docker 安装'},
                        {link: '/install/using-dist', text: '通过软件包安装'},
                        {link: '/install/using-snapshot', text: '安装最新快照'},
                    ],
                },
                {
                    text: '初始化 Yggdrasil Gateway', items: [
                        {link: '/install/admin-init', text: '默认管理员账号登入'},
                        {link: '/install/remote-services', text: '远程树初始化'},
                    ],
                },
                {
                    text: '初始化服务器', items: [
                        {link: '/install/setup-authlib-injector', text: 'Authlib Injector'},
                    ]
                },
            ]
        },

        socialLinks: [
            {icon: 'github', link: 'https://github.com/vuejs/vitepress'}
        ],
    }
})
