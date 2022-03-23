import Head from 'next/head';
import { Text } from '../../shared/components/text/Text';
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
        <title>hello, i am ferpa. - os chamados soft skills</title>
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

      <Text as="h1">
        os chamados <em>soft skills</em>
      </Text>

      <Text>
        você certamente já ouviu esse termo, né? mas afinal, o que são <em>soft skills</em>?
      </Text>
      <Text>
        em resumo, é o nosso <strong>comportamental</strong>.
      </Text>
      <Text>
        sabe quando estamos num processo seletivo e temos uma entrevista com rh e outra com o time
        técnico? na grande maioria das vezes o rh valida os nossos <em>soft skills</em>.
      </Text>
      <Text>
        mas vamos lá, por que eles são importantes? um antigo líder meu me falou uma vez e isso
        nunca mais me saiu da cabeça:{' '}
        <strong>
          <em>"o técnico é treinável"</em>
        </strong>
        . mas e o que isso quer dizer?
      </Text>
      <Text>
        que se a pessoa estiver disposta, ela aprende qualquer coisa. agora, postura, caráter,
        comportamento, isso já vem de fábrica. é mais dicífil de mudar em alguém.
      </Text>
      <Text>
        você certamente já morou com alguém, e esse alguém tinha suas manias.{' '}
        <strong>e tá tudo bem</strong>. não temos como mudar o comportamento do outro. mas podemos
        mudar a forma como <strong>nós enxergamos</strong> o comportamento do outro (isso sim está
        sob nosso controle - o quanto isso nos afeta ou não).
      </Text>
      <Text>e por que isso é importante pra área de desenvolvimento / programação?</Text>
      <Text>
        nós devs, ao mesmo tempo que trabalhamos sozinhos, nunca fazemos nada sozinhos. deu pra
        entender? :D
      </Text>
      <Text>
        sempre estamos pesquisando coisas, trocando ideia com alguém, compartilhando conhecimento e
        estudando coisas novas. é aqui que entra a parte do "o técnico é treinável". se a pessoa
        estiver realmente disposta, nada tira o aprendizado dela.
      </Text>
      <Text>
        agora, se a pessoa tem um perfil difícil de lidar, é negativista, sempre colocando
        empecilhos nas conversas, sempre vê o lado ruim das coisas, não consegue ouvir o colega de
        trabalho e se atravessa o tempo todo, faz questão de expor os colegas e por aí vai... o
        negócio complica um pouco.
      </Text>
      <Text>
        e o que acontece? esse tipo de pessoa é geralmente evitada no ambiente de trabalho. o
        restante do time tende a se afastar desses perfis e isso gera um desconforto quando precisam
        trabalhar juntos em alguns momentos. acontece até de{' '}
        <strong>bons profissionais saírem</strong> da empresa por conta de outros,{' '}
        <strong>sem</strong> o básico dos{' '}
        <strong>
          <em>soft skills</em>
        </strong>
        .
      </Text>
      <Text>esse único indivíduo é capaz de desestruturar o time todo.</Text>
      <Text>
        <strong>
          <em>#ficadica:</em> não seja essa pessoa =D
        </strong>
      </Text>
      <Text>
        respeite as pessoas a sua volta, dê atenção de verdade, olhe no olho, pergunte se está tudo
        bem mas esteja de fato interessado na resposta.
      </Text>
      <Text>
        ofereça ajuda mesmo que não faça a mínima ideia do que se trata, as vezes seu colega só está
        precisando conversar um pouco pra sair daquele buraco que entrou.
      </Text>
      <Text>
        empatia faz toda a diferença. se coloque no lugar do outro. não julgue o trabalho realizado,
        você não sabe as condições que a pessoa teve para fazê-lo (dificuldades técnicas, problemas
        de relacionamento, problemas de saúde na família, problemas financeiros, coisas externas),
        tudo isso <strong>influencia diretamente no nosso rendimento diário</strong>.
      </Text>
      <Text>
        isso deixa o ambiente de trabalho mais leve, mais amigável, e no{' '}
        <strong>meu ponto de vista são soft skills</strong>. todos estão ali por dois principais
        objetivos (o primeiro, ajudar a empresa - sim, ela paga as nossas contas; o segundo,
        alavancar sua carreira pessoal e profissional de alguma forma. experiência!).
      </Text>
      <Text>
        cada um tem a sua batalha, e já temos desafios suficiente com a nossa a ponto de não
        precisar ficar nos preocupando com a batalha dos outros. concorda? :)
      </Text>
      <Text>
        faça a sua parte, no seu tempo, da sua forma. dê o seu melhor e com as ferramentas que tem
        naquele momento.
      </Text>
      <Text>
        <strong>você não precisa agradar ninguém além de você mesmo.</strong>
      </Text>
      <Text>enjoy :)</Text>
    </Layout>
  );
}
