const fs = require('fs/promises');
const path = require('path');

async function clearCache() {
    const cachePath = path.resolve(__dirname, '..', 'node_modules', '.cache');

    try {
        await fs.rm(cachePath, { recursive: true, force: true });
        console.log('Cache deleted:', cachePath);
    } catch (err) {
        console.error('Error deleting cache:', err);
    }
}

clearCache();
