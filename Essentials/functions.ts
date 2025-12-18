function add(a: number, b: number): number {
  return a + b;
}

function log(message: string): void {
  console.log(message);
}

function logAndThrow(message: string): never {
  console.log(message);
  throw new Error(message);
}

function performJob(cb: () => void): void {
  cb();
}