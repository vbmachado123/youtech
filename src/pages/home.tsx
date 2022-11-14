import { Button } from "../components/button";
import { Header } from "../components/header";
import { TypingText } from "../components/typingText";

import iconChemical from '../assets/expertise/icone-chemical.svg';
import iconFood from '../assets/expertise/icone-food.svg';
import iconlogisticis from '../assets/expertise/icone-logisticis.svg';
import iconManufac from '../assets/expertise/icone-manufac.svg';
import iconMine from '../assets/expertise/icone-mine.svg';
import iconOil_and_gas from '../assets/expertise/icone-oil_and_gas.svg';
import iconPharma from '../assets/expertise/icone-pharma.svg';
import iconUtililities from '../assets/expertise/icone-utilities.svg';

import temp from '../assets/temp.png';
import ar_navigation_01 from '../assets/ar_navigation_01.jpg';
import ar_navigation_02 from '../assets/ar_navigation_02.jpeg';
import ar_02 from '../assets/ar_01.jpg';
import ar_01 from '../assets/ar_02.jpg';
import ar_navigation from '../assets/ar_navigation.jpg';
import { ExpertiseItem } from "../components/expertise_item";
import { BackToTop } from "../components/backToTop";
import { Feedback } from "../components/feedback";
import { Footer } from "../components/footer";

