import Head from 'next/head';
import { Text } from '../../shared/components/text/Text';
import { styled } from '../../../stitches.config';
import Layout from '../_layout';
import { Separator } from '../../shared/components/separator/Separator';

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
        <title>hello, i am ferpa. - já se sentiu uma pessoa desvalorizada?</title>
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

      <Text as="h1">já se sentiu uma pessoa desvalorizada?</Text>
      <Text as="h2">o poder da expectativa...</Text>

      <Text>
        pois é, eu já fiquei muito chateado diversas vezes por achar que estava dando o sangue pela
        empresa e não tinha ninguém observando. ou pior, até tinha, mas aquele{' '}
        <strong>"reconhecimento"</strong> não vinha.
      </Text>
      <Text>
        só um parenteses aqui, o que é de fato um reconhecimento pra você? um elogio, uma nova
        oportunidade na empresa, ou simplesmente um aumento salarial? acho que ter isso em mente
        pode te ajudar com expectativas futuras :D
      </Text>
      <Text>
        falando em expectativas, isso vale pra tudo. na maioria das vezes nos decepcionamos quando
        criamos uma falsa expectativa. de novo, pra tudo mesmo. em uma negociação, em uma prova, no
        relacionamento, no trabalho, em entrevistas de emprego. então se tem um ponto que precisamos
        muito cuidar diariamente, é com essa tal de expectativa.
      </Text>
      <Text>
        se a pessoa não sabe o que eu quero, porque espero que ela imagine, crio uma expectativa em
        cima disso, e ainda fico chateado quando não acontece como desenhei. mas com o tempo
        aprendemos. já fiz muito isso, e pra ser sincero as vezes ainda escapa umas :D
      </Text>
      <Text>
        mas falando sério, e sobre o mercado dev? só uma pessoa com background técnico consegue
        entender ao pé da letra o que fazemos, concorda? e tem lugares onde gestores não tem esse
        background ou, que pelo menos entendam o que a gente faz. não estou generalizando, mas
        acontece. e <strong>tá tudo bem!</strong>
      </Text>
      <Text>existem gestoras e gestores, mas acho que vou deixar esse papo pra outro texto =D</Text>
      <Text>
        voltando aqui, agora vem <strong>a parte legal</strong>. só existe uma pessoa em quem você
        pode colocar expectativa e trabalhar pra conseguir cumprí-las. você já sabe de quem eu estou
        falando, né? yep, <strong>é você mesmo!</strong>
      </Text>
      <Text>
        então assim, minha opnião, fazer aquilo pelo qual fomos contratados é o mínimo que
        precisamos fazer, é nossa obrigação. agora, entregar um pouco a mais, se preocupar com além
        do que foi pedido, é o que realmente vai fazer você se diferenciar no grupo.
      </Text>
      <Text>
        e eu não estou falando entregar a mais pra "agradar" a empresa. muito pelo contrário, isso
        só vai trazer <strong>benefícios pra você mesmo </strong>e num curto período de tempo.
      </Text>
      <Text>
        você tem um contrato com a empresa, e esse contrato é firmado enquanto está fazendo sentido
        para os dois lados, tanto pra você quanto pra ela. a partir do momento que não der mais esse{' '}
        <em>match</em>, umas das pontas encerrará esse acordo. e tá tudo bem! segue o baile.
      </Text>
      <Text>
        então sempre que se sentir em desvalorização,{' '}
        <strong>sempre que estiver desconfortável</strong> com sua situação atual, inverta os
        papéis, pense em como o seu atual momento pode colaborar para que você evolua, como usar
        esse tempo pra <strong>ganhar experiência e resiliência</strong> diante de situações
        difíceis e que são muito mais comuns do que imaginamos nessa vida adulta.
      </Text>
      <Text>quer exemplos? vamos lá...</Text>
      <Text>
        <em>o projeto é ruim?</em> converse com os gestores, responsáveis pelo projeto, procure
        alternativas, coisas de como a comunidade esteja desenvolvendo e que você gostaria de
        experimentar, e peça um pouco mais de prazo pra fazer algo de forma que te dê prazer.
      </Text>
      <Text>
        <em>a tecnologia que está utilizando não vai ao encontro dos seus objetivos?</em> converse
        com seu gestor imediatamente, isso pode acarretar uma série de desequilíbrios emocionais,
        capazes de te fazer tomar decisões por impulso e não de forma racional. e o pior, isso vai
        afetar áreas até de fora da empresa. o que não faz sentido.
      </Text>
      <Text>
        <em>não consegue enxergar opções onde você se encaixaria no momento atual da empresa?</em>{' '}
        faça uma lição de casa, veja os assuntos que te interessam e que a comunidade está
        implementando, crie um plano de execução deste e proponha para os responsáveis. "a maneira
        mais fácil de empreender é com o dinheiro dos outros." torne-se um empreendedor de sucesso
        da sua própria carreira. nem sempre vai funcionar, mas você vai aperceiçoando a técnica e
        ver o quão legal é pensar no todo.
      </Text>
      <Text>
        <em>não confia no seu gestor e nos seus colegas de trabalho?</em> esse ponto é delicado, mas
        tente observar de fora, maneira imparcial (sem emoções envolvidas) a qualidade deles. o que
        você consegue absorver de cada um deles? um conhecimento técnico aqui, outra experiência de
        vida ali, um posicionamento pra uma situação X lá, e por aí vai... isso é muuuuito rico,
        recomendo de verdade.
      </Text>
      <Text>
        por fim, uma coisa em comum todo ser humano tem, <strong>24h pra fazer acontecer</strong>. a
        raça humana que sobreviveu aos acontecimentos históricos de milhões de anos atrás, foi única
        e exclusivamente por conseguir se adaptar as situações e aprender com elas. os chamados
        "homens sábios" ou <em>homo sapiens</em>.
      </Text>
      <Text>
        não fomos criados para viver isoladamente mas sim para conviver em <strong>grupo</strong>,{' '}
        <strong>socializar</strong>. lembre-se disso: <strong>não sofra sozinha(o)</strong>, e se
        precisar de ajuda mesmo sem me conhecer, é só dar um grito. eu só não tenho dinheiro, mas
        sou todo ouvidos :D
      </Text>
      <Text>
        <strong>
          você tem total liberdade pra fazer o que quiser com as suas horas do dia, mas uma coisa é
          fato: você não pode culpar ninguém pelo que vai colher de resultados de tudo isso que
          escolheu fazer.
        </strong>
      </Text>
      <Text>
        evoluir dói, mas não evoluir dói também. a tal da <strong>life passa rápido</strong>!{' '}
        <strong>não vale o stress</strong>. só vamo :D
      </Text>
    </Layout>
  );
}
