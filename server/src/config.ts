import dotenv from "dotenv";
import path from "path";

dotenv.config({ path: path.resolve(__dirname, "./../.env") });

interface ENV {
  NODE_ENV: string | undefined;
  DB_URL: string | undefined;
}

interface Config {
  NODE_ENV: string;
  DB_URL: string;
}

// Loading process.env as ENV interface

const getConfig = (): ENV => {
  return {
    NODE_ENV: process.env.NODE_ENV,
    DB_URL: process.env.DB_URL,
  };
};

const getSanitzedConfig = (config: ENV): Config => {
  for (const [key, value] of Object.entries(config)) {
    if (value === undefined) {
      throw new Error(`Missing key ${key} in config.env`);
    }
  }
  return config as Config;
};

const config = getConfig();

const sanitizedConfig = getSanitzedConfig(config);

export default sanitizedConfig;
