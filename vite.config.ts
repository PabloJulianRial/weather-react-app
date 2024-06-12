import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import fs from "fs";
import path from "path";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  return {
    define: {
      "process.env.REACT_APP_WEATHER_API_KEY": JSON.stringify(
        env.REACT_APP_WEATHER_API_KEY
      ),
      "process.env.REACT_APP_TM_API_KEY": JSON.stringify(
        env.REACT_APP_TM_API_KEY
      ),
    },
    plugins: [react()],
    base: "/weather-react-app/",
    server: {
      https: {
        key: fs.readFileSync(
          path.resolve(__dirname, "certs/localhost-key.pem")
        ),
        cert: fs.readFileSync(path.resolve(__dirname, "certs/localhost.pem")),
      },
    },
  };
});
