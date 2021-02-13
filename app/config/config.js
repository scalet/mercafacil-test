module.exports = {
  development: {
    databases: {
      "Database1": {
        "database": "macapa",
        "username": "admin",
        "password":  "admin",
        "host": "0.0.0.0",
        "port": "3306",
        "dialect": "mysql"
      },
      "Database2": {
        "database": "varejao", 
        "username": "admin",  
        "password":  "admin",  
        "host": "0.0.0.0",
        "port": "5432",
        "dialect": "postgres"
      }
    },
    Database1: {
      "database": "macapa",
      "username": "admin",
      "password":  "admin",
      "host": "0.0.0.0",
      "port": "3306",
      "dialect": "mysql"
    },
    Database2: {
      "database": "varejao", 
      "username": "admin",  
      "password":  "admin",  
      "host": "0.0.0.0",
      "port": "5432",
      "dialect": "postgres"
    }
  }
}
