module.exports = {
    title: 'Hey-UI',
    dest: './dist',
    displayAllHeaders: true, // 默认值：false
    themeConfig: {
        nav: [{
                text: '首页',
                link: '/'
            },
            {
                text: '文档',
                link: '/preface/introduce/'
            },
            {
                text: 'GitHub',
                link: 'https://github.com/hec990/HeyUI.git'
            },
        ],
        sidebar:{
            '/':getSidebar()
        }
    },
    markdown: {
        config: (md) =>{
            const { demoBlockPlugin } = require('vitepress-theme-demoblock')
            md.use(demoBlockPlugin)
        }
    }
}


function getSidebar() {
    return [
        {
            text:'入门',
            children: [
                { text: '介绍', link: '/preface/introduce/' },
                { text: '快速上手', link: '/preface/get-started/' },
            ],
            sidebarDepth:2
        },
        {
            text:'组件',
            children:[
                { text: 'Switch 开关', link: '/components/switch/' },
                { text: 'Button 按钮', link: '/components/button/' },
                { text: 'Icon 图标', link: '/components/icon/' },
                { text: 'Input 输入框', link: '/components/input/' },
            ]
        },
    ]
}