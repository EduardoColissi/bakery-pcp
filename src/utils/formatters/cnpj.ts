function cnpjMask(cnpj: string): string {
  const numbers = cnpj.replace(/\D/g, "");

  return numbers.replace(
    /^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})$/,
    "$1.$2.$3/$4-$5"
  );
}

function removeCnpjMask(cnpj: string): string {
  return cnpj.replace(/\D/g, "");
}

export { cnpjMask, removeCnpjMask };
