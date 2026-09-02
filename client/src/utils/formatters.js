export const getWhatsAppLink = (message = "") => {
  const number = import.meta.env.VITE_WHATSAPP_NUMBER;
  const defaultMsg = import.meta.env.VITE_WHATSAPP_MESSAGE;
  const text = encodeURIComponent(message || defaultMsg);
  return `https://wa.me/${number}?text=${text}`;
};

export const getWhatsAppRegistrationLink = (fullName = "I") => {
  const message = `Hello Aarogyam Wellness Centre,\n\nI have successfully registered for the workshop.\n\nThank You.`;
  return getWhatsAppLink(message);
};

export const cn = (...classes) => classes.filter(Boolean).join(" ");
