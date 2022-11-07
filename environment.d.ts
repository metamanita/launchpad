declare global {
    namespace NodeJS {
      interface ProcessEnv {
        REACT_APP_POLYGON_PROVIDER: string;
        REACT_APP_MUMBAI_PROVIDER: string;
        // PORT?: string;
        // PWD: string;
      }
    }
  }
  
  // If this file has no import/export statements (i.e. is a script)
  // convert it into a module by adding an empty export statement.
  export {}