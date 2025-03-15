import SecaoIntroducao from '@/secoes/introducao/SecaoIntroducao';
import SecaoInicio from '@/secoes/inicio/SecaoInicio';
import SecaoSobre from '@/secoes/sobre/SecaoSobre';
import SecaoProjetos from '@/secoes/projetos/SecaoProjetos';
import SecaoHabilidades from '@/secoes/habilidades/SecaoHabilidades';
import SecaoContato from '@/secoes/contato/SecaoContato';

/**
 * Página principal do portfólio
 * Inclui todas as seções em ordem
 */
export default function Home() {
  return (
    <>
      <SecaoIntroducao />
      <SecaoInicio />
      <SecaoSobre />
      <SecaoProjetos />
      <SecaoHabilidades />
      <SecaoContato />
    </>
  );
}
