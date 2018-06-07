export let md = {};

const importAll = (request) => {
  request.keys().forEach(key => md[key] = request(key));
}

importAll(require.context('./', true, /\.md$/))
