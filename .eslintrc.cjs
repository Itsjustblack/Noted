module.exports = {
	env: {
		browser: true,
		node: true,
		es2021: true,
	},
	extends: ["eslint:recommended", "plugin:react/recommended", "plugin:@typescript-eslint/recommended", "plugin:@tanstack/eslint-plugin-query/recommended", "plugin:prettier/recommended"],
	parser: "@typescript-eslint/parser",
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: "latest",
		sourceType: "module",
	},
	plugins: ["react", "@typescript-eslint", "react-hooks", "@tanstack/query", "prettier"],
	rules: {
		"react/react-in-jsx-scope": "off",
		"prettier/prettier": ["error", { endOfLine: "auto", useTabs: true }, { usePrettierrc: true }],
		"no-restricted-imports": "off",
		"@typescript-eslint/no-restricted-imports": [
			"warn",
			{
				name: "react-redux",
				importNames: ["useSelector", "useDispatch"],
				message: "Use typed hooks `useAppDispatch` and `useAppSelector` instead.",
			},
		],
		"react-hooks/rules-of-hooks": "error", // Checks rules of Hooks
		"react-hooks/exhaustive-deps": "warn",
	},
};
