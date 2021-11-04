function validaCpf(cpf) {
  if (cpf.length !== 11) {
    return { valido: false, texto: "O CPF deve conter 11 digtos!" };
  } else {
    return { valido: true, texto: "" };
  }
}

function validaSenha(senha) {
  if (senha.length < 6 || senha.length > 72) {
    return { valido: false, texto: "A senha deve conter entre 6 e 72 caracteres" };
  } else {
    return { valido: true, texto: "" };
  }
}

export {validaCpf, validaSenha}