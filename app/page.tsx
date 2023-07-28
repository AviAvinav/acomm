import Container from "~/components/container";

export default function Home() {
  return (
    <Container>
      <div className="relative w-full">
        {/* eslint-disable-next-line @next/next/no-img-element*/}
        <img
          className="w-full h-sm rounded object-cover"
          src="/hero.jpg"
          alt=""
        />
        <div className="w-full h-sm absolute top-0 left-0 right-0 rounded z-10 bg-gradient-to-b from-transparent @dark:to-dark" />
      </div>
    </Container>
  );
}
