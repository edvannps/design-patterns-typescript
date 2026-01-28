# Singleton Pattern

## Propósito

O padrão Singleton garante que uma classe tenha apenas uma única instância e fornece um ponto de acesso global a essa instância.

## Quando Usar

- Quando você precisa ter exatamente uma instância de uma classe disponível em todo o programa
- Quando você quer controle mais rigoroso sobre variáveis globais
- Quando a instância única deve ser extensível por subclasses

## Vantagens

✅ Garante que uma classe tenha apenas uma instância
✅ Fornece um ponto de acesso global a essa instância
✅ O singleton é inicializado apenas quando é solicitado pela primeira vez

## Desvantagens

❌ Viola o Princípio da Responsabilidade Única
❌ Pode dificultar testes unitários
❌ Requer tratamento especial em ambientes multi-thread

## Exemplo de Uso

```typescript
const singleton1 = Singleton.getInstance();
const singleton2 = Singleton.getInstance();

console.log(singleton1 === singleton2); // true
```

## Como Executar

```bash
npm run dev src/patterns/creational/singleton/index.ts
```
