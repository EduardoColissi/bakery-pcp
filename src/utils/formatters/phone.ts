function phoneMask(phone: string): string {
  const numbers = phone.replace(/\D/g, "");

  return numbers.replace(/^(\d{2})(\d{5})(\d{4})$/, "($1)$2-$3");
}

export { phoneMask };
