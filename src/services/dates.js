import { facebook, google } from "../firebase/firebaseConfig";

export const inputList = [
    {
      label: "Nombre",
      type: "text",
      name: "name",
    },
    {
      label: "Categoría",
      type: "select",
      name: "category",
    },
    {
      label: "Descripción",
      type: "textarea",
      name: "description",
    },
    {
      label: "Precio",
      type: "number",
      name: "price",
    },
    {
      label: "Cantidad",
      type: "number",
      name: "quantity",
    },
    {
      label: "Imagen",
      type: "file",
      name: "image",
    },
  ];
  export const loginProvider = [
    {
      name: "google",
      image: "https://rotulosmatesanz.com/wp-content/uploads/2017/09/2000px-Google_G_Logo.svg_.png",
      provider: google,
    },
    {
      name: "facebook",
      image: "https://logodownload.org/wp-content/uploads/2014/09/facebook-logo-3-1.png",
      provider: facebook,
    },
  ];

  export const category = [
    {
      label: "Fast food",
      emoji: "🍔",
      value: 1
    },
    {
      label: "Pizza",
      emoji: "🍕",
      value: 2
    },
    {
      label: "Salads",
      emoji: "🥗",
      value: 3
    },
    {
      label: "Coffe",
      emoji: "☕",
      value: 4
    }
  ];

