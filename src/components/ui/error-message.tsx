import { cn } from "@/lib/utils";

/* eslint-disable @typescript-eslint/no-explicit-any */
interface ErrorMessageProps {
  className?: string;
  field: string;
  formik: any;
}
function ErrorMessage({ className, field, formik }: ErrorMessageProps) {
  if (!formik.errors[field]) return null;
  return (
    <p className={cn("text-sm font-light text-rose-600", className)}>
      {formik.errors[field]}
    </p>
  );
}

export default ErrorMessage;
