import Head from "next/head";
import styles from "@/styles/home.module.scss";
import logo from "../../public/logo.svg";
import Image from "next/image";
import { Input } from "../components/ui/Input";
import Button from "../components/ui/Button";
export default function Home() {
  return (
    <>
      <Head>
        <title>SujeitoPizza - Faça seu login</title>
      </Head>
      <div className={styles.containerCenter}>
        <Image src={logo} alt="LOGO Sujeito Pizza" />

        <div className={styles.login}>
          <form action="post">
            <Input placeholder="Digite seu email" type="text" />
            <Input placeholder="Digite sua senha" type="password" />
            <Button type="submit" loading={false}>
              Acessar
            </Button>
          </form>
          <a>Não possui uma conta? Cadastre-se aqui</a>
        </div>
      </div>
    </>
  );
}