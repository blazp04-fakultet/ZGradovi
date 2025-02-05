// src/domain/store/ErrorHandler.ts
import { type PiniaPluginContext } from 'pinia'
import { ToastAction } from '@/components/ui/toast'
import { useToast } from '@/components/ui/toast/use-toast'
import { h } from 'vue'

export function setupErrorHandler(pinia: any) {
  pinia.use((context: PiniaPluginContext) => {
    const { store } = context
    store.$onAction(({ name, args, after, onError }) => {
      onError((error: unknown) => {
        const { toast } = useToast()
        let errorMessage = 'An unknown error occurred'

        if (error instanceof Error) {
          errorMessage = error.message
        } else if (typeof error === 'string') {
          errorMessage = error
        }

        toast({
          title: 'Uh oh! Something went wrong.',
          description: errorMessage,
          variant: 'destructive',
          action: h(
            ToastAction,
            {
              altText: 'Try again',
            },
            {
              default: () => 'Try again',
            },
          ),
        })
      })
    })
  })
}
