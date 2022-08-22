const { build } = require("esbuild");
const path = require("path");

build({
  entryPoints: [path.resolve(__dirname, "src/main.js")],
  bundle: true,
  outfile: path.resolve(__dirname, "public/bundle.js"),
}).catch(() => process.exit(1));
