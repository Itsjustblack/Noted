import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

import * as path from "path";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: {
			"@pages": path.resolve(__dirname, "./src/pages"),
			"@icons": path.resolve(__dirname, "./src/assets/icons"),
			"@images": path.resolve(__dirname, "./src/assets/images"),
		},
	},
});
