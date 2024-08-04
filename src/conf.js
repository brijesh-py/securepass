const conf = {
  mailServiceID: import.meta.env.VITE_MAIL_SERVICE_ID,
  mailTemplateID: import.meta.env.VITE_MAIL_TEMPLATE_ID,
  mailPublicKey: import.meta.env.VITE_MAIL_PUBLIC_KEY,
  jwtSecretKey: import.meta.env.VITE_JWT_SECRET_KEY,
};

export default conf;
