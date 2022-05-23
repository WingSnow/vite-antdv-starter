module.exports = {
  env: {
    browser: true,
    es2021: true,
	'vue/setup-compiler-macros': true,
  },
  extends: [
    'plugin:vue/vue3-strongly-recommended',
    'airbnb-base',
	'airbnb-typescript/base',
	'@vue/typescript/recommended',
	'plugin:prettier/recommended',
  ],
  parserOptions: {
    ecmaVersion: 13,
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
  },
  overrides: [
	{
		files: ["src/**/*.ts", "src/**/*.d.ts", "src/**/*.tsx", "src/**/*.vue"],
		parserOptions: {
			project: ['./tsconfig.json'],
		},
	},
  ],
  plugins: [
    'vue',
    '@typescript-eslint',
  ],
  settings: {
    'import/resolver': {
      'typescript': {
        'alwaysTryTypes': true
      }
    }
  },
  rules: {
	// 在开发环境下允许使用console和debugger
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
  },
};
