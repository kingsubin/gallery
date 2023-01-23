export default function configureStorage() {
  return {
    storage: {
      keyFilename: process.env.STORAGE_KEY_FILENAME,
      name: process.env.STORAGE_NAME,
    },
  };
}
