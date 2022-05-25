import Head from 'next/head';
import { Text } from '../../shared/components/text/Text';
import { List } from '../../shared/components/List/List';

import { styled } from '../../../stitches.config';
import Layout from '../_layout';

const Box = styled('div', {
  marginBottom: '$4',
});

const Link = styled('a', {
  fontFamily: '$system',
  textDecoration: 'none',
  color: '$violet10',
  transition: 'all .2s',

  '&:hover': {
    color: '$violet8',
  },
});

export default function Artigos() {
  return (
    <Layout>
      <Head>
        <title>hello, i am ferpa. - escolha o seu difícil</title>
      </Head>

      <Box>
        <Link href="/artigos" title="Go back to artigos page">
          <a>
            <em>
              ...voltar para <strong>página de /artigos</strong>
            </em>
          </a>
        </Link>
      </Box>

      <Text as="h1">escolha seu difícil</Text>

      <Text>
        estamos vivendo num mundo onde as coisas não estão - tavez nunca foram - fáceis. crise
        econômica, pandemia, crise climática, guerra, crise política.
      </Text>

      <Text>
        alguns podem falar: "<em>ah, mas antigamente era mais fácil</em>". antigamente não tínhamos
        acesso à informação como temos hoje pra saber se realmente era mais fácil. obviamente
        precisamos filtrar boa parte das coisas que vemos por aí, porque muita coisa é uma
        inverdade.
      </Text>

      <Text>tudo isso faz parte desse avanço da tecnologia.</Text>

      <Text>
        você certamente já passou por um momento difícil e outro, também difícil (ou caracterizado
        como "<em>mais fácil</em> / <em>menos difícil</em>"), mas que foi facilmente superado.
      </Text>

      <Text>
        já parou pra analisar que esse momento "<em>mais fácil</em>", talvez você estivesse{' '}
        <strong>mais preparado(a)</strong>?
      </Text>

      <Text>
        todos sabemos da realidade do nosso brasilzão, aqui não poderia ser diferente. tantos
        escândalos, tanta coisa que deveria acontecer e não acontece. a{' '}
        <strong>oportunidade não é a mesma pra todo mundo</strong>.
      </Text>

      <Text>
        independente de realidades tão distantes, não pense que a sua batalha é mais sofrida que a
        do outro. <strong>todos temos as nossas batalhas</strong> e é apenas com elas que devemos
        nos preocupar. aqui entra a empatia.
      </Text>

      <Text>
        as vezes uma família entitulada como "<em>pobre</em>" (e aí cada um tem seu conceito sobre
        pobreza), tem muito mais amor em casa, muito mais amigos de verdade em quem podem confiar,
        muito mais bondade no coração. diferente de famílias "<em>ricas</em>", cercadas de "amigos"
        em quem não podem confiar, em uma relação mentirosa e sem condições de deitar a cabeça no
        travesseiro e dormir tranquilamente.
      </Text>

      <Text>o que vale mais a pena na sua opinião?</Text>

      <Text>
        mas pra você, o que fez o seu dia de ontem valer a pena? O que fará hoje para que seja
        melhor que ontem? O que iniciará hoje que fará a diferença nos seus próximos anos?
      </Text>

      <Text>
        <strong>não tem escolha fácil</strong>.
      </Text>

      <Text>
        <strong>emagracer é difícil</strong>. comer tudo o que vê pela frente, se sentir
        desconfortável na roupa que gosta e não ficar satisfeito com sua imagem no espelho, também é
        difícil. e ó que falo por experiência própria, não sou lá um exemplo fisicultural de pessoa
        :D
      </Text>

      <Text>
        <strong>ganhar dinheiro é difícil</strong>. ficar sem dinheiro é mais difícil ainda.
        desumano.
      </Text>

      <Text>
        estudar uma coisa nova, <strong>sair da zona de conforto é difícil</strong>. ficar parado,
        sentindo que está perdendo tempo também é dífícil. ainda mais numa realidade onde a rede
        social mostra um punhado de "<em>vidas perfeitas</em>", e entender que nem tudo são flores é
        importante.
      </Text>

      <Text>
        <strong>ter disciplina é difícil</strong>. não ter disciplina e saber que você é capaz de
        muita coisa mas falta aquele empurrãozinho, é difícil. <strong>busque ajuda</strong>.
        <strong>se permita</strong> ser ajudado(a).
      </Text>

      <Text>
        fazer um novo processo seletivo, <strong>aprender uma tecnologia nova é difícil</strong>.
        não tentar por se julgar incapaz ou achar que aquilo não é pra você, é mais difícil ainda.
      </Text>

      <Text>
        <strong>se joga! sua vida, sua história, sua carreira.</strong>
      </Text>

      <Text>
        aqui cabe uma atividade:{' '}
        <strong>liste tudo o que você faz hoje e tudo o que você gostaria de fazer.</strong>
      </Text>

      <Text>
        <strong>por exemplo, eu hoje:</strong>
      </Text>
      <List>
        <li>
          <em>acordo às 09h</em>
        </li>
        <li>
          <em>como qualquer coisa no café</em>
        </li>
        <li>
          <em>perco foco no celular pela manhã</em>
        </li>
        <li>
          <em>almoço o que tem</em>
        </li>
        <li>
          <em>...</em>
        </li>
      </List>

      <Text>
        <strong>o eu que eu gostaria:</strong>
      </Text>
      <List>
        <li>
          <em>acordar às 07h, tomar um café reforçado e fazer um exercício</em>
        </li>
        <li>
          <em>ler algumas páginas de um livro que me ajude de alguma forma</em>
        </li>
        <li>
          <em>método pomodoro de produtividade nos estudos ou no trabalho pela manhã</em>
        </li>
        <li>
          <em>almoço equilibrado, pra sobrar espaço pra sobremesinha que não pode faltar</em>
        </li>
        <li>
          <em>...</em>
        </li>
      </List>

      <Text>
        independente da escolha, não será fácil. mas <strong>está tudo bem</strong>, você só precisa
        escolher o seu difícil.
      </Text>

      <Text>
        e quanto antes você fizer essa escolha, mais tempo terá pra trabalhar em parceria com ela e
        fazê-la ficar menos difícil dia após dia.
      </Text>

      <Text>
        temos uma única chance de fazer acontecer, a vida passa num sopro. se tem medo, vai com medo
        mesmo. se fica com ansiedade, pare um pouco, respire, da mesma forma que esse turbilhão de
        pensamentos chega na sua mente, eles vão embora. não dê atenção àquilo que não tem controle.
      </Text>

      <Text>
        a vida do outro é só do outro a menos que você pense o contrário e se incomode com isso.
      </Text>

      <Text>como tudo na vida, não é fácil. mas vai dar certo!</Text>

      <Text>borat!</Text>
    </Layout>
  );
}
