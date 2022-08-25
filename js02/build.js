const { build } = require("esbuild");
const svg = require("esbuild-plugin-svgr");
const path = require("path");

build({
  entryPoints: [path.resolve(__dirname, "src/main.js")],
  bundle: true,
  outfile: path.resolve(__dirname, "public/bundle.js"),
  platform: "node",
  plugins: [svg()],
}).catch(() => process.exit(1));
