import Head from 'next/head';
import { styled } from '../../stitches.config';
import Layout from './_layout';
import { Text } from '../shared/components/text/Text';

const Box = styled('div', {});

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
      <Text as="h1">oi, sou o ferpa :)</Text>

      <Text>
        na verdade, minha identidade diz <strong>fernando krasnievicz</strong> mas a grande maioria
        me chama de <strong>ferpa</strong>, logo… como preferirem =)
      </Text>
      <Text>
        vamos lá: tenho 33+, sou casado com a Fran, pai do Bento e temos duas cachorrinhas de
        mascotes - a Fyre e a Foxy - é sério esse nome, também tenho contato diário com{' '}
        <em>front</em> pelos meus últimos 15 anos (profissionalmente, 12).
      </Text>
      <Text>
        além de desenvolver, atuei também como gestor e como <em>chapter</em> líder de front, então
        lidar com pessoas é uma coisa que eu gosto muito.
      </Text>
      <Text>
        e o objetivo desse espaço aqui? compartilhar um pouco da minha experiência como dev e tentar
        trazer de uma maneira mais clara e direta coisas que por aí parecem bem confusas,
        principalmente <strong>pra quem</strong> está começando ou <strong>migrando de área</strong>
        .
      </Text>
      <Text>
        mas quero colocar aqui também coisas sobre mentalidade e equilíbrio emocional, porque a
        parte técnica a gente aprende na prática, no dia a dia, mas o{' '}
        <strong>equilíbrio emocional</strong> que afeta violentamente a sua{' '}
        <strong>evolução</strong> - e sem você perceber - também merecem atenção.
      </Text>
      <Text>
        por fim, não sofra sozinha(o). de alguma forma conseguimos nos ajudar. é só pedir ajuda o/
      </Text>
      <Text>
        e guarde isso contigo, de verdade: <strong>"tá tudo bem"</strong>. você vai entender =)
      </Text>
      <Text>bóóóóóra!!!</Text>
    </Layout>
  );
}
