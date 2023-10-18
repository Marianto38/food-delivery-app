export default {
    name: 'shoppingCart',
    title: 'Compras',
    type: 'document',
    fields: [
      {
        name: 'buyer',
        title: 'Comprador',
        type: 'reference',
        to: [{ type: 'buyer' }], // Referencia al esquema del comprador
      },
      {
        name: 'products',
        title: 'Lista de Productos',
        type: 'array',
        of: [{ type: 'product' }], // Lista de productos en el carrito
      },
    ],
  };