const path = require('path');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

module.exports = {
    entry: './src/index.ts',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/, // Компіляція TypeScript
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.m?js$/, // Транспіляція JavaScript з Babel
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                    },
                },
            },
            {
                test: /\.css$/, // Підключення CSS
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.s[ac]ss$/i, // Підтримка SCSS/SASS
                use: ['style-loader', 'css-loader', 'sass-loader'],
            },
            {
                test: /\.less$/, // Підтримка LESS
                use: ['style-loader', 'css-loader', 'less-loader'],
            },
            {
                test: /\.(js|ts)$/, // Перевірка ESLint
                exclude: /node_modules/,
                use: 'eslint-loader',
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 9000,
        open: true, // Автоматичне відкриття браузера
    },
    plugins: [
        new BundleAnalyzerPlugin(), // Плагін аналізу
    ],
    mode: 'development', // Для зручності налагодження в процесі розробки
};
