declare module 'aos' {
  export interface AosOptions {
    offset?: number;
    delay?: number | string;
    duration?: number | string;
    easing?: string;
    once?: boolean;
    mirror?: boolean;
    anchorPlacement?: string;
    disable?: boolean | string | Function;
    startEvent?: string;
    disableMutationObserver?: boolean;
    throttleDelay?: number;
    debounceDelay?: number;
    animatedClassName?: string;
    initClassName?: string;
    useClassNames?: boolean;
    [key: string]: any;
  }

  export default class AOS {
    static init(options?: AosOptions): void;
    static refresh(hard?: boolean): void;
    static refreshHard(): void;
  }
} 