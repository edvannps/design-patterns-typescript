/**
 * Singleton Pattern
 * 
 * O padrão Singleton garante que uma classe tenha apenas uma instância
 * e fornece um ponto de acesso global a essa instância.
 */

export class Singleton {
  private static instance: Singleton | null = null;
  private data: string;

  // Construtor privado impede instanciação direta
  private constructor() {
    this.data = 'Singleton Instance';
  }

  // Método estático para obter a instância única
  public static getInstance(): Singleton {
    if (!Singleton.instance) {
      Singleton.instance = new Singleton();
    }
    return Singleton.instance;
  }

  public getData(): string {
    return this.data;
  }

  public setData(data: string): void {
    this.data = data;
  }
}
