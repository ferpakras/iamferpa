import Head from 'next/head';
import { Text } from '../shared/components/text/Text';
import { styled } from '../../stitches.config';
import Layout from './_layout';

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
      <Text as="h1">pare de se comparar</Text>

      <Text>
        você não sabe tudo, ninguém sabe (embora uns tenham a "necessidade" de demonstrar que
        "sabem") e <strong>tá tudo bem!</strong>
      </Text>
      <Text>
        é comum quando estamos aprendendo coisas novas nos deparamos com uma quantidade imensa de
        informação pois vamos abrindo links diferentes em novas abas e quando percebemos, nosso foco
        já está lá em Nárnia
      </Text>
      <Text>
        essa situação toda começa a gerar uma ansiedade, aquele medo de: "será que eu já deveria
        saber de tudo isso?", "será que é esse o caminho?", "porque isso não entra na minha
        cabeça?".
      </Text>
      <Text>calma, respira, e vamos por partes. uma coisa de cada vez.</Text>
      <Text>
        você eventualmente já ouviu ou, - eu espero de coração que não - vai ouvir a seguinte frase:
        "ah, isso você já deveria saber". lembre-se, <strong>ninguém além de você</strong> sabe o
        melhor momento em que deveria entender de determinado assunto, se ainda não sabe é porque
        não era a sua hora. e segue o jogo.
      </Text>
      <Text>
        não se cobre tanto, cada um tem o seu tempo de aprendizado e isso vale pra tudo, uns
        aprendem a programar mais rápido mas outros adquirem habilidades para lidar com situações
        cotidianas de uma maneira mais assertiva e equilibrada, e <strong>tá tudo bem</strong>.
      </Text>
      <Text>
        entenda o seu tempo, se não está conseguindo absorver o conteúdo pare um pouco, dê uma
        volta, e em seguida tente novamente. é um ciclo.
      </Text>
      <Text>
        direcione suas energias naquilo que você quer atingir, onde quer chegar, quebre suas
        atividades em partes menores, comece devagar, aproveite cada uma dessas etapas, comemore as
        pequenas conquistas.
      </Text>
      <Text>
        e se ainda assim você precisar de um comparativo, compare seu momento atual com{' '}
        <strong>seu eu</strong> de alguns dias atrás, ou de um ano atrás. aí sim eu acho uma
        comparação saudável.
      </Text>
      <Text>borat!</Text>
    </Layout>
  );
}
