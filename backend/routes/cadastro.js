const fastify = require('fastify')({logger:true});
const firestore = require('../firebaseConfig');

fastify.get('/cadastro', async (request, reply) => {
    return { hello: 'world' };
  });
  
  // Inicia o servidor
  const startServer = async () => {
    try {
      const address = await fastify.listen({ port: 3000 });
      console.log(`Servidor rodando em ${address}`);
    } catch (err) {
      fastify.log.error(err);
      process.exit(1);
    }
  };
  
  start();