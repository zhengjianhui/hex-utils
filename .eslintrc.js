module.exports = {
    parser: '@typescript-eslint/parser',
    extends: [
        'plugin:@typescript-eslint/recommended',
        'plugin:import/errors',
        'plugin:import/warnings',
        'plugin:import/typescript',
        "plugin:prettier/recommended",
    ],
    plugins: ['prettier', 'import'],
    ignorePatterns: ['dist', '*.js', 'generated'],
    rules: {
        'prettier/prettier': 'error',
        'no-unused-vars': 'off',
        'import/order': ['warn', { alphabetize: { order: 'asc' } }],
        '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_', varsIgnorePattern: '^_' }],
    },
};
