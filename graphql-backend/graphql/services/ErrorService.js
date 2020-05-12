const ErrorService = {
  requireEntity: (entity, EntityName) => { 
    if(!entity) throw new Error(EntityName + ' not found! ErrorHandleService');
  },
  throwError: (message) => {
    throw new Error(message + " ErrorHandleService");
  }
}

module.exports = ErrorService;