// vite.config.js
import { defineConfig } from "file:///C:/Users/rje28/Downloads/career-up-step5/aa/node_modules/.pnpm/vite@5.4.2_@types+node@22.5.1_terser@5.31.6/node_modules/vite/dist/node/index.js";
import react from "file:///C:/Users/rje28/Downloads/career-up-step5/aa/node_modules/.pnpm/@vitejs+plugin-react-swc@3.7.0_vite@5.4.2_@types+node@22.5.1_terser@5.31.6_/node_modules/@vitejs/plugin-react-swc/index.mjs";
import dts from "file:///C:/Users/rje28/Downloads/career-up-step5/aa/node_modules/.pnpm/vite-plugin-dts@4.0.3_@types+node@22.5.1_rollup@4.21.2_typescript@5.5.4_vite@5.4.2_@types+node@22.5.1_terser@5.31.6_/node_modules/vite-plugin-dts/dist/index.mjs";
var vite_config_default = defineConfig({
  plugins: [react(), dts({ insertTypesEntry: true })],
  build: {
    outDir: "./dist",
    lib: {
      entry: "./src/index.ts",
      name: "ui-kit",
      fileName: "index"
    },
    rollupOptions: {
      external: ["react", "react-dom"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM"
        },
        assetFileNames: function(assetInfo) {
          if (assetInfo.name === "style.css") {
            return "index.css";
          }
          return assetInfo.name;
        }
      }
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxyamUyOFxcXFxEb3dubG9hZHNcXFxcY2FyZWVyLXVwLXN0ZXA1XFxcXGFhXFxcXHBhY2thZ2VzXFxcXHVpLWtpdFwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiQzpcXFxcVXNlcnNcXFxccmplMjhcXFxcRG93bmxvYWRzXFxcXGNhcmVlci11cC1zdGVwNVxcXFxhYVxcXFxwYWNrYWdlc1xcXFx1aS1raXRcXFxcdml0ZS5jb25maWcuanNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0M6L1VzZXJzL3JqZTI4L0Rvd25sb2Fkcy9jYXJlZXItdXAtc3RlcDUvYWEvcGFja2FnZXMvdWkta2l0L3ZpdGUuY29uZmlnLmpzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSBcInZpdGVcIjtcbmltcG9ydCByZWFjdCBmcm9tIFwiQHZpdGVqcy9wbHVnaW4tcmVhY3Qtc3djXCI7XG5pbXBvcnQgZHRzIGZyb20gXCJ2aXRlLXBsdWdpbi1kdHNcIjtcbi8vIGh0dHBzOi8vdml0ZWpzLmRldi9jb25maWcvXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xuICAgIHBsdWdpbnM6IFtyZWFjdCgpLCBkdHMoeyBpbnNlcnRUeXBlc0VudHJ5OiB0cnVlIH0pXSxcbiAgICBidWlsZDoge1xuICAgICAgICBvdXREaXI6IFwiLi9kaXN0XCIsXG4gICAgICAgIGxpYjoge1xuICAgICAgICAgICAgZW50cnk6IFwiLi9zcmMvaW5kZXgudHNcIixcbiAgICAgICAgICAgIG5hbWU6IFwidWkta2l0XCIsXG4gICAgICAgICAgICBmaWxlTmFtZTogXCJpbmRleFwiLFxuICAgICAgICB9LFxuICAgICAgICByb2xsdXBPcHRpb25zOiB7XG4gICAgICAgICAgICBleHRlcm5hbDogW1wicmVhY3RcIiwgXCJyZWFjdC1kb21cIl0sXG4gICAgICAgICAgICBvdXRwdXQ6IHtcbiAgICAgICAgICAgICAgICBnbG9iYWxzOiB7XG4gICAgICAgICAgICAgICAgICAgIHJlYWN0OiBcIlJlYWN0XCIsXG4gICAgICAgICAgICAgICAgICAgIFwicmVhY3QtZG9tXCI6IFwiUmVhY3RET01cIixcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGFzc2V0RmlsZU5hbWVzOiBmdW5jdGlvbiAoYXNzZXRJbmZvKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChhc3NldEluZm8ubmFtZSA9PT0gXCJzdHlsZS5jc3NcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwiaW5kZXguY3NzXCI7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGFzc2V0SW5mby5uYW1lO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgIH0sXG59KTtcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBbVgsU0FBUyxvQkFBb0I7QUFDaFosT0FBTyxXQUFXO0FBQ2xCLE9BQU8sU0FBUztBQUVoQixJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUN4QixTQUFTLENBQUMsTUFBTSxHQUFHLElBQUksRUFBRSxrQkFBa0IsS0FBSyxDQUFDLENBQUM7QUFBQSxFQUNsRCxPQUFPO0FBQUEsSUFDSCxRQUFRO0FBQUEsSUFDUixLQUFLO0FBQUEsTUFDRCxPQUFPO0FBQUEsTUFDUCxNQUFNO0FBQUEsTUFDTixVQUFVO0FBQUEsSUFDZDtBQUFBLElBQ0EsZUFBZTtBQUFBLE1BQ1gsVUFBVSxDQUFDLFNBQVMsV0FBVztBQUFBLE1BQy9CLFFBQVE7QUFBQSxRQUNKLFNBQVM7QUFBQSxVQUNMLE9BQU87QUFBQSxVQUNQLGFBQWE7QUFBQSxRQUNqQjtBQUFBLFFBQ0EsZ0JBQWdCLFNBQVUsV0FBVztBQUNqQyxjQUFJLFVBQVUsU0FBUyxhQUFhO0FBQ2hDLG1CQUFPO0FBQUEsVUFDWDtBQUNBLGlCQUFPLFVBQVU7QUFBQSxRQUNyQjtBQUFBLE1BQ0o7QUFBQSxJQUNKO0FBQUEsRUFDSjtBQUNKLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
