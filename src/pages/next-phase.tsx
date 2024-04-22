import { PHASE_PRODUCTION_BUILD } from "next/dist/shared/lib/constants";
import React from "react";

type PageProps = { entries: string[] };

const Page: React.FC<PageProps> = ({ entries }) => {
  return (
    <div>
      {entries.map((entry, index) => (
        <div key={index}>{entry}</div>
      ))}
    </div>
  );
};

export async function getStaticProps() {
  const res = await fetch("http://localhost:3001");
  const entries = await res.json();

  return {
    props: { entries },
    revalidate: process.env.NEXT_PHASE === PHASE_PRODUCTION_BUILD ? 1 : 120, // 1 s during build, 2 min afterwards
  };
}

export default Page;
