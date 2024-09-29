let salasDeAula = [
    {
      salasdeaulaid: 1,
      descricao: "Sala 101",
      localizacao: "Bloco A",
      capacidade: 30,
      removido: false,
    },
    {
      salasdeaulaid: 2,
      descricao: "Sala 102",
      localizacao: "Bloco B",
      capacidade: 25,
      removido: false,
    },
  ];
  
  const getAllSalasDeAula = (req, res) => {
    const salas = salasDeAula.filter((sala) => !sala.removido);
    res.json(salas);
  };
  
  const getSalasDeAulaByID = (req, res) => {
    const id = parseInt(req.params.id);
    const sala = salasDeAula.find(
      (sala) => sala.salasdeaulaid === id && !sala.removido
    );
  
    if (sala) {
      res.json(sala);
    } else {
      res.status(404).json({ mensagem: "Sala de aula não encontrada." });
    }
  };
  
  const insertSalasDeAula = (req, res) => {
    const novaSala = {
      salasdeaulaid: salasDeAula.length + 1,
      descricao: req.body.descricao,
      localizacao: req.body.localizacao,
      capacidade: req.body.capacidade,
      removido: false,
    };
    salasDeAula.push(novaSala);
    res.status(201).json(novaSala);
  };
  
  const updateSalasDeAula = (req, res) => {
    const id = parseInt(req.params.id);
    const index = salasDeAula.findIndex(
      (sala) => sala.salasdeaulaid === id && !sala.removido
    );
  
    if (index !== -1) {
      salasDeAula[index] = { ...salasDeAula[index], ...req.body };
      res.json(salasDeAula[index]);
    } else {
      res.status(404).json({ mensagem: "Sala de aula não encontrada." });
    }
  };
  
  const deleteSalasDeAula = (req, res) => {
    const id = parseInt(req.params.id);
    const index = salasDeAula.findIndex(
      (sala) => sala.salasdeaulaid === id && !sala.removido
    );
  
    if (index !== -1) {
      salasDeAula[index].removido = true;
      res.json({ mensagem: "Sala de aula removida com sucesso." });
    } else {
      res.status(404).json({ mensagem: "Sala de aula não encontrada." });
    }
  };
  
  module.exports = {
    getAllSalasDeAula,
    getSalasDeAulaByID,
    insertSalasDeAula,
    updateSalasDeAula,
    deleteSalasDeAula,
  };