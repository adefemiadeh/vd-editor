// src/components/base/base.ts
export abstract class Component {
  protected targetId: string;

  constructor(targetId: string) {
    this.targetId = targetId;
  }

  abstract render(): string;
  abstract bindEvents(): void;

  public mount(): void {
    this.update();
  }

  // Every time the component rewrites the innerHTML, automatically re-hook event handlers
  public update(): void {
    const container = document.getElementById(this.targetId);
    if (container) {
      container.innerHTML = this.render();
      this.bindEvents(); // <-- CRITICAL: Re-binds listeners to the new DOM nodes
    }
  }
}
