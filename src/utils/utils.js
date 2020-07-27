const options = { style: "currency", currency: "BRL" };
const price = new Intl.NumberFormat("pt-BR", options);

export const formatPrice = (value) => {
  return price.format(value);
};

export const generatePrice = () => {
  const value = Math.floor(Math.random() * 100);
  return value;
};

export const toggleCart = () => {
  document.querySelector(".cart").classList.toggle("show");
};
