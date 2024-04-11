import Link from "next/link";
import {
  CarrinhoEntregaIcon,
  CestaComprasIcon,
  ClienteIcon,
  EstoqueIcon,
  FuncionariosIcon,
  NotalFiscalIcon,
  ProdutoIcon,
} from "../../../public/assets/Icons";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <header className={styles.header}>
        <h1>Controle Mestre</h1>
      </header>

      <div className={styles.btnContainer1}>
        <Link className={styles.btn} href="home/modulo/vendas">
          <CestaComprasIcon />
          <p className={styles.btnText}>Vendas</p>
        </Link>

        <Link className={styles.btn} href="home/modulo/clientes">
          <ClienteIcon />
          <p className={styles.btnText}>Clientes</p>
        </Link>

        <Link className={styles.btn} href="home/modulo/funcionarios">
          <FuncionariosIcon />
          <p className={styles.btnText}>Funcionários</p>
        </Link>

        <Link className={styles.btn} href="home/modulo/saidas">
          <NotalFiscalIcon />
          <p className={styles.btnText}>Saídas</p>
        </Link>
      </div>

      <div className={styles.btnContainer2}>
        <Link className={styles.btn} href="home/modulo/produtos">
          <ProdutoIcon />
          <p className={styles.btnText}>Produtos</p>
        </Link>

        <Link className={styles.btn} href="home/modulo/estoques">
          <EstoqueIcon />
          <p className={styles.btnText}>Estoques</p>
        </Link>

        <Link className={styles.btn} href="home/modulo/fornecedores">
          <CarrinhoEntregaIcon />
          <p className={styles.btnText}>Fornecedores</p>
        </Link>
      </div>
    </main>
  );
}
