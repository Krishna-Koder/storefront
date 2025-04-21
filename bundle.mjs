import esbuild from 'esbuild';

const ctx = await esbuild.context({
  entryPoints: ['./plp.ts'],
  bundle: true,
  format: 'esm',
  outfile: 'public/plp.js',
  platform: 'browser',
  sourcemap: true,
  define: {
    'process.env.NODE_ENV': '"development"',
  },
});

if (process.argv.includes('--watch')) {
  await ctx.watch();
  console.log('Watching for changes...');
} else {
  await ctx.rebuild();
  console.log('Build complete.');
  process.exit(0);
}

