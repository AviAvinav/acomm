import { clsx } from "clsx";

type ContainerProps = {
  children: React.ReactNode;
  className?: string;
};

export default function Container({ children, className }: ContainerProps) {
  return (
    <main className={clsx("max-w-7xl mx-auto px-4 pt-2", className)}>
      {children}
    </main>
  );
}
