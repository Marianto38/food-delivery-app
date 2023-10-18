export default {
    name: 'buyer',
    title: 'Comprador', // Cambiado a español
    type: 'document',
    fields: [
      {
        name: 'name', // Cambiado a inglés
        title: 'Nombre', // Cambiado a español
        type: 'string',
      },
      {
        name: 'direccion',
        title: 'Address',
        type: 'string',
      },
      {
        name: 'telefono',
        title: 'Phone',
        type: 'string',
      },
      {
        name: 'id',
        title: 'ID',
        type: 'number',
      },
      {
        name: 'email',
        title: 'Email',
        type: 'email',
      },
    ],
  };
  