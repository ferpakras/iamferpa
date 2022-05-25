import Head from 'next/head';
import { Text } from '../../shared/components/text/Text';
import { styled } from '../../../stitches.config';
import Layout from '../_layout';
import CardList from '../../shared/components/cards/CardsList';

const Box = styled('div', {});

const Link = styled('a', {
  fontFamily: '$system',
  textDecoration: 'none',
  color: '$purple600',
});

export default function Artigos() {
  return (
    <Layout>
      <Head>
        <title>hello, i am ferpa. - pare de se comparar</title>
      </Head>
      <Text as="h1">artigos</Text>

      <CardList
        cards={[
          {
            title: 'escolha o seu difícil',
            description: 'a dificuldade existe pra todos, acredite!',
            href: '/artigos/escolha-seu-dificil',
            linkTitle: 'clique para ler o artigo sobre escolha seu difícil',
            date: 'Mai, 2022',
          },
          {
            title: 'os chamados soft skills',
            description: 'já ouviu esse termo, né? o que são soft skills?',
            href: '/artigos/os-chamados-softskills',
            linkTitle: 'clique para ler o artigo sobre soft skills',
            date: 'Mar, 2022',
          },
          {
            title: 'já se sentiu uma pessoa desvalorizada?',
            description: 'parece que não estou sendo reconhecido',
            href: '/artigos/ja-se-sentiu-uma-pessoa-desvalorizada',
            linkTitle: 'clique para ler o artigo sobre se sentir desvalorizado',
            date: 'Mar, 2022',
          },
          {
            title: 'pare de se comparar',
            description: 'você não sabe tudo, ninguém sabe... e tá tudo bem!',
            href: '/artigos/pare-de-se-comparar',
            linkTitle: 'clique para ler o artigo pare de se comparar',
            date: 'Fev, 2022',
          },
        ]}
      />
    </Layout>
  );
}
