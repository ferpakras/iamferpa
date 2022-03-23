import Head from 'next/head';
import { styled } from '../../stitches.config';
import Layout from './_layout';
import { Text } from '../shared/components/text/Text';
import CardList from '../shared/components/cards/CardsList';

const Box = styled('section', {
  marginBottom: '$7',
});

const Link = styled('a', {
  fontFamily: '$system',
  textDecoration: 'none',
  color: '$gray4',
});

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>hello, i am ferpa.</title>
      </Head>
      <Box>
        <Text as="h1">oi, sou o ferpa :)</Text>

        <Text>
          na verdade, minha identidade diz <strong>fernando krasnievicz</strong> mas a grande
          maioria me chama de <strong>ferpa</strong>, logo… como preferir =)
        </Text>

        <Text>
          vou compartilhar aqui um pouco da minha experiência e tentar traduzir coisas que por aí
          parecem bem confusas, principalmente <strong>pra quem</strong> está começando ou{' '}
          <strong>migrando de área</strong>.
        </Text>
      </Box>

      <Box>
        <Text as="h2">artigos</Text>
        <CardList
          cards={[
            {
              title: 'pare de se comparar',
              description: 'você não sabe tudo, ninguém sabe... e tá tudo bem!',
              href: '/artigos',
              linkTitle: 'clique para ler o artigo pare de se comparar',
              date: 'Fev, 2022',
            },
            {
              title: 'já se sentiu uma pessoa desvalorizada?',
              description: 'parece que não estou sendo reconhecido',
              href: '/artigos/ja-se-sentiu-uma-pessoa-desvalorizada',
              linkTitle: 'clique para ler o artigo sobre se sentir desvalorizado',
              date: 'Mar, 2022',
            },
            {
              title: 'os chamados soft skills',
              description: 'já ouviu esse termo, né? o que são soft skills?',
              href: '/artigos/os-chamados-softskills',
              linkTitle: 'clique para ler o artigo sobre soft skills',
              date: 'Mar, 2022',
            },
          ]}
        />
      </Box>
    </Layout>
  );
}
