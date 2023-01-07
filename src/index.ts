import { connect, set } from 'mongoose';
import { bot          } from "./discord";
import * as config      from "./config.json";

set('strictQuery', false);

declare global {
  interface String {
    epur(): string;
  }
};

// Declare the `epur()` method on String
String.prototype.epur = function () {
  return this.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "");
};

// Start MongoDB's database and import a script file if launched with a third argument
(async () => {
  await connect(config.databaseUrl).catch(err => {
    console.error(err);
    process.exit(1);
  });
  console.log(`Connected to database at ${config.databaseUrl}`);
  try {
    if (process.argv.length !== 2) {
      const script = await import(`./scripts/${process.argv[2]}`);
      script.default();
    } else {
      await bot.login(config.discordToken);
    }
  } catch (err) {
    console.error(err)
    process.exit(1);
  }
})();
