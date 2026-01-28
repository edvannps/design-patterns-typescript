import { Singleton } from './Singleton';

/**
 * Exemplo de uso do padrão Singleton
 */

// Tentando criar duas "instâncias"
const singleton1 = Singleton.getInstance();
const singleton2 = Singleton.getInstance();

// Verificando se são a mesma instância
console.log('São a mesma instância?', singleton1 === singleton2); // true

// Modificando dados através da primeira referência
singleton1.setData('Novo valor');

// Acessando através da segunda referência
console.log('Dados do singleton1:', singleton1.getData()); // 'Novo valor'
console.log('Dados do singleton2:', singleton2.getData()); // 'Novo valor'

// Demonstrando que ambos compartilham o mesmo estado
console.log('Ambos têm o mesmo valor:', singleton1.getData() === singleton2.getData()); // true
