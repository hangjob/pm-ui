const path = require('path');
module.exports = {
    rootDir: path.join(__dirname, '/'),
    // 别名，同webpack中的alias
    moduleNameMapper: {
        '^@/(.*)$': '<rootDir>/examples/$1',
        '^~@/(.*)$': '<rootDir>/packages/$1'
    },
    preset: '@vue/cli-plugin-unit-jest',

    // 告诉jest去哪里找我们编写的测试文件
    testMatch: [
        '<rootDir>/test/unit/specs/*.spec.js',
    ],

    // 告诉jest需要解析的文件
    moduleFileExtensions: [
        'js',
        'jsx',
        'json',
        'vue'
    ],
    snapshotSerializers: [
        'jest-serializer-vue'
    ],
    // 在执行测试用例之前需要先执行的文件
    // setupFiles: []
}
