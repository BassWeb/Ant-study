export default {
    plugins: [
        ['umi-plugin-react', {
            antd: true,
            dva: true
        }]
    ],
    routes: [
        {
            path: '/',
            component: '../layout',
            routes: [
                {
                    path: '/',
                    component: './helloworld/Helloworld'
                },
                {
                    path: '/helloworld',
                    component: './helloworld/Helloworld'
                },
                {
                    path: '/card',
                    component: './puzzlecards/Puzzlecards'
                }
            ]
        }
    ]
}