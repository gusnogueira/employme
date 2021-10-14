import React from 'react';
import { Grid } from '@material-ui/core';

import {
  Container, Card, LabelNome, LabelDetails, Icone, ContainerIcones,
} from './styles';
import iconeEdit from '../../../../assets/IconeEdit.svg';
import iconeDelete from '../../../../assets/IconeDelete.svg';

interface ICardProcesso {
    nome: string;
    email: string;
    telefone: string;
    vaga: string;
    empresa: string;
    status: string
  }

const CardProcesso: React.FC<ICardProcesso> = ({
  nome, email, telefone, vaga, empresa, status,
}) => (
  <Grid item xs={12} direction="row">
    <Container>
      <Card>
        <LabelNome>{nome}</LabelNome>
        <LabelDetails>{email}</LabelDetails>
        <LabelDetails>{telefone}</LabelDetails>
        <LabelDetails>
          Vaga:
          {' '}
          {vaga}
        </LabelDetails>
        <LabelDetails>
          Empresa:
          {' '}
          {empresa}
        </LabelDetails>
        <LabelDetails>
          Status:
          {' '}
          {status}
        </LabelDetails>

      </Card>
      <ContainerIcones>
        <Icone src={iconeEdit} />
        <Icone src={iconeDelete} />
      </ContainerIcones>
    </Container>
  </Grid>

);

export default CardProcesso;
