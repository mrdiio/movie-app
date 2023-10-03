import { Loader2 } from 'lucide-react'

export default function Loading() {
  return (
    <div className="h-screen flex justify-center items-center">
      <Loader2 className="animate-spin rounded-full h-32 w-32 text-yellow-500" />
    </div>
  )
}
