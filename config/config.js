export default {
    plugins: [
        ['umi-plugin-react', {
            antd: true,
            dva: true
        }]
    ],
    routes: [
        // {
        //     path: '/Helloworld',
        //     component: './helloworld/Helloworld'
        // },
        {
            path: '/',
            component: '../layout',
            routes: [
                {
                    path: 'Helloworld',
                    component: './helloworld/Helloworld'
                }
            ]
        }
    ]
}