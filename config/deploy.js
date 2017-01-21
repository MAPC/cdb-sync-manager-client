module.exports = function(deployTarget) {  
  return {
    pagefront: {
      app: 'cdb-sync-manager-client',
      key: process.env.PAGEFRONT_KEY
    }
  };
};
