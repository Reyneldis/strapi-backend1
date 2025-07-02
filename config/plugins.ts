module.exports = ({ env }) => ({
  upload: {
    config: {
      provider: 'strapi-provider-upload-supabase', // Nombre completo del paquete
      providerOptions: {
        apiUrl: env('SUPABASE_API_URL'), // Solo el nombre de la variable, no la URL completa
        apiKey: env('SUPABASE_API_KEY'), // Solo el nombre de la variable
        bucket: env('SUPABASE_BUCKET', 'strapi-uploads'), // Valor por defecto
        directory: env('SUPABASE_DIRECTORY', ''), // Directorio dentro del bucket, no URL
        options: {},
      },
    },
  },
});
