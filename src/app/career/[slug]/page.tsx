interface PageProps {
    params: {
        slug: string;
    }
}

export default function Page({ params }: PageProps) {
    return (
      <main className="my-10">
        <h1>Career Detail Page</h1>
        <p>This is content for {params.slug}</p>
      </main>
    );
  }
  