export function Home() {
  return (
    <>

  <div className="pt-24 scrool-smooth flex flex-col w-screen h-full bg-gradient-to-b from-[#060A17] via-[#074746] to-[#353535] overflow-x-hidden">
    <div className="flex flex-col">
          <div className="relative col-span-6 items-center px-24 justify-center w-screen h-screen bg-center bg-inherit bg-auto bg-no-repeat bg-slate-700 bg-opacity-30 bg-[url('./src/assets/principal.png')] bg-right-bottom bg-center bg-no-repeat">
                <div className="flex flex-col font-bold justify-center w-screen h-screen items-start mt-24">
                    <h4 className='text-xl text-brand-500'>
                        Melhore a eficiência da sua empresa com 
                    </h4>
                     
                    <span className="text-white text-xl">
                         <TypingText texts={[
                                'Realidade Aumentada', 
                                'Indústria 4.0', 
                                'Eficiência Operacional', 
                                'Inventário Digital', 
                                'Realidade Virtual', 
                                'Inteligência Artificial', 
                                'Acuracidade Cadastral',
                                ]}/>
                    </span>
                        
                        <p className="text-sm font-normal py-8 text-white w-1/2">Implementamos uma gestão inteligente dos ativos com tecnologia de ponta! adequando aos requisitos da Indústria 4.0</p>
                        
                        <div className="flex lg:flex-row sm:flex-col md:flex-col">
                          <Button label="Entrar em contato"/>
                        </div>
                </div>
            </div>


<div className="flex flex-row justify-between py-8 px-24 mt-[-96px]">
            <img className="w-1/2 mr-4" src={ar_navigation} alt="Imagem Equipe"/>

              <img className="w-1/2" src={ar_navigation_01} alt="Imagem Equipe"/>

</div>

<div className="flex flex-col items-center pt-16">
  <h4 className="text-white text-xl font-bold">Porque Escolher a Youtech</h4>
</div>
            <div className="flex flex-row px-24 py-8 justify-between">
              <img className="w-1/2" src={temp} alt="Imagem Equipe"/>
              <div className="flex flex-col">
                <p className="text-white">Saiba porque somos a empresa ideal para a otimização do seu estoque</p>
                  <p className="text-white text-lg font-bold mt-4 mb-2">Preços Confortáveis</p>
                  <p className="text-sm text-white">A nossa tabela de preço é compatível com o orçamento e necessidades do projeto</p>

                  <p className="text-white text-lg font-bold mt-4 mb-2">Time de Especialistas</p>
                  <p className="text-sm text-white">Nossa equipe multidisciplinar estará à disposição em todas as etapas do projeto</p>

                  <p className="text-white text-lg font-bold mt-4 mb-2">Indústria 4.0</p>
                  <p className="text-sm text-white">Implementamos soluções adequadas aos requisitos da nova indústria</p>

                    <div className="flex lg:flex-row sm:flex-col md:flex-col mt-10">
                          <Button label="Vamos Conversar"/>
                        </div>             
                </div>
            </div>

             <div className="bg-slate-400 flex flex-col py-8 px-24 relative justify-center align-center center">

                <h4 className="animated-fadeIn 
                text-slate-800 text-xl text-bold justify-center text-center font-bold">Áreas de Atuação</h4>

                <div className="grid lg:grid-cols-4 sm:grid-cols-1 md:grid-cols-2 auto-cols-max pt-8">

                    {/* <ExpertiseItem title={"Química"} icon={iconChemical} /> */}
                    <ExpertiseItem title={"Logística"} icon={iconlogisticis} />
                    {/* <ExpertiseItem title={"Mineiração"} icon={iconMine} /> */}
                    {/* <ExpertiseItem title={"Farmacêutica"} icon={iconPharma} /> */}
                    <ExpertiseItem title={"Alimentação"} icon={iconFood} />
                    <ExpertiseItem title={"Manufatura"} icon={iconManufac} />
                    {/* <ExpertiseItem title={"Óleo e Gás"} icon={iconOil_and_gas} /> */}
                    <ExpertiseItem title={"Utilities"} icon={iconUtililities} />

                </div>
            </div>

            <div className="px-24 py-8 flex flex-col">
<h4 className="text-xl text-bold justify-center text-center font-bold text-white"> Gestão Inteligente de Ativos </h4>
<p className="text-white">Ofertamos nossas soluções levando em consideração a cultura da empresa, o poder de investimento e os desafios do seguimento em que se encontra.

Acreditando no potencial produtivo e operacional da indústria, trabalhamos na missão de superar os desafios dos nossos clientes e no comprometimento das metas de cada projeto. Possuímos uma metodologia de “entrega” em que monitoramos constantemente os indicadores de desempenho da nossa equipe, pois o sucesso da implementação é o que nos fortalece.</p>

              <div className="flex flex-row justify-between py-8">
                          <img className="w-1/2 mr-4" src={ar_01} alt="Imagem Equipe"/>

                            <img className="w-1/2" src={ar_02} alt="Imagem Equipe"/>

              </div>
            </div>


            <div className=" flex flex-col bg-brand-300 w-screen py-8 px-16">
<h4 className="text-xl text-bold justify-center text-center font-bold text-white"> Veja O Que Estão Falando Sobre Nós </h4>

            <div className="flex flex-row justify-between mt-4">
              <Feedback author="Jorge Gomes - APT Transportes" feedback="Excelente empresa! os valores de aceitação da minha companhia dispararam depois de implementar a solução deles. Super recomendo!" />
              <Feedback author="Victor Machado - XP Entregas" feedback="Excelente empresa! os valores de aceitação da minha companhia dispararam depois de implementar a solução deles. Super recomendo!" />
              <Feedback author="Thales Emmanuel - Fretes TEM" feedback="Excelente empresa! os valores de aceitação da minha companhia dispararam depois de implementar a solução deles. Super recomendo!" />
             
            </div>
                <div className=" justify-center flex lg:flex-row sm:flex-col md:flex-col mt-10">
                    <Button label="Quero Fazer Parte do Futuro"/>
                </div>  
            </div>x

        <div className="flex flex-col items-center pt-16">
          <h4 className="text-white text-xl font-bold">Alta Experiência</h4>
        </div>
            <div className="flex flex-row px-24 py-8 justify-between">
              <div className="flex flex-col">
                <p className="text-white">Realizamos estudos profundos na logística da sua companhia, apontando melhorias e defeitos, onde a nossa solução agregaria da melhor forma.</p>
                  <p className="text-white text-lg font-bold mt-4 mb-2">Realidade Aumentada</p>
                  <p className="text-sm text-white">Implementando RA nesse processo, é possível gerar rotas inteligentes do ponto inicial até um item específico</p>

                  <p className="text-white text-lg font-bold mt-4 mb-2">Inteligência Artificial</p>
                  <p className="text-sm text-white">O ponto forte da nossa solução é a gestão inteligente dos ativos, otimizando o percurso e a logística, proporcionando a maior economia e eficiência nos processos básicos</p>

                  {/* <p className="text-white text-lg font-bold mt-4 mb-2">Retenção do Conhecimento</p>
                  <p className="text-sm text-white">Com o avanço da digitalização dos processos, o caminh</p> */}

                  <p className="text-white text-lg font-bold mt-4 mb-2">Indústria 4.0</p>
                  <p className="text-sm text-white">A sua empresa estará à frente da concorrência em relação a tecnologia utilizada</p>

                    <div className="flex lg:flex-row sm:flex-col md:flex-col mt-10">
                          <Button label="Vamos Conversar"/>
                        </div>             
                </div>
                  <img className="w-1/2" src={ar_navigation_02} alt="Imagem Equipe"/>
            </div>

    </div>
  </div>
      <Header/>
      <BackToTop/>

      <Footer/>
    </>
  
  )
}