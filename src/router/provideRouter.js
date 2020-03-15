import { inject, provide } from '@vue/composition-api';

const RouterSymbol = window.Symbol('router');

export function provideRouter(router) {
  provide(RouterSymbol, router);
}

export function useRouter() {
  const router = inject(RouterSymbol);
  if (!router) {
    // throw error, no store provided
  }
  return router;
}
