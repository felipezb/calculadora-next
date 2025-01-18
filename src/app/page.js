// pages/index.js
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>Bem-vindo à Calculadora Next.js!</h1>
      <Link href="/calculadora"> 
      Ir para a Calculadora
      </Link>
    </div>
  );
}
