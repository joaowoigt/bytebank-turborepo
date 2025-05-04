export const validateUserName = (value: string) => {
  if (!value.includes(" ") && value.trim().length > 0) {
    return {
      show: true,
      message: "Digite um nome e sobrenome de usuário válido",
    };
  } else {
    return { show: false, message: "" };
  }
};
