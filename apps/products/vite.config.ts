import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import path from "path";

const config = ({ mode }) => {
  process.env = Object.assign(
    process.env,
    loadEnv(mode, path.normalize(process.cwd() + "/../../"), "")
  );

  return defineConfig({
    plugins: [react()],
    server: {
      strictPort: true,
      //@ts-ignore
      port: process.env.VITE_PORT_PRODUCTS,
    }
  })
}


export default config