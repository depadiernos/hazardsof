export let img = {};

const importAll = (request) => {
  request.keys().forEach(key => img[key] = request(key));
}

importAll(require.context('./', true, /\.(png|jpg|gif)$/))
