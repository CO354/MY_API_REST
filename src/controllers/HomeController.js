import Aluno from '../models/Aluno';

class HomeController {
  async index(req, res) {
    const novoAluno = await Aluno.create({
      nome: 'Edson Jax',
      sobrenome: 'Momade',
      email: 'anselmoahmed@gmail.com',
      idade: 20,
      peso: 54,
      altura: 1.57,
    });
    res.json(novoAluno);
  }
}

export default new HomeController();
