import fs from 'fs/promises';

const contenido = `
ATLAS_USER="latinoamericacampus233"
ATLAS_PASSWORD="Campus*2023"
ATLAS_DB="FacturacionCampus_JuanDavidAvilaRavelo"
JWT_PRIVATE_KEY="cc"
MY_SERVER={"hostname":"127.1.1.1","port":5510}
`;

const archivo = '.env';

(async () => {
    try {
        await fs.writeFile(archivo, contenido);
        console.log(`Se ha creado el archivo "${archivo}"`);
        console.warn("No te olvides de agregar tus credenciales en el archivo .env\n");
    } catch (err) {
        console.error('Error al crear el archivo:', err);
    }
})();
