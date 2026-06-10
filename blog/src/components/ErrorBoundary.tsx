import { Component, type ReactNode } from 'react'

export class ErrorBoundary extends Component<{ children: ReactNode }, { hasError: boolean }> {
  state = { hasError: false }

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  render() {
    if (this.state.hasError) {
      return (
        <main className="mx-auto w-full max-w-[720px] px-4 pt-16 text-center sm:px-6">
          <h1 className="text-3xl font-bold text-foreground">Something went wrong</h1>
          <p className="mt-3 text-muted-foreground">
            Please refresh the page. If it keeps happening, a recently published post may have missing
            content — check it in the Studio.
          </p>
        </main>
      )
    }
    return this.props.children
  }
}
