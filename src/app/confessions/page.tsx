import GenerateConfessionForm from "@/components/forms/generate-confession-form";

function Page() {
  return (
    <div className="flex flex-col h-screen">
      <div className="w-full max-w-xl m-auto border p-4 rounded-3xl shadow-lg">
        <h1 className="text-2xl font-semibold text-center mb-4">
          Create Confession Short{" "}
        </h1>
        <GenerateConfessionForm />
      </div>
    </div>
  );
}

export default Page;
