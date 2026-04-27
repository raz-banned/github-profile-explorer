import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

export function AlertBasic() {
  return (
    <Alert className="max-w-md">
      <AlertTitle>Account updated successfully</AlertTitle>
      <AlertDescription>
        Your profile information has been saved. Changes will be reflected
        immediately.
      </AlertDescription>
    </Alert>
  )
}
