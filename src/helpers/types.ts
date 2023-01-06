declare global {
  interface String {
    epur(): string;
  }
};

// Declare the `epur()` method on String
String.prototype.epur = function () {
  return this?.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "");
};

interface App {

};

export {};
