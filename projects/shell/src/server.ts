import { initNodeFederation } from '@softarc/native-federation-node';

console.log('Starting SSR for Shell');

(async () => {

  await initNodeFederation({
    remotesOrManifestUrl: { mfe1: 'http://localhost:4201/remoteEntry.json' },
    relBundlePath: './dist/shell/browser/',
  });
  await import('./bootstrap-server');

})();
