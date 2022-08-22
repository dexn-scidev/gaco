require("esbuild")
  .build({
    entryPoints: ["main.js"],
    bundle: true,
    outfile: "bundle.js",
  })
  .catch(() => process.exit(1));
