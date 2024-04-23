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
  console.log("running getStaticProps");
  const res = await fetch("http://localhost:3001");
  const entries = await res.json();

  return {
    props: { entries },
    revalidate: 60, // 1 min
  };
}

export default Page;
