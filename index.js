import * as dotenv from 'dotenv';

import express from 'express';
import { v4 as uuidv4 } from 'uuid';

dotenv.config();
const app = express();
app.use(express.json());

const bancoDados = [
  {
    id: 'e27ab2b1-cb91-4b18-ab90-5895cc9abd29',
    documentName: 'Licitação Enap - Curso Web Dev',
    status: 'Em andamento',
    details: [
      'Processo para capacitação de servidores públicos em desenvolvimento de aplicações na WEB',
      'Parceria com Ironhack',
    ],
    dateInit: '28/11/2022',
    comments: [
      'Processo aberto',
      'Processo partiu para as partes assinarem',
      'Processo agora está em análise final',
      'Processo já tem data final',
    ],
    dateEnd: '16/12/2022',
    setor: 'enap',
  },
  {
    id: 'ee5999d7-02e9-4b3d-a1ab-f067eef54173',
    documentName: 'Licitação Compras - Notebooks',
    status: 'Em andamento',
    details: ['Processo de licitação para compra de notebooks'],
    dateInit: '30/11/2022',
    comments: ['Processo em aberto e sem previsão de conclusão'],
    dateEnd: '',
    setor: 'tre',
  },
  {
    id: 'ee5999d7-02e9-4b3d-a1ab-f067eef54173',
    documentName: 'Licitação Compras - Ar Condicionado',
    status: 'Finalizado',
    details: ['Processo de licitação para compra de ar-condicionado'],
    dateInit: '15/11/2022',
    comments: ['Processo em aberto', 'Processo finalizado'],
    dateEnd: '25/11/2022',
    setor: 'trj',
  },
];

app.get('/all', (req, res) => {
  return res.status(200).json(bancoDados);
});

app.post('/creat', (req, res) => {
  const form = req.body;
  bancoDados.push(form);
  return res.status(201).json(req.body);
});

app.delete('/delete/:id', (req, res) => {
  const { id } = req.params;
  const deleteById = bancoDados.find(user => user.id === id);
  const index = bancoDados.indexOf(deleteById);
  bancoDados.splice(index, 1);
  return res.status(200).json(bancoDados);
});

app.listen(process.env.PORT, () => {
  console.log(
    `App up and running on port http://localhost:${process.env.PORT}`
  );
});
