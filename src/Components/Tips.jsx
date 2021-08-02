import React from 'react';
import { Text, View, ScrollView } from 'react-native';
import { styles } from '../Style/Styles';


export default function Tips(){

return(
    <ScrollView>
{/* Título */}
        <Text style={styles.titleTips}>
            Dicas de investimento
        </Text>
{/* Texto 1 */}
        <Text style={styles.subTitleTips}>
            1.Fundos de investimento
        </Text>
        <Text style={styles.textTips}>
            Para quem está começando no mercado, essa é uma boa opção de investimento. Este tipo de investimento possui tributação regressiva, ou seja, quanto maior o tempo que você deixar o seu dinheiro investido, menor será o imposto a pagar.
            Outra grande vantagem dos fundos de investimento é a facilidade de diversificação dos seus investimentos. Ao acessar o seu internet banking poderá ver uma infinidade de opções com investimentos mínimos de R$ 100,00.
            Você com certeza já ouviu aquele ditado que diz que não se deve colocar todos os ovos em uma cesta não é mesmo?
        </Text>
{/* Texto 2 */}
        <Text style={styles.subTitleTips}>
            2.LCI – Letra de Crédito Imobilário
        </Text>
        <Text style={styles.textTips}>
            Este tipo de investimento é composto por títulos de crédito destinados ao mercado imobiliário, os quais são garantidos por hipoteca.
            Em outras palavras o LCI é um empréstimo feito pelo investidor a uma instituição financeira que destina o valor para financiamentos no ramo imobiliário.
            Quando o investidor aplica dinheiro na LCI, ele faz um contrato com a instituição financeira no qual a mesma garante pagar juros sobre o montante em um determinado prazo.
            O LCI possui alta rentabilidade e baixo risco. Este tipo de investimento remunera de acordo com o CDI (certificado de depósito bancário). O CDI é o empréstimo interbancário, que são títulos emitidos por instituições financeiras que lastreiam as operações entre bancos.
            O LCI possui atrativos como por exemplo ser isento de imposto de renda e contar com o Fundo Garantidor de Crédito (FGC). O cuidado apenas é que este tipo de investimento possui um valor mínimo para aplicação, e também um prazo mínimo de resgate.
        </Text>
{/* Texto 3 */}
        <Text style={styles.subTitleTips}>
            3.CDB – Certificados de Depósito Bancário
        </Text>
        <Text style={styles.textTips}>  
            O CDB é um título emitido pelos bancos para conseguirem dinheiro com a finalidade de financiar as suas atividades de crédito. Ou seja, é um empréstimo para a instituição financeira e por este empréstimo o investidor recebe uma rentabilidade diária.
            Existe três tipos diferentes de CDB:
            O pós fixado, que baseia seus valores em uma taxa de referência geralmente indexado ao CDI;
            O que paga uma taxa de juros mais inflação;
            O pré fixado que paga juros de acordo com a taxa firmada quando o cliente realiza o investimento;
            O CDB é considerado um investimento de baixo por que conta com a garantia do FCG (fundo garantidor de crédito) até R$ 250.000,00.
            Os CDBs, diferente da LCI são tributados pelo imposto de renda através da tabela regressiva de imposto de renda.
        </Text>
{/* Texto 4 */}
        <Text style={styles.subTitleTips}>
            4.Tesouro direto
        </Text>
        <Text style={styles.textTips}>
            O tesouro direto com certeza é o investimento mais falado do momento.
            Todos os investimentos mostrados anteriormente são títulos privados, diferente do tesouro direto que são títulos públicos emitidos pelo governo federal e tem finalidade de financiar os investimentos do governo federal em melhorias para a população.
            No investimento em tesouro direto, o investidor compra títulos da divida pública em troca de uma rentabilidade. Quando falamos em investimento em títulos públicos é necessário ter bastante atenção, por que o investimento só é garantido na data de vencimento do Título do Tesouro.
            O tesouro direto é considerado uma das formas mais seguras de investimento pois contam com a garantia do tesouro nacional.
            Existem basicamente três tipos de títulos do tesouro direto:
            Tesouro IPCA +: Paga uma taxa de juros, mais a inflação medida pelo IPCA
            Tesouro PreFixado: Paga uma taxa de juros acordada no momento da contratação
            Tesouro SELIC: Remunera o investidor pela taxa SELIC vigente.
        </Text>
{/* Texto 5 */}
        <Text style={styles.subTitleTips}>
            5.Caderneta de Poupança
        </Text>
        <Text style={styles.textTips}>
            5 – Caderneta de Poupança
            Este é sem sobra de dúvidas o investimento mais popular no Brasil. Através de qualquer banco você pode abrir uma poupança bastando uma documentação mínima:
            RG
            CPF
            Comprovante de residência
            O dinheiro depositado em uma conta poupança pode ser retirado em qualquer momento (normalmente gratuito até dois saques mensais).
            O rendimento da poupança desde 2012 sempre que a SELIC estiver abaixo de 8,5% ao ano a poupança irá render 70% da SELIC mais a TR.
            Para as contas antigas, a remuneração contínua a mesma de 0,5% ao mês (6,17% a.a) mais a TR. </Text>
    </ScrollView>
)}