// Esquema para el producto en el carrito de compra
export default {
    name: 'product',
    title: 'Product',
    type: 'document',
    fields: [
      {
        name: 'id',
        title: 'ID',
        type: 'number',
      },
      {
        name: 'reference',
        title: 'Referencia',
        type: 'string',
      },
      {
        name: 'name',
        title: 'Nombre de producto',
        type: 'string',
      },
    //   {
    //     name: 'weight',
    //     title: 'Peso',
    //     type: 'string',
    //   },
      {
        name: 'description',
        title: 'Descripción',
        type: 'string',
      },
      {
        name: 'price',
        title: 'Precio',
        type: 'number',
      },
      {
        name: 'discount',
        title: 'Descuento',
        type: 'number',
      },
      {
        name: 'category',
        title: 'Categoria',
        type: 'string',
      },
      {
        name: 'productImage',
            title: 'Imagen del producto',
            type: 'image',
            options: {
                hotspot: true
            }
      },
      {
          name: 'stock',
          title: 'Cantidades disponibles del producto',
          type: 'number',
        },
        // {
        //   name: 'quantity',
        //   title: 'Cantidad para compra (no diligenciar)',
        //   type: 'number',
        // },
    ],
  };
  